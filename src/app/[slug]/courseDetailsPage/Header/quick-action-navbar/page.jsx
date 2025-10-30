"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faBook,
  faNetworkWired,
  faAward,
  faHandshake,
  faPercent,
  faCertificate,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const QuickActionNavbar = () => {
  const btnBase =
    "flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-md text-white text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg";

  return (
    <div className="sticky top-0  my-4 bg-gradient-to-r from-blue-50 to-green-50 shadow-md">
      {/* Horizontal scroll container for mobile */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="inline-flex gap-2 py-2 px-3 md:gap-3 lg:gap-4">
          {/* ==== Button 1 ==== */}
          <button
            className={`${btnBase} bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700`}
          >
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-lg" />
            Stipend
          </button>

          {/* ==== Button 2 ==== */}
          <button
            className={`${btnBase} bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700`}
          >
            <FontAwesomeIcon icon={faBook} className="text-lg" />
            Overview
          </button>

          {/* ==== Button 3 ==== */}
          <button
            className={`${btnBase} bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700`}
          >
            <FontAwesomeIcon icon={faNetworkWired} className="text-lg" />
            Roadmap
          </button>

          {/* ==== Button 4 ==== */}
          <button
            className={`${btnBase} bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700`}
          >
            <FontAwesomeIcon icon={faAward} className="text-lg" />
            Success
          </button>

          {/* ==== Button 5 ==== */}
          <button
            className={`${btnBase} bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700`}
          >
            <FontAwesomeIcon icon={faHandshake} className="text-lg" />
            Why Us
          </button>

          {/* ==== Button 6 ==== */}
          <button
            className={`${btnBase} bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700`}
          >
            <FontAwesomeIcon icon={faPercent} className="text-lg" />
            Pricing
          </button>

          {/* ==== Button 7 ==== */}
          <button
            className={`${btnBase} bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700`}
          >
            <FontAwesomeIcon icon={faCertificate} className="text-lg" />
            Certs
          </button>

          {/* ==== Button 8 ==== */}
          <button
            className={`${btnBase} bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700`}
          >
            <FontAwesomeIcon icon={faProjectDiagram} className="text-lg" />
            Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActionNavbar;