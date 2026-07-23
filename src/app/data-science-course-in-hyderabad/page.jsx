'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Trophy,
  CalendarDays,
  Briefcase,
  Award,
  BookOpen,
  Laptop,
  FlaskConical,
  Users,
  Rocket,
  Square,
  GraduationCap,
  MapPin,
  Phone,
  FileText,
  Download,
    File,
} from 'lucide-react';
import Image from 'next/image';
import img1 from "@/assets/articleAssets/artical-img-15.png"
import img2 from "@/assets/articleAssets/artical-img-16.png"
import img3 from "@/assets/articleAssets/artical-img-17.png"
import img4 from "@/assets/articleAssets/artical-img-18.png"
import SignInForm from '@/components/Forms/coursesForm';import PoweredLearningEcosystem from '@/components/reusedComponents/PoweredLearningEcosystem';
// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation variants for individual items within a section (e.g., cards, text blocks)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animation variants for staggering children in a container (e.g., grids)
const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child's animation
    },
  },
};

export default function Page() {
   const [isPopupVisible, setIsPopupVisible] = useState(false);
      
        const togglePopup = () => {
          setIsPopupVisible(!isPopupVisible);
        };
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section  */}
      <motion.section
        className="relative h-[600px] flex items-center justify-center p-4 bg-cover bg-center"
       
      >
         {/* Background image using next/image  */}
          <Image
            src={img4}
            alt="Hero background"
            fill
            className="absolute inset-0 object-cover"
            priority
          />
          {/* Gray overlay */}
          <div className="absolute inset-0 bg-gray-900/50"></div>
          <div className="relative z-10  mx-auto text-white">
            <motion.h1
              className="text-4xl md:text-5xl max-w-5xl font-bold mb-4 leading-tight text-black"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Best Data Science Course in Hyderabad with 100% Placement Support
            </motion.h1>
            <motion.p
              className="text-md md:text-xl mb-8 font-light text-gray-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Transform your career with industry-leading <span className="font-bold text-orange-400">Data Science training</span> and guaranteed job placement support in the heart of India&apos;s tech hub.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row  gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <Link href="/data-science">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255, 99, 71, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded shadow-lg transition duration-300 ease-in-out"
              >
                Enrol Now
              </motion.button>
              </Link>

              <motion.button
              onClick={togglePopup}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className=" border-2 border-red-500 text-red-500 bg-transparent  font-bold py-3 px-8 rounded transition duration-300 ease-in-out"
              >
                Download Curriculum
              </motion.button>
            </motion.div>
          </div>
              </motion.section>

              {/* Section 1: Launch Your Career */}
      <motion.section
        className="bg-[#F7F4EF] py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-3xl md:text-4xl font-extrabold mb-6">
              Launch Your Career in Data Science & Artificial Intelligence
            </p>
            <p className="text-md mb-4 text-gray-700 leading-relaxed">
              Searching for the <span className=" bg-orange-300">best Data Science course in Hyderabad</span> to accelerate your professional journey? At <span className="font-bold ">SocialPrachar</span>, we&apos;ve designed a comprehensive 7-month, job-guaranteed <span className=" bg-pink-300">Data Science & AI programme</span> specifically tailored for 2024–2025 graduates and ambitious working professionals seeking career transformation.
            </p>
            <p className="text-md mb-4 text-gray-700 leading-relaxed">
              Our industry-aligned curriculum covers essential technologies including <span className="font-bold">Python programming, Machine Learning, Artificial Intelligence, Data Analytics, and Cloud Computing</span>. You&apos;ll learn directly from experienced industry mentors who bring real-world expertise into every session. The programme includes a <span className=" bg-pink-200">3-month company internship</span> where you&apos;ll work on live projects and build a portfolio that impresses employers.
            </p>
            <p className="text-md text-gray-700 leading-relaxed">
              Whether you aspire to become a <span className="font-bold">Data Analyst, Data Scientist, Machine Learning Engineer, or AI Developer</span>, our comprehensive training covers all pathways under one trusted programme. Join over 16,000 students who've already transformed their careers with <span className="bg-orange-200">SocialPrachar's</span>  proven methodology and industry connections.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
            <Image
              src={img1}
              alt="People celebrating career success"
              className="rounded-lg shadow-xl object-cover w-full h-auto max-w-sm md:max-w-md"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Why Choose Our Data Science Course */}
      <motion.section
        className="bg-[#FDF5EF] py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.p variants={itemVariants} className="text-3xl md:text-4xl font-bold  mb-12">
            Why Choose Our Data Science Course in Hyderabad
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-700  mb-12  mx-auto">
            Discover what makes <span className=" bg-orange-300">SocialPrachar</span> the premier choice for aspiring data professionals across Hyderabad and beyond.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { icon: Trophy, title: "Award-Winning Excellence", description: "Learn from trainers recognised with 9+ National EdTech Awards, bringing industry best practices to every session" },
              { icon: CalendarDays, title: "Comprehensive Timeline", description: "7-Month Job-Ready Curriculum plus 3-Month Paid Internship for hands-on experience" },
              { icon: Briefcase, title: "Multiple Career Paths", description: "Training for 10+ Job Roles including Data Analyst, ML Engineer, AI Developer, and Cloud Engineer" },
              
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-100 rounded-full mr-4">
                    <feature.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { title: "Proven Placement Success", description: "Join our 95% placement record with graduates securing packages up to ₹12 LPA at leading companies across India" },
            //   { title: "Industry-Ready Skills", description: "Master Python, Machine Learning, and AI through real-world applications" },
            //   { title: "Collaborative Learning", description: "Work alongside peers on live projects that mirror actual industry challenges" },
            //   { title: "Placement Support", description: "Receive personalised guidance from application to job offer" },
              { title: "Industry-Recognised Certifications", description: "Earn 7+ Professional Certifications from global leaders including IBM, Microsoft, and Google — credentials that open doors with top employers" },
              { title: "Practical Learning Approach", description: "Master concepts through hands-on projects, weekly assessments, and personalised career roadmap sessions designed to build job-ready skills from day one" },
              { title: "Flexible Learning Options", description: "Study online from anywhere or attend classes at our state-of-the-art KPHB Hyderabad campus — choose what works for your schedule" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 border-s-6 border-orange-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: Hyderabad's Most Trusted */}
      <motion.section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.p variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Hyderabad&apos;s Most Trusted Data Science Training Institute
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
              <Image
                src={img2}
                alt="Hyderabad skyline illustration"
                className="rounded-lg shadow-xl object-cover w-full h-auto max-w-sm md:max-w-md"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-bold mb-4">Are You Searching For:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg leading-relaxed">
                <li> <strong>Best Data Science institute near me</strong> with proven track record</li>
                <li> <span className="bg-pink-300">Affordable Data Science training in Hyderabad</span> without compromising quality</li>
                <li> <strong>Top Data Science course with placement in Kukatpally</strong> and surrounding areas</li>
                <li>Hands-on AI course with real industry projects</li>
                <li>Comprehensive training from beginner to job-ready professional</li>
              </ul>
              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                You&apos;ve found exactly what you need! <span className=" bg-orange-300">SocialPrachar</span> has successfully trained <span className="font-bold ">over 16,000 students</span> across Hyderabad&apos;s key tech corridors — from Serilingampally to Gachibowli, Madhapur to KPHB, and beyond. Our students gain access to genuine industry internships with leading companies and receive comprehensive placement support that transforms aspirations into careers.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { icon: FlaskConical, title: "Industry-Ready Skills", description: "Master Python, Machine Learning, and AI through real-world applications" },
              { icon: Users, title: "Collaborative Learning", description: "Work alongside peers on live projects that mirror actual industry challenges" },
              { icon: Rocket, title: "Placement Support", description: "Receive personalised guidance from application to job offer" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-100 rounded-full mr-4">
                    <item.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section 4: Comprehensive Course Structure & Investment */}
      <motion.section
        className="bg-[#F7F4EF] py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.p variants={itemVariants} className="text-3xl md:text-4xl font-bold  mb-6">
            Comprehensive Course Structure & Investment
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-700  mb-12  mx-auto">
            Everything you need to know about our <span className=" bg-orange-300">Data Science & AI programme</span>, at <strong>SocialPrachar</strong>  designed to deliver maximum value and career impact.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { title: "7 Months", subtitle: "Complete Duration", description: "4 months intensive training followed by 3 months paid internship with our partner Vajra.ai" },
              { title: "3 Learning Modes", subtitle: "Flexible Options", description: "Choose online live classes, offline campus sessions, or self-paced learning via our mobile app" },
              { title: "5+ Projects", subtitle: "Practical Experience", description: "Build your portfolio with live industry projects plus a comprehensive capstone project" },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl font-extrabold text-red-500 ">{card.title}</p>
                <p className="text-lg font-semibold text-gray-800 ">{card.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={itemVariants} className="text-2xl font-bold text-center mb-8">
            Programme Investment
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-transprent p-8 rounded-lg  border border-gray-100 text-center flex-1"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <p className="text-5xl font-extrabold text-gray-900 mb-2">₹55K</p>
              <p className="text-xl font-semibold mb-4">Standard Fee</p>
              <p className="text-gray-600">Full programme access with all certifications included</p>
            </motion.div>
            <motion.div
              className="bg-transparent p-8 rounded-lg  border border-gray-100 text-center flex-1"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <p className="text-5xl font-extrabold text-red-500 mb-2">₹40K</p>
              <p className="text-xl font-semibold mb-4">Limited Offer Price</p>
              <p className="text-gray-600">Special discount available for October batch enrolments</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-[#FFE5D9] p-6 rounded-lg shadow-sm flex items-start space-x-4 mb-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <File className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-bold text-gray-800">Scholarship Opportunity:</p>
              <p className="text-gray-700">Eligible candidates can receive up to <span className="font-bold text-orange-500">100% scholarship</span> based on merit and background. Apply today to check your eligibility!</p>
            </div>
          </motion.div>

          {/* <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8">
            End-to-End Placement Support
          </motion.h3> */}
          {/* <motion.ul
            className="list-disc pl-8 space-y-3 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.li variants={itemVariants}><span className="font-bold">Professional Resume Building:</span> Craft an ATS-optimised CV that stands out</motion.li>
            <motion.li variants={itemVariants}><span className="font-bold">Mock Interview Sessions:</span> Practice with industry professionals until you&apos;re confident</motion.li>
            <motion.li variants={itemVariants}><span className="font-bold">Direct Job Referrals:</span> Access our network of 200+ hiring partners</motion.li>
            <motion.li variants={itemVariants}><span className="font-bold">LinkedIn Profile Optimisation:</span> Build your professional brand online</motion.li>
            <motion.li variants={itemVariants}><span className="font-bold">Salary Negotiation Guidance:</span> Secure the compensation you deserve</motion.li>
          </motion.ul> */}

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-start" // Use items-start to align content to the top
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Left Column: Steps 01 and 03 */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <p className="text-sm font-semibold text-gray-500">01</p>
                <div className="border-t-4 border-orange-500"></div> {/* Separator */}
                <h4 className="text-xl font-bold mt-1 mb-2">Foundation Phase (Month 1-2)</h4>
                <p className="text-gray-700 leading-relaxed">Master Python, Statistics, and Data Analysis fundamentals with SQL and Excel</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-500">03</p>
                <div className="border-t-4 border-orange-500"></div> {/* Separator */}
                <h4 className="text-xl font-bold mt-1 mb-2">Industry Internship (Month 5-7)</h4>
                <p className="text-gray-700 leading-relaxed">Apply your skills at Vajra.ai on real client projects with mentorship and performance reviews</p>
              </div>
            </motion.div>

            {/* Right Column: Image, then Steps 02 and 04 */}
            <motion.div className="space-y-8" variants={itemVariants}>
              
              <div>
                <p className="text-sm font-semibold text-gray-500">02</p>
                <div className="border-t-4 border-orange-500"></div> {/* Separator */}
                <h4 className="text-xl font-bold mt-1 mb-2">Advanced Skills (Month 3-4)</h4>
                <p className="text-gray-700 leading-relaxed">Deep dive into Machine Learning, AI algorithms, and Cloud platforms like AWS and Azure</p>
              </div>
               
              <div>
                <p className="text-sm font-semibold text-gray-500">04</p>
                <div className="border-t-4 border-orange-500"></div> {/* Separator */}
                <h4 className="text-xl font-bold mt-1 mb-2">Career Launch</h4>
                <p className="text-gray-700 leading-relaxed">Receive placement support, interview opportunities, and job offers from our partner companies</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>


      {/* Section 5: Begin Your Data Science Journey Today */}
       <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-12 p-2 text-gray-900">
          Begin Your Data Science Journey Today
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            {/* Upcoming Batch Card */}
            <div className=" rounded-lg ">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-red-100 rounded-full mr-3 flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-xl font-bold text-gray-900">Upcoming Batch Starting Soon</p>
              </div>
              <p className="text-gray-700 ml-14">
                <span className="font-bold">Next Batch Begins:</span>{' '}
                <span className="  bg-orange-300 px-2 py-0.5 ">27th October</span>
                {' '}— Limited seats remaining! Secure your spot in Hyderabad's most comprehensive{' '}
                <span className="font-bold">Data Science course</span> before enrolment closes.
              </p>
            </div>

            {/* Visit Campus Card */}
            <div className="  rounded-lg">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-red-100 rounded-full mr-3 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-xl font-bold text-gray-900">Visit Our Campus</p>
              </div>
              <div className="text-gray-700 ml-14">
                <p className="font-bold">SocialPrachar Training Centre</p>
                <p>KPHB, Hyderabad</p>
                <p>Modern facility with hands-on labs and collaborative spaces</p>
              </div>
            </div>

            {/* Get in Touch Card */}
            <div className="  rounded-lg ">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-red-100 rounded-full mr-3 flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-xl font-bold text-gray-900">Get in Touch</p>
              </div>
              <div className="text-gray-700 ml-14 space-y-1">
                <p><span className="font-bold">Call us directly:</span> +91 8019479419</p>
                <p><span className="font-bold">WhatsApp:</span> Quick responses to all your queries</p>
                <p><span className="font-bold">Email:</span> Receive detailed programme information</p>
              </div>
            </div>
          </div>




          {/* Right Column - Illustration */}
          <div className="flex items-center justify-center">
            <Image
              src={img3}
              alt="Data Science journey illustration"
              className="rounded-lg shadow-xl object-cover w-full h-auto max-w-sm md:max-w-md"
            />
          </div>
        
        </div>

        {/* Action Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Enrol Now Card */}
          <div className="bg-[#FFF8F5] p-6 rounded-lg shadow-sm border border-gray-100  relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 p-3 bg-red-100 rounded-full border-4 border-white shadow-md">
              <FileText className="h-7 w-7 text-red-500" />
            </div>
            <div className="mt-6">
              <p className="text-xl font-bold mb-2 text-gray-900">Enrol Now</p>
              <p className="text-gray-700">Reserve your seat in the October batch and begin your transformation</p>
            </div>
          </div>

          {/* Download Curriculum Card */}
          <div className="bg-[#FFF8F5] p-6 rounded-lg shadow-sm border border-gray-100  relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 p-3 bg-red-100 rounded-full border-4 border-white shadow-md">
              <Download className="h-7 w-7 text-red-500" />
            </div>
            <div className="mt-6">
              <p className="text-xl font-bold mb-2 text-gray-900">Download Curriculum</p>
              <p className="text-gray-700">Review our complete 7-month course structure and learning outcomes</p>
            </div>
          </div>

          {/* Apply for Scholarship Card */}
          <div className="bg-[#FFF8F5] p-6 rounded-lg shadow-sm border border-red-500  relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 p-3 bg-red-100 rounded-full border-4 border-white shadow-md">
              <BookOpen className="h-7 w-7 text-red-500" />
            </div>
            <div className="mt-6">
              <p className="text-xl font-bold mb-2 text-gray-900">Apply for Scholarship</p>
              <p className="text-gray-700">Check your eligibility for up to 100% fee waiver — scholarships available now</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link href="/data-science">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded shadow-lg transition duration-300 ease-in-out hover:shadow-xl transform hover:scale-105">
            Enrol Now 
          </button>
          </Link>

          <button onClick={togglePopup} className="bg-white border-2 border-red-500 text-red-500 hover:bg-red-50 font-bold p-2 rounded transition duration-300 ease-in-out transform hover:scale-105">
            Download Curriculum
          </button>
        </div>

        <div>
          <hr className="border-t-2 border-gray-400 mb-12" />
        </div>

        {/* Footer Text */}
        <PoweredLearningEcosystem />

        <p className=" text-gray-700  mx-auto leading-relaxed text-base md:text-lg">
          Join <span className="font-bold text-orange-500 bg-orange-50 px-1">SocialPrachar's</span> community of{' '}
          <span className="font-bold text-orange-500">16,000+ successful</span>{' '}
          <span className="font-semibold italic">Data Science</span> and{' '}
          <span className="font-semibold italic">AI course</span> graduates who've transformed their careers. 
          Your journey to becoming a sought-after data professional begins here in Hyderabad.
        </p>
      </div>
    </section>
     {isPopupVisible && (
                        <SignInForm
                          onClose={togglePopup}
                          courseID={1}
                          actionType="Button:Download Curriculum"
                          slug="data-science"
                        />
                      )}
    </div>
  );
}