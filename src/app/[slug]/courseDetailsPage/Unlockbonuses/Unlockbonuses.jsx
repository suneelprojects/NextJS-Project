/** @format */

"use client";
import React, { useEffect, useState } from "react";
import styles from "./Unlockbonuses.module.css";
import EnrollButton from "../ButtonforCourses/Button";
import image1 from "@/assets/courses/courseDetailspage/5.png";
import image2 from "@/assets/courses/courseDetailspage/6.png";
import image3 from "@/assets/courses/courseDetailspage/7.png";
import instagramLogo from "@/assets/successStories/Instagram_logo_2016.svg.png";
import linkedIn from "@/assets/successStories/linkedin.png";
import whatsApp from "@/assets/successStories/whatsapp-logo.png";
import featuredIn from "@/assets/courses/courseDetailspage/Featured.webp";
import {
  faChevronLeft,
  faChevronRight,
  faChalkboardTeacher,
  faUsers,
  faBook,
  faBriefcase,
  faHandshake,
  faAward,
  faLaptopCode,
  faProjectDiagram,
  faMoneyBillWave,
  faUserCog,
  faCertificate,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useParams } from "next/navigation";
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData";
import './UnlockbonusesCustom.css';

const Unlockbonuses = () => {
  const { slug } = useParams();
  const [card, setCard] = useState(null);
  useEffect(() => {
    const cardDetails = data.find((item) => item.slug === slug);
    setCard(cardDetails);
  }, [slug]);

  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoSlideInterval = 4000;

  // Change to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Change to previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto slide feature
  useEffect(() => {
    const timer = setInterval(nextImage, autoSlideInterval);
    return () => clearInterval(timer); // Cleanup timer
  }, [currentImageIndex]);

  return (
    <>
      <div className={styles.Mentorpage}>
        {/* Section for unlocking bonuses */}
        <div className={`${styles.background} pt-4 rounded shadow`}>
          <h2 className="text-center mb-4 fs-1 fs-5">
            Unlock Bonuses worth{" "}
            <span className="text-primary">₹ 17000 /-</span>
          </h2>

          <div className={styles.cards}>
            <div className="row justify-content-center">
              {[image1, image2, image3].map((image, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                  <div
                    className="text-center p-2 mb-0"
                    style={bonusCardHeaderStyle}
                  >
                    <strong style={{ fontSize: "16px", color: "white" }}>
                      Bonus {index + 1}
                    </strong>
                  </div>
                  <div className="card" style={bonusCardStyle}>
                    <Image
                      src={image}
                      className="card-img-top"
                      alt={`Bonus ${index + 1}`}
                    />
                    <div
                      className="card-body text-center"
                      style={{ backgroundColor: "#e5e0ff" }}
                    >
                      <p className="card-text">
                        <span
                          style={{
                            textDecoration: "line-through",
                            fontSize: "24px",
                            color: "black",
                          }}
                        >
                          ₹{4999 + index * 1000}
                        </span>
                        <span
                          style={{
                            color: "#553cdf ",
                            paddingLeft: "25px",
                            fontSize: "24px",
                            fontWeight: "600",
                          }}
                        >
                          Free
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enroll Button */}
          <div className="d-flex justify-content-center my-3">
            {card && (
              <EnrollButton
                label="Unlock Bonuses"
                courseID={card.id}
                // className={style.Button}
                actionType="Unlock Bonuses"
              />
            )}
          </div>
        </div>

        {/* Section with 3 boxes */}
        <div>
          <p
            className="text-center mb-4"
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              position: "relative",
              top: "25px",
            }}
          >
            What Makes <span style={{ color: "#ff5003" }}>SocialPrachar</span>{" "}
            Stand Out?
          </p>
          {/* Responsive Feature Grid */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div
              className="feature-grid-responsive"
            >
              {/* Feature Cards */}
              {/* 1 */}
              <div className="feature-card-hover">
                <FontAwesomeIcon icon={faChalkboardTeacher} style={featureIconStyle} />
                <div className="feature-card-text">Job-Ready Curriculum Designed by Industry Experts from IIT & IIM Alumni</div>
              </div>
              {/* 2 */}
              <div className="feature-card-hover">
                <FontAwesomeIcon icon={faBriefcase} style={featureIconStyle} />
                <div className="feature-card-text">Internship + Placement-Driven Learning Model</div>
              </div>
              {/* 3 */}
              <div className="feature-card-hover">
                <FontAwesomeIcon icon={faHandshake} style={featureIconStyle} />
                <div className="feature-card-text">Unlimited Placement Support Till You Get Placed</div>
              </div>
              {/* 4 */}
              <div className="feature-card-hover">
                <FontAwesomeIcon icon={faAward} style={featureIconStyle} />
                <div className="feature-card-text">Award-Winning Institute with 16,000+ Alumni</div>
              </div>
              {/* 5 */}
              <div className="feature-card-hover">
                <FontAwesomeIcon icon={faLaptopCode} style={featureIconStyle} />
                <div className="feature-card-text">Flexible Learning Modes with Mentorship & Tools</div>
              </div>
              {/* 6 */}
              <div className="feature-card-hover">
                <FontAwesomeIcon icon={faProjectDiagram} style={featureIconStyle} />
                <div className="feature-card-text">Real-Time Projects That Build Your Portfolio</div>
              </div>
              {/* 7 */}
              <div className="feature-card-hover">
                <FontAwesomeIcon icon={faMoneyBillWave} style={featureIconStyle} />
                <div className="feature-card-text">Stipend Opportunities Up to ₹45,000 During Internship</div>
              </div>
              {/* 8 */}
              <div className="feature-card-hover">
                <FontAwesomeIcon icon={faUserCog} style={featureIconStyle} />
                <div className="feature-card-text">Dedicated HR & Corporate Relations Team for Job Support</div>
              </div>
              {/* 9 */}
              <div className="feature-card-hover">
                <FontAwesomeIcon icon={faCertificate} style={featureIconStyle} />
                <div className="feature-card-text">Access to Certifications from IBM, Microsoft & AWS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mentor Profile Section */}
        <div className={styles.mentorInfo}>
          <div
            className={`position-relative d-flex justify-content-center ${styles.mentorProfile}`}
          >
            {/* Carousel Image */}
            <Image
              src={images[currentImageIndex]}
              alt={`Mentor ${currentImageIndex + 1}`}
              className={`img-fluid ${styles.profileImage}`}
            />

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="btn btn-outline-secondary position-absolute top-50 start-20 translate-middle-y ms-2"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="btn btn-outline-secondary position-absolute top-50 end-20 translate-middle-y me-2"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* Mentor Bio Section */}
          <div className={styles.mentorBio}>
            <div className={styles.bioContent}>
              <h3 className={styles.bioTitle}>Meet your Mentor</h3>
              <p className={styles.bioText}>
                Our certified trainers with 7+ years of industry experience
                ensure hands-on learning with top faculty and excellent lab
                infrastructure. Our HR team supports job placements, and you’ll
                have 24/7 access to an online portal for learning at your
                convenience.
              </p>
              <p className={styles.bioText}>
                We help prepare your CV/Resume for interviews and enhance your
                chances of securing a job. Having trained over 15,000
                professionals in fields like Digital Marketing, Data Science,
                Full Stack Development, AWS + DevOps, and AI, we focus on
                results.
              </p>
              <p className={styles.bioText}>
                Our curriculum balances 30% theory and 70% practical sessions,
                with mentors available throughout the day for doubt-solving
                support.
              </p>
            </div>

            {/* Social Media Statistics */}
            <div className={styles.mentorStats}>
              {[
                {
                  image: instagramLogo,
                  followers: "13.7K+",
                  label: "Followers",
                },
                { image: linkedIn, followers: "6k+", label: "Followers" },
                { image: whatsApp, followers: "5K+", label: "Subscribers" },
              ].map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <Image src={stat.image} alt="" className={styles.statIcon} />
                  <p>{stat.followers}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Featured In Section */}
            <p className={styles.featuredHeading}>
              <span style={{ color: "#ff5003" }}>Social Prachar</span> Got
              Featured in
            </p>
            <div className={styles.featured}>
              <div className={styles.logos}>
                <Image
                  src={featuredIn}
                  alt="Featured Logo"
                  className={styles.featuredImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Styling for bonus card header
const bonusCardHeaderStyle = {
  backgroundColor: "#553cdf",
  border: "2px dashed #553cdf",
  borderBottom: "none",
  width: "90%",
  margin: "0 auto",
  borderRadius: "10px 10px 0 0",
};

// Styling for bonus card
const bonusCardStyle = {
  border: "2px dashed #553cdf",
  borderTop: "none",
  width: "90%",
  margin: "0 auto",
  borderRadius: "0 0 10px 10px",
};

const featureIconStyle = {
  color: '#ff5003',
  fontSize: 40,
  marginBottom: 14,
};

export default Unlockbonuses;
