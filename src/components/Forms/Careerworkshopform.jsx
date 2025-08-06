/** @format */

import React, { useState } from "react";
import style from '@/app/career-counselling/ButtonDemoBooking/Button.module.css';

const Careerworkshopform = ({onClose}) => {
 const [formData, setFormData] = useState({
   course: "",
   name: "",
   email: "",
   phone: "",
 });

 const [formErrors, setFormErrors] = useState({
   course: "",
   name: "",
   email: "",
   phone: "",
 });
 const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
   e.preventDefault();

   // Validate form before submitting
   const errors = validateForm(formData);
   setFormErrors(errors);

   if (Object.values(errors).some((error) => error !== "")) {
     return;
   }
   setLoading(true);

   // Create FormData instance
   const formDataEncoded = new FormData();
   Object.entries(formData).forEach(([key, value]) => {
     formDataEncoded.append(key, value);
   });

   formDataEncoded.append("pageUrl", window.location.href);
   formDataEncoded.append("sheetName", "CareerWorkshop");

   try {
     const response = await fetch(
       "https://script.google.com/macros/s/AKfycbywSWoyQHv-P66PU6FvDNyC2AVipYuadZuVV9UM824TbTjImg9TZXpGQ5uc8YZ6j4wQuw/exec",
       {
         method: "POST",
         body: formDataEncoded,
       }
     );

     if (!response.ok) {
       throw new Error("Failed to submit the form.");
     }

     const data = await response.json();
     console.log("Form submitted successfully:", data);
     // --- SALES MAX CRM INTEGRATION ---
     try {
       if (!window.salesmaxScriptLoaded) {
         const script = document.createElement('script');
         script.src = 'https://salesmax.ai/formdata/js/index.js';
         script.async = true;
         script.onload = () => { 
           window.salesmaxScriptLoaded = true;
           console.log('✅ SalesMax script loaded successfully for Career Workshop Form');
           initializeSalesmax();
         };
         script.onerror = () => {
           console.error('❌ Failed to load SalesMax script for Career Workshop Form');
         };
         document.body.appendChild(script);
       } else {
         console.log('✅ SalesMax script already loaded for Career Workshop Form');
         initializeSalesmax();
       }

       function initializeSalesmax() {
         try {
           window.salesmaxDataLayer = window.salesmaxDataLayer || [];
           function salesmax() {
             window.salesmaxDataLayer.push(arguments);
           }
           salesmax('form-id', 'Career Workshop Form ');
           salesmax('account', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJqdGkiOiI3OGVhZGZiYS1lZTkxLTRmZmQtYmM5MS1hODFjOGVhNWE1NmQiLCJzdWIiOiJiMmI4MzM2OC01M2QxLTQyOGMtYmEzNC02NDZjZDZlNTExMjMiLCJpYXQiOjE3NTM3MDU0NDZ9.-I-q73YDORNGWsUTOa33q9lFXGl8y4x46Wn1iBn7l4lQqLhHZEHykzZ2BSgM36Pw');
           salesmax('event', 'form_submit', { 
             course: formData.course, 
             name: formData.name, 
             email: formData.email, 
             phone: formData.phone,
             form_type: 'Career Workshop Form',
             page_url: window.location.href,
             timestamp: new Date().toISOString()
           });
           console.log('✅ SalesMax CRM data sent successfully for Career Workshop Form:', {
             form_id: 'Career Workshop Form',
             course: formData.course,
             name: formData.name,
             email: formData.email,
             phone: formData.phone,
             timestamp: new Date().toISOString()
           });
         } catch (error) {
           console.error('❌ Error in SalesMax initialization for Career Workshop Form:', error);
         }
       }
     } catch (error) {
       console.error('❌ Error in SalesMax integration for Career Workshop Form:', error);
     }
     // --- END SALES MAX ---
     alert(
       "Thank you for registering! Your form has been submitted successfully."
     );
     onClose();
   } catch (error) {
     console.error("Error submitting form:", error);
     alert("There was an error submitting your form. Please try again later.");
   } finally {
     setLoading(false);
   }
 };

 const validateForm = (data) => {
   const errors = {};

   // Validate slot
   if (!data.course) {
     errors.course = "Please select a course.";
   }

   // Validate name
   if (!data.name) {
     errors.name = "Please enter your name.";
   }

   // Validate email
   if (!data.email) {
     errors.email = "Please enter your email address.";
   } else if (!/\S+@\S+\.\S+/.test(data.email)) {
     errors.email = "Please enter a valid email address.";
   }

   // Validate phone number
   if (!data.phone) {
     errors.phone = "Please enter your phone number.";
   } else if (!/^\d{10}$/.test(data.phone)) {
     errors.phone = "Please enter a valid 10-digit phone number.";
   }

   return errors;
 };

 // Handle form field changes
 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };


  return (
    <>
      <div
        className="blur-background"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.21)",
          zIndex: "999",
        }}
      ></div>

      <div
        className="modal d-flex align-items-center justify-content-center"
        style={style.modalStyle}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{
            position: "fixed",
            top: "0",
            width: "100%",
            height: "100%",
            zIndex: "1000",
          }}
        >
          <div
            className="modal-content bg-dark text-white p-4 position-relative"
            style={{ border: "2px solid white" }}
          >
            <button
              className="btn-close btn-close-white position-absolute"
              onClick={onClose}
              style={{
                top: "10px",
                right: "15px",
                zIndex: "1001",
                border: "2px solid white",
              }}
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
                  <option value="" disabled>
                    Select Course
                  </option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Data Science & AI">Data Science & AI</option>
                  <option value="Full stack Mern Java">
                    Full stack Mern Java
                  </option>
                  <option value="Full stack Mern Python">
                    Full stack Mern Python
                  </option>
                  <option value="Multi Cloud DevOps">Multi Cloud DevOps</option>
                </select>
                {formErrors.course && (
                  <div className="text-danger">{formErrors.course}</div>
                )}
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
                {formErrors.name && (
                  <div className="text-danger">{formErrors.name}</div>
                )}
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
                {formErrors.email && (
                  <div className="text-danger">{formErrors.email}</div>
                )}
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
                {formErrors.phone && (
                  <div className="text-danger">{formErrors.phone}</div>
                )}
              </div>
              <button
                type="submit"
                className="btn w-100 fw-bold text-uppercase"
                onClick={handleSubmit}
                disabled={loading}
                style={{ background: "#553cdf", color: "white" }}
              >
                {loading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Book Now"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careerworkshopform;
