"use client";
import { motion } from "framer-motion";
import { Rocket, ShoppingCart, BarChart3, Settings, FileText, ShieldCheck, Bot, Calendar, Package, Blocks } from "lucide-react";

export default function LearnDataScienceAI({ slug }) {
  // Define the allowed slugs for this page
  const allowedSlugs = [
    'data-science',
    'artificial-intelligence-course-training-institute-in-hyderabad',
    'generative-ai-course-training-institute-hyderabad',
    'data-analytics-course-training-hyderabad'
  ];

  // Only render for allowed slugs
  if (!allowedSlugs.includes(slug)) {
    return null;
  }

 const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      desc: "Personalized product recommendations with scalable AWS hosting and CI/CD pipelines."
    },
    {
      title: "Real-Time Sentiment Analysis Dashboard",
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      desc: "Analyze live social media data using NLP and display insights on interactive dashboards."
    },
    {
      title: "Predictive Maintenance System",
      icon: <Settings className="w-12 h-12 text-red-600" />,
      desc: "AI-powered IoT failure prediction with real-time alerts."
    },
    {
      title: "Automated Resume Screening Tool",
      icon: <FileText className="w-12 h-12 text-purple-600" />,
      desc: "NLP-based tool to parse resumes and match candidate skills."
    },
    {
      title: "Financial Fraud Detection Platform",
      icon: <ShieldCheck className="w-12 h-12 text-yellow-600" />,
      desc: "Detect suspicious transactions with ML models & secure dashboards."
    },
    {
      title: "AI Chatbot for Customer Support",
      icon: <Bot className="w-12 h-12 text-indigo-600" />,
      desc: "NLP-driven chatbot using AWS Lex & Lambda for automated support."
    },
    {
      title: "Event Recommendation System",
      icon: <Calendar className="w-12 h-12 text-pink-600" />,
      desc: "Personalized local event discovery app with AI recommender models."
    },
    {
      title: "Smart Inventory Management System",
      icon: <Package className="w-12 h-12 text-teal-600" />,
      desc: "AI-driven stock prediction and inventory tracking dashboard."
    },
    {
      title: "Blockchain-Based Voting System",
      icon: <Blocks className="w-12 h-12 text-orange-600" />,
      desc: "Secure and transparent blockchain-based online voting platform."
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{background: 'linear-gradient(90deg,#0000FF,#fb8500)'}}>
            <div className="p-12 text-center text-white">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold mb-4">
                🚀 Don’t Just Learn Data Science & AI — Build It
              </motion.h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
                Hands-on projects, real-world datasets, and deployment-ready pipelines — designed to make you industry-ready.
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button href="#enroll" className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-black font-semibold bg-[#ffffff] hover:opacity-95 transition">
                  🔥 Enroll Now
                </button>
                <button href="#brochure" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-[#ffffff] font-semibold border-2 border-white bg-transparent hover:bg-white hover:text-[#0000FF] transition">
                  📘 Download Brochure
                </button>
              </div> */}

              
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-5xl md:text-4xl font-extrabold text-center m-5">💡 Featured Projects <span className="text-orange-500"> You’ll Work On</span> </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="transform-gpu">
                <div className="h-full border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition">
                  <div className="flex items-center gap-4 justify-center">
                    <div className="p-3 rounded-lg flex justify-center items-center">
                      {p.icon}
                    </div>

                  </div>
                  <h3 className="font-bold ">{p.title}</h3>

                  <p className="text-gray-600 mt-2 flex-1">{p.desc}</p>

                  {/* <div className="mt-6 flex items-center justify-between">
                    <a href="#" className="inline-block px-4 py-2 rounded-lg font-medium text-white bg-[#0000FF] hover:brightness-95">View Details</a>
                    <span className="text-sm text-gray-500">Duration: 4–8 weeks</span>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-16 px-6 bg-[#fb8500]/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-2xl font-bold mb-4 text-orange-400">Why this program?</p>
            <div className="space-y-5 text-gray-800">
              <div className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Project-first curriculum with deployment and monitoring</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Mentor reviews & live code walkthroughs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Placement support & interview prep</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">Hands-on Labs</h4>
                <p className="text-sm text-gray-600">Practical labs with notebooks, datasets, and evaluation pipelines.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">Deploy & Monitor</h4>
                <p className="text-sm text-gray-600">Deploy models to cloud and set up monitoring and alerts.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">Resume-Ready Projects</h4>
                <p className="text-sm text-gray-600">Projects designed to showcase impact to recruiters.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow">
                <h4 className="font-semibold mb-2">Interview Prep</h4>
                <p className="text-sm text-gray-600">Mock interviews, system design and ML fundamentals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section id="enroll" className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">🎯 Ready to start building?</h2>
          <p className="mb-6 text-gray-200">Join the cohort and graduate with a portfolio of production-ready AI projects.</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="px-8 py-3 rounded-full bg-[#ffffff] text-[#0000FF] font-semibold">Join Now</a>
            <a href="#" className="px-6 py-3 rounded-full border border-white text-white">Contact Us</a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SocialPrachar — Built with ❤️
      </footer> */}
    </div>
  );
}
