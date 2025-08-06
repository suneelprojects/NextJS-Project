/** @format */

"use client";
import React, { useState, useRef, useEffect } from "react";
import style from "./Header.module.css";
import Image from "next/image";
import google from '@/assets/successStories/google.png';
import glassdoor_logo from "@/assets/successStories/glassdoor_logo.png";
import jd_logo from "@/assets/successStories/Just-Dial_logo.png";
import EnrollButton from "../ButtonforCourses/Button";
import BackgroundImg from "@/assets/courses/courseDetailspage/background.png";
import FollowerImg from "@/assets/courses/courseDetailspage/FollowewrGroup.webp";
import starSymbol from "@/assets/courses/courseDetailspage/star.svg";

// course title images
import unlockLogo from "@/assets/courses/courseDetailspage/unlock.png";
import booksymbol from "@/assets/courses/courseDetailspage/open-book.png";
import successLogo from "@/assets/courses/courseDetailspage/success.png";
import partnershipLogo from "@/assets/courses/courseDetailspage/hand-shake.png";
import MobileIconLogo from "@/assets/courses/courseDetailspage/mobile-development.png";
import awardImage from "@/assets/homepage/award_image.png";

// company logos
import company1Logo from "@/assets/successStories/Accenture.png";
import company2Logo from "@/assets/successStories/AWS.png";
import company3Logo from "@/assets/successStories/CISCO.jpg";
import company4Logo from "@/assets/successStories/Cognizant.png";
import company5Logo from "@/assets/successStories/Fusion Technologies.jpeg";
import company6Logo from "@/assets/successStories/GOC.jpg";
import company7Logo from "@/assets/successStories/pinaca_Technology.png";
import company8Logo from "@/assets/successStories/Honeywell.png";
import company9Logo from "@/assets/successStories/mouritech_logo.jpg";
import company10Logo from "@/assets/successStories/Micron Technologies.png";
import company11Logo from "@/assets/successStories/Sonata_Software_Logo.png";
import company12Logo from "@/assets/successStories/succeed_technologies.jpg";
import company13Logo from "@/assets/successStories/Sutherland.png";
import company14Logo from "@/assets/successStories/TCS.png";
import company15Logo from "@/assets/successStories/Tech Mahindra.jpeg";
import company16Logo from "@/assets/successStories/Tiger Analytics.png";
import company17Logo from "@/assets/successStories/tricubics.jpg";
import company18Logo from "@/assets/successStories/Yotta_Data_Services_Logo.jpg";
import company19Logo from "@/assets/successStories/amber_flux_private_limited_logo.jpeg";
import company20Logo from "@/assets/successStories/dell_technologies_logo.png";
import { useParams } from "next/navigation";
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData";
import { FaChevronDown } from 'react-icons/fa';

const logos = [
  { src: company1Logo, alt: "Company 1" },
  { src: company2Logo, alt: "Company 2" },
  { src: company3Logo, alt: "Company 3" },
  { src: company4Logo, alt: "Company 4" },
  { src: company5Logo, alt: "Company 5" },
  { src: company6Logo, alt: "Company 6" },
  { src: company7Logo, alt: "Company 7" },
  { src: company8Logo, alt: "Company 8" },
  { src: company9Logo, alt: "Company 9" },
  { src: company10Logo, alt: "Company 10" },
  { src: company11Logo, alt: "Company 11" },
  { src: company12Logo, alt: "Company 12" },
  { src: company13Logo, alt: "Company 13" },
  { src: company14Logo, alt: "Company 14" },
  { src: company15Logo, alt: "Company 15" },
  { src: company16Logo, alt: "Company 16" },
  { src: company17Logo, alt: "Company 17" },
  { src: company18Logo, alt: "Company 18" },
  { src: company19Logo, alt: "Company 19" },
  { src: company20Logo, alt: "Company 20" },
];

const ratings = [
  {
    logo: google,
    title: "Google",
    rating: "Rated 4.7/5",
  },
  {
    logo: glassdoor_logo,
    title: "Glassdoor",
    rating: "Rated 4.8/5",
  },
  {
    logo: jd_logo,
    title: "Justdial",
    rating: "Rated 4.7/5",
  },
];

