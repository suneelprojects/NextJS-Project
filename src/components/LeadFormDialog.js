"use client";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import StipendCalculator from "@/components/StipendCalculator";

export default function LeadFormDialog({ isOpen, onClose, dialogType }) {
  const [showCalculator, setShowCalculator] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    graduation: "",
    mode: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://integration.pqa.salesmax.ai/salesmax/leads?token=gNAmGSQc15N9Nn4yZwiE4A",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, pageUrl: window.location.href }),
        }
      );

      if (response.ok) {
        if (dialogType === "calculator") setShowCalculator(true);
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[300] p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white border-2 border-purple-500 shadow-2xl rounded-lg max-w-none max-h-[85vh] overflow-y-auto w-full md:w-[90%]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black bg-white rounded-full p-1 shadow-md z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Conditional Rendering */}
        {showCalculator ? (
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Stipend Calculator
              </h2>
              <p className="text-gray-600">
                Estimate your potential earnings during the internship.
              </p>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <StipendCalculator />
            </div>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="border-b border-gray-200 p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-100 rounded-full">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {dialogType === "calculator"
                      ? "Access Stipend Calculator"
                      : "Lead Registration"}
                  </h2>
                  <p className="text-purple-600 text-sm">
                    Fill in your details to continue
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information Section */}
              <div className=" border-blue-20 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                  {/* <span className="p-1  rounded-full text-sm">👥</span> */}
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border-2 border-gray-800 rounded-md p-3 text-sm focus:border-purple-500 outline-none"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border-2 border-gray-800 rounded-md p-3 text-sm focus:border-purple-500 outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border-2 border-gray-800 rounded-md p-3 text-sm focus:border-purple-500 outline-none"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Academic Details Section */}
              <div className=" border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
                  {/* <span className="p-1  rounded-full text-sm">🏅</span> */}
                  Academic Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Graduation Year *
                    </label>
                    <select
                      value={formData.graduation}
                      onChange={(e) =>
                        setFormData({ ...formData, graduation: e.target.value })
                      }
                      className="w-full border-2 border-gray-800 rounded-md p-3 text-sm focus:border-purple-500 outline-none"
                      required
                    >
                      <option value="">Select year</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Mode *
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) =>
                        setFormData({ ...formData, mode: e.target.value })
                      }
                      className="w-full border-2 border-gray-800 rounded-md p-3 text-sm focus:border-purple-500 outline-none"
                      required
                    >
                      <option value="">Select mode</option>
                      <option value="online">Online</option>
                      <option value="offline">Offline (Hyderabad)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center  ">
                <motion.button
                  type="submit"
                  className=" mb-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>✅</span>
                  Submit Details
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
