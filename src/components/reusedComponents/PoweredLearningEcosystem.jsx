'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  BrainCircuit,
  Target,
  BarChart3,
  Briefcase,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import ziroEcosystemImg from '@/assets/soacialprachar-ziro.jpeg';
import SignInForm from '@/components/Forms/coursesForm';

const PoweredLearningEcosystem = () => {
  const [isInView, setIsInView] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('powered-ecosystem-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const highlights = [
    {
      icon: Target,
      title: "Live Mentor Support",
      desc: "Expert-led classes & 1-on-1 doubt clearing",
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      icon: BrainCircuit,
      title: "AI Practice Labs",
      desc: "Smart practice modules with instant feedback",
      color: "text-purple-600",
      bg: "bg-purple-50 border-purple-100",
    },
    {
      icon: BarChart3,
      title: "Skill Score Analytics",
      desc: "Real-time performance tracking & insights",
      color: "text-green-600",
      bg: "bg-green-50 border-green-100",
    },
    {
      icon: Briefcase,
      title: "Internship & Career Launch",
      desc: "Real-world projects & placement readiness",
      color: "text-orange-600",
      bg: "bg-orange-50 border-orange-100",
    },
  ];

  return (
    
    <section
      id="powered-ecosystem-section"
      className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8  "
    >
      <motion.div
        className="max-w-7xl mx-auto text-center "
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full shadow-sm">
          <Sparkles className="w-4 h-4 text-[#ff5003]" />
          <span className="text-xs md:text-sm font-extrabold text-[#ff5003] uppercase tracking-wider">
            SOCIALPRACHAR &times; ZIRO AI ECOSYSTEM
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-slate-900 tracking-tight max-w-6xl mx-auto"
          style={{ fontWeight: 900 }}
        >
           From Learning to Landing Your Dream Career — <span className="text-[#ff5003] font-black">One Complete AI-Powered Ecosystem</span>
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 mx-auto max-w-4xl mb-10 leading-relaxed font-normal">
          Master industry-relevant skills with SocialPrachar and validate them through <strong className="text-gray-900 font-semibold">Ziro's</strong> AI-powered practice labs, real-world projects, internships, assessments, and career readiness programs. Everything you need to learn, practice, prove your expertise, and get hired—all in one ecosystem.
        </motion.p>



        {/* Main Ecosystem Image Showcase */}
        <motion.div
          variants={itemVariants}
          className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white p-2 md:p-4 group"
        >
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={ziroEcosystemImg}
              alt="SocialPrachar x Ziro Powered Learning Ecosystem"
              className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              priority
            />
          </div>

          {/* Bottom Action Bar inside Card */}
          {/* <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs md:text-sm font-semibold text-gray-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 17,000+ Trained
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 4.9/5 Rating
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 86% Placement Rate
              </span>
            </div>

            <button
              onClick={togglePopup}
              className="px-6 py-2.5 bg-[#ff5003] hover:bg-[#e04602] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 flex-shrink-0"
            >
              Book a Free Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div> */}
        </motion.div>
      </motion.div>

      {/* Form Popup Modal */}
      {isPopupVisible && (
        <SignInForm
          onClose={togglePopup}
          courseID={1}
          actionType="Button:Book Free Demo (Powered Ecosystem)"
          slug="ziro-demo"
        />
      )}
    </section>
  );
};

export default PoweredLearningEcosystem;
