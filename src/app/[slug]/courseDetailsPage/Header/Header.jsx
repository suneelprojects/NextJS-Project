/** @format */

"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import style from "./Header.module.css";
import Image from "next/image";
import google from '@/assets/successStories/google.png';
import glassdoor_logo from "@/assets/successStories/glassdoor_logo.png";
import jd_logo from "@/assets/successStories/Just-Dial_logo.png";
import EnrollButton from "../ButtonforCourses/Button";
import BackgroundImg from "@/assets/courses/courseDetailspage/background.png";
import FollowerImg from "@/assets/courses/courseDetailspage/FollowewrGroup.webp";
import starSymbol from "@/assets/courses/courseDetailspage/star.svg";

// course title images
import unlockLogo from "@/assets/courses/courseDetailspage/unlock.png";
import booksymbol from "@/assets/courses/courseDetailspage/open-book.png";
import successLogo from "@/assets/courses/courseDetailspage/success.png";
import partnershipLogo from "@/assets/courses/courseDetailspage/hand-shake.png";
import MobileIconLogo from "@/assets/courses/courseDetailspage/mobile-development.png";
import awardImage from "@/assets/homepage/award_image.png";
import jobRolesLogo from "@/assets/courses/courseDetailspage/promotion.png";

// import curriculumLogo from "@/assets/courses/courseDetailspage/folder.png";

// company logos
import company1Logo from "@/assets/successStories/Accenture.png";
import company2Logo from "@/assets/successStories/AWS.png";
import company3Logo from "@/assets/successStories/CISCO.jpg";
import company4Logo from "@/assets/successStories/Cognizant.png";
import company5Logo from "@/assets/successStories/Fusion Technologies.jpeg";
import company6Logo from "@/assets/successStories/GOC.jpg";
import company7Logo from "@/assets/successStories/pinaca_Technology.png";
import company8Logo from "@/assets/successStories/Honeywell.png";
import company9Logo from "@/assets/successStories/mouritech_logo.jpg";
import company10Logo from "@/assets/successStories/Micron Technologies.png";
import company11Logo from "@/assets/successStories/Sonata_Software_Logo.png";
import company12Logo from "@/assets/successStories/succeed_technologies.jpg";
import company13Logo from "@/assets/successStories/Sutherland.png";
import company14Logo from "@/assets/successStories/TCS.png";
import company15Logo from "@/assets/successStories/Tech Mahindra.jpeg";
import company16Logo from "@/assets/successStories/Tiger Analytics.png";
import company17Logo from "@/assets/successStories/tricubics.jpg";
import company18Logo from "@/assets/successStories/Yotta_Data_Services_Logo.jpg";
import company19Logo from "@/assets/successStories/amber_flux_private_limited_logo.jpeg";
import company20Logo from "@/assets/successStories/dell_technologies_logo.png";
import { useParams } from "next/navigation";
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData";
import { FaChevronDown } from 'react-icons/fa';

//font awesome imports
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
  faRocket,
  faCode,
  faMicrophone,
  faGift,
  faPercent,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Unlockbonuses/UnlockbonusesCustom.css';
//importing the quick navigation buttons 
import QuickNavigation from "@/components/QuickNavigation";
import LeadFormDialog from "@/components/LeadFormDialog";
import EmiFormDialog from "@/components/EmiFormDialog";


const logos = [
  { src: company1Logo, alt: "Company 1" },
  { src: company2Logo, alt: "Company 2" },
  { src: company3Logo, alt: "Company 3" },
  { src: company4Logo, alt: "Company 4" },
  { src: company5Logo, alt: "Company 5" },
  { src: company6Logo, alt: "Company 6" },
  { src: company7Logo, alt: "Company 7" },
  { src: company8Logo, alt: "Company 8" },
  { src: company9Logo, alt: "Company 9" },
  { src: company10Logo, alt: "Company 10" },
  { src: company11Logo, alt: "Company 11" },
  { src: company12Logo, alt: "Company 12" },
  { src: company13Logo, alt: "Company 13" },
  { src: company14Logo, alt: "Company 14" },
  { src: company15Logo, alt: "Company 15" },
  { src: company16Logo, alt: "Company 16" },
  { src: company17Logo, alt: "Company 17" },
  { src: company18Logo, alt: "Company 18" },
  { src: company19Logo, alt: "Company 19" },
  { src: company20Logo, alt: "Company 20" },
];

const ratings = [
  {
    logo: google,
    title: "Google",
    rating: "Rated 4.7/5",
  },
  {
    logo: glassdoor_logo,
    title: "Glassdoor",
    rating: "Rated 4.8/5",
  },
  {
    logo: jd_logo,
    title: "Justdial",
    rating: "Rated 4.7/5",
  },
];

