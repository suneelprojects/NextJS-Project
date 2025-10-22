'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import {
  BookOpen, Brain, Briefcase, BarChart, Cloud, Code, Monitor, Award, CheckCircle, Factory, Users,
  Star, Trophy, Link, MessageSquare, Download,
} from 'lucide-react';
import PlacementSections from './PlacementSections';
import Image from 'next/image';
import hero from '@/assets/articleAssets/Gemini_Generated_Image_66306u66306u6630.png';
import img1 from '@/assets/articleAssets/Screenshot 2025-10-09 160415.png';
import img2 from '@/assets/articleAssets/img2.png';
import img3 from '@/assets/articleAssets/img3.png';
// Company Logos
import tcs from '@/assets/successStories/TCS.png';
import wipro from '@/assets/successStories/outlier.jpg';
import infosys from '@/assets/successStories/TCS.png';
import hcl from '@/assets/successStories/Micron Technologies.png';
import cognizant from '@/assets/successStories/Cognizant.png';
import capgemini from '@/assets/successStories/Honeywell.png';
import amazon from '@/assets/successStories/AWS.png';
import microsoft from '@/assets/successStories/CISCO.jpg';
import google from '@/assets/successStories/google.png';
import deloitte from '@/assets/successStories/Sutherland.png';
import accenture from '@/assets/successStories/Accenture.png';
import techmahindra from '@/assets/successStories/Tech Mahindra.jpeg';
import DataAnalyticsForm from '@/app/best-data-analytics-hyderabad/DataAnalyticsForm';





