'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Award,
  Calendar,
  Brain,
  Monitor,
  Briefcase,
  Building,
  NotebookText,
  Phone,
  MapPin,
  MessageSquareText,
  CalendarCheck,
  File,
} from 'lucide-react';
import Image from "next/image";
import img1 from "@/assets/articleAssets/artical-img-6.png";
import img2 from "@/assets/articleAssets/artical-img-7.png";
import img3 from "@/assets/articleAssets/artical-img-8.png";
import img4 from "@/assets/articleAssets/artical-img-9.png";
import img5 from "@/assets/articleAssets/artical-img-10.png";
import img6 from "@/assets/articleAssets/artical-img-11.png";
import img7 from "@/assets/articleAssets/artical-img-12.png";
import img8 from "@/assets/articleAssets/artical-img-13.png";
import img9 from "@/assets/articleAssets/artical-img-14.png";
import SignInForm from '@/components/Forms/coursesForm';
import PoweredLearningEcosystem from '@/components/reusedComponents/PoweredLearningEcosystem';

export default function Page() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="font-serif antialiased text-gray-900 bg-white min-h-screen">
      {/* Hero Section - Light mint green background */}
      <section className="relative bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] py-16 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#a5d6a7" fillOpacity="0.3" d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,90.7C672,75,768,85,864,106.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
            <span className="font-bold"> Best Artificial Intelligence Course in Hyderabad with 100% Placement Support</span>
          </h1>
          <p className="text-base text-gray-700 mb-6  leading-relaxed">
            Transform your career with industry-leading AI training and guaranteed placement support in Hyderabad's premier tech hub.
          </p>
          <div className="flex space-x-3 flex-wrap gap-3">
            <Link href="/artificial-intelligence-course-training-institute-in-hyderabad">
              <button className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold py-2.5 px-6 rounded shadow transition-all duration-300 text-sm">

                Enrol Now
              </button>
            </Link>
            <button onClick={togglePopup} className="bg-white hover:bg-gray-50 text-[#2e7d32] font-bold py-2.5 px-6 rounded shadow border-2 border-[#2e7d32] transition-all duration-300 text-sm">
              Download Curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Launch Your AI Career Section - White background */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-5xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">Launch Your AI Career in 2025</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              Looking for the <strong>best Artificial Intelligence course in Hyderabad</strong> to start your AI career? At <strong>SocialPrachar</strong>, we offer a <strong>7-Month AI & Machine Learning Master Programme</strong> that covers everything from <strong>Python, Machine Learning, Deep Learning, and Generative AI</strong> to <strong>Agentic AI applications</strong>.
            </p>
            <p className="text-md text-gray-700 leading-relaxed">
              You'll learn from <strong>top industry experts</strong>, work on <strong>real-world AI projects</strong>, and complete a <strong>3-month internship</strong> with our tech partner <strong>Vajra.ai</strong> – all designed to help you become a job-ready <strong>AI Engineer or ML Developer</strong> in 2025.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={img1}
              alt="AI Classroom"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section - Very light mint background */}
      <section className="py-12 md:py-16 px-6 bg-[#f1f8f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
            Why Choose Our Artificial Intelligence Course in Hyderabad
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { icon: Award, title: 'Industry Certifications', desc: 'IBM, NVIDIA, Microsoft recognised credentials' },
              { icon: Calendar, title: '7-Month Programme', desc: 'Job-ready curriculum plus 3-month internship' },
              { icon: Brain, title: 'Complete AI Stack', desc: 'Machine Learning, Deep Learning & Generative AI' },
              { icon: Monitor, title: 'Real-Time Projects', desc: 'Python, TensorFlow, and OpenAI APIs' },
              { icon: Briefcase, title: 'Placement Support', desc: 'Dedicated assistance till you\'re hired' },
              { icon: Building, title: 'Hybrid Learning', desc: 'Classroom (KPHB) plus online access' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col space-y-2">
                <div className="w-12 h-12 bg-[#2e7d32] rounded-full flex items-center justify-center text-white mb-1">
                  <item.icon size={20} />
                </div>
                <p className="text-lg font-bold text-gray-800">{item.title}</p>
                <p className="text-md text-gray-600 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Institute Section - White background with green modern building image */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div>
              <h2 className="text-7xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                Hyderabad's Most Trusted AI Training Institute
              </h2>
              <p className="text-md text-gray-700 leading-relaxed mb-3">
                If you're searching for the <strong>best Artificial Intelligence institute</strong> near me, <strong>AI and Machine Learning training in Hyderabad</strong>, or an affordable <strong>AI course with internship in Kukatpally or Madhapur</strong>, then you've landed at the right place.
              </p>
              <p className="text-md text-gray-700 leading-relaxed">
                <strong>SocialPrachar</strong> has been Hyderabad's trusted AI & Data Science training brand for over 10 years, producing <strong>16,000+ successful graduates</strong> across top MNCs. Our campus at <strong>KPHB, Hyderabad</strong> offers both weekday and weekend batches – ideal for students and working professionals.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={img2}
                alt="Modern building"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-[#2e7d32] mb-3">16K+</p>
              <p className="text-base font-bold text-gray-800">Successful Graduates</p>
              <p className="text-sm text-gray-600">Placed across top MNCs</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-[#2e7d32] mb-3">10+</p>
              <p className="text-base font-bold text-gray-800">Years Experience</p>
              <p className="text-sm text-gray-600">Trusted training brand</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-[#2e7d32] mb-3 ">95%</p>
              <p className="text-base font-bold text-gray-800">Placement Success</p>
              <p className="text-sm text-gray-600">Industry-leading rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Course Highlights - Light mint background */}
      <section className="py-12 md:py-16 px-6 bg-[#f1f8f4]">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
            Comprehensive Course Highlights
          </p>

          <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-400">
              {[
                { label: 'Duration', value: '7 Months (4 Months Training + 3 Months Internship)' },
                { label: 'Learning Mode', value: 'Classroom / Online / Self-Paced (App Access)' },
                { label: 'Tools Covered', value: 'Python, TensorFlow, OpenCV, PyTorch, OpenAI APIs' },
                { label: 'Internship Partner', value: 'Vajra.ai' },
                { label: 'Certifications', value: 'IBM, Microsoft, NVIDIA, Google' },
                { label: 'Job Roles', value: 'AI Engineer, ML Engineer, GenAI Developer' },
                { label: 'Placement', value: '95% Success' },
                { label: 'Fees', value: '₹55,000 ₹40,000 Offer or Scholarship up to 100%' },
              ].map((row, index) => (
                <div key={index} className="flex flex-col sm:flex-row py-3.5 px-5 gap-2">
                  <p className="font-bold text-gray-800 text-sm w-full sm:w-1/3 flex-shrink-0">{row.label}</p>
                  <p className="text-gray-700 text-sm w-full sm:w-2/3">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="p-5 bg-[#e8f5e9] border-t border-[#a5d6a7] flex items-start space-x-3">
              <File className="text-[#2e7d32] flex-shrink-0 mt-0.5" size={22} />
              <p className="text-[#1b5e20] text-sm leading-relaxed">
                <strong className="font-bolder text-md">Special Offer:</strong> Apply now to secure your scholarship and save ₹15,000 on course fees. Limited seats available for the October batch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Future Career Awaits - White background  */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-4xl font-bold text-black mb-12  leading-tight">
            Your Future Career Awaits
          </h2>
          <p className="text-base md:text-lg  text-gray-700 mb-12  mx-auto  leading-relaxed">
            Upon completing our Artificial Intelligence course, you'll be qualified for high-demand roles across the tech industry. Our comprehensive training prepares you for diverse career paths in AI and machine learning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { img: img3, title: 'Artificial Intelligence Engineer', desc: 'Design and implement AI systems' },
              { img: img4, title: 'Machine Learning Engineer', desc: 'Build predictive models and algorithms' },
              { img: img5, title: 'Deep Learning Specialist', desc: 'Develop advanced neural networks' },
              { img: img6, title: 'Generative AI Developer', desc: 'Create innovative AI applications' },
              { img: img7, title: 'Data Scientist', desc: 'Extract insights from data' },
              { img: img8, title: 'AI Research Assistant', desc: 'Contribute to AI innovation' },
            ].map((career, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center bg-[#e8f5e9] shadow-sm border border-gray-200">
                  <Image
                    src={career.img}
                    alt={career.title}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base md:text-lg font-extrabold text-gray-800 leading-tight">{career.title}</p>
                <p className="text-sm md:text-base  text-gray-600 leading-relaxed">{career.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your AI Journey Today - Dark green background with white card */}
      <section className="bg-[#2e7d32] py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto relative rounded-xl bg-white shadow-xl p-8 md:p-10">
          <p className="text-4xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
            Start Your AI Journey Today
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col">
              <Image
                src={img9}
                alt="Celebrating graduates"
                className="rounded-lg shadow-md mb-6 w-full"
              />
              <div className="flex flex-wrap gap-3 mb-4">
                <Link href="/artificial-intelligence-course-training-institute-in-hyderabad">
                  <button className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold py-2.5 px-6 rounded shadow transition-all duration-300 text-sm">

                    Enrol Now
                  </button>
                </Link>
                <button onClick={togglePopup} className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-2.5 px-5 rounded shadow border-3 border-[#2e7d32] transition-all duration-300 text-sm">
                  Download Curriculum
                </button>
                <Link href="/scholarship-test">
                <button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-2.5 px-5 rounded shadow border-3 border-[#2e7d32] transition-all duration-300 text-sm">
                  Apply for Scholarship
                </button>
                </Link>
              </div>
              <p className="text-md text-gray-700 leading-relaxed">
                Don't miss this opportunity to transform your career with India's leading AI training programme. Join <strong>16,000+ successful graduates</strong> who have launched their careers with SocialPrachar.
              </p>
            </div>

            <div className="space-y-4">
              <div className="py-3 px-4 bg-white border-s-6 border-[#2e7d32] rounded-lg shadow-sm">
                <p className="font-bold text-gray-800 flex items-center mb-1.5 text-sm">
                  <CalendarCheck className="mr-2 text-[#2e7d32]" size={18} />
                  Upcoming Batch
                </p>
                <p className="text-sm text-gray-700">October 27 - Limited Seats Available</p>
              </div>
              <div className="py-3 px-4 bg-white border-s-6 border-[#2e7d32] rounded-lg shadow-sm">
                <p className="font-bold text-gray-800 flex items-center mb-1.5 text-sm">
                  <Phone className="mr-2 text-[#2e7d32]" size={18} />
                  Contact Us
                </p>
                <p className="text-sm text-gray-700">Call +91 8019479419</p>
              </div>
              <div className="py-3 px-4 bg-white border-s-6 border-[#2e7d32] rounded-lg shadow-sm">
                <p className="font-bold text-gray-800 flex items-center mb-1.5 text-sm">
                  <MapPin className="mr-2 text-[#2e7d32]" size={18} />
                  Visit Our Campus
                </p>
                <p className="text-sm text-gray-700">KPHB Campus, Hyderabad</p>
              </div>
              <div className="py-3 px-4 bg-white border-s-6 border-[#2e7d32] rounded-lg shadow-sm">
                <p className="font-bold text-gray-800 flex items-center mb-1.5 text-sm">
                  <MessageSquareText className="mr-2 text-[#2e7d32]" size={18} />
                  Quick Connect
                </p>
                <p className="text-sm text-gray-700">WhatsApp us for instant response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered Learning Ecosystem Block */}
      <PoweredLearningEcosystem />

      {isPopupVisible && (
        <SignInForm
          onClose={togglePopup}
          courseID={6}
          actionType="Button:Download Curriculum"
          slug="artificial-intelligence-course-training-institute-in-hyderabad"
        />
      )}
    </div>
  );
}
