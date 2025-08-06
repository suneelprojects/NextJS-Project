/** @format */

"use client";
import React, { useState } from "react";
import EnrollDetailsStyle from "@/components/Homepage/EnrollDetails/enrollDetails.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzBa_V52xpcsc3MHL82mxzx86LqJVyEgBUvc-Hvr-hdjdQMCRUeqhyYvn6_F9YDcfZn/exec";

const crmTokenURL =
  "https://integration.pqa.salesmax.ai/salesmax/leads?token=-oqrRFlaxrGX5ZmwLjUt2Q";

const Homeform = ({ sheetName }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Course: "",
    SubCourse: "",
  });

  const [subOptions, setSubOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const mainOptions = {
    "Web Development": [
      "Full Stack Java",
      "Full Stack Python",
      "MERN Stack",
      "UI UX",
      "Advanced Full Stack",
    ],
    Analytics: [
      "Data Analytics",
      "Data Science",
      "Artificial Intelligence",
      "Generative AI",
    ],
    Marketing: ["Digital Marketing", "SEO", "Digital Marketing with AI Tools"],
    Accounting: ["Advanced Tally", "Taxation", "GST Filing"],
    Finance: ["Finance Literacy", "Banking, Capital Market and Investments"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: cleaned });
    } else if (name === "Course") {
      setFormData({ ...formData, [name]: value, SubCourse: "" });
      setSubOptions(mainOptions[value] || []);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Name, Email, Phone, Course, SubCourse } = formData;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (
      !Name ||
      !Email ||
      !Phone ||
      !Course ||
      (subOptions.length > 0 && !SubCourse)
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!phoneRegex.test(Phone)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      // Submit to Google Sheets
      const payload = new FormData();
      payload.append("sheetName", sheetName);
      payload.append("name", Name);
      payload.append("mobile", Phone);
      payload.append("email", Email);
      payload.append("course", Course);
      payload.append("domain", SubCourse);
      payload.append("Timestamp", new Date().toLocaleString());
      payload.append("pageUrl", window.location.href);

      await fetch(scriptURL, {
        method: "POST",
        body: payload,
      });

      // Submit to SalesMax CRM
      await fetch(crmTokenURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: Name,
          email: Email,
          phone: Phone,
          course: Course,
          subCourse: SubCourse,
          pageUrl: window.location.href,
          formType: "Home Page Enroll Leads",
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success("✅ Form submitted successfully!");

      // Reset form
      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        Course: "",
        SubCourse: "",
      });
      setSubOptions([]);
    } catch (error) {
      console.error("❌ Submission error:", error);
      toast.error("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={EnrollDetailsStyle.detailsContainer}>
      <form
        className={`col ms-2 ${EnrollDetailsStyle.form}`}
        onSubmit={handleSubmit}
      >
        <div className={EnrollDetailsStyle.inputDivs}>
          <label className="form-label">Mobile No +91:</label>
          <input
            type="tel"
            name="Phone"
            className="form-control"
            value={formData.Phone}
            onChange={handleChange}
            placeholder="Enter Number"
            required
            maxLength={10}
          />
        </div>

        <div className={EnrollDetailsStyle.inputDivs}>
          <label className="form-label">Name :</label>
          <input
            type="text"
            name="Name"
            className="form-control"
            value={formData.Name}
            onChange={handleChange}
            placeholder="John"
            required
          />
        </div>

        <div className={EnrollDetailsStyle.inputDivs}>
          <label className="form-label">Email :</label>
          <input
            type="email"
            name="Email"
            className="form-control"
            value={formData.Email}
            onChange={handleChange}
            placeholder="john@gmail.com"
            required
          />
        </div>

        <div className={EnrollDetailsStyle.inputDivs}>
          <label className="form-label">Select your course :</label>
          <select
            name="Course"
            className="form-select"
            value={formData.Course}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {Object.keys(mainOptions).map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
            <option value="HR Analytics">HR Analytics</option>
          </select>
        </div>

        {subOptions.length > 0 && (
          <div className={EnrollDetailsStyle.inputDivs}>
            <label className="form-label">Select your domain :</label>
            <select
              name="SubCourse"
              className="form-select"
              value={formData.SubCourse}
              onChange={handleChange}
              required
            >
              <option value="">Select Sub-Option</option>
              {subOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          className={EnrollDetailsStyle.submitBtn}
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Homeform;
