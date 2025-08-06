import React, { useState } from "react";
import styles from "./PopUpForm.module.css";
import Loading from "@/components/reusedComponents/Loading";

const ScholarshipFormTest = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    yearOfPassing: "",
    course: "",
    trainingMode: "",
  });

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwq2ZtrNBCozKx_A23Ab4k02yCsxt5v1Wx7OQsY2RRzECvEnieV98bYm5rmWch0ZjcIag/exec";

  const crmTokenURL =
    "https://integration.pqa.salesmax.ai/salesmax/leads?token=jfk9-GtyxBAVt5_ZhL733g";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => !value)) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    const formDataEncoded = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataEncoded.append(key, value);
    });
    formDataEncoded.append("sheetName", "scholarshipTest");

    try {
      // ✅ Submit to Google Sheet
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataEncoded,
      });

      if (!response.ok) throw new Error("Failed to submit form to Google Sheets");

      // ✅ Submit to SalesMax CRM
      await fetch(crmTokenURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          education: formData.education,
          yearOfPassing: formData.yearOfPassing,
          course: formData.course,
          trainingMode: formData.trainingMode,
          formType: "Scholarship Test Registration",
          pageUrl: window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });

      alert("✅ Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        yearOfPassing: "",
        course: "",
        trainingMode: "",
      });

      // ✅ WhatsApp Redirect + Close
      window.open("https://chat.whatsapp.com/CP3X4YJNeT14406Q6euAtd", "_blank");
      onClose();
    } catch (error) {
      console.error("❌ Submission Error:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <Loading />
        </div>
      )}
      <div className={styles.formContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.RegisterNow} style={{ color: "black" }}>
            Register Now
          </h2>
          {["name", "email", "phone", "yearOfPassing"].map((field) => (
            <div className={styles.formGroup} key={field}>
              <input
                className={styles.input}
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                name={field}
                placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          {[
            ["education", ["B.Tech", "Degree", "MBA", "MCA", "Other"]],
            [
              "course",
              [
                "Data Analytics",
                "Data Science & AI",
                "Full Stack Mern Java",
                "Full Stack Mern Python",
                "Multi Cloud DevOps",
              ],
            ],
            ["trainingMode", ["Online", "Offline"]],
          ].map(([name, options]) => (
            <div className={styles.formGroup} key={name}>
              <select
                className={styles.select}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              >
                <option value="">Select {name}</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
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

export default ScholarshipFormTest;
