"use client"
import React, { useRef } from 'react';
import justDialStyle from './JustDial.module.css';
import Image from 'next/image';
import justDialLogo from "@/assets/successStories/JustDial_Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { justDialReviewsData } from './JustDialReviewsData.js';

const JustDialReviews = () => {
     const scrollRef = useRef(null);
        const handleMouseMove = (e) => {
          const container = scrollRef.current;
          if (container) {
            container.scrollLeft += e.movementX;
          }
        };
    return (
      <div className={justDialStyle.trustPilotContainer}>
        <div className="text-center pt-5">
          <h1
            className={`${justDialStyle.trustPilotHeader} mb-4 text-center d-flex align-items-center justify-content-center`}
          >
            <span>
              <Image
                src={justDialLogo}
                alt="JustDial Logo"
                className={justDialStyle.HeadingJustDialLogo}
              />
            </span>
          </h1>
        </div>
        <div
          className={`${justDialStyle.trustPilotScrollContainer} container`}
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "1rem",
            paddingBottom: "1rem",
          }}
          onMouseMove={handleMouseMove}
        >
          {justDialReviewsData.map((testimonial, index) => (
            <div className="col-12 col-sm-10 col-md-8 col-lg-4" key={index}>
              <div
                className="card shadow-sm"
                style={{
                  maxWidth: "420px",
                  height: "63vh",
                  padding: "30px 0px",
                  border: "2px solid #553cdf",
                  borderRadius: "15px",
                }}
              >
                <div className="card-body">
                  <div className={justDialStyle.cardBody}>
                    <div className={justDialStyle.cornerStar}>
                      {"★ Just Dial"}
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className={`${justDialStyle.profile} rounded-circle text-white d-flex justify-content-center align-items-center`}
                      >
                        {testimonial.initial}
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">{testimonial.name}</h5>
                      </div>
                    </div>
                    <hr />
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      style={{ color: "#553cdf", fontSize: "1.7rem" }}
                      className={justDialStyle.iconStart}
                    />
                    <p className={`${justDialStyle.title}`}>
                      {testimonial.title}
                    </p>
                    <div className="text-success mb-3">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <p className={`${justDialStyle.description} text-muted`}>
                      {testimonial.description}
                    </p>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      style={{ color: "#553cdf", fontSize: "1.7rem" }}
                      className={justDialStyle.iconEnd}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default JustDialReviews;