/** @format */
"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import styles from "@/app/scholarship-test/PopUpForm.module.css";
import Loading from "@/components/reusedComponents/Loading";

const Subscriptionform = ({ onClose }) => {
  const { userType } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    yearOfPassing: "",
    selectedCourses: [],
    trainingMode: "",
    userType: userType || "General",
  });

  // Course details for subscription form
  const courseDetails = [
    {
      name: "Digital Marketing",
      description: "Learn SEO, PPC, social media marketing, and content strategy",
      duration: "3 months"
    },
    {
      name: "Data Analytics",
      description: "Master data visualization, SQL, and analytical techniques",
      duration: "4 months"
    },
    {
      name: "AWS Cloud Computing",
      description: "Get started with cloud computing and AWS core services",
      duration: "3 months"
    },
    {
      name: "DevOps",
      description: "Understand CI/CD pipelines, automation, and infrastructure management",
      duration: "3 months"
    },
    {
      name: "Data Science",
      description: "Learn data manipulation, machine learning, and data visualization",
      duration: "6 months"
    },
    {
      name: "Artificial Intelligence",
      description: "Explore neural networks, deep learning, and AI model building",
      duration: "6 months"
    },
    {
      name: "Full Stack Java",
      description: "Master Java programming, Spring Boot, and backend development",
      duration: "6 months"
    },
    {
      name: "Full Stack Python",
      description: "Learn Python for web development, automation, and data science",
      duration: "6 months"
    },
    {
      name: "MERN Stack",
      description: "Build full-stack applications using MongoDB, Express, React, and Node.js",
      duration: "6 months"
    }
  ];

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwegwRjGZJzUglDDlHIDHnuLry6gOEUSi_Y7AsCrvMsqaEnoONZSD0m3c4gvMz2fyMubg/exec";

  const crmURL =
    "https://integration.pqa.salesmax.ai/salesmax/leads?token=TOQQ8j5yq9kf26BrNYlYAA";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.education ||
      !formData.yearOfPassing ||
      formData.selectedCourses.length === 0 ||
      !formData.trainingMode
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    const encoded = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      encoded.append(key, Array.isArray(value) ? value.join(", ") : value);
    });
    encoded.append("pageUrl", window.location.href);
    encoded.append("sheetName", "subscription");

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: encoded,
      });

      await fetch(crmURL, {
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
          selectedCourses: formData.selectedCourses.join(", "),
          trainingMode: formData.trainingMode,
          userType: formData.userType,
          form_type: "Subscription Page Form",
          page_url: window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });

      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        yearOfPassing: "",
        selectedCourses: [],
        trainingMode: "",
        userType: userType || "General",
      });
      onClose();
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedCourses = checked
        ? [...prevState.selectedCourses, value]
        : prevState.selectedCourses.filter((course) => course !== value);

      return {
        ...prevState,
        selectedCourses: updatedCourses,
      };
    });
  };
  return (
    <>
      <div
        className={styles.overlay}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
        }}
      >
        {isLoading && (
          <div
            className={styles.loadingOverlay}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 1100,
            }}
          >
            <Loading />
          </div>
        )}
        <div
          className={styles.formContainer}
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 5px 25px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            maxWidth: "360px",
            width: "90%",
            position: "relative",
            maxHeight: "70vh",
            overflowY: "auto",
            margin: "0 auto",
          }}
        >
          <button
            className={styles.closeButton}
            onClick={onClose}
            style={{
              position: "sticky",
              top: "5px",
              right: "5px",
              float: "right",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#888",
              zIndex: 10,
            }}
          >
            &times;
          </button>
          <form onSubmit={handleSubmit}>
            <h2
              style={{
                color: "#2C3E50",
                marginBottom: "15px",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              Register Now{" "}
              <span style={{ color: "#3498DB",textWrap:'nowrap' }}>({formData.userType})</span>
            </h2>

            <div style={{ marginBottom: "15px" }}>
              {["name", "email", "phone", "yearOfPassing"].map((field) => (
                <div
                  className={styles.formGroup}
                  key={field}
                  style={{ marginBottom: "10px" }}
                >
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    name={field}
                    className={styles.input}
                    placeholder={
                      field === "yearOfPassing"
                        ? "Year of Passing"
                        : field.charAt(0).toUpperCase() + field.slice(1)
                    }
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "6px",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                      transition: "border-color 0.3s",
                      outline: "none",
                    }}
                  />
                </div>
              ))}

              {[
                ["education", ["B.Tech", "Degree", "MBA", "MCA", "Other"]],
                ["trainingMode", ["Online", "Offline"]],
              ].map(([name, options]) => (
                <div
                  className={styles.formGroup}
                  key={name}
                  style={{ marginBottom: "10px" }}
                >
                  <select
                    name={name}
                    className={styles.select}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "6px",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                      appearance: "none",
                      backgroundImage:
                        "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className={styles.formGroup} style={{ marginBottom: "15px" }}>
              <label
                style={{
                  fontWeight: "600",
                  color: "#2C3E50",
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "16px",
                  textAlign:'start'
                }}
              >
                Select Courses
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {courseDetails.map((course) => (
                  <div
                    key={course.name}
                    style={{
                      border: formData.selectedCourses.includes(course.name)
                        ? "2px solid #3498DB"
                        : "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "10px",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                      backgroundColor: formData.selectedCourses.includes(
                        course.name
                      )
                        ? "#F8F9FA"
                        : "white",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      const simulatedEvent = {
                        target: {
                          value: course.name,
                          checked: !formData.selectedCourses.includes(
                            course.name
                          ),
                        },
                      };
                      handleCheckboxChange(simulatedEvent);
                    }}
                  >
                    <div
                      style={{
                        marginRight: "10px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "4px",
                          border: formData.selectedCourses.includes(course.name)
                            ? "2px solid #3498DB"
                            : "2px solid #BDC3C7",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: formData.selectedCourses.includes(
                            course.name
                          )
                            ? "#3498DB"
                            : "white",
                          transition: "all 0.2s",
                        }}
                      >
                        {formData.selectedCourses.includes(course.name) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        name="selectedCourses"
                        value={course.name}
                        checked={formData.selectedCourses.includes(course.name)}
                        onChange={handleCheckboxChange}
                        style={{
                          position: "absolute",
                          opacity: 0,
                          cursor: "pointer",
                          height: 0,
                          width: 0,
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            color: "#2C3E50",
                            fontSize: "15px",
                            fontWeight: "600",
                          }}
                        >
                          {course.name}
                        </span>
                        {/* <span
                          style={{
                            color: "#E74C3C",
                            fontWeight: "600",
                            fontSize: "12px",
                            backgroundColor: "#FADBD8",
                            padding: "2px 6px",
                            borderRadius: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {course.duration}
                        </span> */}
                      </div>
                      <p
                        style={{
                          margin: "2px 0 0 0",
                          color: "#7F8C8D",
                          fontSize: "13px",
                          textAlign:'start'
                        }}
                      >
                        {course.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#3498DB",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2980B9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3498DB")}
            >
              {isLoading ? (
                <span style={{ display: "flex", alignItems: "center" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      animation: "spin 1s linear infinite",
                      marginRight: "8px",
                    }}
                  >
                    <style>{`
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                    `}</style>
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Register Now"
              )}
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .${styles.formContainer} {
          animation: fadeIn 0.4s ease-out;
        }
        .${styles.formContainer}::-webkit-scrollbar {
          width: 6px;
        }
        .${styles.formContainer}::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .${styles.formContainer}::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .${styles.formContainer}::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </>
  );
};

export default Subscriptionform;
