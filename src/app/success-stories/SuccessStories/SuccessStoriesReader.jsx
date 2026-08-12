/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Redline from "@/assets/successStories/RedLine.webp";
import style from "@/app/success-stories/SuccessStoriesglobalStyling.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import award_image from '@/assets/successStories/award_image.jpg';
import higherPackage from '@/assets/successStories/highest-package-divija.png';

// Recent Placements Images
import rp1 from '@/assets/recent-placements/recent-placements1.jpg';
import rp2 from '@/assets/recent-placements/recent-placements2.jpg';
import rp3 from '@/assets/recent-placements/recent-placements3.jpg';
import rp4 from '@/assets/recent-placements/recent-placements4.jpg';
import rp5 from '@/assets/recent-placements/recent-placements5.jpg';
import rp6 from '@/assets/recent-placements/recent-placements6.jpg';
import rp7 from '@/assets/recent-placements/recent-placements7.jpg';
import rp8 from '@/assets/recent-placements/recent-placements8.jpg';
import rp9 from '@/assets/recent-placements/recent-placements9.jpg';
import rp10 from '@/assets/recent-placements/recent-placements10.jpg';
import rp11 from '@/assets/recent-placements/recent-placements11.jpg';
import rp12 from '@/assets/recent-placements/recent-placements12.jpg';
import rp13 from '@/assets/recent-placements/recent-placements13.jpg';
import rp14 from '@/assets/recent-placements/recent-placements14.jpg';
import rp15 from '@/assets/recent-placements/recent-placements15.jpg';
import rp16 from '@/assets/recent-placements/recent-placements16.jpg';
import rp17 from '@/assets/recent-placements/recent-placements17.jpg';
import rp18 from '@/assets/recent-placements/recent-placements18.jpg';
import rp19 from '@/assets/recent-placements/recent-placements19.jpg';
import rp20 from '@/assets/recent-placements/recent-placements20.jpg';
import rp21 from '@/assets/recent-placements/recent-placements21.jpg';
import rp22 from '@/assets/recent-placements/recent-placements22.jpg';
import rp23 from '@/assets/recent-placements/recent-placements23.jpg';
import rp24 from '@/assets/recent-placements/1000025348.jpg';
import rp25 from '@/assets/recent-placements/recent-placemnts-aug.jpg';
import rp26 from '@/assets/recent-placements/recent-placemnts-aug2.jpg';
import rp27 from '@/assets/recent-placements/recent-placemnts-aug3.jpg';
import rp28 from '@/assets/recent-placements/recent-placemnts-aug4.jpg';

const placementImages = [
  rp28, rp27, rp26, rp25, rp1, rp18, rp2, rp19, rp3, rp20, rp4, rp21, rp5, rp22, rp6, rp23, rp7, rp24, rp8, rp18, rp9, rp10, rp19, rp11, rp20, rp12, rp13, rp22, rp14, rp15, rp16, rp24, rp17
];

const SuccessStoriesReader = () => {
  const [studentsEnrolled, setStudentsEnrolled] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [completionRating, setCompletionRating] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
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
        <div className="row g-4 justify-content-center align-items-start">
          {/* Job Placements */}
          <div className="col-md-5 d-flex flex-column align-items-center">
            <h4
              className="text-center mb-3 fw-bold text-uppercase position-relative d-flex align-items-center justify-content-center px-3"
              style={{
                color: "#553cdf",
                letterSpacing: "1px",
                paddingBottom: "5px",
                marginTop: "10px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.35)",
                minHeight: "56px",
              }}
            >
              Our Recent Highest Salary Package
            </h4>
            <div
              className="card shadow w-100 position-relative rounded-4 overflow-hidden"
              style={{ maxWidth: "440px", aspectRatio: "1448 / 1086", backgroundColor: "#ffffff" }}
            >
              <Image
                src={recentJobs[activeJobIndex].image}
                className="w-100 h-100 d-block"
                alt={recentJobs[activeJobIndex].name}
                style={{ objectFit: "contain" }}
                unoptimized={true}
              />
            </div>
          </div>
          {/* Awards Section */}
          <div className="col-md-5 d-flex flex-column align-items-center">
            <h4
              className="text-center mb-3 fw-bold text-uppercase position-relative d-flex align-items-center justify-content-center px-3"
              style={{
                color: "#553cdf",
                letterSpacing: "1px",
                paddingBottom: "5px",
                marginTop: "10px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.35)",
                minHeight: "56px",
              }}
            >
              Training & Development Company of the Year 2025
            </h4>
            <div
              className="card shadow w-100 position-relative rounded-4 overflow-hidden"
              style={{ maxWidth: "440px", aspectRatio: "1448 / 1086", backgroundColor: "#000000" }}
            >
              <Image
                src={recentAwards[activeAwardIndex].image}
                className="w-100 h-100 d-block"
                alt={recentAwards[activeAwardIndex].name}
                style={{ objectFit: "contain" }}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* New  autoscroll  right  to  left session with  heading   our  recent placements  */}



      {/* ===== Recent Placements Section ===== */}
      <div className={style.placementsCarouselSection}>
        <h2 className={style.placementsCarouselHeading}>Our Recent Placements in Last 60 Days</h2>
        <p className="text-center mb-6 text-lg sm:text-lg md:text-xl py-3 font-light">
          Discover the latest success stories from our alumni
        </p>

        {/* Mobile View: Infinite Autoscroll Carousel */}
        <div className={style.carouselViewport}>
          <div className={style.carouselTrack}>
            {[...placementImages, ...placementImages].map((img, idx) => (
              <div key={idx} className={style.carouselSlide}>
                <Image
                  src={img}
                  alt={`Recent Placement ${(idx % placementImages.length) + 1}`}
                  className={style.carouselImage}
                  unoptimized={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Laptop & Tablet View: Grid (5/row laptop, 3/row tablet, initially 2 rows + View More) */}
        <div className={style.placementsGridContainer}>
          <div className={`${style.placementsGrid} ${!isExpanded ? style.gridCollapsed : ''}`}>
            {placementImages.map((img, idx) => (
              <div key={idx} className={style.gridCard}>
                <Image
                  src={img}
                  alt={`Recent Placement ${idx + 1}`}
                  className={style.gridImage}
                  unoptimized={true}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-4 pt-2">
            <button
              className={style.viewMoreBtn}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  View Less
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                  </svg>
                </>
              ) : (
                <>
                  View More
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* ===== End of Recent Placements Section ===== */}




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
                    unoptimized={true}
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
