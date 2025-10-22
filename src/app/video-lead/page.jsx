"use client";
import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CoursesForm from "@/components/Forms/coursesForm";
import thumbnailImage from "/src/assets/homeReplaceImage.png";

// LeadForm Promise Wrapper
let _resolve, _reject;
let _isOpen = false;

export function openLeadForm() {
  if (_isOpen) {
    return new Promise((res, rej) => {
      _resolve = res;
      _reject = rej;
      _isOpen = true;
      window.dispatchEvent(new Event("openLeadFormWrapper"));
    });
  }
  return new Promise((res, rej) => {
    _resolve = res;
    _reject = rej;
    _isOpen = true;
    window.dispatchEvent(new Event("openLeadFormWrapper"));
  });
}

export function LeadFormPromiseWrapper({ LeadFormComponent }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("openLeadFormWrapper", onOpen);
    window.addEventListener("openLeadFormRequested", onOpen);
    return () => {
      window.removeEventListener("openLeadFormWrapper", onOpen);
      window.removeEventListener("openLeadFormRequested", onOpen);
    };
  }, []);

  const handleSubmit = (formData) => {
    setOpen(false);
    if (typeof _resolve === "function") _resolve(formData || true);
    window.dispatchEvent(new Event("leadFormSubmitted"));
    _isOpen = false;
  };

  const handleCancel = () => {
    setOpen(false);
    if (typeof _reject === "function") _reject(new Error("user-cancel"));
    _isOpen = false;
  };

  if (!open) return null;

  const Form = LeadFormComponent;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-2xl transform transition-transform duration-300 scale-100 sm:max-w-lg">
        <Form onSubmit={handleSubmit} onCancel={handleCancel} onClose={handleCancel} />
      </div>
    </div>
  );
}

// Responsive Iframe Component
const ResponsiveIframe = ({ src, allow, allowFullScreen }) => (
  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
    <iframe
      src={src}
      allow={allow}
      allowFullScreen={allowFullScreen}
      className="absolute inset-0 w-full h-full rounded-lg"
    />
  </div>
);

// VideoLeadSection Component
function VideoLeadSection({
  title = "Before you invest your time or money — watch this video! It’ll change how you see Data Science, AI & Analytics careers",
  thumbnail = thumbnailImage,
  videoUrl,
  openLeadFormFn = openLeadForm,
  formSubmittedEvent = "leadFormSubmitted",
}) {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsFormComplete(true);
      setIsVideoOpen(true);
    };
    window.addEventListener(formSubmittedEvent, handler);
    return () => window.removeEventListener(formSubmittedEvent, handler);
  }, [formSubmittedEvent]);

  const handlePlayClick = async () => {
    if (typeof openLeadFormFn === "function" && !isFormComplete) {
      try {
        const maybePromise = openLeadFormFn();
        if (maybePromise && typeof maybePromise.then === "function") {
          await maybePromise;
          setIsFormComplete(true);
          setIsVideoOpen(true);
          return;
        }
        return;
      } catch (err) {
        console.error("openLeadForm error:", err);
        return;
      }
    }
    setIsVideoOpen(true);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="relative">
          <Modal isOpen={isVideoOpen}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
              aria-label="Close video"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ResponsiveIframe
              src={videoUrl}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </Modal>
          <div className="relative w-full aspect-video">
            <Image
              src={thumbnail}
              alt="Video thumbnail"
              fill
              className="rounded-lg shadow-lg object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 1280px"
              priority
            />
            <button
              onClick={handlePlayClick}
              aria-label="Play video"
              className="absolute left-1/2 bottom-8 sm:bottom-12 -translate-x-1/2 flex items-center gap-3 bg-transparent text-gray-800 font-bold text-lg hover:text-indigo-600 transition"
            >
              <Image
                src="/assets/images/play-button.png"
                alt="Play"
                width={48}
                height={48}
                className="mr-3"
              />
              Watch Full Video
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link href="/request-demo">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition">
              Request Demo
            </button>
          </Link>
          <Link href="https://app.vajra.ai/?utm_source=vajra-page">
            <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition">
              Try for Free
            </button>
          </Link>
        </div>
        {!isFormComplete && (
          <div className="text-center mt-4 text-sm text-gray-500">
            Submit details to watch the full video
          </div>
        )}
        {isFormComplete && (
          <div className="text-center mt-4 text-sm text-green-600 font-semibold">
            Thank You — Form Submitted ✔
          </div>
        )}
      </div>
    </section>
  );
}

// Modal Component
const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
};

import Head from 'next/head';

// Page Component
export default function Page() {
  const zoomShareUrl =
    "https://us06web.zoom.us/rec/share/FciY-bGPip_icmBZYLDqDELz1nrecWlYTD0MP7tuHnzUDym5ydzKJKXcYbB3U7Pz.xI0jz2vDEWr2zBFt?startTime=1755605186000";

  return (
    <>
      <Head>
        <link rel="canonical" href="https://socialprachar.com/video-lead" />
      </Head>
      <main className="min-h-screen bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <VideoLeadSection
            thumbnail={thumbnailImage}
            videoUrl={zoomShareUrl}
            openLeadFormFn={openLeadForm}
          />
          <LeadFormPromiseWrapper LeadFormComponent={CoursesForm} />
        </div>
      </main>
    </>
  );
}