const stats = [
  {
    value: "16000+",
    label: "Success Stories since 2014",
    color: "#007bff",
  },
  { value: "1400+", label: "Drives conducted", color: "#28a745" },
  { value: "16 LPA", label: "Highest Salary Package", color: "#ffc107" },
  { value: "3 - 8 LPA", label: "LPA Average Package", color: "#762acd" },
  { value: "10+", label: "Edtech Awards Received", color: "#52de12" },
];


const Header = () => {
  const { slug } = useParams();
  const pathname = usePathname();
  const [card, setCard] = useState(null);
  const redLineRef = useRef(null);
  const doughtsPartRef = useRef(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const cardDetails = data.find((item) => item.slug === slug);
    setCard(cardDetails);
  }, [slug]);

  // below the screen size
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1025);
      setIsSmallScreen(window.innerWidth <= 768);
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1025);
        setIsSmallScreen(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.DoughtsPartVisible);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (doughtsPartRef.current) observer.observe(doughtsPartRef.current);
    if (redLineRef.current) observer.observe(redLineRef.current);

    return () => {
      if (doughtsPartRef.current) observer.unobserve(doughtsPartRef.current);
      if (redLineRef.current) observer.unobserve(redLineRef.current);
    };
  }, []);

  const togglePopup = () => {
    if (isPopupVisible) {
      // Close the form
      setIsPopupVisible(false);
    } else {
      // Open the form
      setIsPopupVisible(true);
    }
  };


  // quick navigation dialog state and functions
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const openDialog = (type) => {
    setDialogType(type);
    setDialogOpen(true);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Offer Banner */}
      <div className={style.headerContainer}>
        <Image src={BackgroundImg} alt="Background" className={style.backgroundImage} />

        <div className="row d-flex justify-content-center mt-4">
          {/* Offer Banner inside the card at top */}
          <div
            className={`px-5 py-4 d-flex flex-column flex-md-row col-11 col-md-12 col-lg-10 col-xl-8 bg-white vh-75 rounded-4 shadow position-relative ${style.card}`}
            style={{ zIndex: 10 }}
          >
            {/* ===== Seamless Scrolling Offer Banner ===== */}

            <div
            // style={{
            //   width: '100%',
            //   height: '35px',
            //   backgroundColor: '#ff5003',
            //   color: 'white',
            //   display: 'flex',
            //   alignItems: 'center',
            //   overflow: 'hidden',
            //   position: 'absolute',
            //   top: 0,
            //   left: 0,
            //   borderTopLeftRadius: '1rem',
            //   borderTopRightRadius: '1rem',
            //   fontSize: '18px',
            //   fontWeight: 'bold',
            // }}
            >
              {/* <div
                style={{
                  display: 'flex',
                  whiteSpace: 'nowrap',
                  animation: 'scrollLeft 40s linear infinite',
                }}
              > */}
              {/* Duplicate content twice for seamless loop */}
              {/* {[...Array(2)].map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      paddingRight: '20px',
                    }}
                  > */}
              {/* <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FontAwesomeIcon icon={faGift} style={{ fontSize: '20px' }} />
                      Limited Time Offer: 20% Off on All Courses!
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FontAwesomeIcon icon={faPercent} style={{ fontSize: '20px' }} />
                      Free Internship with Stipend!
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FontAwesomeIcon icon={faAward} style={{ fontSize: '20px' }} />
                      7 Global Certifications Included!
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '20px' }} />
                      Placement Assistance Till You Get Hired!
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FontAwesomeIcon icon={faHandshake} style={{ fontSize: '20px' }} />
                      Enroll Now and Boost Your Career!
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FontAwesomeIcon icon={faRocket} style={{ fontSize: '20px' }} />
                      Early Bird Discount: 25% Off!
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FontAwesomeIcon icon={faCode} style={{ fontSize: '20px' }} />
                      Build Real Projects and Get Placed!
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FontAwesomeIcon icon={faMicrophone} style={{ fontSize: '20px' }} />
                      Free CRT Sessions for Exam Prep!
                    </div>
                  </div> */}
              {/* ))} */}
              {/* </div> */}

              {/* <style jsx>{`
    @keyframes scrollLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style> */}
            </div>

            {/* ===== End Offer Banner ===== */}


            {/* LEFT CONTENT */}
            <div className="col-md-6 d-flex flex-column justify-content-center px-2 mt-5">
              {/* Added mt-5 to push down content below banner */}
              <h2 className={`${style.headerText}`}>
                {card && (
                  <>
                    {card.Header}
                    <span style={{ color: '#ff5003', textWrap: 'nowrap' }}>{card.Duration}</span>
                  </>
                )}
              </h2>

              {/* Highlighted Text */}
              <p className={`mt-3 ${style.highlightedText}`}>

                Built for 2026  - <span className={style.tagline} > Curriculum That Gets You Hired </span>
              </p>

              {/* Symbol Items */}
              <div className={style.symbolItemContent}>
                <div className={style.symbolItem}>
                  <Image src={unlockLogo} alt="Book symbol" className={style.symbol1} unoptimized />
                  <span className={style.symbolText}>
                    <strong>Students have earned ₹4,45,000 INR through our paid internships.</strong>
                  </span>
                </div>
                <div className={style.symbolItem}>
                  <Image src={booksymbol} alt="Book symbol" className={style.symbol} unoptimized />
                  <span className={style.symbolText}>
                    <strong>3-Month Full-Day Industry Internship</strong>
                  </span>
                </div>
                <div className={style.symbolItem}>
                  <Image src={successLogo} alt="Book symbol" className={style.symbol} />
                  <span className={style.symbolText}>
                    <strong>7 Global Certifications (IBM, Microsoft & more)</strong>
                  </span>
                </div>
                <div className={style.symbolItem}>
                  <Image src={partnershipLogo} alt="Book symbol" className={style.symbol} />
                  <span className={style.symbolText}>
                    <strong>3/5/7 Month Fast-Track Programs with Paid Internship</strong>
                  </span>
                </div>
                <div className={style.symbolItem}>
                  <Image src={MobileIconLogo} alt="Book symbol" className={style.symbol} />
                  <span className={style.symbolText}>
                    <strong>Build 30+ End-to-End AI Applications</strong>
                  </span>
                </div>
                <div className={style.symbolItem}>
                  <Image src={jobRolesLogo} alt="Job roles symbol" className={style.symbol} unoptimized />
                  <span className={style.symbolText}>
                    <strong>Eligible for 10+ High-Demand Job Roles</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT - IMAGE */}
            <div className="col-md-6 d-flex justify-content-center align-items-center mt-5">
              <div className={`${style.HeaderPicture} text-center`}>
                {card && (
                  <Image src={awardImage} alt="Course" className={`img-fluid ${style.headerImage} shadow`} />
                )}
                <div className={style.EnrollButtonContent}>
                  {card && !isSmallScreen && (
                    <EnrollButton
                      label="Watch Free Demo"
                      courseID={card.id}
                      className={style.Button}
                      actionType="Button:Enroll Now"
                    />
                  )}
                  <span>
                    <Image src={FollowerImg} alt="Follower group" className={style.FollowerImage} />
                  </span>
                  <div className={style.reviewContainer}>
                    <div className={style.FollowerStars}>
                      {[...Array(5)].map((_, index) => (
                        <Image
                          key={index}
                          src={starSymbol}
                          alt="Star"
                          className={style.star}
                          style={{ color: 'gold' }}
                        />
                      ))}
                    </div>
                    <span className={style.FollowerCount}>426 reviews (4.7 of 5)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* quick navigation buttons */}
      <section key={pathname} className="sticky top-0 z-[100] bg-white shadow-md">
        <QuickNavigation openDialog={openDialog} scrollToSection={scrollToSection} />
        {dialogType === "emi" ? (
          <EmiFormDialog
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
          />
        ) : (
          <LeadFormDialog
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
            dialogType={dialogType}
          />
        )}
      </section>




      {/* Video Section */}
      {[
        "data-science",
        "awsdevopscourse",
        "artificial-intelligence-course-training-institute-in-hyderabad",
        "generative-ai-course-training-institute-hyderabad",
        "data-analytics-course-training-hyderabad",
      ].includes(slug) && (
          <div className="flex justify-center my-5 px-4">
            <div className="max-w-3xl text-center mx-auto">
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  lineHeight: "1.4",
                }}
              >
                Before you invest your time or money —  <span style={{ color: '#ff5003' }}>watch this video! It’ll change how you see Data Science, AI & Analytics careers</span>
              </h2>
              {card && (
                <EnrollButton
                  label="Watch Free Demo"
                  courseID={card.id}
                  className={style.Button}
                  actionType="Button:Watch Video"
                />
              )}
            </div>
          </div>
        )}


    </>
  );
};

//extra styling for feature icons

const featureIconStyle = {
  color: '#ff5003',
  fontSize: 40,
  marginBottom: 14,
};







export default Header;