export default function Page() {
  const commonViewport = { once: true, amount: 0.4 };
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [heading, setHeading] = useState("Apply for Data Analytics Course");

  


  // Helper component for stat cards (reused for placement, metrics, social proof)
  const StatCard = ({ title, value, description, icon: Icon = null }) => (
    <div
      className="p-6 md:p-8 bg-gray-800 rounded-xl border border-gray-200 hover:border-indigo-500 transition-colors duration-300 flex flex-col items-center text-center"
     
    >
      {Icon && <Icon className="w-12 h-12 text-indigo-400 mb-4" />}
      <p className="text-5xl md:text-6xl font-extrabold text-white mb-2">{value}</p>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );

  // Helper for feature boxes (Your Gateway section) and Awards section
  const FeatureBox = ({ icon: Icon, title, description }) => (
    <div
      className="p-6 md:p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300 flex flex-col items-start"
     
    >
      <Icon className="w-10 h-10 text-indigo-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );

  // Helper for FAQ items
  const FAQItem = ({ question, answer }) => (
    <div
      className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300"
      
    >
      <h3 className="font-semibold text-white text-lg mb-2">{question}</h3>
      <p className="text-gray-400 text-sm">{answer}</p>
    </div>
  );




  return (
    <>
      <Head>
        <title>Best AI & Data Science Institutes in Hyderabad | Socialprachar</title>
        <meta name="description" content="Discover the top AI training institutes in Hyderabad for 2025. Compare courses, placements, and choose the best for your AI career opportunities. Leading machine learning bootcamp and data science certification programs." />
        <meta name="keywords" content="AI training institute Hyderabad, data science courses Hyderabad, machine learning bootcamp, artificial intelligence certification, AI career opportunities, tech education Hyderabad, best AI institute KPHB Hyderabad" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Socialprachar" />
        <link rel="canonical" href="https://socialprachar.com/best-ai-institute-in-hyderabad" />
        <meta property="og:title" content="Best AI & Data Science Institutes in Hyderabad | Socialprachar" />
        <meta property="og:description" content="Searching for the best AI training and data science courses in Hyderabad? Our 2025 Updated Comparison Guide helps you navigate the options." />
        <meta property="og:image" content="https://socialprachar.com/assets/articleAssets/Gemini_Generated_Image_66306u66306u6630.png" />
        <meta property="og:url" content="https://socialprachar.com/best-ai-institute-in-hyderabad" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best AI & Data Science Institutes in Hyderabad | Socialprachar" />
        <meta name="twitter:description" content="Discover the top AI training institutes in Hyderabad for 2025. Compare courses, placements, and choose the best for your AI career opportunities." />
        <meta name="twitter:image" content="https://socialprachar.com/assets/articleAssets/Gemini_Generated_Image_66306u66306u6630.png" />
      </Head>
      <div className="min-h-screen bg-zinc-900 text-white font-sans">

      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 lg:py-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.src})` }}
        unoptimized="true"
        
      >
        {/* <div className="absolute inset-0 bg-black/70"></div> */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            
          >
            Best AI & Data Science <br /> Institutes in Hyderabad
          </p>
          <p
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-8"
            
            transition={{ delay: 0.2 }}
          >
            Which is the Top AI Training Institute in Hyderabad for 2025?
          </p>
          <p
            className="  text-gray-300 mb-10 max-w-3xl mx-auto"
            
            transition={{ delay: 0.4 }}
          >
            Searching for the best <strong className="text-indigo-400">AI training</strong> and <strong className="text-indigo-400">data science courses</strong> in Hyderabad? Our <strong className="text-indigo-400">2025 Updated Comparison Guide</strong> helps you navigate the options. Discover why Socialprachar is a leading <strong className="text-indigo-400">artificial intelligence training institute</strong>, comparing its <strong className="text-indigo-400">machine learning bootcamp</strong> and <strong className="text-indigo-400">data science certification program</strong> with other top Hyderabad <strong className="text-indigo-400">AI education</strong> providers. Make an informed decision for your <strong className="text-indigo-400">AI career opportunities</strong> and advanced <strong className="text-indigo-400">tech education in Hyderabad</strong>.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            
            transition={{ delay: 0.6 }}
          >
            <button
              className="bg-indigo-600 text-white rounded py-2  px-8  text-md font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-500/50"
              
              
              onClick={() => {
                setHeading("Download Full Course Brochure");
                setIsFormOpen(true);
              }}
            >
              Download Full Course Brochure
            </button>

            <button
              className="border border-indigo-600 text-indigo-600  py-2 px-8  rounded  text-md font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
              
              
              onClick={() => {
                setHeading("Book Free Demo Class");
                setIsFormOpen(true);
              }}
            >
              Book Free Demo Class
            </button>

          </div>
        </div>
      </section>

      {isFormOpen && (
        <DataAnalyticsForm
          isPopup={true}
          onClose={() => setIsFormOpen(false)}
          heading={heading}
        />
      )}

      {/* /* Unlock Your AI Future Section */ }
        <section
          className="py-16 md:py-24"
          
          
          viewport={commonViewport}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div
          className="p-8 rounded relative overflow-hidden  min-h-[800px] flex items-end justify-center"
          
            >
          <Image src={img1} alt="AI Future" className="absolute inset-0 w-96 h-full object-fill " />
            </div>
            <div
          className="flex flex-col"
          
          
          viewport={commonViewport}
            >
          <p
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
            
          >
            Why Choosing the Best AI Training Institute in Hyderabad is Crucial for Your Future
          </p>
          <p
            className="text-gray-300 text-lg mb-8"
            
          >
            Artificial Intelligence (AI) and Data Science are no longer optional skills; they are fundamental to every IT career in 2025 and beyond. With over <strong className="text-indigo-400">2,00,000 AI & ML job openings</strong> projected in India over the next 12 months, especially in tech hubs like Hyderabad, students and IT professionals are eager to upgrade their skills through specialized AI Training and data science courses. Finding the right artificial intelligence training institute in Hyderabad is key to unlocking these vast AI career opportunities.
          </p>
          <p
            className="text-gray-300 text-lg mb-8"
            
          >
            But here's the critical challenge: many machine learning institutes make grand promises, often failing to deliver real placements or practical, hands-on AI projects crucial for an artificial intelligence certification. This is precisely why selecting the right AI institute in Hyderabad, such as those offering a robust machine learning bootcamp, is paramount for your career success. Don't compromise on your Hyderabad AI education.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div
              className="p-6 bg-gray-800 rounded-xl border border-indigo-600 shadow-lg"
              
            >
              <p className="text-4xl font-bold text-white mb-2">2,00,000+</p>
              <p className="text-indigo-400">AI & ML job openings in India, driving demand for quality AI training.</p>
            </div>
            <div
              className="p-6 bg-gray-800 rounded-xl border border-indigo-600 shadow-lg"
              
            >
              <p className="text-2xl font-bold text-white mb-2">Critical Choice</p>
              <p className="text-indigo-400">Selecting the best AI institute in Hyderabad for career growth.</p>
            </div>
          </div>
            </div>
          </div>
        </section>

        {/* Comparing AI & Machine Learning Institutes Section */}
      <section
        className="py-16 md:py-24 bg-gray-900"
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-center text-white"
            
          >
            Comparing AI & Machine Learning Institutes in Hyderabad: <br className="hidden md:block" /> Socialprachar's Clear Advantage
          </p>
          <p
            className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto"
            
            transition={{ delay: 0.2 }}
          >
            Searching for the top <strong className="text-indigo-400">AI training</strong>, <strong className="text-indigo-400">data science courses</strong>, or a leading <strong className="text-indigo-400">machine learning bootcamp</strong> in Hyderabad? This detailed comparison highlights why Socialprachar stands out among <strong className="text-indigo-400">artificial intelligence training institutes in Hyderabad</strong>, offering a significant edge in <strong className="text-indigo-400">tech education</strong> and <strong className="text-indigo-400">AI career opportunities</strong>. Discover the clear differences that make Socialprachar the preferred choice for your <strong className="text-indigo-400">artificial intelligence certification</strong> journey, especially for those in and around KPHB Hyderabad.
          </p>

          <div
            className="overflow-x-auto rounded-xl border border-gray-700 shadow-lg"
            
            
            viewport={commonViewport}
          >
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 w-1/5 min-w-[150px]">Feature</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 w-1/5 min-w-[150px]">Socialprachar</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 w-1/5 min-w-[150px]">Analytics Vidhya (Hyderabad)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 w-1/5 min-w-[150px]">Intellipaat</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 w-1/5 min-w-[150px]">NIIT (Hyderabad Branch)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {/* Table Rows */}
                {[
                  { feature: "Placement Support & Guarantee", socialprachar: <><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />Learn Till You Get Placed, 95% Placement Rate</>, analytics: "Job assistance, no explicit guarantee", intellipaat: "Job assistance, interview prep", niit: "Career services, limited guarantee" },
                  { feature: "Internship Programs (paid/unpaid)", socialprachar: <><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />Paid (₹9,000 – ₹45,000/month)</>, analytics: "Project-based, mostly unpaid", intellipaat: "Project work, some industry collaborations", niit: "Project work, some internships (often unpaid)" },
                  { feature: "Faculty Quality & Background", socialprachar: <><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />IIT/IIM Alumni + Industry Experts</>, analytics: "Industry professionals, domain experts", intellipaat: "Experienced instructors, industry practitioners", niit: "Certified trainers, academic focus" },
                  { feature: "Course Duration & Flexibility", socialprachar: "Flexible options, varied durations", analytics: "Fixed schedules, some online flexibility", intellipaat: "Online focus, self-paced & live classes", niit: "Standard course durations, classroom/online" },
                  { feature: "Pricing Structure", socialprachar: <><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />₹40,000 one-time OR easy EMIs</>, analytics: "Mid-to-high range fees", intellipaat: "Higher range, premium pricing", niit: "Mid-to-high range, modular pricing" },
                  { feature: "Hands-on Projects & Practical Training", socialprachar: "AI Applications, CodeClash, DataClash", analytics: "Capstone projects, case studies", intellipaat: "Industry projects, practical labs", niit: "Projects, lab sessions" },
                  { feature: "Internship Partnerships", socialprachar: "Strong industry ties, hiring partners", analytics: "Some corporate collaborations", intellipaat: "Corporate partnerships, hiring network", niit: "Established industry connections" },
                  { feature: "Placement Success Rate", socialprachar: <><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />95% Placement Rate</>, analytics: "Often undisclosed/lower", intellipaat: "Varies, data not always transparent", niit: "Varies by program, internal data" },
                  { feature: "Post-training Support", socialprachar: <><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />Ongoing career guidance, alumni network</>, analytics: "Limited post-course support", intellipaat: "Mentorship, career counseling", niit: "Some alumni services" },
                  { feature: "Campus Location in Hyderabad", socialprachar: <><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />KPHB, prime location</>, analytics: "Multiple locations/online", intellipaat: "Online-centric, no physical campus", niit: "Various branches across city" },
                  { feature: "Student Reviews/Ratings", socialprachar: <><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />High ratings (e.g., Google Reviews)</>, analytics: "Mixed reviews depending on platform", intellipaat: "Good online reviews", niit: "Varies by branch, generally positive" },
                  { feature: "Certification Recognition", socialprachar: <><CheckCircle className="inline w-4 h-4 text-green-500 mr-2" />Industry-recognized AI certification</>, analytics: "Course completion certificate", intellipaat: "Globally recognized certifications", niit: "NIIT certificate, some vendor certs" },
                ].map((row, index) => (
                  <tr key={index} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200" >
                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-white">{row.feature}</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">{row.socialprachar}</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">{row.analytics}</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">{row.intellipaat}</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-300">{row.niit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            className="text-gray-500 text-xs mt-8 text-center"
            
            transition={{ delay: 0.8 }}
          >
            <strong>Note:</strong> This comparison is based on publicly available information and course offerings as of 2025. Specific details may vary.
          </p>
        </div>
      </section>

      {/* /* Why Socialprachar is Top AI Training Institute Section */ }
        <section
          className="py-16 md:py-24"
          
          
          viewport={commonViewport}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div
          className="relative p-8 rounded-xl overflow-hidden  h-[48rem] flex items-end justify-center" // Increased height (was h-96, now h-[48rem])
          
            >
          <Image src={img2} alt="Innovate. Learn. Evolve." className="absolute inset-0 w-96 h-full object-fit " />
             
            </div>
            <div
          className="flex flex-col"
          
          
          viewport={commonViewport}
            >
          <p
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
            
          >
            Why is Socialprachar the Top AI Training Institute in Hyderabad?
          </p>
          <p
            className="text-gray-300 text-lg mb-8"
            
          >
            Searching for the best <strong className="text-indigo-400">artificial intelligence training institute</strong> or a comprehensive <strong className="text-indigo-400">machine learning bootcamp</strong> in Hyderabad? At Socialprachar, we don't just offer AI training, we guarantee outcomes for your AI career opportunities. Our comprehensive approach combines expert-led data science courses, real-world AI application projects, and dedicated placement support to ensure your success in the rapidly growing AI industry right here in Hyderabad, including specific locations like KPHB Hyderabad. Discover why we're recognized for outstanding Hyderabad AI education.
          </p>

          <div className="grid gap-6">
            <div className="flex items-start bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300" >
              <Users className="w-8 h-8 text-indigo-400 mr-4 mt-1" />
              <div>
            <h3 className="text-xl font-semibold text-white mb-2">16,000+ AI & Data Science Professionals Trained</h3>
            <p className="text-gray-400 text-sm">We've successfully trained over 16,000 students in AI training, data science courses, and machine learning through online and classroom programmes, making us a leading tech education provider in Hyderabad and across India.</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300" >
              <Briefcase className="w-8 h-8 text-indigo-400 mr-4 mt-1" />
              <div>
            <h3 className="text-xl font-semibold text-white mb-2">1,130+ Hiring Partners for AI Career Opportunities</h3>
            <p className="text-gray-400 text-sm">Benefit from our strong network of over 1130 hiring partners across IT, AI, and Analytics sectors, actively seeking our certified AI professionals in Hyderabad and beyond.</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300" >
              <Award className="w-8 h-8 text-indigo-400 mr-4 mt-1" />
              <div>
            <h3 className="text-xl font-semibold text-white mb-2">Award-Winning Artificial Intelligence Certification</h3>
            <p className="text-gray-400 text-sm">Proud recipient of 9 prestigious EdTech Awards, felicitated by the Telangana IT Minister in 2024, recognizing our excellence in AI education and certification.</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </section>

        {/* Achieve Your Career Goals: Placement Success Section */}
      <section
        className="py-16 md:py-24 bg-gray-900"
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
            
          >
            Achieve Your Career Goals: Socialprachar's Unmatched <br className="hidden md:block" /> Placement Success in AI Training, Hyderabad
          </p>
          <p
            className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto"
            
            transition={{ delay: 0.2 }}
          >
            At Socialprachar, a premier <strong className="text-indigo-400">AI training institute in Hyderabad</strong>, we are dedicated to transforming your career aspirations into reality. Our robust placement record for <strong className="text-indigo-400">AI and Data Science courses in Hyderabad</strong> stands as a testament to our commitment to your success.
          </p>

          <div
            className="grid md:grid-cols-3 gap-8"
            
            
            
            viewport={commonViewport}
          >
            <StatCard
              value="95%"
              title="Industry-Leading Placement Rate"
              description="Graduates from our artificial intelligence certification and machine learning bootcamp programs achieve an outstanding placement success ratio, securing top roles in the tech industry."
            />
            <StatCard
              value="₹3-16L"
              title="Competitive India Salary Packages"
              description="Our students consistently secure attractive annual salary packages, showcasing the high demand for skills acquired through our data science courses in Hyderabad and advanced AI education."
            />
            <StatCard
              value="₹89L"
              title="Highest Overseas Package Achieved"
              description="Socialprachar has a proven track record of placing talent in high-paying international roles, with our highest overseas placement reaching a remarkable ₹89 Lakhs, opening doors to global AI career opportunities."
            />
          </div>
        </div>
      </section>

      {/* Recent Placement Highlights Section */}
      <section
        className="py-16 md:py-24"
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-2xl md:text-3xl font-bold mb-4 text-white"
            
          >
            Recent Placement Highlights
          </p>
          <p
            className="text-gray-300 text-lg mb-8"
            
            transition={{ delay: 0.2 }}
          >
            See some of our recent success stories, showcasing the diverse career paths and leading companies our graduates join:
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            
            
            
            viewport={commonViewport}
          >
            {[
              { name: "Anjali Sharma", company: "TCS", package: "₹6 LPA", background: "Fresher, B.Tech CSE. Joined as AI Engineer after Machine Learning Bootcamp." },
              { name: "Rohan Gupta", company: "Infosys", package: "₹8.5 LPA", background: "2 years experience in IT. Transitioned to Data Scientist role after Advanced Data Science Course." },
              { name: "Priya Singh", company: "Amazon", package: "₹15 LPA", background: "4 years experience. Secured Senior AI Specialist position after AI Certification." },
              { name: "Amit Kumar", company: "Wipro", package: "₹7 LPA", background: "Fresher, MCA. Placed as an AI Developer post-training." },
            ].map((placement, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300 flex flex-col justify-between"
                
              >
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{placement.name}</h4>
                  <p className="text-gray-300 mb-1">Company: <strong className="text-indigo-400">{placement.company}</strong></p>
                  <p className="text-gray-300 mb-1">Package: <strong className="text-indigo-400">{placement.package}</strong></p>
                  <p className="text-gray-400 text-sm mt-3">{placement.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* /* Verified Hiring Partners Section */ }
        <section
          className="py-16 md:py-24 bg-gray-300"
          
          
          viewport={commonViewport}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p
          className="text-2xl md:text-3xl font-bold mb-4 text-black"
          
            >
          Verified Hiring Partners
            </p>
            <p
          className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto"
          
          transition={{ delay: 0.2 }}
            >
          Our extensive network of top companies actively recruit Socialprachar graduates:
            </p>

            <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center"
          
          
          viewport={commonViewport}
            >
          {[
            { src: tcs, alt: "TCS" },
            { src: wipro, alt: "Wipro" },
            { src: infosys, alt: "Infosys" },
            { src: hcl, alt: "HCL" },
            { src: cognizant, alt: "Cognizant" },
            { src: capgemini, alt: "Capgemini" },
            { src: amazon, alt: "Amazon" },
            { src: microsoft, alt: "Microsoft" },
            { src: google, alt: "Google" },
            { src: deloitte, alt: "Deloitte" },
            { src: accenture, alt: "Accenture" },
            { src: techmahindra, alt: "Tech Mahindra" },
          ].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-36 rounded   hover:border-indigo-500 transition-colors duration-300 "
              
            >
              <Image
            src={logo.src || logo}
            alt={logo.alt}
            className="h-24 object-contain "
              />
            </div>
          ))}
            </div>
          </div>
        </section>

        { /* Awards & Recognition Section */ }
          <section
            className="py-16 md:py-24"
            
            
            
            viewport={commonViewport}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
            
              >
            Awards & Recognition
              </p>
              <p
            className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto"
            
            transition={{ delay: 0.2 }}
              >
            Our commitment to excellence in AI education is recognized by leading organizations:
              </p>

              <div
            className="grid md:grid-cols-3 gap-8"
            
            
            
            viewport={commonViewport}
              >
            {([
              {
                icon: Award,
                title: "9 Prestigious EdTech Awards",
                desc: "Felicited by the Telangana IT Minister in 2024 for outstanding contributions to AI education.",
              },
              {
                icon: CheckCircle,
                title: "ISO 9001:2015 Certified",
                desc: "Demonstrating our adherence to international quality management standards for training programs.",
              },
              {
                icon: Users,
                title: "NASSCOM Member",
                desc: "Proud member of the National Association of Software and Service Companies, contributing to India's tech ecosystem.",
              },
            ]).map((item, index) => {
              const Icon = item.icon;
              return (
                <div
              key={index}
              className="p-6 md:p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300 text-left"
              
                >
              <div className="flex items-center gap-4">
                <Icon className="w-10 h-10 text-indigo-400 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mt-3">{item.desc}</p>
                </div>
              );
            })}
              </div>
            </div>
          </section>

          {/* Success Metrics Dashboard Section */}
      <section
        className="py-16 md:py-24 bg-gray-900"
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
            
          >
            Success Metrics Dashboard
          </p>
          <p
            className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto"
            
            transition={{ delay: 0.2 }}
          >
            Transparent insights into our program's effectiveness:
          </p>

          <div
            className="grid md:grid-cols-3 gap-8"
            
            
            
            viewport={commonViewport}
          >
            <StatCard
              value="3.2 months"
              title="Average Time to Placement"
              description="Our graduates secure jobs efficiently thanks to dedicated support."
            />
            <StatCard
              value="180%"
              title="Average Salary Increase"
              description="Experienced professionals see significant pay hikes post-certification."
            />
            <StatCard
              value="4.9/5"
              title="Student Satisfaction Rating"
              description="Based on verified feedback from our AI and Data Science learners."
            />
          </div>
        </div>
      </section>

      {/* Transparent Placement Guarantee Section */}
      <section
        className="py-16 md:py-24"
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className=" p-8 md:p-10 rounded border-indigo-600 "
            
          >
            <p className="text-4xl font-bold text-white mb-14">Our Transparent Placement Guarantee Terms:</p>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start" >
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-indigo-400">"Learn Until You Get Placed" Model:</strong> We provide continuous interview opportunities and support until you land your dream job in <strong className="text-indigo-400">AI and Data Science</strong>.</span>
              </li>
              <li className="flex items-start" >
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-indigo-400">Eligibility Criteria:</strong> Applicable for students completing all course modules, projects, and maintaining 90%+ attendance.</span>
              </li>
              <li className="flex items-start" >
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-indigo-400">Comprehensive Support:</strong> Includes professional resume building, LinkedIn profile optimization, and dedicated career counseling.</span>
              </li>
              <li className="flex items-start" >
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-indigo-400">Guarantee Covers:</strong> Offers for roles aligned with AI/ML/Data Science within a specified period post-course completion.</span>
              </li>
            </ul>
            <p
              className="text-gray-400 text-sm mt-8"
              
            >
              Join Socialprachar, your trusted <strong className="text-indigo-400">artificial intelligence training institute</strong> near KPHB, Hyderabad, and embark on a rewarding journey towards a high-growth <strong className="text-indigo-400">AI career</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Your Gateway to Tech Excellence Section */ }
        <section
          className="py-16 md:py-24 bg-gray-900"
          
          
          viewport={commonViewport}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p
          className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
          
            >
          Your Gateway to Tech Excellence: Leading AI, ML, & Data Science Training in Hyderabad
            </p>
            <p
          className="text-gray-300 text-lg mb-12 max-w-4xl mx-auto"
          
          transition={{ delay: 0.2 }}
            >
          Discover unparalleled <strong className="text-indigo-400">AI training</strong> and <strong className="text-indigo-400">data science courses</strong> right here in <strong className="text-indigo-400">Hyderabad</strong>. Our <strong className="text-indigo-400">machine learning institute</strong> offers a unique one-time fee model, granting you lifetime access to over 12+ <strong className="text-indigo-400">job-ready courses</strong>. This ensures you're equipped with multiple in-demand skills, vital for <strong className="text-indigo-400">AI career opportunities</strong> and navigating the evolving tech landscape. Whether you're in KPHB Hyderabad or anywhere in the region, our comprehensive <strong className="text-indigo-400">tech education Hyderabad</strong> programs are designed for success.
            </p>

            <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          
          
          viewport={commonViewport}
            >
          <FeatureBox
            icon={(props) => <div className="w-full flex justify-center"><Code {...props} /></div>}
            title="Full Stack Development: Build End-to-End Solutions"
            description="Master Java, Python, and modern web technologies. Our **Full Stack Development course in Hyderabad** covers everything from front-end design to back-end infrastructure, preparing you for diverse **AI career opportunities** in software development."
          />
          <FeatureBox
            icon={(props) => <div className="w-full flex justify-center"><Brain {...props} /></div>}
            title="Artificial Intelligence Training: Master AI & ML Concepts"
            description="Dive deep into machine learning, deep learning, and practical AI applications. This **artificial intelligence certification** program transforms you into an AI expert, ready for the challenges at any **AI training institute in Hyderabad**."
          />
          <FeatureBox
            icon={(props) => <div className="w-full flex justify-center"><BarChart {...props} /></div>}
            title="Data Science & Analytics: Uncover Insights from Data"
            description="Develop expertise in statistical analysis, data visualization, and extracting actionable insights. Our **data science certification program** equips you with the skills demanded by top companies in **Hyderabad AI education**."
          />
          <FeatureBox
            icon={(props) => <div className="w-full flex justify-center"><Cloud {...props} /></div>}
            title="Cloud & DevOps: Modern Infrastructure & Deployment"
            description="Gain hands-on experience with AWS, Azure, Docker, Kubernetes, and CI/CD pipelines. This program is essential for any aspiring professional in **tech education Hyderabad**, ensuring robust and scalable software delivery."
          />
          <FeatureBox
            icon={(props) => <div className="w-full flex justify-center"><Monitor {...props} /></div>}
            title="Digital Marketing: Drive Growth in the Digital Age"
            description="Learn SEO, social media strategy, and online advertising techniques. Essential for a comprehensive skill set, complementing your **AI training** with market reach, especially relevant for businesses operating in **KPHB Hyderabad**."
          />
          <FeatureBox
            icon={(props) => <div className="w-full flex justify-center"><BookOpen {...props} /></div>}
            title="Additional Courses: Expanding Your Tech Horizon"
            description="Beyond these, explore 7+ more specialized programs. This breadth of **tech education Hyderabad** ensures you're always ahead, offering diverse paths for **AI career opportunities** and skill diversification at our **machine learning institute**."
          />
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions (FAQ) Section 1 */}
        <section
          className="py-16 md:py-24"
          
          
          viewport={commonViewport}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
          className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white text-center"
          
            >
          Frequently Asked Questions about AI & Data Science Training in Hyderabad
            </p>
            <p
          className="text-gray-300 text-lg mb-12 text-center"
          
          transition={{ delay: 0.2 }}
            >
          Here are some common questions about our <strong className="text-indigo-400">AI training</strong> and <strong className="text-indigo-400">data science courses</strong>.
            </p>

            <div
          className="space-y-4"
          
          
          viewport={commonViewport}
            >
          {[
            {
              question: "What makes this the best AI training institute in Hyderabad?",
              answer: "We provide expert-led curriculum, hands-on projects, paid internships, and a 'Learn Till You Get Placed' model backed by strong industry partnerships and a high placement rate."
            },
            {
              question: "Are these courses suitable for beginners?",
              answer: "Yes — our programs include beginner-friendly foundations, step-by-step labs, and mentorship so newcomers can progress to job-ready skills."
            },
            {
              question: "What kind of career opportunities can I expect after completing these courses?",
              answer: "Graduates typically secure roles such as AI Developer, Data Scientist, Machine Learning Engineer, and AI Analyst across both Indian and international companies."
            },
            {
              question: "Do you offer placement assistance for your tech education Hyderabad programs?",
              answer: "Yes — we provide dedicated placement support including resume reviews, mock interviews, and unlimited interview opportunities until you get placed under our placement policy."
            }
          ].map((faq, index) => {
            return (
              <div key={index} className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300" >
                <h3 className="font-semibold text-white text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            );
          })}
            </div>
          </div>
        </section>

        {/* Hands-On AI Training in Hyderabad: Real-World Experience */}
        <section
          className="py-16 md:py-24 bg-gray-900"
          
          
          viewport={commonViewport}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div
          className="flex flex-col"
          
          
          viewport={commonViewport}
            >
          <p
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
            
          >
            Hands-On AI Training in Hyderabad: Real-World Experience
          </p>
          <p
            className="text-2xl font-bold mb-4 text-white"
            
          >
            How Our Machine Learning Institute Prepares You for AI Career Opportunities?
          </p>
          <p
            className="text-gray-300 text-lg mb-6"
            
          >
            At leading artificial intelligence training institute in Hyderabad, we believe in learning by doing. Our comprehensive AI training programs, including specialized data science courses and machine learning bootcamps, ensure students gain practical experience. You'll work on actual AI applications and participate in competitive events like CodeClash and DataClash, gaining invaluable skills highly sought after by employers in Hyderabad and beyond.
          </p>
          <ul
            className="space-y-4 text-gray-300 text-lg mb-8"
            
            
            
            viewport={commonViewport}
          >
            <li className="flex items-start" >
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>Build an industry-relevant AI project portfolio for strong AI career opportunities.</span>
            </li>
            <li className="flex items-start" >
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>Regular coding competitions and hackathons to hone your skills, often held at our KPHB Hyderabad campus.</span>
            </li>
            <li className="flex items-start" >
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>Collaborative team-based assignments mirroring real-world tech environments.</span>
            </li>
            <li className="flex items-start" >
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>Live client projects for advanced learners, providing practical artificial intelligence certification experience.</span>
            </li>
          </ul>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start bg-gray-800 p-6 rounded-xl border border-indigo-600 shadow-lg" >
              <Briefcase className="w-8 h-8 text-indigo-400 mr-4 mt-1" />
              <div>
            <h3 className="text-xl font-semibold text-white mb-2">Paid Internships: Kickstart Your AI Career in Hyderabad</h3>
            <p className="text-gray-400 text-sm">Gain valuable industry experience with paid internships, earning ₹9,000 – ₹45,000 per month. This is a critical step for securing AI career opportunities after completing your artificial intelligence training in Hyderabad.</p>
              </div>
            </div>
            <div className="flex items-start bg-gray-800 p-6 rounded-xl border border-indigo-600 shadow-lg" >
              <Award className="w-8 h-8 text-indigo-400 mr-4 mt-1" />
              <div>
            <h3 className="text-xl font-semibold text-white mb-2">Boost Your Resume with Industry Certifications</h3>
            <p className="text-gray-400 text-sm">Receive co-branded certificates, validating your expertise in AI training and data science courses. Plus, gain internship credentials directly from leading AI companies, essential for your artificial intelligence certification and job prospects in Hyderabad's tech education landscape.</p>
              </div>
            </div>
          </div>
            </div>
            <div
          className="relative h-[48rem] rounded-xl overflow-hidden "
          
          transition={{ delay: 0.4 }}
            >
          <Image src={img3} alt="Hands-on AI Training" className="w-96 h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Student Success Stories: Real Journeys, Verified Outcomes */}
      <section
        className="py-16 md:py-24"
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
            
          >
            Student Success Stories: Real Journeys, Verified Outcomes
          </p>
          <p
            className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto"
            
            transition={{ delay: 0.2 }}
          >
            Don't just take our word for it – hear directly from our successful students. As a leading <strong className="text-indigo-400">artificial intelligence training institute in Hyderabad</strong>, Socialprachar provides <strong className="text-indigo-400">top-tier AI training</strong> and <strong className="text-indigo-400">data science courses</strong> designed to launch your career. Our <strong className="text-indigo-400">machine learning bootcamp</strong> graduates consistently secure roles at leading companies. Discover how our <strong className="text-indigo-400">Hyderabad AI education</strong> programs, including <strong className="text-indigo-400">artificial intelligence certification</strong>, have transformed careers.
          </p>

          <p
            className="text-2xl md:text-3xl font-bold mb-8 text-white"
            
            transition={{ delay: 0.4 }}
          >
            Featured Testimonials
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            
            
            
            viewport={commonViewport}
          >
            <div
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg flex flex-col items-center text-center"
              
            >
              <Image src={hero} alt="Divija" className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-indigo-500" />
              <h4 className="text-xl font-bold text-white mb-2">Divija - AI Developer at LTI Mindtree</h4>
              <p className="text-gray-400 text-sm italic">
                "I successfully transitioned from a regular full-stack role to an <strong className="text-indigo-400">AI developer</strong> after completing Socialprachar's <strong className="text-indigo-400">AI training in Hyderabad</strong>. With their practical projects and dedicated placement team, I landed a fantastic role at LTI Mindtree with a <strong className="text-indigo-400">₹16 LPA package</strong>, placed in March 2024. This <strong className="text-indigo-400">AI career opportunity</strong> was a direct result of their excellent curriculum!"
              </p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg flex flex-col items-center text-center"
              
            >
              <Image src={hero} alt="Rahul" className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-indigo-500" />
              <h4 className="text-xl font-bold text-white mb-2">Rahul - Data Scientist at Deloitte</h4>
              <p className="text-gray-400 text-sm italic">
                "As a fresher seeking <strong className="text-indigo-400">tech education in Hyderabad</strong>, I was struggling to get interview calls. After completing Socialprachar's comprehensive <strong className="text-indigo-400">Data Science program</strong> and hands-on internship, I was placed within just 4 months at Deloitte, securing a <strong className="text-indigo-400">₹9 LPA package</strong>. Their <strong className="text-indigo-400">machine learning institute</strong> truly prepared me for the industry."
              </p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg flex flex-col items-center text-center"
              
            >
              <Image src={hero} alt="US Student" className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-indigo-500" />
              <h4 className="text-xl font-bold text-white mb-2">US-based Student – Global AI Architect</h4>
              <p className="text-gray-400 text-sm italic">
                "Socialprachar's advanced <strong className="text-indigo-400">AI curriculum</strong> and practical experience gave me the edge I needed to crack an overseas role with an incredible <strong className="text-indigo-400">₹89 LPA salary</strong>. The real-world projects from this <strong className="text-indigo-400">artificial intelligence training institute</strong> were instrumental in outperforming other candidates globally."
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* placement  section */}
      <PlacementSections />


      { /* Our Thriving Alumni Network Section */ }
        <section
          className="py-16 md:py-24"
          
          
          viewport={commonViewport}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p
          className="text-2xl md:text-3xl font-bold mb-4 text-white"
          
            >
          Our Thriving Alumni Network
            </p>
            <p
          className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto"
          
          transition={{ delay: 0.2 }}
            >
          Our graduates are making an impact at top companies worldwide.
            </p>

            <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
          
          
          viewport={commonViewport}
            >
          {[
            { logo: google, name: "Google", role: "Senior AI Engineer" },
            { logo: microsoft, name: "Cisco", role: "Machine Learning Scientist" },
            { logo: amazon, name: "Amazon", role: "Data Science Manager" },
            { logo: tcs, name: "TCS", role: "AI Consultant" },
            { logo: deloitte, name: "Sutherland", role: "Lead Data Analyst" },
          ].map((company, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300 flex flex-col items-center"
              
            >
              <Image 
            src={company.logo}
            alt={company.name}
            className="w-20 h-20 object-contain mb-3"
              />
              <p className="text-xl font-semibold text-white mb-1">{company.name}</p>
              <p className="text-gray-400 text-sm">{company.role}</p>
            </div>
          ))}
            </div>
            <p
          className="text-gray-400 text-sm mt-8 max-w-2xl mx-auto"
          
          transition={{ delay: 0.8 }}
            >
          Many alumni also actively mentor current students, creating a supportive community.
            </p>
          </div>
        </section>

        {/* Social Proof & Recognition Section (similar to placement success) */}
      <section
        className="py-16 md:py-24 bg-gray-900"
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-3xl md:text-4xl font-extrabold mb-12 leading-tight text-white"
            
          >
            Social Proof & Recognition
          </p>

          <div
            className="grid md:grid-cols-3 gap-8"
            
            
            
            viewport={commonViewport}
          >
            <StatCard
              value="4.9"
              title="Google Reviews Rating"
              description="Out of 5 stars from 800+ reviews"
              icon={Star}
            />
            <StatCard
              value="10K+"
              title="Social Media Mentions"
              description="Across LinkedIn, X, and Facebook"
              icon={Users}
            />
            <StatCard
              value="Awarded"
              title="Best AI Institute"
              description="By Hyderabad Tech Magazine, 2023"
              icon={Trophy}
            />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section 2 (Grid layout) */}
      <section
        className="py-16 md:py-24"
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
            
          >
            Frequently Asked Questions about AI & Data Science Training in Hyderabad
          </p>
          <p
            className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto"
            
            transition={{ delay: 0.2 }}
          >
            Ready to start your journey with the best AI training institute in KPHB Hyderabad?
          </p>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            
            
            
            viewport={commonViewport}
          >
            <FAQItem
              question="What makes Socialprachar the best AI training institute in Hyderabad?"
              answer="Socialprachar stands out among AI institutes in Hyderabad by offering a unique 'Learn Till You Get Placed' guarantee. Unlike other machine learning institutes, we provide comprehensive AI training with paid internships and unparalleled unlimited interview support through our network of **1,130+ hiring partners**. This commitment ensures our students successfully launch their AI career opportunities in Hyderabad and beyond."
            />
            <FAQItem
              question="Does Socialprachar provide a job placement guarantee for its AI and Data Science courses?"
              answer="Yes, for our advanced AI and data science training programmes, we offer a robust job placement guarantee. Students receive unlimited interview opportunities until they secure a position, a testament to our impressive **95% placement success rate**. This focus on practical AI career opportunities is why we are a top choice for artificial intelligence certification and data science courses in Hyderabad."
            />
            <FAQItem
              question="Are Socialprachar's artificial intelligence training programs available online or offline in Hyderabad?"
              answer="We offer flexible learning modes to suit every student's needs for quality AI education in Hyderabad. You can choose from our interactive Online classes, traditional Offline training at our KPHB Hyderabad campus, or a convenient Self-paced learning option via our mobile app. This ensures accessibility for anyone pursuing an artificial intelligence training institute experience."
            />
            <FAQItem
              question="What certifications will I receive after completing the AI training or data science courses?"
              answer="Upon successful completion of our AI training or data science courses, you will receive prestigious certifications co-branded with industry leaders and Socialprachar. Additionally, students gain valuable internship certificates from reputable AI companies, enhancing their profiles for top AI career opportunities. These artificial intelligence certifications are recognized across the tech education Hyderabad landscape."
            />
            <FAQItem
              question="What is the fee structure for Socialprachar's AI and machine learning bootcamp programs?"
              answer="Our flagship AI and machine learning bootcamp subscription plan is competitively priced at **₹40,000** for a one-time payment. Alternatively, you can opt for **₹50,000** payable in two easy EMIs. This fee provides comprehensive access to over 12 specialized AI training and data science courses, offering exceptional value for your investment in tech education Hyderabad."
            />
            <FAQItem
              question="What kind of job openings can I expect after Socialprachar's AI training and Data Science courses?"
              answer="Graduates secure roles like AI Developer, Data Scientist, Machine Learning Engineer, and AI Analyst in Hyderabad and globally."
            />
          </div>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
            
            transition={{ delay: 0.6 }}
          >
            {/* <button
              className="bg-indigo-600 text-white px-8 py-4 rounded text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-500/50"
              
              
            >
              View 100+ More Placement Stories
            </button>
            <button
              className="border border-indigo-600 text-indigo-200 px-8 py-4 rounded text-lg font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
              
              
            >
              Enroll Now
            </button> */}
          </div>
        </div>
      </section>

      {/* Footer / Final Call to Action Section */}
      <section
        className="py-16 md:py-24 bg-gray-900"
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative p-8 rounded-xl overflow-hidden  h-[900px] flex flex-col justify-end"
            
          >
            <Image src={hero} alt="Students learning AI" className="absolute inset-0 w-96 h-full object-cover " />
           
          </div>

          <div
            className="flex flex-col"
            
            
            
            viewport={commonViewport}
          >
            <p
              className="text-indigo-400 font-semibold text-lg mb-2"
              
            >
              Looking for the Top AI Institute in Hyderabad?
            </p>
            <p
              className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-white"
              
            >
              Your Path to a Thriving <br className="hidden md:block" /> AI Career Starts Here
            </p>
            <p
              className="text-gray-300 text-lg mb-8"
              
            >
              Ready to launch your career in <strong className="text-indigo-400">Artificial Intelligence</strong>? Socialprachar is recognized as the <strong className="text-indigo-400">best AI training institute in Hyderabad</strong>, offering comprehensive <strong className="text-indigo-400">AI courses</strong>, <strong className="text-indigo-400">data science courses</strong>, and <strong className="text-indigo-400">machine learning bootcamps</strong>. Our programs, designed for both beginners and professionals, provide hands-on <strong className="text-indigo-400">AI certification</strong> and unparalleled <strong className="text-indigo-400">AI career opportunities in Hyderabad</strong> and beyond. Situated conveniently in <strong className="text-indigo-400">KPHB Hyderabad</strong>, we empower you with the skills demanded by today's tech industry. Don't miss this opportunity to transform your future with leading <strong className="text-indigo-400">tech education in Hyderabad</strong>.
            </p>
            <p
              className="text-gray-300 text-lg mb-8"
              
            >
              With over 16,000 successful alumni, Socialprachar is dedicated to your success. Our unique 'Learn Till You Get Placed' guarantee, paid internships, and a remarkable 95% placement rate ensure you gain real-world experience and secure your dream job.
            </p>

            <div
              className="grid sm:grid-cols-2 gap-6 mb-8"
              
              
              
              viewport={commonViewport}
            >
              <div className="p-6 bg-gray-800 rounded-xl border border-indigo-600 shadow-lg" >
                <p className="text-3xl font-bold text-white mb-2">₹45,000</p>
                <p className="text-indigo-400">One-time investment for 12+ industry-leading AI and Data Science courses</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-xl border border-indigo-600 shadow-lg" >
                <p className="text-3xl font-bold text-white mb-2">95%</p>
                <p className="text-indigo-400">Proven placement success rate for AI careers in Hyderabad</p>
              </div>
              <div className="sm:col-span-2 p-6 bg-gray-800 rounded-xl border border-indigo-600 shadow-lg" >
                <p className="text-3xl font-bold text-white mb-2">1,130+</p>
                <p className="text-indigo-400">Hiring partners actively seeking our certified AI talent.</p>
              </div>
            </div>

            <div
              className="flex flex-wrap gap-4 mt-auto"
              
              transition={{ delay: 0.6 }}
            >
              {/* <button
                className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded text-base font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-500/50"
                
                
              >
                <BookOpen className="w-5 h-5 mr-2" /> Book Your Free AI De...
              </button>
              <button
                className="flex items-center border border-indigo-600 text-indigo-200 px-6 py-3 rounded text-base font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
                
                
              >
                <MessageSquare className="w-5 h-5 mr-2" /> Talk to an AI Career C...
              </button>
              <button
                className="flex items-center border border-indigo-600 text-indigo-200 px-6 py-3 rounded text-base font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
                
                
              >
                <Download className="w-5 h-5 mr-2" /> Download Our A...
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
