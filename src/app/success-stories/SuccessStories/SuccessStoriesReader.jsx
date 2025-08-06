/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Redline from "@/assets/successStories/RedLine.webp";
import style from "@/app/success-stories/SuccessStoriesglobalStyling.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import award_image from '@/assets/successStories/award_image.jpg';
import higherPackage from '@/assets/successStories/higherpackage.png';


const SuccessStoriesReader = () => {
  const [studentsEnrolled, setStudentsEnrolled] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [completionRating, setCompletionRating] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const statsRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // This code runs only on the client
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCount(setStudentsEnrolled, 17, 1000);
            animateCount(setAverageRating, 4.9, 1000);
            animateCount(setCompletionRating, 86, 1000);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  const animateCount = (setter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(interval);
      } else {
        setter(Math.round(start * 10) / 10);
      }
    }, 50);
  };

  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const [activeAwardIndex, setActiveAwardIndex] = useState(0);
 const recentJobs = [
        { id: 1, name: "Sarah Johnson", image: higherPackage },
    ];

    const recentAwards = [
        { id: 1, name: "David Rodriguez", image: award_image },
    ];



  return (
    <>
      <div className="container-fluid bg-light">
        <div className="text-center pt-4">
          <h1 className="display-5 fw-bold">Our Success Stories</h1>
          <p className="lead">
            Celebrating excellence and achievement in our community
          </p>
        </div>

        {/* displaying achievements */}
        <div className="row g-4 justify-content-center">
          {/* Job Placements */}
          <div className="col-md-4 d-flex flex-column align-items-center">
            <h4
              className="text-center mb-3 fw-bold text-uppercase position-relative d-inline-block px-3"
              style={{
                color: "#553cdf",
                letterSpacing: "1px",
                paddingBottom: "5px",
                marginTop: "10px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.35)",
              }}
            >
              Recent Best Salary Package March 2025
            </h4>
            <div
              className="card shadow bg-dark text-white w-100 position-relative rounded-4 overflow-hidden d-flex flex-column"
              style={{ height: "360px" }}
            >
              <Image
                src={recentJobs[activeJobIndex].image}
                className="img-fluid w-100 h-100"
                alt={recentJobs[activeJobIndex].name}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          {/* Awards Section */}
          <div className="col-md-4 d-flex flex-column align-items-center">
            <h4
              className="text-center mb-3 fw-bold text-uppercase position-relative d-inline-block px-3"
              style={{
                color: "#553cdf",
                letterSpacing: "1px",
                paddingBottom: "5px",
                marginTop: "10px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.35)",
              }}
            >
              Training & Development Company of the Year 2025
            </h4>
            <div
              className="card shadow bg-dark text-white w-100 position-relative rounded-4 overflow-hidden d-flex flex-column"
              style={{ height: "360px" }}
            >
              <Image
                src={recentAwards[activeAwardIndex].image}
                className="img-fluid w-100 h-100"
                alt={recentAwards[activeAwardIndex].name}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.topContent}>
        <div className={style.insights}>
          <p className="text-center mb-4 text-2xl sm:text-2xl md:text-6xl py-3 font-semibold">
            16000+ Success Stories Since 2014
          </p>

          <div className="container">
            <div
              className={`${style.wholeInsights} row justify-content-center g-3`}
            >
              <div className="col-md-4 col-sm-4 col-12 d-flex flex-column">
                <div
                  className={`${style.insideBox} p-4 text-center rounded shadow-sm w-100`}
                >
                  <p>
                    <strong>127 %</strong> <br />
                    Average Placement Hike
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-12 d-flex align-items-stretch">
                <div
                  className={`${style.insideBox} p-4  text-center rounded shadow-sm w-100`}
                >
                  <p>
                    <strong>8 Lakh</strong> <br />
                    Average CTC
                  </p>
                </div>
              </div>
              <div className=" col-md-4 col-sm-4 col-12 d-flex align-items-stretch">
                <div
                  className={`${style.insideBox} p-4 text-center rounded shadow-sm w-100`}
                >
                  <p>
                    <strong>21 LPA</strong> <br />
                    Highest CTC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*completion rating  */}
        <div className={`${style.statsContainer} container mt-4`}>
          <div className={`row justify-content-center`} ref={statsRef}>
            <div className="col-12 col-md-4 text-center mb-3">
              <div className={`${style.stat}`}>
                <span className={`${style.statValue} fs-2 fw-bold text-black`}>
                  {studentsEnrolled.toLocaleString()}000+
                </span>
                <p className={`${style.statLabel} mt-2`}>Students Alumini</p>
              </div>
            </div>

            <div className="col-12 col-md-4 text-center mb-3">
              <div className={`${style.stat}`}>
                <span className={`${style.statValue} fs-2 fw-bold text-black`}>
                  {averageRating}/5
                </span>
                <p className={`${style.statLabel} mt-2`}>Average Rating</p>
              </div>
            </div>

            {screenWidth > 790 && (
              <div className="col-12 col-md-4 text-center mb-3">
                <div className={`${style.stat}`}>
                  <span
                    className={`${style.statValue} fs-2 fw-bold text-black`}
                  >
                    {completionRating}%
                  </span>
                  <p className={`${style.statLabel} mt-2`}>Completion Rating</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="container d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div
              className={`${style.leadHeading} fs-1 lead text-muted mb-4 text-center`}
            >
              From Aspiration to Achievement
              <br />
              <span
                style={{
                  color: "#553cdf",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Our Success Stories
                <div
                  data-aos="fade-right"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "30px",
                  }}
                >
                  <Image
                    src={Redline}
                    alt="Redline"
                    width={100}
                    height={50}
                    className="position-absolute start-50 translate-middle-x"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      width: "100%",
                      top: -55,
                    }}
                  />
                </div>
              </span>
            </div>

            <p className={`${style.Headercontent} text-dark`}>
              Explore the inspiring success stories of our students at Social
              Prachar, where exceptional results and achievements take center
              stage. Witness their transformative journeys, groundbreaking
              accomplishments, and firsthand experiences that showcase the power
              of learning and growth with us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesReader;
