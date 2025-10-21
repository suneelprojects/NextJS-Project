'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from "lucide-react";

const APPS_SCRIPT_URL = typeof window !== 'undefined'
  ? (process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYED_ID/exec')
  : 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYED_ID/exec';

const APPS_PROXY = '/api/forward-lead';

const DataAnalyticsForm = ({ isPopup = false, onClose, heading = "Apply for Data Analytics Course" }) => {
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
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_submit",
        form: "Articals-Leads",
        year: formData.yearOfGraduation
      });

      if (typeof window.fbq === 'function') {
        window.fbq("trackCustom", "DataAnalyticsLead", {
          year: formData.yearOfGraduation
        });
      }

      window.dispatchEvent(new CustomEvent("data-analytics-lead-submitted", {
        detail: { yearOfGraduation: formData.yearOfGraduation }
      }));

      const [appsResult, localResult] = await Promise.allSettled([
        fetch(APPS_PROXY, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'data_analytics_enrollment',
            ...formData
          })
        }),
        fetch('/api/data-analytics-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
      ]);

      let appsOk = false;
      if (appsResult.status === 'fulfilled') {
        appsOk = appsResult.value.ok;
      } else {
        console.warn('Forward to Apps Script failed:', appsResult.reason);
      }

      let localOk = false;
      if (localResult.status === 'fulfilled') {
        localOk = localResult.value.ok;
      } else {
        console.warn('Local API call failed:', localResult.reason);
      }

      if (appsOk || localOk) {
        alert("Application Submitted! Thanks! Our team will contact you within 24 hours.");
        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          yearOfGraduation: "",
          collegeName: ""
        });
        if (isPopup && onClose) onClose();
      } else {
        throw new Error('Failed to submit to both APIs');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Submission Failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const formContent = (
    <div className="form-card rounded-2xl shadow-xl border max-w-2xl w-full bg-white">
      <div className="p-4 sm:p-8">
        {isPopup && (
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg sm:text-2xl font-bold text-black">
              {heading}
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
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-2xl font-bold mb-2 text-black">Get Started Today</h3>
            <p className="text-gray-600 text-sm sm:text-base">Join our Data Analytics course with guaranteed internship</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-black">Full Name *</label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-black">Mobile Number *</label>
              <input
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
                placeholder="10-digit mobile number"
                className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Email Address *</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="collegeName" className="block text-sm font-medium text-black">College Name *</label>
              <input
                id="collegeName"
                type="text"
                value={formData.collegeName}
                onChange={(e) => handleInputChange('collegeName', e.target.value)}
                className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.collegeName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.collegeName && <p className="text-xs text-red-600 mt-1">{errors.collegeName}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Year of Graduation *</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {['2026', '2027'].map((year) => (
                <label key={year} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={year}
                    value={year}
                    checked={formData.yearOfGraduation === year}
                    onChange={(e) => handleInputChange('yearOfGraduation', e.target.value)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-black">{year}</span>
                </label>
              ))}
            </div>
            {errors.yearOfGraduation && <p className="text-xs text-red-600 mt-1">{errors.yearOfGraduation}</p>}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl text-sm sm:text-lg bg-gray-300 text-gray-700 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl text-sm sm:text-lg disabled:opacity-50 bg-indigo-600 text-white flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </div>
              ) : (
                'Apply Now'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  if (isPopup) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          {formContent}
        </div>
      </div>
    );
  }

  return formContent;
};

export default DataAnalyticsForm;