const stats = [
  {
    value: "16000+",
    label: "Success Stories since 2014",
    color: "#007bff",
  },
  { value: "1400+", label: "Drives conducted", color: "#28a745" },
  { value: "16 LPA", label: "Highest Salary Package", color: "#ffc107" },
  { value: "3 - 8 LPA", label: "LPA Average Package", color: "#762acd" },
  { value: "10+", label: "Edtech Awards Received", color: "#52de12" },
];


const Header = () => {
  const { slug } = useParams();
  const [card, setCard] = useState(null);
  const redLineRef = useRef(null);
  const doughtsPartRef = useRef(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const cardDetails = data.find((item) => item.slug === slug);
    setCard(cardDetails);
  }, [slug]);

  // below the screen size
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1025);
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1025);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.DoughtsPartVisible);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (doughtsPartRef.current) observer.observe(doughtsPartRef.current);
    if (redLineRef.current) observer.observe(redLineRef.current);

    return () => {
      if (doughtsPartRef.current) observer.unobserve(doughtsPartRef.current);
      if (redLineRef.current) observer.unobserve(redLineRef.current);
    };
  }, []);

  const togglePopup = () => {
    if (isPopupVisible) {
      // Close the form
      setIsPopupVisible(false);
    } else {
      // Open the form
      setIsPopupVisible(true);
    }
  };

  return (
    <>
      <div className={style.headerContainer}>
        <Image
          src={BackgroundImg}
          alt="Background"
          className={style.backgroundImage}
        />

        <div className="row d-flex justify-content-center mt-4">
          <div
            className={`px-5 py-4 d-flex flex-column flex-md-row col-11 col-md-12 col-lg-10 col-xl-8 bg-white vh-75 rounded-4 shadow position-relative ${style.card}`}
            style={{ zIndex: 10 }}
          >
            {/* LEFT CONTENT */}
            <div className="col-md-6 d-flex flex-column justify-content-center px-2">
              <h2 className={`${style.headerText}`}>
                {card && (
                  <>
                    {card.Header}
                    <span style={{ color: "#ff5003", textWrap: "nowrap" }}>
                      {card.Duration}
                    </span>
                  </>
                )}
              </h2>
              <div className={style.symbolItemContent}>
                <div className={style.symbolItem}>
                  <Image
                    src={unlockLogo}
                    alt="Book symbol"
                    className={style.symbol1}
                  />
                  <span className={style.symbolText}>
                    Unlock 12+ LPA with In-Demand Skills
                  </span>
                </div>
                <div className={style.symbolItem}>
                  <Image
                    src={booksymbol}
                    alt="Book symbol"
                    className={style.symbol}
                  />
                  <span className={style.symbolText}>
                    {" "}
                    Flexible Learning: Classroom & Online Options{" "}
                  </span>
                </div>
                <div className={style.symbolItem}>
                  <Image
                    src={successLogo}
                    alt="Book symbol"
                    className={style.symbol}
                  />
                  <span className={style.symbolText}>
                    17,000+ Successful Career Transitions Since 2014
                  </span>
                </div>
                <div className={style.symbolItem}>
                  <Image
                    src={partnershipLogo}
                    alt="Book symbol"
                    className={style.symbol}
                  />
                  <span className={style.symbolText}>
                    {" "}
                    550+ Batches Completed, 350+ Hiring Partners
                  </span>
                </div>
                <div className={style.symbolItem}>
                  <Image
                    src={MobileIconLogo}
                    alt="Book symbol"
                    className={style.symbol}
                  />
                  <span className={style.symbolText}>
                    Lifetime LMS Access & Dedicated Mobile App
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT - IMAGE */}
            <div className="col-md-6 d-flex justify-content-center align-items-center mt-4">
              <div className={`${style.HeaderPicture} text-center`}>
                {card && (
                  <Image
                    src={awardImage}
                    alt="Course"
                    className={`img-fluid ${style.headerImage} shadow`}
                  />
                )}
                <div className={style.EnrollButtonContent}>
                  {card && (
                    <EnrollButton
                      label="Enroll Now"
                      courseID={card.id}
                      className={style.Button}
                      actionType="Button:Enroll Now"
                    />
                  )}
                  <span>
                    <Image
                      src={FollowerImg}
                      alt="Follower group"
                      className={style.FollowerImage}
                    />
                  </span>
                  <div className={style.reviewContainer}>
                    <div className={style.FollowerStars}>
                      {[...Array(5)].map((_, index) => (
                        <Image
                          key={index}
                          src={starSymbol}
                          alt="Star"
                          className={style.star}
                        />
                      ))}
                    </div>
                    <span className={style.FollowerCount}>
                      426 reviews (4.7 of 5)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.scrollSection}>
          <h5 className="fs-6 fs-md-5 fs-lg-2">
            Trusted by Learners Working At Top Companies
          </h5>

          {/* SCROLL BUTTONS START */}
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', margin: '24px 0' }}>
            <button
              onClick={() => {
                const el = document.getElementById('what-will-you-learn-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: '#ff5003',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                padding: '0.5em 0.5em',
                fontWeight: 600,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
                boxShadow: '0 2px 8px rgba(255,80,3,0.10)',
                cursor: 'pointer',
                transition: 'background 0.2s',
                minWidth: 180,
              }}
            >
              What will you learn
              <span style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="white"/>
                  <defs>
                    <linearGradient id="arrow-gradient" x1="12" y1="6" x2="12" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff5003"/>
                      <stop offset="1" stopColor="#ff3c7e"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 7V17" stroke="url(#arrow-gradient)" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M7 12.5L12 17L17 12.5" stroke="url(#arrow-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('course-flow-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: '#ff5003',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                padding: '0.5em 0.5em',
                fontWeight: 600,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
                boxShadow: '0 2px 8px rgba(255,80,3,0.10)',
                cursor: 'pointer',
                transition: 'background 0.2s',
                minWidth: 180,
              }}
            >
              See our course flow
              <span style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="white"/>
                  <defs>
                    <linearGradient id="arrow-gradient2" x1="12" y1="6" x2="12" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff5003"/>
                      <stop offset="1" stopColor="#ff3c7e"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 7V17" stroke="url(#arrow-gradient2)" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M7 12.5L12 17L17 12.5" stroke="url(#arrow-gradient2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
          {/* SCROLL BUTTONS END */}

          <div className={style.logoContainer}>
            <div className={style.logoScroll1}>
              {logos.slice(0, 10).map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className={style.logo}
                />
              ))}
            </div>
            <div className={style.logoScroll2}>
              {logos.slice(10).map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className={style.logo}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={style.testimonials}>
          <div
            className={`d-flex m-4 ${
              isMobile
                ? "flex-column text-center"
                : "justify-content-center align-items-center gap-2"
            }`}
          >
            <h3 className="fw-bold">
              <span style={{ color: "#ff5003" }}> Know More</span> About{" "}
              {card && card.text}
            </h3>

            {card && (
              <EnrollButton
                label="Download Roadmap"
                courseID={card.id}
                className={style.Button}
                actionType="Button:Enroll Now"
              />
            )}
          </div>
        </div>

        <div className="container pb-3">
          {/* Ratings Section */}
          <div className="row text-center mb-4">
            {ratings.map((item, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="border p-3 rounded d-flex align-items-center justify-content-center">
                  <div
                    className="logo-wrapper d-flex align-items-center justify-content-center me-2"
                    style={{ width: 60, height: 60 }}
                  >
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.title}
                        style={{
                          maxHeight: "50px",
                          objectFit: "contain",
                          paddingRight: "15px",
                        }}
                      />
                    ) : null}{" "}
                    {/* Remove the span if no logo */}
                  </div>

                  <div>
                    <div className="fw-bold">{item.title}</div>
                    <div>{item.rating}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="row text-center justify-content-center gap-3">
            {stats.map((stat, index) => (
              <div className={`${style.statcard} shadow-m border`} key={index}>
                <div className={style.iconcontainer}>
                  <div
                    className={`${style.hexagon}`}
                    style={{
                      backgroundColor: stat.color,
                      boxShadow: "0 12px 12px rgba(80, 0, 185, 0.85)",
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
                <div className={style.content}>
                  <div className={style.label}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
