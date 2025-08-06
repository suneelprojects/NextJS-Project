/** @format */
"use client"
import React, { useRef } from "react";
import style from '../SuccessStoriesglobalStyling.module.css';
import { OurAluminiReviewsData } from "./OurAluminiReviewsData";
import Image from "next/image";

const OurAluminiReviews = () => {
        const scrollRef = useRef(null);
        const handleMouseMove = (e) => {
          const container = scrollRef.current;
          if (container) {
            container.scrollLeft += e.movementX;
          }
        };


  return (
    <>
      <div className={style.ourAlumini_Reviews}>
        <h2 className="text-center">Our Alumni Reviews</h2>
        <div className="container my-5">
          <div
            className={`${style.alumniScrollContainer} d-flex`}
            ref={scrollRef}
            style={{
              overflowX: "auto",
              gap: "1rem",
              paddingBottom: "1rem",
            }}
            onMouseMove={handleMouseMove}
          >
            {OurAluminiReviewsData.map((student, index) => (
              <div
                key={student.id || index}
                className={"col-12 col-md-6 col-lg-4 mb-4"}
                style={{ minWidth: "300px" }}
                onClick={() => window.open(student.linkedin)}
              >
                <div
                  className={`${style.wholeAlumniCard} card shadow`}
                  style={{ borderRadius: "15px", height: "300px" }}
                >
                  <div className="card-body">
                    {/* Success Story Heading */}
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold">Success Story</p>
                      <p className="fw-bold">Social Prachar</p>
                    </div>

                    {/* Placement Journey Section */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-around align-items-center">
                        <div>
                          <div>
                            <p className="h6">
                              <span style={{ color: "#553cdf" }}>
                                Placement
                              </span>{" "}
                              Journey
                            </p>
                            <hr className="my-2" />
                            <p className="mb-0">
                              From{" "}
                              <span className="fw-bold">
                                {student.homeTown}
                              </span>
                            </p>
                            <p className="h6 fw-bold">
                              to{" "}
                              <span style={{ color: "#553cdf" }}>
                                {student.role}
                              </span>
                            </p>
                          </div>
                          <div className="table" style={{ width: "160px" }}>
                            <table
                              className={`${style.offersTable} table table-bordered text-center`}
                              style={{ fontSize: "8px" }}
                            >
                              <thead>
                                <tr>
                                  <th colSpan="3" style={{}}>
                                    <p
                                      className="m-0"
                                      style={{
                                        fontWeight: "800",
                                        fontSize: "9px",
                                      }}
                                    >
                                      Offers From:
                                    </p>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  {student.offers.map((offer, index) => (
                                    <td key={index}>
                                      <Image
                                        src={offer.logo}
                                        style={{
                                          width: "35px",
                                          height: "25px",
                                          objectFit: "contain",
                                        }}
                                        alt={`${offer.company}`}
                                      />
                                      <span style={{ fontSize: "8px" }}>
                                        {offer.company}
                                      </span>
                                    </td>
                                  ))}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Profile Image Behind the Personal Info Section */}
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          <Image
                            src={student.image}
                            alt={`${student.name}'s profile`}
                            className={`${style.alumniProfileImage} rounded-circle`}
                          />

                          {/* Person Information Section Above Image */}
                          <div className={`${style.personalInfo} border`}>
                            <span className={style.aluminiStudentName}>
                              {student.name}
                            </span>
                            <span
                              style={{
                                marginBottom: "2px",
                                fontWeight: "800",
                              }}
                            >
                              {student.role}
                            </span>
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                height: "26px",
                                width: "100%",
                                justifyContent: "center",
                              }}
                            >
                              <Image
                                src={student.presentCompany}
                                alt="Company Logo"
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  marginRight: "3px",
                                }}
                              />
                              {student.companyname}
                              {/* {student.offers[0]} */}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAluminiReviews;
