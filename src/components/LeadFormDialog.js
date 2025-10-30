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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dialogType === "calculator") setShowCalculator(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-200 p-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-4 sm:p-6 relative max-h-[90vh] h-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-black z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {showCalculator ? (
          <div className="h-full max-h-[calc(90vh-2rem)] sm:max-h-[calc(90vh-3rem)] grid grid-rows-[auto,1fr]">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Stipend Calculator</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Estimate your potential earnings during the internship.
              </p>
            </div>
            <div className="overflow-y-auto">
              <StipendCalculator />
            </div>
          </div>
        ) : (
          <div className="h-full max-h-[calc(90vh-2rem)] sm:max-h-[calc(90vh-3rem)] grid grid-rows-[auto,1fr]">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                {dialogType === "calculator"
                  ? "Access Stipend Calculator"
                  : "Submit Your Details"}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Fill the form below to continue.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 overflow-y-auto pr-2">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Graduation Year *</label>
                <select
                  value={formData.graduation}
                  onChange={(e) => setFormData({ ...formData, graduation: e.target.value })}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select year</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Preferred Mode *</label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select mode</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline (Hyderabad)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition flex items-center justify-center gap-2"
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