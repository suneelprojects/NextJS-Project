'use client';
import React, { useEffect, useState } from 'react';
import style from './BookDemo.module.css';
import { useDateContext } from "@/components/Forms/DateContext";

function formatDateWithSuffix(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-IN', { month: 'long' });
  const year = date.getFullYear();

  const getOrdinalSuffix = (n) => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}

const Button = () => {
  const [showForm, setShowForm] = useState(false);
  const { careerWorkshopDate } = useDateContext();
  const formattedWorkshopDate = careerWorkshopDate ? formatDateWithSuffix(careerWorkshopDate) : null;

  const [formData, setFormData] = useState({
    course: '',
    name: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    course: '',
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.values(errors).some((error) => error !== "")) return;

    setLoading(true);

    const formDataEncoded = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataEncoded.append(key, value);
    });
    formDataEncoded.append("pageUrl", window.location.href);
    formDataEncoded.append("sheetName", "CareerWorkshop");

    try {
      // ✅ Google Sheet submission
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbywSWoyQHv-P66PU6FvDNyC2AVipYuadZuVV9UM824TbTjImg9TZXpGQ5uc8YZ6j4wQuw/exec",
        {
          method: "POST",
          body: formDataEncoded,
        }
      );

      if (!response.ok) throw new Error("Failed to submit the form.");

      // ✅ SalesMax CRM API submission
      await fetch("https://integration.pqa.salesmax.ai/salesmax/leads?token=HQcGA0UvEPEYySxfojMchw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course: formData.course,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          formType: "Career Workshop Form",
          pageUrl: window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });

      alert("✅ Thank you for registering! Your form has been submitted successfully.");
      setShowForm(false);
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("There was an error submitting your form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.course) errors.course = 'Please select a course.';
    if (!data.name) errors.name = 'Please enter your name.';
    if (!data.email) {
      errors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!data.phone) {
      errors.phone = 'Please enter your phone number.';
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div>
        <div className="text-center my-3">
          <button
            onClick={() => setShowForm(true)}
            className={`${style.button} btn fw-bold text-uppercase px-4 py-2`}
          >
            Book Your Demo Now!
            <br />
            <span className="text-decoration-line-through">₹999</span> FREE
          </button>
        </div>
        <div className="text-center">
          <p className="fw-bold fs-4 fs-6" style={{ fontSize: '18px' }}>
            Register by{' '}
            {formattedWorkshopDate ? (
              <span input="date" style={{ color: '#FFD700', fontSize: '22px' }}>
                {formattedWorkshopDate}
              </span>
            ) : (
              <span style={{ color: '#FFD700', fontSize: '22px' }}>Loading...</span>
            )}
            to unlock exclusive bonuses worth ₹5,393 – offer ends today!
          </p>
        </div>
      </div>

      <div className="text-center shadow">
        {showForm && (
          <>
            <div
              className="blur-background"
              style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.21)',
                zIndex: '999',
              }}
            ></div>

            <div
              className="modal d-flex align-items-center justify-content-center"
              style={style.modalStyle}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                style={{ position: 'fixed', top: '0', width: '100%', height: '100%', zIndex: '1000' }}
              >
                <div className="modal-content bg-dark text-white p-4 position-relative" style={{ border: '2px solid white' }}>
                  <button
                    className="btn-close btn-close-white position-absolute"
                    onClick={() => setShowForm(false)}
                    style={{ top: '10px', right: '15px', zIndex: '1001', border: '2px solid white' }}
                  ></button>
                  <h2 className="text-warning text-center mb-4">REGISTER NOW</h2>
                  <form>
                    <div className="mb-3">
                      <select
                        className="form-select"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select Course</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Data Science & AI">Data Science & AI</option>
                        <option value="Full stack Mern Java">Full stack Mern Java</option>
                        <option value="Full stack Mern Python">Full stack Mern Python</option>
                        <option value="Multi Cloud DevOps">Multi Cloud DevOps</option>
                      </select>
                      {formErrors.course && <div className="text-danger">{formErrors.course}</div>}
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                      {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                      {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                        required
                      />
                      {formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
                    </div>
                    <button
                      type="submit"
                      className="btn w-100 fw-bold text-uppercase"
                      onClick={handleSubmit}
                      disabled={loading}
                      style={{ background: '#553cdf', color: 'white' }}
                    >
                      {loading ? (
                        <div className="spinner-border text-light" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        'Book Now'
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Button;
