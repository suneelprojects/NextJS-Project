/** @format */

import React from "react";
import Image from 'next/image';
import keyComponents from "../../assets/articleAssets/keyComponents.png";

const DMCvsDSAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Digital Marketing Career Path vs Data Science & AI Careers
          </h1>
          <p className="text-lg text-gray-600">
            Explore growth, opportunities, and skills required in these thriving
            fields.
          </p>
        </div>

        {/* Career Path */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Digital Marketing Career Path (7–10+ years)
          </h2>
          <p className="text-gray-700">
            <span className="font-semibold">Role:</span> Digital Marketing
            Head/Director <br />
            <span className="font-semibold">Focus:</span> Driving strategy and
            international growth
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Aspect</th>
                <th className="p-4 text-left">Digital Marketing</th>
                <th className="p-4 text-left">Data Science</th>
                <th className="p-4 text-left">Artificial Intelligence</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-200">
              <tr>
                <td className="p-4 font-medium">Goal</td>
                <td className="p-4">
                  Promote products & grow businesses online
                </td>
                <td className="p-4">Extract insights from data</td>
                <td className="p-4">Build intelligent systems</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Entry Barrier</td>
                <td className="p-4">Low (any graduate can start)</td>
                <td className="p-4">Medium (math, stats, coding)</td>
                <td className="p-4">High (ML, deep learning expertise)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Salary in Hyderabad</td>
                <td className="p-4">₹3–30 LPA</td>
                <td className="p-4">₹6–40 LPA</td>
                <td className="p-4">₹8–45 LPA</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Growth</td>
                <td className="p-4">Fast in startups & agencies</td>
                <td className="p-4">Strong in IT & healthcare</td>
                <td className="p-4">Exploding in automation & fintech</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Explanation */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Key Differences
          </h2>
          <p className="text-gray-700 mb-2">
            The difference between <span className="font-semibold">AI</span> and{" "}
            <span className="font-semibold">Data Science</span>
            is that Data Science focuses on analysis while AI builds
            decision-making systems.
          </p>
          <p className="text-gray-700">
            The difference between{" "}
            <span className="font-semibold">Digital Marketing</span>
            and these tech fields is accessibility: digital marketing welcomes
            all graduates, while AI/Data Science require strong coding/math
            foundations.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            In-Demand Digital Marketing Skills in 2025
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              SEO (On-page, Off-page, Local SEO for Hyderabad businesses, and
              Social SEO)
            </li>
            <li>Paid Ads (Google Ads, Meta Ads, LinkedIn Ads)</li>
            <li>Social Media Marketing</li>
            <li>Email Automation</li>
            <li>Analytics & Data-driven marketing</li>
            <li>AI in Digital Marketing (Chatbots, Predictive Analytics)</li>
          </ul>
        </div>
      </div>

      <Image
        src={keyComponents}
        alt="Essential Skills"
        className="rounded-2xl shadow-xl mx-auto max-h-[700px] mt-5 object-contain"
        unoptimized
      />
    </div>
  );
};

export default DMCvsDSAI;
