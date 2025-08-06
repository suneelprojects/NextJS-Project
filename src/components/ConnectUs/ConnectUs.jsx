"use client"
import React from 'react';
import styles from '@/app/[slug]/courseDetailsPage/courseFAQs/CourseFaqs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';


const ConnectUs = () => {
  const router = useRouter();
    return (
      <>
        <div className={`${styles.contact} m-3 m-md-5 m-lg-5`}>
          <p
            className="text-center mb-4 fw-bold"
            style={{ fontSize: "32px", position: "relative", top: "18px" }}
          >
            Let's <span style={{ color: "#ff5003" }}>Connect</span>
          </p>
          <div className="container my-5">
            <div className="row justify-content-center">
              {/* Call Box */}
              <div className="col-md-4 mb-3 d-flex justify-content-center">
                <div
                  className="box p-4 text-center border border-primary rounded shadow-sm w-100"
                  style={{ maxWidth: "300px" }}
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mb-3"
                    style={{ fontSize: "50px", color: "#000" }}
                  />
                  <h4 className="mb-1 text-primary fw-semibold">Call Us</h4>
                  <p className="fw-bold mb-3" style={{ fontSize: "20px" }}>
                    +91-8019-479-419
                  </p>
                  <a href="tel:+918019479419" className="btn btn-primary w-100">
                    <b>Call Now</b>
                  </a>
                </div>
              </div>

              {/* lets Connect */}
              <div className="col-md-4 mb-3 d-flex justify-content-center">
                <div
                  className="box p-4 text-center border border-danger rounded shadow-sm w-100"
                  style={{ maxWidth: "300px" }}
                >
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="mb-3"
                    style={{ fontSize: "50px", color: "#FFC107" }}
                  />
                  <h5 className="mb-1 text-primary fw-semibold">
                    Confused about choosing the right career?
                  </h5>
                  <p className="fw-bold mb-3" style={{ fontSize: "14px" }}>
                    Take our 10-minute quiz to find your perfect fit!
                  </p>
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => router.push("/career-quiz")}
                  >
                    <b>Career Checker</b>
                  </button>
                </div>
              </div>

              {/* {showForm && (
                <div
                  className="modal fade show d-block"
                  tabIndex="-1"
                  role="dialog"
                  aria-hidden="true"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">
                          Career Quiz Registration
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setShowForm(false)}
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Enter your name"
                              value={formData.name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              name="mobile"
                              className="form-control"
                              placeholder="Enter your mobile number"
                              value={formData.mobile}
                              onChange={handleInputChange}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={loading}
                          >
                            {loading ? (
                              <div
                                className="spinner-border text-light"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            ) : (
                              "Start Quiz"
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}

              {/* WhatsApp Chat Box */}
              <div className="col-md-4 mb-3 d-flex justify-content-center">
                <div
                  className="box p-4 text-center border border-success rounded shadow-sm w-100"
                  style={{ maxWidth: "300px" }}
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="mb-3"
                    style={{ fontSize: "50px", color: "#25D366" }}
                  />
                  <h4 className="mb-1 text-primary fw-semibold">
                    WhatsApp Us at
                  </h4>
                  <p className="fw-bold mb-3" style={{ fontSize: "20px" }}>
                    +91-8019-479-419
                  </p>
                  <a
                    href="https://wa.me/918019479419?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success w-100 fw-bold"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ConnectUs;