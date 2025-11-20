"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import StipendCalculator from "@/components/StipendCalculator";
import styles from "@/app/scholarship-test/PopUpForm.module.css";

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.formContainer}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close Form"
        >
          &times;
        </button>

        {/* Conditional Rendering */}
        {showCalculator ? (
          <div className="flex flex-col h-full overflow-hidden">
            {/* <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Stipend Calculator
              </h2>
              <p className="text-gray-600">
                Estimate your potential earnings during the internship.
              </p>
            </div> */}
            <div className="flex-1 overflow-y-auto p-6">
              <StipendCalculator />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Enroll For Stipend</h2>

            <div className={styles.formGroup}>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <select
                className={styles.select}
                name="graduation"
                value={formData.graduation}
                onChange={handleChange}
                required
              >
                <option value="">Select Graduation Year</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <select
                className={styles.select}
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                required
              >
                <option value="">Select Training Mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
            >
              Submit Details
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
