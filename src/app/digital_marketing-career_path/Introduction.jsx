/** @format */

import React from "react";
import {
  TrendingUp,
  Target,
  Users,
  Globe,
  DollarSign,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import advantagesofDMC from "../../assets/articleAssets/advantagesof_DMC.png";

const Introduction = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "High demand",
      description: "Every business needs online visibility.",
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "Diverse opportunities",
      description:
        "SEO, PPC, social media, content, analytics, influencer marketing.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      title: "No specific degree needed",
      description: "Skill-based industry, open to graduates from any stream.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
      title: "Great pay scale",
      description: "Freshers can start at ₹3–5 LPA; experts earn ₹15–30 LPA",
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: "Global reach",
      description: "Your skills are transferable worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Digital Marketing Career Path
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              From Fresher to Expert
            </p>
            <div className="mt-8 w-24 h-1 bg-white mx-auto rounded-full opacity-80"></div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
          </div>

          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              The demand for digital marketing professionals is growing at{" "}
              <span className="font-semibold text-blue-600">
                lightning speed
              </span>
              . As businesses shift online, every brand — from startups in{" "}
              <span className="font-medium">Madhapur</span> to established
              companies in <span className="font-medium">Banjara Hills</span> —
              is looking for digital marketing experts to manage their online
              presence.
            </p>

            <p className="text-lg">
              But where do you begin? And how do you go from a digital marketing
              fresher to an expert?
            </p>

            <p className="text-lg">
              This guide maps out the{" "}
              <span className="font-semibold text-purple-600">
                digital marketing career path step-by-step
              </span>{" "}
              — from entry-level positions to senior leadership roles. We'll
              also compare it briefly with other hot careers like{" "}
              <span className="font-medium text-indigo-600">
                Data Science vs AI
              </span>{" "}
              to give you clarity on where digital marketing stands.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Digital Marketing Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose a Career in Digital Marketing?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:scale-105 transform transition-transform"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:from-blue-700 hover:to-purple-700">
              <Users className="w-5 h-5" />
              <span>Start Your Digital Marketing Journey</span>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={advantagesofDMC}
        alt="Essential Skills"
        className="rounded-2xl shadow-xl mx-auto max-h-[700px] object-fit"
        unoptimized
      />
    </div>
  );
};

export default Introduction;
