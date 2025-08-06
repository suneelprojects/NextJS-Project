/** @format */
"use client"
import React, { useState, useEffect } from "react";
import { Gift, Search, X, Award, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const PopupOfferCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const router=useRouter();
  const handleEnrolNowClick = () => {
     setIsOpen(false);
    router.push("/scholarship-test");
  };

  const closePopup = () => setIsOpen(false);
  const currentYear = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
  }).format(new Date());

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000] backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fadeIn border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center">
          <div className="flex items-center text-white">
            <Search className="mr-2" size={28} />
            <h5 className="text-lg font-semibold">Looking for Discounts?</h5>
          </div>
          <button
            onClick={closePopup}
            className="text-white hover:text-indigo-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* First Offer */}
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full mr-4 shadow">
              <Gift className="text-yellow-500" size={28} />
            </div>
            <div>
              <h5 className="text-md font-semibold text-indigo-700">
                Social Prachar Talent Test {currentYear}
              </h5>
              <p className="text-xl font-extrabold text-indigo-900">
                Get up to ₹15,000 OFF!
              </p>
            </div>
          </div>

          {/* Second Offer */}
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4 shadow">
              <Award className="text-green-500" size={28} />
            </div>
            <div>
              <h5 className="text-md font-semibold text-indigo-700">
                Topper Wins
              </h5>
              <p className="text-xl font-extrabold text-green-600">
                100% FREE Course + Job!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleEnrolNowClick}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-[1.02] active:scale-95"
          >
            <span className="mr-2">Enrol Now</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 text-center">
          <p className="text-gray-500 text-sm">
            🎁 Limited time offer. Terms and conditions apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupOfferCard;
