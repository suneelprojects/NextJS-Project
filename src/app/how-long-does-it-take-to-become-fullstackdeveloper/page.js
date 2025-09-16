"use client";
import React, { useState, useEffect } from 'react';
// import { IndianRupee } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import img1 from "../../assets/newassets/artical-4-1.png";
import img2 from "../../assets/newassets/artical-4-2.png";



// --- Icon Components ---
const CodeIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ServerIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const DatabaseIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 mr-3 flex-shrink-0 animate-pulse">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 mr-3 flex-shrink-0">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const TimeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ExperienceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MentorshipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

// --- Floating Animation Component ---
const FloatingElement = ({ children, delay = 0 }) => (
  <div 
    className="animate-float"
    style={{ 
      animation: `float 6s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  >
    {children}
  </div>
);

// --- Enhanced Header Component ---
const Header = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const redirect = () => {
    router.push('/courses');
  };

  const EnrollNow = () => {
    router.push('/');
  }

  return (
    <header className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-20 text-purple-300/20 font-mono text-sm">{"<html>"}</div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute top-40 right-20 text-pink-300/20 font-mono text-sm">{"function()"}</div>
        </FloatingElement>
        <FloatingElement delay={4}>
          <div className="absolute bottom-40 left-40 text-blue-300/20 font-mono text-sm">{"const dev = true"}</div>
        </FloatingElement>
        <FloatingElement delay={3}>
          <div className="absolute bottom-20 right-40 text-green-300/20 font-mono text-sm">{"</component>"}</div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
              <RocketIcon className="w-4 h-4 mr-2" />
              Your Journey to Success Starts Here
            </span>
          </div> */}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
            How Long Does It Take to Become a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
              Fullstack Developer?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Master the complete web development stack in{' '}
            <span className="text-purple-400 font-semibold">6 months to 2 years</span>
            {' '}depending on your learning path, dedication, and prior experience. 
            This comprehensive guide reveals the fastest routes to becoming job-ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden" onClick={()=>EnrollNow()}>
              <span className="relative z-10">Start Your Journey Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-semibold  border-2 border-gray-700 hover:border-purple-500 hover:bg-gray-700/50 transition-all duration-300" onClick={()=>redirect()}>
              Explore Learning Paths
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-700/50">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">6-24</div>
              <div className="text-gray-400">Months to Master</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">75K+</div>
              <div className="text-gray-400">Average Salary</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">High</div>
              <div className="text-gray-400">Job Demand</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </header>
  );
};

// --- Enhanced Skill Card Component ---
const SkillCard = ({ icon, title, description, delay = 0 }) => (
  <div 
    className={`group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 text-center hover:border-purple-500/50 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10">
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>

    {/* Hover Effect Particles */}
    <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.5s' }}></div>
  </div>
);

// --- Enhanced What Is Fullstack Section ---
const WhatIsFullstack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('what-is-fullstack');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-is-fullstack" className="py-24 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.1)_0,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.1)_0,_transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            What is a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Fullstack Developer?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A fullstack developer is a versatile professional who masters both frontend and backend technologies, 
            capable of building complete web applications from conception to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SkillCard 
            icon={<CodeIcon className="w-10 h-10 text-white" />}
            title="Frontend Mastery"
            description="HTML, CSS, JavaScript, React, Angular, Vue.js, responsive design, and modern UI/UX principles"
            delay={100}
          />
          <SkillCard 
            icon={<ServerIcon className="w-10 h-10 text-white" />}
            title="Backend Expertise"
            description="Node.js, Python, Java, APIs, authentication, security, and server-side architecture"
            delay={200}
          />
          <SkillCard 
            icon={<DatabaseIcon className="w-10 h-10 text-white" />}
            title="Database Management"
            description="SQL (MySQL, PostgreSQL), NoSQL (MongoDB), data modeling, and optimization techniques"
            delay={300}
          />
        </div>

        <div className={`mt-16 text-center max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Fullstack Developers Are in High Demand</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Fullstack developers are highly sought after because they can handle end-to-end development, 
              making them incredibly valuable for startups seeking rapid development, product companies 
              requiring versatile team members, and enterprises needing comprehensive technical solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Enhanced Timeline Item Component ---
const TimelineItem = ({ duration, title, description, step, isVisible, delay = 0 }) => (
  <div 
    className={`relative pl-16 pb-12 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="absolute left-0 top-2 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-gray-900 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg">
      {step}
    </div>
    <div className="absolute left-6 top-14 w-px h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>
    
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-semibold rounded-full border border-purple-500/30 mb-3">
        {duration}
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

// --- Enhanced Timeline Section ---
const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('timeline-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline-section" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="lg:w-1/2 flex justify-center">
            <div className={`relative transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              <Image 
                src={img1}
               
                 
                alt="Developer learning journey illustration" 
                className="relative rounded-3xl shadow-2xl w-full h-96 max-w-full object-cover border border-gray-700/50"
                unoptimized
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                Start Today!
              </div> */}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className={`mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Learning Timeline for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Beginners
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Your journey timeline depends on your starting point and dedication level. 
                Here &apos s what you can expect based on different experience levels.
              </p>
            </div>
            
            <div>
              <TimelineItem 
                step={1}
                duration="6-8 Months"
                title="Complete Beginners"
                description="Starting from zero programming knowledge, you'll learn fundamentals, basic syntax, and gradually build up to fullstack concepts through structured learning."
                isVisible={isVisible}
                delay={200}
              />
              <TimelineItem 
                step={2}
                duration="4-6 Months"
                title="Some Programming Background"
                description="With basic coding experience, you can adapt faster by quickly reviewing fundamentals and diving deeper into web-specific frameworks and tools."
                isVisible={isVisible}
                delay={400}
              />
              <TimelineItem 
                step={3}
                duration="3-4 Months"
                title="IT Professionals"
                description="Career switchers with technical backgrounds can leverage existing software knowledge to focus specifically on web development technologies."
                isVisible={isVisible}
                delay={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Enhanced Tech Card Component ---
const TechCard = ({ title, description, className = "", technologies = [] }) => (
  <div className={`group p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 ${className}`}>
    <div className="relative overflow-hidden">
      <h3 className="font-bold text-white text-lg mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
      
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
    
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
  </div>
);

// --- Enhanced Technologies Section ---
const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('technologies-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="technologies-section" className="py-24 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Essential{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Master these core technologies to become a well-rounded fullstack developer 
            capable of building modern, scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 mb-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414M5.636 18.364l-1.414 1.414" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">The Complete Stack</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Fullstack development encompasses a comprehensive set of technologies that work together 
                to create powerful web applications. From crafting beautiful user interfaces to building 
                robust server architectures and managing complex databases.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-4">Core Development Areas</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                Modern fullstack development requires expertise across multiple domains, each with its own 
                set of tools, frameworks, and best practices that evolve with industry standards.
              </p>
              
              <h4 className="text-2xl font-bold text-white mb-4">Deployment & DevOps</h4>
              <p className="text-gray-400 leading-relaxed">
                Successful applications require efficient deployment strategies using CI/CD pipelines, 
                cloud platforms like AWS, Azure, or Google Cloud, and containerization with Docker and Kubernetes.
              </p>
            </div>
          </div>
          
          <div className={`space-y-4 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <TechCard 
              title="Frontend Development" 
              description="Build stunning, responsive user interfaces that provide exceptional user experiences across all devices and browsers." 
              className="bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20" 
              technologies={['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS']}
            />
            <TechCard 
              title="Backend Development" 
              description="Create robust server-side applications, APIs, and microservices that handle business logic and data processing efficiently." 
              className="bg-green-500/10 border-green-500/30 hover:bg-green-500/20" 
              technologies={['Node.js', 'Python', 'Java', 'Express.js', 'Django', 'Spring Boot']}
            />
            <TechCard 
              title="Database Management" 
              description="Design and optimize data storage solutions for both relational and NoSQL databases to ensure fast, reliable data access." 
              className="bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20" 
              technologies={['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']}
            />
            <TechCard 
              title="DevOps & Deployment" 
              description="Implement automated testing, continuous integration, and cloud deployment strategies for scalable applications." 
              className="bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20" 
              technologies={['Git', 'Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Nginx']}
            />
            <TechCard 
              title="Modern Tools & AI" 
              description="Leverage cutting-edge development tools, AI assistance, and automation to accelerate development workflows." 
              className="bg-pink-500/10 border-pink-500/30 hover:bg-pink-500/20" 
              technologies={['VS Code', 'GitHub Copilot', 'ChatGPT', 'Figma', 'Postman']}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Enhanced Pathway Card Component ---
const PathwayCard = ({ title, duration, pros, cons, isRecommended = false, delay = 0 }) => (
  <div className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl transform ${
    isRecommended 
      ? 'border-purple-500/50 hover:border-purple-400 hover:shadow-purple-500/20 ring-2 ring-purple-500/20' 
      : 'border-gray-700/50 hover:border-purple-500/50 hover:shadow-purple-500/10'
  }`}
  style={{ animationDelay: `${delay}ms` }}
  >
    {isRecommended && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="relative z-10 h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">{title}</h3>
        <p className="text-purple-400 font-semibold text-lg">{duration}</p>
      </div>
      
      <div className="flex-grow space-y-6">
        <div>
          <h4 className="font-bold text-green-400 flex items-center mb-4 text-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
            Advantages
          </h4>
          <ul className="space-y-3">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <CheckIcon />
                <span className="leading-relaxed">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-red-400 flex items-center mb-4 text-lg">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
            Challenges
          </h4>
          <ul className="space-y-3">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <XIcon />
                <span className="leading-relaxed">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* <div className="mt-8 pt-6 border-t border-gray-700/50">
        <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
          isRecommended
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl'
            : 'bg-gray-700/50 text-gray-300 border border-gray-600 hover:bg-gray-600/50 hover:border-purple-500/50'
        }`}>
          Learn More
        </button>
      </div> */}
    </div>
    
    {/* Hover Effect */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${
      isRecommended ? 'bg-gradient-to-br from-purple-500/5 to-pink-500/5' : 'bg-gradient-to-br from-purple-500/3 to-pink-500/3'
    }`}></div>
  </div>
);

// --- Enhanced Pathways Section ---
const Pathways = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('pathways-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pathways-section" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.1)_0,_transparent_70%)]"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.1)_0,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Learning Path
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Select the learning approach that aligns with your goals, learning style, budget, and timeline. 
            Each path has its unique advantages and can lead to a successful fullstack development career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <PathwayCard 
              title="Coding Bootcamps"
              duration="3-9 months (Intensive)"
              isRecommended={true}
              pros={[
                "Structured, industry-focused curriculum",
                "Expert mentorship and career guidance",
                "Portfolio projects and networking opportunities",
                "Job placement assistance and interview prep",
                "Immersive learning environment"
              ]}
              cons={[
                "Higher upfront investment ($10K-$20K)",
                "Intensive pace requires full commitment",
                "Limited flexibility in scheduling"
              ]}
              delay={100}
            />
          </div>
          
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <PathwayCard 
              title="Self-Study Path"
              duration="12-24 months"
              pros={[
                "Cost-effective learning approach",
                "Complete flexibility in pace and schedule",
                "Vast array of free and paid resources",
                "Learn at your own comfort level",
                "Build strong self-discipline skills"
              ]}
              cons={[
                "Risk of knowledge gaps without guidance",
                "Lack of structured learning progression",
                "Requires exceptional self-motivation",
                "Limited networking opportunities"
              ]}
              delay={200}
            />
          </div>
          
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <PathwayCard 
              title="Computer Science Degree"
              duration="3-4 years"
              pros={[
                "Comprehensive theoretical foundation",
                "Strong alumni networks and connections",
                "Widely recognized academic credential",
                "Research opportunities and internships",
                "Broad exposure to computer science topics"
              ]}
              cons={[
                "Significant time and financial investment",
                "Curriculum may lag behind industry trends",
                "Less focus on practical, job-ready skills",
                "Slower entry into the job market"
              ]}
              delay={300}
            />
          </div>
        </div>

        {/* Additional Learning Resources */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">YT</span>
            </div>
            <h4 className="font-bold text-white mb-2">YouTube Tutorials</h4>
            <p className="text-gray-400 text-sm">Free comprehensive courses</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">📚</span>
            </div>
            <h4 className="font-bold text-white mb-2">Online Platforms</h4>
            <p className="text-gray-400 text-sm">Udemy, Coursera, Pluralsight</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">👥</span>
            </div>
            <h4 className="font-bold text-white mb-2">Mentorship Programs</h4>
            <p className="text-gray-400 text-sm">1-on-1 guidance and support</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">🏗️</span>
            </div>
            <h4 className="font-bold text-white mb-2">Project-Based Learning</h4>
            <p className="text-gray-400 text-sm">Build real-world applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Enhanced Journey Step Component ---
const JourneyStep = ({ title, description, stepNumber, isLast = false, isVisible, delay = 0 }) => (
  <div className={`relative transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: `${delay}ms` }}>
    {!isLast && <div className="absolute left-4 top-12 h-full w-px bg-gradient-to-b from-purple-500 to-pink-500"></div>}
    
    <div className="flex items-start gap-6 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
        {stepNumber}
      </div>
      
      <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 flex-1 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/10 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
      </div>
    </div>
  </div>
);

// --- Enhanced Journey Section ---
const Journey = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('journey-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const journeySteps = [
    {
      title: "Frontend Foundations",
      description: "Master HTML5 for structure, CSS3 for styling, and JavaScript for interactivity. Learn responsive design, CSS Grid, Flexbox, and modern ES6+ features. Build your first interactive websites and understand DOM manipulation.",
      months: "Months 1-3"
    },
    {
      title: "Frontend Frameworks & Tools",
      description: "Dive deep into React, Vue.js, or Angular. Learn component-based architecture, state management, routing, and modern build tools. Master Git version control and collaborate on GitHub projects.",
      months: "Months 4-6"
    },
    {
      title: "Backend Development",
      description: "Learn server-side programming with Node.js/Express, Python/Django, or Java/Spring. Understand APIs, authentication, middleware, and server architecture. Build robust backend systems and RESTful services.",
      months: "Months 7-9"
    },
    {
      title: "Database & Full Integration",
      description: "Master both SQL and NoSQL databases. Learn data modeling, optimization, and integration. Deploy applications to cloud platforms and implement CI/CD pipelines for professional development workflows.",
      months: "Months 10-15"
    }
  ];

  return (
    <section id="journey-section" className="py-24 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="lg:w-1/2">
            <div className={`mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Development Journey
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Follow this structured roadmap to systematically build your fullstack development skills. 
                Each phase builds upon the previous one, ensuring a solid foundation for your career.
              </p>
            </div>
            
            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <JourneyStep 
                  key={index}
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === journeySteps.length - 1}
                  isVisible={isVisible}
                  delay={(index + 1) * 200}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              <Image
                src={img2}
                alt="Development roadmap illustration" 
                className="relative rounded-3xl shadow-2xl w-full h-96 max-w-full object-cover border border-gray-700/50"
                unoptimized
              />
              
              {/* Floating Elements */}
              {/* <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                Start Here!
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Job Ready
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Enhanced Factor Card Component ---
const FactorCard = ({ icon, title, description, delay = 0 }) => (
  <div 
    className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 text-center flex flex-col items-center transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-3 transform`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex justify-center mb-6">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white border-4 border-gray-800 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
        {icon}
      </div>
    </div>
    <h3 className="font-bold text-white text-xl mb-4 group-hover:text-purple-300 transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
  </div>
);

// Enhanced Fast Track Section with better animations
const FastTrack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('fast-track-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const fastTrackSteps = [
    { number: 1, title: "Assess Current Skills", description: "Evaluate your existing programming knowledge" },
    { number: 2, title: "Learn Web Technologies", description: "Focus on web-specific frameworks and tools" },
    { number: 3, title: "Build Projects", description: "Create portfolio projects to demonstrate skills" },
    { number: 4, title: "Land Your Role", description: "Apply for fullstack developer positions", isFinal: true },
  ];

  return (
    <section id="fast-track-section" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.15)_0,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Fast-Track Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Career Switch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Already have programming experience? Leverage your existing skills to accelerate your 
            transition into fullstack development with this optimized learning path.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-gray-700 rounded-full">
              <div className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-2000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}></div>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
              {fastTrackSteps.map((step, index) => (
                <div 
                  key={step.number} 
                  className={`relative flex flex-col items-center text-center lg:w-1/4 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 relative bg-gray-900 shadow-lg z-10 ${
                    step.isFinal 
                      ? 'border-yellow-400 text-yellow-300 shadow-yellow-500/20' 
                      : 'border-purple-500 text-purple-400 shadow-purple-500/20'
                  } hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm max-w-[200px] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <FactorCard 
              icon={<TimeIcon />}
              title="Time Investment"
              description="Dedicate 20-40 hours per week for accelerated learning. Full-time commitment yields faster results and better retention of complex concepts."
              delay={100}
            />
          </div>
          
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <FactorCard 
              icon={<ExperienceIcon />}
              title="Prior Experience"
              description="Leverage existing programming knowledge in any language. Understanding of algorithms, data structures, and software principles accelerates web development learning."
              delay={200}
            />
          </div>
          
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <FactorCard 
              icon={<MentorshipIcon />}
              title="Expert Guidance"
              description="Connect with experienced developers through mentorship programs, coding communities, or professional networks to avoid common pitfalls and accelerate growth."
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Enhanced Tip Card Component ---
const TipCard = ({ number, title, description, delay = 0 }) => (
  <div 
    className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 flex gap-6 items-start hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500 transform`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
        {number}
      </div>
    </div>
    
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
  </div>
);

// --- Enhanced Tips Section ---
const Tips = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('tips-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const tips = [
    {
      number: "1",
      title: "Learn by Building Real Projects",
      description: "Don't just follow tutorials passively. Create actual applications, clone existing websites, and build projects that solve real problems. This hands-on approach reinforces learning and builds your portfolio."
    },
    {
      number: "2",
      title: "Follow a Structured Roadmap",
      description: "Avoid tutorial hell by following a clear, structured learning path. Focus on mastering fundamentals before moving to advanced topics. Consistency beats intensity in the long run."
    },
    {
      number: "3",
      title: "Join Developer Communities",
      description: "Engage with coding communities on Discord, Reddit, Stack Overflow, and GitHub. Peer learning, code reviews, and accountability partnerships significantly accelerate your progress."
    },
    {
      number: "4",
      title: "Master One Stack Deeply First",
      description: "Focus on becoming proficient in one frontend framework (React/Vue/Angular) and one backend technology (Node.js/Python/Java) before exploring alternatives. Depth over breadth initially."
    },
    {
      number: "5",
      title: "Practice Coding Daily",
      description: "Maintain consistent coding habits with daily practice sessions. Even 30-60 minutes daily is more effective than cramming for hours once a week. Consistency builds muscle memory."
    },
    {
      number: "6",
      title: "Build a Strong Portfolio",
      description: "Create 3-5 impressive projects that showcase different skills: a responsive frontend app, a full-stack application, and a project using APIs. Quality over quantity in portfolio development."
    }
  ];

  return (
    <section id="tips-section" className="py-24 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pro Tips to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Accelerate Learning
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Learn from the experience of successful developers. These proven strategies will help you 
            avoid common pitfalls and fast-track your journey to becoming job-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tips.map((tip, index) => (
            <div key={tip.number} className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <TipCard 
                number={tip.number}
                title={tip.title}
                description={tip.description}
                delay={index * 100}
              />
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        {/* <div className={`mt-20 text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The best time to start learning fullstack development was yesterday. The second best time is now. 
              Take the first step today and begin building your future in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Begin Learning Now
              </button>
              <button className="bg-gray-700/50 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-full border border-gray-600 hover:bg-gray-600/50 hover:border-purple-500/50 transition-all duration-300">
                Download Roadmap
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

// --- Enhanced Accordion Item Component ---
const AccordionItem = ({ question, answer, isOpen, onToggle, delay = 0 }) => {
  return (
    <div 
      className={`border-b border-gray-800 last:border-b-0 transform transition-all duration-500`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-8 text-left hover:text-purple-300 transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors pr-8">
          {question}
        </span>
        <span className={`flex-shrink-0 transition-all duration-300 ${isOpen ? 'text-purple-400 rotate-180' : 'text-gray-500'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-8 pr-12">
            <p className="text-gray-300 leading-relaxed text-lg">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Enhanced FAQ Section ---
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('faq-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "Can I really become a fullstack developer in 6 months?",
      answer: "Yes, if you have prior programming experience and can dedicate 40+ hours per week to structured learning through a bootcamp or intensive self-study program. However, becoming truly proficient and job-ready typically takes 8-12 months of consistent effort."
    },
    {
      question: "How long does it take for complete beginners?",
      answer: "Complete beginners typically need 12-24 months to become job-ready fullstack developers. This includes learning programming fundamentals, web technologies, frameworks, databases, and deployment. The timeline varies based on study time, learning method, and individual aptitude."
    },
    {
      question: "Is a computer science degree required for fullstack development?",
      answer: "No, a CS degree is not required. Many successful fullstack developers are self-taught or bootcamp graduates. However, a degree provides valuable theoretical foundations and can be preferred by some employers, especially larger corporations."
    },
    {
      question: "Which programming language should I learn first?",
      answer: "JavaScript is the most versatile choice for aspiring fullstack developers since it works for both frontend and backend development. Python is also excellent for beginners due to its readable syntax and strong backend capabilities."
    },
    {
      question: "How much can I expect to earn as a fullstack developer?",
      answer: "Entry-level fullstack developers typically earn $50K-$70K annually, while experienced developers can earn $80K-$120K+ depending on location, company size, and specialization. Remote work opportunities can provide access to higher-paying markets."
    },
    {
      question: "Should I specialize in frontend or backend first?",
      answer: "Start with frontend development as it provides immediate visual feedback and is more beginner-friendly. Once comfortable with HTML, CSS, and JavaScript, gradually add backend skills. This approach builds confidence and maintains motivation throughout the learning process."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.1)_0,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about becoming a fullstack developer, 
            timelines, requirements, and career prospects.
          </p>
        </div>

        <div className={`mx-auto max-w-4xl transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-8 shadow-2xl">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        {/* <div className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Join our community of aspiring and experienced developers to get personalized guidance and support.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300">
              Join Developer Community
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

// --- Enhanced CTA Section ---
const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="relative py-32 bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-20 text-purple-300/10 font-mono text-lg">{"{ }"}</div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute top-40 right-20 text-pink-300/10 font-mono text-lg">{"( )"}</div>
        </FloatingElement>
        <FloatingElement delay={4}>
          <div className="absolute bottom-40 left-40 text-blue-300/10 font-mono text-lg">{"[ ]"}</div>
        </FloatingElement>
        <FloatingElement delay={3}>
          <div className="absolute bottom-20 right-40 text-green-300/10 font-mono text-lg">{"< >"}</div>
        </FloatingElement>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 text-center z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 font-medium backdrop-blur-sm mb-8">
              <RocketIcon className="w-5 h-5 mr-3" />
              Your Future Starts Today
            </span>
          </div> */}

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
            Ready to Launch Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
              Fullstack Career?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed mb-12">
            The journey to becoming a fullstack developer varies from{' '}
            <span className="text-purple-300 font-bold">6 months to 2 years</span>, but with 
            the right approach, dedication, and resources, you can join the ranks of highly-paid 
            tech professionals. The demand for fullstack developers continues to soar in 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-10 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full  shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"  onClick={()=>EnrollNow()} >
              <span className="relative z-10 flex items-center">
                {/* <RocketIcon className="w-5 h-5 mr-3" /> */}
                Start Your Journey Today
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            {/* <button className="px-10 py-3 bg-gray-800/50 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-gray-700 hover:border-purple-400 hover:bg-gray-700/50 transition-all duration-300">
              Download Free Roadmap
            </button> */}
          </div>

          {/* Success Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-gray-700/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500K+</div>
              <div className="text-gray-300">Job Openings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">22%</div>
              <div className="text-gray-300">Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$95K</div>
              <div className="text-gray-300">Avg. Salary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Remote</div>
              <div className="text-gray-300">Work Options</div>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

// --- Enhanced Footer ---
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Fullstack Developer Guide</h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Your comprehensive resource for learning fullstack development. From beginner to job-ready 
              in the shortest time possible.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Learning Paths</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Bootcamps</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Self Study</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">University</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Online Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Roadmap</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Community</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2025 Fullstack Developer Guide. Made with ❤️ for aspiring developers.
          </p>
          <div className="flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function Page() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <WhatIsFullstack />
        <Timeline />
        <Technologies />
        <Pathways />
        <Journey />
        <FastTrack />
        <Tips />
        <FAQ />
        <CTA />
      </main>
      {/* <Footer /> */}
      
    </div>
    );
};