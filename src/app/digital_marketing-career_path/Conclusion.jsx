import React from 'react';
import Image from 'next/image';
import journeyto_DM from "../../assets/articleAssets/journeyto_DM.png";

const conclusion = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conclusion: Future of Digital Marketing Careers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* AI-Powered Campaigns */}
        <div className="space-y-8">
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                1
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  AI-Powered Campaigns
                </h3>
                <p className="text-gray-700">
                  Leverage AI for enhanced targeting and efficiency in your
                  marketing strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Voice Search & Local SEO */}
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                2
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Voice Search & Local SEO
                </h3>
                <p className="text-gray-700">
                  Optimize for voice search to capture the growing local
                  audience in Hyderabad and beyond.
                </p>
              </div>
            </div>
          </div>

          {/* Video-First Content */}
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                3
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Video-First Content
                </h3>
                <p className="text-gray-700">
                  Create engaging video content to attract and retain more
                  viewers, as video continues to dominate digital platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Omnichannel Marketing */}
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                4
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Omnichannel Marketing
                </h3>
                <p className="text-gray-700">
                  Integrate SEO, PPC, social media, and email for a cohesive
                  strategy that reaches customers everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={journeyto_DM}
          alt="Essential Skills"
          className="rounded-2xl shadow-xl mx-auto max-h-[700px] object-fit"
          unoptimized
        />
        {/* Career Path Summary */}
        <div className="mt-16 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Step-by-Step Career Path in Digital Marketing
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Start with basics as an intern.</li>
            <li>Grow into a specialist.</li>
            <li>Lead as a manager.</li>
            <li>
              Aim for leadership roles like <strong>Head of Marketing</strong>{" "}
              or <strong>CMO</strong>.
            </li>
          </ul>
        </div>

        {/* Comparison with AI & Data Science */}
        <div className="mt-10 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <p className="text-gray-700 text-lg">
            Compared to <span className="font-semibold">Data Science</span> and{" "}
            <span className="font-semibold">AI careers</span>, digital marketing
            is more accessible, creative, and business-driven.
          </p>
          <p className="text-gray-700 mt-4">
            If you’re in <strong>Hyderabad</strong>, you’re in the right place:
            the city’s booming startup culture, IT presence, and digital
            adoption make it the perfect environment to grow from fresher to
            expert in digital marketing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default conclusion;
