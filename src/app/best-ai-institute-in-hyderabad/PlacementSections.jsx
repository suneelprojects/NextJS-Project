import React from 'react';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import img1 from '@/assets/successStories/higherpackage.png';


const PlacementSections = () => {
  // Animation variants
  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const commonViewport = { once: true, amount: 0.3 };

  // Timeline data
  const timelineItems = [
    {
      id: 1,
      title: "Divija's Journey: Full-stack to AI Developer",
      enrollment: "Jan 2023",
      completion: "Sep 2023",
      internship: "Oct 2023 - Feb 2024",
      placement: "March 2024 at LTI Mindtree",
      before: "Full-stack Developer",
      after: "AI Developer",
      placedDate: "March 2024",
      position: "left"
    },
    {
      id: 2,
      title: "Rahul's Journey: Fresher to Data Scientist",
      enrollment: "Nov 2022",
      completion: "Mar 2023",
      internship: "Apr 2023 - Aug 2023",
      placement: "Sep 2023 at Deloitte",
      before: "Fresher",
      after: "Data Scientist",
      placedDate: "May 2023",
      position: "right"
    },
    {
      id: 3,
      title: "Global AI Architect's Journey",
      enrollment: "Apr 2023",
      completion: "Dec 2023",
      internship: "Project Portfolio: Jan 2024",
      placement: "Feb 2024 (Overseas role)",
      before: "Software Engineer",
      after: "AI Architect (US)",
      placedDate: "January 2024",
      position: "left"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Placement Verification Section */}
      <section
        className="py-16 md:py-24 bg-gray-900"
       
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-3xl md:text-4xl font-bold mb-4 text-white text-center"
            
          >
            Placement Verification
          </p>
          <p
            className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto text-center"
            
            
          >
            Transparency is key to our success. See tangible proof of our students' achievements.
          </p>

          <a
            href="/success-stories"
            className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500 transition-all duration-300 cursor-pointer group no-underline"
            
            style={{ textDecoration: 'none' }}
          >
            {/* Left Side - Image */}
            <div className="md:w-1/2 p-4">
              <Image 
                src={img1} 
                alt="Placement Certificate" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold mr-3">
                  SP
                </div>
                <div>
                  <p className="font-semibold text-white  ">socialprachar.com</p>
                  <p className="text-gray-500 text-sm">@socialprachar</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 ml-auto group-hover:text-indigo-400 transition-colors" />
              </div>
              <h4 className="font-bold text-xl text-white mb-3">
                Student Success Stories | Real Reviews & Placements at Socialprachar Hyderabad
              </h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Discover inspiring success stories of students who launched their careers through Socialprachar's top-rated courses in Data Science, AI, Fullstack, AWS & Digital Marketing.
              </p>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-indigo-400 text-sm">#Socialprachar #Placement #Hyderabad #AI</p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section
        className="py-16 md:py-24 bg-gray-900"
        
        
        
        viewport={commonViewport}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-3xl md:text-4xl font-bold mb-4 text-white text-center"
            
          >
            Career Transformation Timeline
          </p>
          <p
            className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto text-center"
            
            
          >
            Witness the journey from aspiring learner to industry professional.
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-600 transform -translate-x-1/2 hidden md:block"></div>

            {/* Timeline Items */}
            <div
              className="space-y-12 md:space-y-24"
              variants={staggerContainer}
              
              
              viewport={commonViewport}
            >
              {timelineItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative"
                 
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/50 z-10">
                      {item.id}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-5/12 ${item.position === 'left' ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    {/* Mobile Node */}
                    <div className="flex md:hidden items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                        {item.id}
                      </div>
                      <div className="h-0.5 flex-1 bg-indigo-600"></div>
                    </div>

                    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 shadow-xl hover:border-indigo-500 transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-300">
                          <span className="text-indigo-400 font-semibold">Enrollment:</span> {item.enrollment}
                        </p>
                        <p className="text-gray-300">
                          <span className="text-indigo-400 font-semibold">Course Completion:</span> {item.completion}
                        </p>
                        <p className="text-gray-300">
                          <span className="text-indigo-400 font-semibold">Internship:</span> {item.internship}
                        </p>
                        <p className="text-gray-300">
                          <span className="text-indigo-400 font-semibold">Placement:</span> {item.placement}
                        </p>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">
                        Before: <span className="text-gray-300">{item.before}</span> → After: <span className="text-indigo-400 font-semibold">{item.after}</span>
                      </p>
                      <div className="flex items-center text-sm">
                        <a href="#" className="text-indigo-400 hover:underline">LinkedIn Profile</a>
                        <span className="text-gray-500 mx-2">|</span>
                        <span className="text-gray-500">Placed: {item.placedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementSections;