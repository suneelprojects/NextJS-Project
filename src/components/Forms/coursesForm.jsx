/** @format */

"use client";
import React, { useState, useEffect, Suspense } from "react";
import styles from "@/app/scholarship-test/PopUpForm.module.css";
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData";
import { useParams, useRouter } from "next/navigation";
import Loading from "../reusedComponents/Loading";

const CoursesForm = ({ onClose, courseID, actionType }) => {
  const router = useRouter();
  const { slug } = useParams();

  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    mode: "",
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
    slug: slug || "",
    actionType: actionType || "",
  });

  useEffect(() => {
    const cardDetails = data.find((card) => card.slug === slug);
    setCard(cardDetails);
  }, [slug]);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyiFH6YnpFoN2CeaCSOIB5Uv0667e_H3u183xrWTeK95GHV7iUBO1TPn40C6ydXYME2/exec";

  const crmTokenURL =
    "https://integration.pqa.salesmax.ai/salesmax/leads?token=ZFLXQw9q0qT-FJn11iRc2w";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, course, mode } = formData;

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!fullName || !email || !phone || !course || !mode) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsLoading(true);

    try {
      // Prepare form data for Google Sheets
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      // Submit to Google Sheet
      await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      // Submit to SalesMax CRM
      await fetch(crmTokenURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          mode: formData.mode,
          pageUrl: formData.pageUrl,
          slug: formData.slug,
          actionType: formData.actionType,
          formType: "Courses_Form",
          timestamp: new Date().toISOString(),
        }),
      });

      alert("✅ Form submitted successfully!");
      onClose();

      if (card?.careerRoadmap) {
        downloadRoadmap(card.careerRoadmap);
      }

      setTimeout(() => {
        router.push("/thank-you");
      }, 1500);
    } catch (error) {
      console.error("❌ Error submitting the form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadRoadmap = (url) => {
    const course = data.find((course) => course.courseID === courseID);
    const link = document.createElement("a");
    link.href = url;
    link.download = "career-roadmap.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.overlay}>
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <Suspense fallback={<div>Loading...</div>}>
            <Loading />
          </Suspense>
        </div>
      )}

      <div className={styles.formContainer}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close Form"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Enroll Now</h2>

          <div className={styles.formGroup}>
            <input
              className={styles.input}
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
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
            <select
              className={styles.select}
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              {card?.popUpDropDownCourses?.length > 0 ? (
                card.popUpDropDownCourses.map((course) => (
                  <option key={course.dropDownid} value={course.courseName}>
                    {course.courseName}
                  </option>
                ))
              ) : (
                <option disabled>No available courses</option>
              )}
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
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CoursesForm;
