"use client";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
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
        "https://integration.pqa.salesmax.ai/salesmax/leads?token=93DiKt_pTPctKviD0-K8lg",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[300] p-3 sm:p-6">
      <div
        className="
          bg-white rounded-xl shadow-lg relative 
          w-full max-w-[95vw] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px] xl:max-w-[900px]
          h-auto max-h-[90vh] overflow-hidden flex flex-col
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-black z-10"
        >
          <X className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>

        {/* Conditional Rendering */}
        {showCalculator ? (
          <div className="flex flex-col h-full">
            <div className="p-4 sm:p-6 border-b">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                Stipend Calculator
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Estimate your potential earnings during the internship.
              </p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <StipendCalculator />
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="p-4 sm:p-6 border-b">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                {dialogType === "calculator"
                  ? "Access Stipend Calculator"
                  : "Submit Your Details"}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Fill the form below to continue.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4"
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border rounded-md p-2.5 text-sm sm:text-base focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border rounded-md p-2.5 text-sm sm:text-base focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border rounded-md p-2.5 text-sm sm:text-base focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Graduation Year */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Graduation Year *
                </label>
                <select
                  value={formData.graduation}
                  onChange={(e) =>
                    setFormData({ ...formData, graduation: e.target.value })
                  }
                  className="w-full border rounded-md p-2.5 text-sm sm:text-base focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select year</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>

              {/* Preferred Mode */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Preferred Mode *
                </label>
                <select
                  value={formData.mode}
                  onChange={(e) =>
                    setFormData({ ...formData, mode: e.target.value })
                  }
                  className="w-full border rounded-md p-2.5 text-sm sm:text-base focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select mode</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline (Hyderabad)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 sm:py-2.5 rounded-md font-medium hover:bg-orange-600 transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Submit <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
