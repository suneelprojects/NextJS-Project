/** @format */
import React from "react";
import Image from 'next/image';
import progression from "../../assets/articleAssets/progression.png";

const StepbyStepCareer = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Step-by-Step Career Path in Digital Marketing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Career Path Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                1
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Fresher / Intern (0–1 year)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Digital Marketing Intern
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Social Media Intern
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      SEO Trainee
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Skills to Learn:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        Basics of SEO, Google Ads, Facebook Ads
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        Content writing & Canva designing
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        Google Analytics basics
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Average Salary (Hyderabad):
                    </h4>
                    <div className="text-2xl font-bold text-green-600 mb-3">
                      ₹12,000–18,000{" "}
                      <span className="text-sm font-normal text-gray-500">
                        per month
                      </span>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                      <p className="text-sm text-yellow-800">
                        <strong>Tip:</strong> Start by working in an agency in
                        Hyderabad. You'll get exposure to multiple projects
                        quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                2
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Digital Marketing Executive (1–2 years)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      SEO Executive
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      PPC Executive
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Content Marketing Associate
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Skills to Learn:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        On-page & off-page SEO
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Social media campaign setup
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Email marketing tools (Mailchimp, HubSpot)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Keyword research & analytics reporting
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Salary:
                    </h4>
                    <div className="text-2xl font-bold text-green-600 mb-3">
                      ₹2.5–4.5 LPA
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                      <p className="text-sm text-blue-800">
                        At this stage, you should pick a specialization (SEO,
                        PPC, Social, Content).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                3
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Digital Marketing Specialist (2–4 years)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      SEO Specialist
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      PPC Analyst
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      Social Media Strategist
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Skills to Master:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Advanced SEO (technical SEO, schema, link-building)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Google Ads campaign scaling
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Conversion Rate Optimization (CRO)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Automation tools (Zapier, HubSpot)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Salary in Hyderabad:
                    </h4>
                    <div className="text-2xl font-bold text-green-600">
                      ₹5–8 LPA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                4
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Digital Marketing Manager (4–6 years)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      Digital Marketing Manager
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      Growth Hacker
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      Inbound Marketing Manager
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Skills Needed:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        Team management
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        Budget allocation for ads
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        Multi-channel campaign execution
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        ROI-driven strategy building
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Salary Range:
                    </h4>
                    <div className="text-2xl font-bold text-green-600 mb-3">
                      ₹10–18 LPA
                    </div>
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                      <p className="text-sm text-orange-800">
                        Companies in Hyderabad's IT corridor (HITEC City,
                        Gachibowli) actively hire for this role.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                5
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Digital Marketing Head / Director (7–10+ years)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      Head of Marketing
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      Director of Growth
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      Chief Marketing Officer (CMO)
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Skills:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Leadership & team scaling
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Brand storytelling
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Merging marketing with AI & analytics
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Driving international growth campaigns
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Salary:
                    </h4>
                    <div className="text-2xl font-bold text-green-600">
                      ₹20 LPA– ₹40 LPA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={progression}
        alt="Essential Skills"
        className="rounded-2xl shadow-xl mx-auto max-h-[700px] object-fit"
        unoptimized
      />
    </div>
  );
};

export default StepbyStepCareer;
