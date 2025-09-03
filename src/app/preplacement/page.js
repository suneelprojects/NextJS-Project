'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  GraduationCap,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Star,
  Target,
  Briefcase,
  Code,
  Brain,
  Database,
  Globe,
  MessageSquare,
  Phone,
  Mail,
  ChevronRight,
  X,
  ArrowUpCircleIcon,
  ArrowBigUp,
  ArrowUp
} from "lucide-react";
const Homeimage = '/homeReplaceImage.png';
const homeImage2 = '/Artical1-img-5.jpg';
import OurAchievements from '../success-stories/ourAchievements/OurAchievements';

// Apps Script web app URL - replace with your deployed script URL or set NEXT_PUBLIC_APPS_SCRIPT_URL in env
const APPS_SCRIPT_URL = typeof window !== 'undefined'
  ? (process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYED_ID/exec')
  : 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYED_ID/exec';

// Use a same-origin proxy (Next.js API route) to avoid browser CORS issues
const APPS_PROXY = '/api/forward-lead';

const LeadForm = ({ isPopup = false, onClose, submissionType = 'preplacement' }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    yearOfGraduation: "",
    collegeName: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit Indian mobile number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.yearOfGraduation) newErrors.yearOfGraduation = "Year of graduation is required";
    if (!formData.collegeName.trim()) newErrors.collegeName = "College name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Analytics tracking
      if (typeof window !== 'undefined') {
        // Google Analytics
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "lead_submit",
          form: isPopup ? "orientation_popup" : "preplacement",
          year: formData.yearOfGraduation
        });

        // Facebook Pixel
        if (typeof window.fbq === 'function') {
          window.fbq("trackCustom", isPopup ? "OrientationLead" : "PrePlacementLead", {
            year: formData.yearOfGraduation
          });
        }

        // Custom event
        window.dispatchEvent(new CustomEvent(isPopup ? "orientation-lead-submitted" : "preplacement-lead-submitted", {
          detail: { yearOfGraduation: formData.yearOfGraduation }
        }));
      }

      // First: send to Apps Script (preferred). If that fails, still try local API but do not fail user for local 404.
      let appsOk = false;
      try {
        // call the server-side proxy which will forward to the Apps Script (avoids CORS)
        const appsResp = await fetch(APPS_PROXY, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: submissionType,
            fullName: formData.fullName,
            mobile: formData.mobile,
            email: formData.email,
            yearOfGraduation: formData.yearOfGraduation,
            collegeName: formData.collegeName
          })
        });
        appsOk = appsResp.ok;
        if (!appsOk) {
          console.warn('Forwarder returned non-OK:', appsResp.status, await appsResp.text());
        }
      } catch (appsErr) {
        console.warn('Forward to Apps Script (via proxy) failed:', appsErr);
      }

      // Then: try local API if present, but ignore failures (log them)
      let localOk = false;
      try {
        const localResp = await fetch(isPopup ? '/api/orientation-lead' : '/api/preplacement-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        localOk = localResp.ok;
        if (!localOk) {
          console.warn('Local API returned non-OK:', localResp.status);
        }
      } catch (localErr) {
        console.warn('Local API call failed (non-fatal):', localErr);
      }

      if (appsOk || localOk) {
        alert(isPopup ? "Orientation Booked! We'll send you the meeting link within 24 hours." : "Application Submitted! Thanks! Our team will contact you within 24 hours.");

        // If this was the scholarship form, wait 2s then redirect
        if (submissionType === 'scholarship') {
          // allow UI to settle
          await new Promise((r) => setTimeout(r, 2000));
          router.push('/scholarship-test');
        }

      } else {
        throw new Error('Failed to submit to both Apps Script and local API');
      }

      // Clear form
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        yearOfGraduation: "",
        collegeName: ""
      });

      // Close popup if it's a popup
      if (isPopup && onClose) {
        onClose();
      }
      // end success path

    } catch (error) {
      console.error('Form submission error:', error);
      alert("Submission Failed. Please try again. If the problem persists, contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const formContent = (
    <div className={`form-card rounded-2xl shadow-xl border ${isPopup ? 'max-w-2xl w-full mx-4' : ''}`}>
      <div className="p-6 sm:p-8">
        {isPopup && (
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold brand-text">
              {submissionType === 'scholarship' ? 'Apply for Scholarship' : 'Book Free Orientation'}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        )}

        {!isPopup && (
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 brand-text">Get Started Today</h3>
            <p className="text-gray-600">Join thousands of students who got placed before graduation</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium brand-text">Full Name *</label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base ${errors.fullName ? 'border-red-500' : 'border-gray-800'
                  }`}
              />
              {errors.fullName && (
                <p className="text-xs sm:text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="mobile" className="block text-sm font-medium brand-text">Mobile Number *</label>
              <input
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
                placeholder="10-digit mobile number"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-b-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.mobile && (
                <p className="text-xs sm:text-sm text-red-600">{errors.mobile}</p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium brand-text">Email Address *</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base ${errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.email && (
                <p className="text-xs sm:text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="collegeName" className="block text-sm font-medium brand-text">College Name *</label>
              <input
                id="collegeName"
                type="text"
                value={formData.collegeName}
                onChange={(e) => handleInputChange('collegeName', e.target.value)}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base ${errors.collegeName ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.collegeName && (
                <p className="text-xs sm:text-sm text-red-600">{errors.collegeName}</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium brand-text">Year of Graduation *</label>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {/* Scholarship form only: 2026 & 2027; otherwise show original options */}
              {((submissionType === 'scholarship') ? ['2026', '2027'] : ['2026', '2027']).map((year) => (
                <div key={year} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={year}
                    value={year}
                    checked={formData.yearOfGraduation === year}
                    onChange={(e) => handleInputChange('yearOfGraduation', e.target.value)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor={year} className="text-sm brand-text">{year}</label>
                </div>
              ))}
            </div>
            {errors.yearOfGraduation && (
              <p className="text-xs sm:text-sm text-red-600">{errors.yearOfGraduation}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full brand-btn font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-lg disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </div>
            ) : (
              // show clear button text so user knows this is scholarship vs orientation
              submissionType === 'scholarship' ? (isPopup ? 'Apply for Scholarship' : 'Apply Now')
                : (isPopup ? 'Book Free Orientation' : 'Apply Now')
            )}
          </button>
        </form>
      </div>
    </div>
  );

  if (isPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        {formContent}
      </div>
    );
  }

  return formContent;
};

export default function PrePlacementProgram() {
  const [showPopup, setShowPopup] = useState(false); // orientation popup (existing)
  const [showScholarship, setShowScholarship] = useState(false); // new scholarship popup

  const openScholarshipPopup = () => setShowScholarship(true);
  const closeScholarshipPopup = () => setShowScholarship(false);

  const scrollToForm = () => {
    const form = document.getElementById('preplacement-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openOrientationPopup = () => {
    setShowPopup(true);
  };

  const closeOrientationPopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen brand-root">
      {/* Enhanced Brand Styling */}
      <style jsx global>{`
        .brand-root {
          --primary-bg: #f8fafc;
          --secondary-bg: #f1f5f9;
          --card-bg: #ffffff;
          --muted-card: #f8fafc;
          --accent-1: #475569;
          --accent-2: #6366f1;
          --accent-3: #8b5cf6;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --border-color: #e2e8f0;
          
          background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
          color: var(--text-primary);
          min-height: 100vh;
        }

        /* Enhanced card styling */
        .brand-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }

        .brand-card:hover {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: translateY(-2px);
        }

        /* Form card styling */
        .form-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Text styling */
        .brand-text {
          color: var(--text-primary) !important;
        }

        .brand-text-secondary {
          color: var(--text-secondary) !important;
        }

        /* Button styling */
        .brand-btn {
          background: linear-gradient(135deg, var(--accent-2), var(--accent-3));
          color: white !important;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
          border: none;
          transition: all 0.3s ease;
        }

        .brand-btn:hover {
          background: linear-gradient(135deg, #5856eb, #7c3aed);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
          transform: translateY(-1px);
        }

        /* Section backgrounds */
        .section-primary {
          background: linear-gradient(135deg, var(--primary-bg) 0%, #f0f9ff 50%, #fef3f2 100%);
        }

        .section-secondary {
          background: linear-gradient(135deg, var(--card-bg) 0%, var(--secondary-bg) 100%);
        }

        .section-accent {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
        }

        /* Glass effect for special cards */
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, var(--accent-2), var(--accent-3));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Icon colors */
        .icon-primary { color: var(--accent-2); }
        .icon-secondary { color: var(--accent-3); }
        .icon-success { color: #10b981; }
        .icon-warning { color: #f59e0b; }
      `}</style>

      {/* Popup Form */}
      {showPopup && (
        <LeadForm isPopup={true} onClose={closeOrientationPopup} submissionType="orientation_popup" />
      )}
      {/* Scholarship Popup */}
      {showScholarship && (
        <LeadForm isPopup={true} onClose={closeScholarshipPopup} submissionType="scholarship" />
      )}

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 sm:bottom-6 left-4 sm:left-6 z-40">
        <button
          onClick={openOrientationPopup}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
        >
          Apply Now
        </button>
      </div>

      {/* Hero Section  */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{
          background: 'radial-gradient(circle at 30% 40%, #e0e7ff 0%, #f3f4f6 60%, #c7d2fe 100%)',
          boxShadow: '0 8px 32px rgba(99,102,241,0.08)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                {/* <GraduationCap className="h-6 sm:h-8 w-6 sm:w-8 icon-primary" /> */}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight brand-text">
                <span className="text-2xl sm:text-4xl">🎓</span>
                Get Placed &nbsp;
                <span className="gradient-text">
                  Before Graduation
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl brand-text-secondary mb-6 sm:mb-8 leading-relaxed">
                A <strong>6-Month Job-Ready Placement Program</strong> designed exclusively for <strong>2026 pass-outs</strong> – BTech, MBA, Degree, and MCA Final Year students.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={openScholarshipPopup}
                  className="brand-btn font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base lg:text-lg"
                >
                  Apply for Scholarship
                </button>
                <button
                  onClick={openOrientationPopup}
                  className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base lg:text-lg"
                >
                  Book Free Orientation
                </button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-30 rounded-3xl blur-3xl"></div>
              <Image
                src={Homeimage}
                alt="Students celebrating graduation with job offers"
                width={1170}
                height={780}
                className="relative z-10 rounded-3xl shadow-2xl w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Most Students Struggle With Placements */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 overflow-hidden">
        {/* Enhanced Background Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Why Most Students <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Struggle With Placements</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="backdrop-blur-lg bg-gradient-to-br from-white/60 to-white/30 border border-white/20 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/40 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:scale-105 transition-all duration-300 group">
              <TrendingUp className="h-10 sm:h-12 w-10 sm:w-12 text-indigo-600 mx-auto mb-4 group-hover:text-indigo-500 transition-colors duration-300" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Limited Campus Placements</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                99% of colleges fail to place most students in their final year, with opportunities often limited to top scorers or CSE/IT streams.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-gradient-to-br from-white/60 to-white/30 border border-white/20 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/40 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300 group">
              <Target className="h-10 sm:h-12 w-10 sm:w-12 text-purple-600 mx-auto mb-4 group-hover:text-purple-500 transition-colors duration-300" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Post-Graduation Job Gap</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Students typically waste <strong className="text-purple-600 hover:text-purple-700">6–12 months after graduation</strong> before landing their first job, creating anxiety and financial stress.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-gradient-to-br from-white/60 to-white/30 border border-white/20 rounded-2xl p-6 sm:p-8 text-center sm:col-span-2 lg:col-span-1 hover:bg-white/40 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:scale-105 transition-all duration-300 group">
              <Users className="h-10 sm:h-12 w-10 sm:w-12 text-pink-600 mx-auto mb-4 group-hover:text-pink-500 transition-colors duration-300" />
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Skill-Industry Mismatch</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Traditional education often fails to provide the practical, industry-ready skills employers are actually looking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Program Changes Everything */}
      <section className="section-accent py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 brand-text">How Our Placement Program  <strong className="bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">Changes Everything</strong> </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Students learning programming and career skills"
                width={1000}
                height={500}
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bolder mb-6 sm:mb-8 brand-text">
                Launch Your Career Before Graduation
              </h3>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 brand-text-secondary">
                With  <strong className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">SocialPrachar & aposs Placement Program 2026</strong>, you&aposll:
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 icon-success mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base brand-text">
                    <strong>Learn industry-ready skills</strong> in trending technologies that employers actually want
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 icon-success mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base brand-text">
                    <strong>Complete a real internship</strong> certified by MSME/Startup India that stands out on your resume
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 icon-success mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base brand-text">
                    <strong>Start attending job interviews</strong> while still in your final semester, graduating with offers in hand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="section-primary py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">6-Month Program Structure</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Phase 1 */}
            <div className="brand-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 brand-text">Phase 1: Foundation (3 Months)</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base brand-text-secondary">
                <li className="flex items-center gap-2 sm:gap-3">
                  <Code className="h-4 sm:h-5 w-4 sm:w-5 icon-primary flex-shrink-0" />
                  Python Programming (must-have for tech & analytics roles)
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <Globe className="h-4 sm:h-5 w-4 sm:w-5 icon-primary flex-shrink-0" />
                  Git & Version Control (collaborating like real developers)
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <Database className="h-4 sm:h-5 w-4 sm:w-5 icon-primary flex-shrink-0" />
                  Cloud Fundamentals (AWS basics for deployment & DevOps)
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5 icon-primary flex-shrink-0" />
                  Soft Skills (interview communication, presentation, teamwork)
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="brand-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 brand-text">Phase 2: Career Track (3 Months)</h3>
              <p className="mb-4 text-sm sm:text-base brand-text-secondary">Choose one specialized track to master:</p>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-4 sm:h-5 w-4 sm:w-5 icon-primary" />
                    <strong className="text-sm sm:text-base brand-text">Data Science & AI Track</strong>
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-4 sm:h-5 w-4 sm:w-5 icon-primary" />
                    <strong className="text-sm sm:text-base brand-text">Full-Stack Web Development Track</strong>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm brand-text-secondary">Each track includes a capstone project to demonstrate your skills.</p>
            </div>

            {/* Phase 3 */}
            <div className="brand-card rounded-2xl p-6 sm:p-8 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 brand-text">Phase 3: Internship & Placement</h3>
              <p className="text-sm sm:text-base brand-text-secondary">
                Begin in-office internship from Jan 2026, with job interviews starting Feb-Mar 2026, ensuring you graduate with offers in hand.
              </p>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm sm:text-base">
                  <Briefcase className="h-4 sm:h-5 w-4 sm:w-5" />
                  Graduate with job offers!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNjM2MzYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Career Track</span>
            </h2>
            <p className="text-gray-600 text-lg">Master the skills that align with your career goals</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Data Science Track */}
            <div className="group">
              <div className="h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-violet-100 hover:border-violet-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Data Science & AI
                  </h3>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Database, title: "SQL & Data Analysis", desc: "Master database querying and extract meaningful insights from complex datasets." },
                    { icon: TrendingUp, title: "Exploratory Data Analysis", desc: "Learn to clean, visualize and interpret data patterns using industry-standard tools." },
                    { icon: Brain, title: "Machine Learning Algorithms", desc: "Build predictive models using supervised and unsupervised learning techniques." },
                    { icon: Star, title: "AI & MLOps Fundamentals", desc: "Understand AI applications and the basics of deploying machine learning models." }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-violet-50 hover:from-blue-100 hover:to-violet-100 transition-colors duration-300">
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-800">
                        <item.icon className="h-5 w-5 text-blue-600" />
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Stack Track */}
            <div className="group">
              <div className="h-full bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100 hover:border-emerald-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Full-Stack Development
                  </h3>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Code, title: "Frontend Development", desc: "Master HTML, CSS, JavaScript and ReactJS to build dynamic, responsive web applications." },
                    { icon: Database, title: "Backend Development", desc: "Learn Node.js/Express to create robust APIs and server-side applications." },
                    { icon: Globe, title: "Database Management", desc: "Work with both SQL and NoSQL databases to store and retrieve application data efficiently." },
                    { icon: CheckCircle, title: "Full-Stack Integration", desc: "Connect all components into complete, production-ready web applications." }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-colors duration-300">
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-800">
                        <item.icon className="h-5 w-5 text-emerald-600" />
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Biggest Differentiator */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNjM2MzYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Biggest Differentiator: Real Internship & Placement
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1284&q=80"
                alt="Professional office internship environment"
                width={1284}
                height={856}
                className="rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                What Sets Us Apart:
              </h3>

              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-indigo-100">
                  <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-indigo-600" />
                    <p className="text-base sm:text-lg text-gray-800">
                      <strong className="text-indigo-700">6-Month Internship Certificate</strong> from MSME/Startup India registered companies that adds real credibility to your resume
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-indigo-100">
                  <div className="flex items-start gap-4">
                    <Briefcase className="h-8 w-8 text-purple-600" />
                    <p className="text-base sm:text-lg text-gray-800">
                      <strong className="text-purple-700">In-office internship support</strong> from Jan 2026 until you get placed (with flexibility for final exams)
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-indigo-100">
                  <div className="flex items-start gap-4">
                    <Target className="h-8 w-8 text-pink-600" />
                    <p className="text-base sm:text-lg text-gray-800">
                      <strong className="text-pink-700">Job interviews beginning Feb–Mar 2026</strong>, ensuring you graduate with offers in hand
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Benefits That Transform Your Career Journey
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Code,
                title: "Job-Ready Skills",
                description: "Master Python, Git, Cloud fundamentals plus your chosen specialization in Data Science/AI or Full Stack Development.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Award,
                title: "Verified Credentials",
                description: "Receive a real internship certificate recognized by industry and government that significantly boosts your resume.",
                color: "from-indigo-500 to-violet-500"
              },
              {
                icon: GraduationCap,
                title: "Academic Flexibility",
                description: "Program designed to accommodate your final semester exams with no clash with academics.",
                color: "from-violet-500 to-purple-500"
              },
              {
                icon: Users,
                title: "1:1 Mentorship",
                description: "Get personalized guidance, ATS-friendly resume preparation, GitHub portfolio development, and LinkedIn branding.",
                color: "from-purple-500 to-pink-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${benefit.color} p-3 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <benefit.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 ">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-orange-600 bg-clip-text text-transparent">
              Why Choose SocialPrachar?
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto text-center mb-12">
            {[
              { number: "10+", label: "Years in EdTech", description: "Decade of experience in transforming education to employment journeys" },
              { number: "16,000+", label: "Students Trained", description: "Thousands of success stories across various educational backgrounds" },
              { number: "95%", label: "Placement Success", description: "Outstanding placement ratio with packages ranging from 3-12 LPA" },
              { number: "9", label: "National Awards", description: "Recognized excellence in educational technology and career outcomes" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg font-bold mb-2 text-gray-800">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-800 font-medium">
              With SocialPrachar, students <strong className="text-orange-500">don&apost just study, they launch their careers.</strong> We&aposre recognized as a trusted <strong className="text-orange-500">Campus-to-Career Partner</strong> for both students and colleges nationwide.
            </p>
          </div>
        </div>
      </section>
      
      <div className="container-fluid mx-auto section-accent">
        <OurAchievements />
      </div>

      {/* FAQ Section */}
      <section className="section-accent py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNjM2MzYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 brand-text">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Everything you need to know about our program
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                icon: GraduationCap,
                question: "Can I attend my final semester exams?",
                answer:
                  "Yes. The internship is flexible. Students can take leave during exams without any issues. We understand that academics are important and work with you to ensure there are no conflicts.",
              },
              {
                icon: Briefcase,
                question: "Is placement guaranteed?",
                answer:
                  "We don't give fake guarantees. We provide verified internships, interview pipelines, and ongoing placement support until you are hired. Our 95% placement success rate speaks for our commitment to your career.",
              },
              {
                icon: Award,
                question: "What certificates will I receive?",
                answer:
                  "You'll receive two important credentials: 1) A 6-Month Internship Certificate from an MSME/Startup India registered company 2) A SocialPrachar program completion certificate. Both add significant value to your resume.",
              },
              {
                icon: Code,
                question: "I'm from a non-CS background. Can I join?",
                answer:
                  "Yes, absolutely! We have specially designed bridge modules and dedicated mentorship specifically for non-IT students. Many of our successful alumni come from non-CS backgrounds.",
              },
              {
                icon: Target,
                question: "What are the payment options available?",
                answer:
                  "We offer flexible payment plans including EMI options. Merit-based scholarships are also available for deserving candidates. Book a free counseling session to discuss the options.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="brand-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 "
              >
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none hover:bg-gray-200">
                    <div className="flex items-center justify-between gap-3 ">
                      <span className="text-lg font-semibold  hover:text-indigo-600 transition-colors duration-300">
                        {faq.question}
                      </span>
                      <span className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" >▼</span>
                    </div>
                  </summary>
                  <div className="px-6 pb-4">
                    <div className="w-full h-px bg-gray-200 my-3"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              🎓 2026 Final-Year Student? Don&apost wait till after graduation to find a job.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90">
              Join thousands of students who are getting placed before graduation with our proven 6-month program.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button
                onClick={openScholarshipPopup}
                className="bg-white text-indigo-600 hover:bg-gray-50 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl"
              >
                Apply for Scholarship Now
              </button>
              <button
                onClick={openOrientationPopup}
                className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base lg:text-lg"
              >
                Join Our Free Orientation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}