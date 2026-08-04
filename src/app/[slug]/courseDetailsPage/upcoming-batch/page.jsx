"use client";
import { useState } from "react";
import { Calendar, IndianRupee, X } from "lucide-react";

export default function Page() {
  const [priceUnlocked, setPriceUnlocked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    graduation: "",
    mode: "",
  });

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

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
        setIsDialogOpen(false);
        setPriceUnlocked(true);
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Batch & Pricing Section */}
      <section id="pricing" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-4xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Upcoming Batch
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Next Batch Card */}
              <div className="border-2 border-blue-300 rounded-2xl bg-white shadow-sm p-6">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-xl font-bold mb-4">Next Batch Starts</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">

                      20th August 2026



                    </div>
                    <p className="text-gray-600">
                      Online & Classroom (KPHB, Hyderabad)
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="font-semibold mb-2 text-gray-800">
                      Limited Seats
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      20 Students per Batch
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Investment Card */}
              <div className="border-2 border-pink-300 rounded-2xl bg-gradient-to-br from-pink-50 to-blue-50 shadow-sm p-6 relative">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                    <IndianRupee className="w-6 h-6 text-pink-500" />
                  </div>
                  <p className="text-xl font-bold mb-4">Program Fees</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 line-through mb-1">
                      Regular Price: ₹XX,X99
                    </div>

                    {priceUnlocked ? (
                      <div className="text-3xl font-bold text-pink-600 mb-2">
                        ₹44,999
                      </div>
                    ) : (
                      <>
                        <div className="text-3xl font-bold text-pink-600 mb-2 blur-sm select-none">
                          ₹XX,XXX
                        </div>
                        <button
                          onClick={handleOpenDialog}
                          className="mt-2 px-4 py-2 text-sm border-3 font-bold border-orange-500 rounded hover:bg-orange-500 hover:text-white transition"
                        >
                          Click to Unlock Price
                        </button>
                      </>
                    )}
                  </div>

                  <div
                    className={`space-y-2 pt-4 border-t border-gray-200 ${priceUnlocked ? "" : "blur-sm"
                      }`}
                  >
                    <div className="text-sm text-gray-600">
                      Special Scholarship Test Available
                    </div>
                    <div className="text-sm text-gray-600">
                      100% Scholarship - FREE Program
                    </div>
                    <div className="text-sm text-gray-600">
                      EMI Options Available
                    </div>
                  </div>

                  <div className="flex  gap-2  ">

                    <a
                      href="/scholarship-test"
                      className={`text-blue-600 text-sm hover:underline ${priceUnlocked ? "" : "blur-sm"
                        }`}
                    >
                      View More details
                    </a>

                    <a
                      href="https://labs.socialhire.in/contest/scholarshiptest-livenow"
                      target="_blank"
                      className={`text-blue-600 text-sm hover:underline ${priceUnlocked ? "" : "blur-sm"
                        }`}
                    >
                      Take Scholarship Test for Discount  →
                    </a>

                  </div>

                  <div
                    className={`pt-4 border-t border-gray-200 ${priceUnlocked ? "" : "blur-sm"
                      }`}
                  >
                    <p className="text-xs text-gray-500">
                      * Internship includes performance-based stipend up to ₹45,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dialog Overlay */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div
            className="
              bg-white rounded-xl shadow-xl relative overflow-hidden 
              w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
              max-h-[90vh] 
              flex flex-col
            "
          >
            {/* Close Button */}
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Dialog Content */}
            <div className="h-full flex flex-col p-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  Unlock Program Pricing
                </h3>
                <p className="text-gray-500 text-sm md:text-base mb-6">
                  Fill in your details and we'll send you the information.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 overflow-y-auto pr-1 flex-1"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 1234567890"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Graduation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year of Passed Out *
                  </label>
                  <select
                    required
                    value={formData.graduation}
                    onChange={(e) =>
                      setFormData({ ...formData, graduation: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select year</option>
                    {[2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Class Mode *
                  </label>
                  <select
                    required
                    value={formData.mode}
                    onChange={(e) =>
                      setFormData({ ...formData, mode: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select mode</option>
                    <option value="online">Online</option>
                    <option value="classroom">Classroom</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 mb-5 rounded-md transition"
                >
                  Submit →
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
