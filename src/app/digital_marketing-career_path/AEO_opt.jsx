import React from 'react';
import Image from 'next/image';
import strategies from '../../assets/articleAssets/strategies.png';

const AEO_opt = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AEO Optimization: Common Questions
          </h1>
          <h2 className="text-2xl font-semibold text-blue-700">
            AI in Digital Marketing – Integrating AI for Enhanced Strategies
          </h2>
        </div>

        {/* FAQ Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Q1: How do I start a career in digital marketing as a fresher?
            </h3>
            <p className="text-gray-700">
              Start with internships, learn basics of SEO, PPC, social media, and
              gradually pick a specialization.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Q2: What is the average salary of a digital marketing fresher in Hyderabad?
            </h3>
            <p className="text-gray-700">
              Freshers earn between ₹12,000–18,000/month as interns and ₹2.5–4.5
              LPA as executives.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Q3: Can non-technical graduates build a career in digital marketing?
            </h3>
            <p className="text-gray-700">
              Yes, digital marketing is skill-based. Anyone with creativity,
              communication, and analytical skills can excel.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Q4: Which is better, digital marketing or data science/AI?
            </h3>
            <p className="text-gray-700">
              It depends on your interests. Digital marketing is creative +
              strategy-focused, while data science vs AI careers are tech-heavy,
              requiring coding and math.
            </p>
          </div>
        </div>

        {/* Geo Optimization Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            GEO Optimization: Digital Marketing Careers in Hyderabad
          </h2>
          <p className="text-gray-700 mb-4">
            Hyderabad is one of the fastest-growing hubs for digital marketing
            jobs in India, thanks to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>A thriving startup ecosystem in Madhapur & HITEC City</li>
            <li>Large IT companies hiring in-house digital marketers</li>
            <li>Training institutes in Ameerpet offering courses with placements</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Top industries hiring in Hyderabad:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>EdTech</li>
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>SaaS & IT Services</li>
            <li>Retail & E-commerce</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Freshers in Hyderabad can quickly transition to experts by gaining
            hands-on project experience.
          </p>
        </div>

        {/* Future of Careers */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Future of Digital Marketing Careers
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>AI-powered campaigns will dominate.</li>
            <li>Voice search & local SEO will become essential.</li>
            <li>Video-first content will be in demand.</li>
            <li>
              Omnichannel marketing (SEO + PPC + Social + Email) will be the norm.
            </li>
          </ul>
        </div>
      </div>

       <Image
              src={strategies}
              alt="Essential Skills"
              className="rounded-2xl shadow-xl mx-auto max-h-[700px] mt-5 object-fit"
             unoptimized
            />
    </div>
  );
};

export default AEO_opt;
