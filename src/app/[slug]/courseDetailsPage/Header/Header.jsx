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
import spLogo from "@/assets/sp-logo.jpg";
import ziroLogo from "@/assets/image.png";

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

/* ============================================================
   ================  POWERED LEARNING ECOSYSTEM  ================
   Small presentational helpers used only by the new section below.
   These are intentionally self-contained (inline styles) so they
   don't require any changes to Header.module.css.
   ============================================================ */

// Simple check-mark bullet icon (no new package imports needed)
const CheckIcon = ({ color = "#2563eb" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    style={{ marginTop: "2px", flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="10" fill={color} opacity="0.12" />
    <path
      d="M7.5 12.5L10.3 15.3L16.5 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Round logo placeholder — swap the `letter`/`bg` props for a real
// <Image src={yourLogo} .../> once the logo files are added to /assets
const LogoPlaceholder = ({ letter, bg, fg }) => (
  <div
    style={{
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: bg,
      color: fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: 14,
      flexShrink: 0,
    }}
  >
    {letter}
  </div>
);

// Small vertical 3-dot "menu" icon used on the Build Projects card
const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="2.5" r="1.4" fill="#9ca3af" />
    <circle cx="8" cy="8" r="1.4" fill="#9ca3af" />
    <circle cx="8" cy="13.5" r="1.4" fill="#9ca3af" />
  </svg>
);

// Bullseye / target icon used on the "Track Skills" label
const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="13" r="8" stroke="#2563eb" strokeWidth="2" />
    <circle cx="11" cy="13" r="4.2" stroke="#2563eb" strokeWidth="2" />
    <circle cx="11" cy="13" r="1.3" fill="#2563eb" />
    <path
      d="M15.5 3.5L20.5 3.5L20.5 8.5L17.5 5.5L13.5 9.5L11.5 7.5L15.5 3.5Z"
      fill="#2563eb"
    />
  </svg>
);

// Briefcase icon used on the "Build Projects" label
const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="8" width="18" height="12" rx="2" fill="#16a34a" />
    <rect x="8.5" y="4.5" width="7" height="4.5" rx="1.4" stroke="#16a34a" strokeWidth="2" fill="none" />
    <rect x="3" y="12.5" width="18" height="3" fill="#128a3e" />
  </svg>
);

// Sparkle icon used on the "Practice with AI" label
const SparkleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3L13.6 9.2C13.9 10.4 14.9 11.4 16.1 11.7L22 13.3L16.1 14.9C14.9 15.2 13.9 16.2 13.6 17.4L12 23.6L10.4 17.4C10.1 16.2 9.1 15.2 7.9 14.9L2 13.3L7.9 11.7C9.1 11.4 10.1 10.4 10.4 9.2L12 3Z"
      fill="#9333ea"
    />
    <path
      d="M19 2L19.6 4.3L21.9 4.9L19.6 5.5L19 7.8L18.4 5.5L16.1 4.9L18.4 4.3L19 2Z"
      fill="#c084fc"
    />
  </svg>
);

// Python "logo-style" icon (two interlocking bodies) for the tech stack row
const PythonIcon = () => (
  <svg width="26" height="26" viewBox="0 0 32 32">
    <path
      d="M15.9 3c-6.5 0-6.1 2.8-6.1 2.8v2.9h6.2v.9H7.4S3 9.1 3 15.7c0 6.6 3.8 6.4 3.8 6.4h2.3v-3.1s-.1-3.8 3.7-3.8h6.1s3.6.1 3.6-3.5V6.6S23 3 15.9 3zm-3.4 2c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"
      fill="#3B82F6"
    />
    <path
      d="M16.1 29c6.5 0 6.1-2.8 6.1-2.8v-2.9h-6.2v-.9h8.6s4.4.5 4.4-6.1c0-6.6-3.8-6.4-3.8-6.4h-2.3v3.1s.1 3.8-3.7 3.8h-6.1s-3.6-.1-3.6 3.5v5.1S9 29 16.1 29zm3.4-2c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z"
      fill="#FBBF24"
    />
  </svg>
);

// Database (cylinder) icon for the tech stack row
const DatabaseIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="5" rx="7" ry="2.6" fill="#1d4ed8" />
    <path
      d="M5 5v14c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V5"
      stroke="#1d4ed8"
      strokeWidth="1.8"
      fill="none"
    />
    <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" stroke="#1d4ed8" strokeWidth="1.8" fill="none" />
  </svg>
);

// Stacked layers icon for the tech stack row
const LayersIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L22 7.5L12 13L2 7.5L12 2Z" fill="#0d9488" />
    <path d="M2 12.2L12 17.7L22 12.2" stroke="#0d9488" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 16.8L12 22.3L22 16.8" stroke="#0d9488" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Connected-nodes icon for the tech stack row
const NetworkIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M6 6L18 18M18 6L6 18" stroke="#4f46e5" strokeWidth="1.8" />
    <circle cx="6" cy="6" r="3" fill="#4f46e5" />
    <circle cx="18" cy="6" r="3" fill="#4f46e5" />
    <circle cx="6" cy="18" r="3" fill="#4f46e5" />
    <circle cx="18" cy="18" r="3" fill="#4f46e5" />
  </svg>
);

// Bar-chart icon for the tech stack row
const BarChartIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="12" width="4" height="9" rx="1" fill="#166534" />
    <rect x="10" y="7" width="4" height="14" rx="1" fill="#166534" />
    <rect x="17" y="3" width="4" height="18" rx="1" fill="#166534" />
  </svg>
);

// Cute robot avatar used on the "Practice with AI" card
const RobotAvatar = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" style={{ flexShrink: 0 }}>
    <circle cx="16" cy="7" r="1.8" fill="#7c3aed" />
    <line x1="16" y1="8.5" x2="16" y2="13" stroke="#7c3aed" strokeWidth="1.8" />
    <rect x="4" y="13" width="24" height="20" rx="9" fill="#ede9fe" stroke="#a855f7" strokeWidth="1.6" />
    <rect x="9" y="19" width="14" height="9" rx="4.5" fill="#fff" />
    <circle cx="13.5" cy="23.5" r="1.9" fill="#4c1d95" />
    <circle cx="18.5" cy="23.5" r="1.9" fill="#4c1d95" />
  </svg>
);

// Icon-in-circle + title + underline used above each feature description
const FeatureLabel = ({ icon, title, color }) => (
  <div style={{ marginTop: "10px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: `${color}1A`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <span style={{ fontWeight: 800, fontSize: "19px", color: color }}>{title}</span>
    </div>
    <div style={{ width: 28, height: 3, borderRadius: 2, background: color, marginTop: "4px", marginLeft: "50px" }} />
  </div>
);

// Shared shell for the 3 right-hand feature cards
const FeatureCard = ({ tint, border, titleColor, icon, title, description, children }) => (
  <div
    className="ecosystemCard"
    style={{
      background: tint,
      border: `1px solid ${border}`,
      borderRadius: "20px",
      padding: "12px",
      textAlign: "left",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        background: "#fff",
        border: "1px solid #eef0f3",
        borderRadius: "14px",
        padding: "14px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
      }}
    >
      {children}
    </div>

    <FeatureLabel icon={icon} title={title} color={titleColor} />

    <p
      style={{
        fontSize: "13.5px",
        color: "#1f2937",
        lineHeight: 1.4,
        marginTop: "8px",
        marginBottom: 0,
      }}
    >
      {description}
    </p>
  </div>
);

// "Skill Progress" graphic — ring + weekly bar chart — for the Track Skills card
const SkillProgressGraphic = () => {
  const bars = [
    { day: "Mon", val: 45 },
    { day: "Tue", val: 60 },
    { day: "Wed", val: 78 },
    { day: "Thu", val: 92 },
    { day: "Fri", val: 88 },
  ];
  const maxBarHeight = 32;

  return (
    <div>
      <div style={{ fontWeight: 700, fontSize: "11px", color: "#111827", marginBottom: "6px" }}>
        Skill Progress
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2px" }}>
        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <div style={{ position: "relative", width: 44, height: 44 }}>
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="18" fill="none" stroke="#dbe6f7" strokeWidth="5" />
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="#2563eb"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 18}
                strokeDashoffset={2 * Math.PI * 18 * (1 - 0.78)}
                transform="rotate(-90 22 22)"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 800,
                color: "#1d4ed8",
              }}
            >
              78%
            </div>
          </div>
          <div style={{ fontSize: "8px", color: "#6b7280", marginTop: "1px", whiteSpace: "nowrap" }}>
            Overall
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: maxBarHeight + 14 }}>
          {bars.map((b, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "7.5px", fontWeight: 700, color: "#111827", marginBottom: "1px" }}>
                {b.val}%
              </span>
              <div
                style={{
                  width: 5,
                  height: (b.val / 100) * maxBarHeight,
                  borderRadius: "2px",
                  background: "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)",
                }}
              />
              <span style={{ fontSize: "7.5px", color: "#9ca3af", marginTop: "1px" }}>{b.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// "Customer Churn Prediction" mini kanban-card graphic for Build Projects
const ChurnPredictionGraphic = () => (
  <div>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
      <div style={{ fontSize: "15px", fontWeight: 800, color: "#111827", lineHeight: 1.25, maxWidth: "82%" }}>
        Customer Churn Prediction
      </div>
      <DotsIcon />
    </div>

    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "11.5px",
        fontWeight: 600,
        color: "#15803d",
        background: "#dcfce7",
        borderRadius: "16px",
        padding: "3px 10px",
        margin: "8px 0 10px",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
      In Progress
    </span>

    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
      <PythonIcon />
      <DatabaseIcon />
      <LayersIcon />
      <NetworkIcon />
      <BarChartIcon />
    </div>
  </div>
);

// Chat-bubble graphic for Practice with AI
const ChatBotGraphic = () => (
  <div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
      <RobotAvatar />
      <div
        style={{
          background: "#ede9fe",
          color: "#3b0764",
          fontSize: "12px",
          fontWeight: 500,
          borderRadius: "12px 12px 12px 2px",
          padding: "8px 10px",
          lineHeight: 1.3,
        }}
      >
        How do I handle missing values?
      </div>
    </div>
    <div
      style={{
        background: "#fff",
        border: "1px solid #ece9f7",
        color: "#111827",
        fontSize: "12px",
        borderRadius: "12px",
        padding: "8px 10px",
        marginTop: "4px",
        lineHeight: 1.3,
      }}
    >
      Here's how you can handle missing values...
    </div>
  </div>
);

// Footer bar icons & item list for Powered Learning Ecosystem bottom section
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="7" r="4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrainGearIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="5" width="14" height="14" rx="3" stroke="#ff5003" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" stroke="#ff5003" strokeWidth="2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#ff5003" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="17 6 23 6 23 12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="#9333ea" strokeWidth="2" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="#9333ea" strokeWidth="2" />
    <path d="M4 22h16" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34" stroke="#9333ea" strokeWidth="2" />
    <path d="M6 4h12v6a6 6 0 0 1-12 0V4z" stroke="#9333ea" strokeWidth="2" />
  </svg>
);

const StarRibbonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="6" stroke="#4f46e5" strokeWidth="2" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ecosystemFooterItems = [
  {
    icon: <UsersIcon />,
    bg: "#dbeafe",
    title: "Learn Smarter",
    description: "Expert-led training & structured guidance.",
  },
  {
    icon: <BrainGearIcon />,
    bg: "#ffedd5",
    title: "Practise Better",
    description: "AI-powered practice & real-world learning environment.",
  },
  {
    icon: <TrendingUpIcon />,
    bg: "#dcfce7",
    title: "Track Progress",
    description: "Measure skills, performance & improvement.",
  },
  {
    icon: <TrophyIcon />,
    bg: "#f3e8ff",
    title: "Achieve Outcomes",
    description: "Convert skills into internships, placements & career growth.",
  },
  {
    icon: <StarRibbonIcon />,
    bg: "#e0e7ff",
    title: "Career Growth",
    description: "Dedicated placement support & interview preparation.",
  },
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

      <div className={style.headerContainer}>
        {!isMobile && (
          <Image
            src={BackgroundImg}
            alt="Background"
            className={style.backgroundImage}
            loading="lazy"
          />
        )}

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
              {card && (
                <>
                  <h1 className={style.headerText}>
                    India’s <span style={{ color: '#ff5003' }}>#1</span> <br />
                    {card.text} Program with <span style={{ color: '#ff5003' }}>Career Intelligence</span>

                  </h1>

                  <p className={`mt-3 ${style.highlightedText}`}>
                    {card?.subText} <span className={style.tagline}>{card?.subTextHighlits}</span>
                  </p>

                  <div className={style.symbolItemContent}>
                    <div className={style.symbolItem}>
                      <Image src={unlockLogo} alt="Book symbol" className={style.symbol1} unoptimized />
                      <span className={style.symbolText}>
                        <strong>{card?.highlights?.[0]}</strong>
                      </span>
                    </div>
                    <div className={style.symbolItem}>
                      <Image src={booksymbol} alt="Book symbol" className={style.symbol} unoptimized />
                      <span className={style.symbolText}>
                        <strong>{card?.highlights?.[1]}</strong>
                      </span>
                    </div>
                    <div className={style.symbolItem}>
                      <Image src={successLogo} alt="Book symbol" className={style.symbol} />
                      <span className={style.symbolText}>
                        <strong>{card?.highlights?.[2]}</strong>
                      </span>
                    </div>
                    <div className={style.symbolItem}>
                      <Image src={partnershipLogo} alt="Book symbol" className={style.symbol} />
                      <span className={style.symbolText}>
                        <strong>{card?.highlights?.[3]}</strong>
                      </span>
                    </div>
                    <div className={style.symbolItem}>
                      <Image src={MobileIconLogo} alt="Book symbol" className={style.symbol} />
                      <span className={style.symbolText}>
                        <strong>{card?.highlights?.[4]}</strong>
                      </span>
                    </div>
                    <div className={style.symbolItem}>
                      <Image src={successLogo} alt="Book symbol" className={style.symbol} />
                      <span className={style.symbolText}>
                        <strong>{card?.highlights?.[5]}</strong>
                      </span>
                    </div>
                    <div className={style.symbolItem}>
                      <Image src={jobRolesLogo} alt="Job roles symbol" className={style.symbol} unoptimized />
                      <span className={style.symbolText}>
                        <strong>{card?.highlights?.[6]}</strong>
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* RIGHT CONTENT - IMAGE */}
            <div className="col-md-6 d-flex justify-content-center align-items-center mt-5">
              <div className={`${style.HeaderPicture} text-center`}>
                {card && (
                  <Image src={awardImage} alt="Course" className={`img-fluid ${style.headerImage} shadow`} loading="lazy" />
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
                  {!isMobile && (
                    <>
                      <span>
                        <Image src={FollowerImg} alt="Follower group" className={style.FollowerImage} loading="lazy" />
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
                              loading="lazy"
                            />
                          ))}
                        </div>
                        <span className={style.FollowerCount}>426 reviews (4.7 of 5)</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >



      {/* quick navigation buttons */}
      < section key={pathname} className="sticky top-0 z-[100] bg-white shadow-md" >
        <QuickNavigation openDialog={openDialog} scrollToSection={scrollToSection} />
        {
          dialogType === "emi" ? (
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
          )
        }
      </section >




      {/* Video Section */}
      {
        [
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
        )
      }


      {/* ================= Powered Learning Ecosystem Section ================= */}
      <div className="ecosystemWrapper">
        <div style={{ maxWidth: "1200px", width: "100%", textAlign: "center", margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#ffffff",
              color: "#4f46e5",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1px",
              padding: "6px 16px",
              borderRadius: "20px",
              marginBottom: "16px",
            }}
          >
            POWERED LEARNING ECOSYSTEM
          </span>

          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Training Is Only Half the Journey.{" "}
            <span style={{ color: "#ff5003" }}>Ziro</span> Completes the Other Half.
          </h2>

          <p style={{ fontSize: "16px", color: "#6b7280", marginBottom: "40px" }}>
            SocialPrachar teaches you. Ziro helps you practise, prove and convert skills into career outcomes.
          </p>

          <div className="ecosystemGrid">
            {/* Plus divider — overlaps the gap between card 1 and card 2 on laptop screens */}
            <div className="plusDivider">+</div>

            {/* Card 1 - SocialPrachar */}
            <div
              className="ecosystemCard"
              style={{
                background: "#fff",
                border: "1px solid #eef0f3",
                borderRadius: "16px",
                padding: "16px 14px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                textAlign: "left",
              }}
            >
              <div className="d-flex align-items-center mb-2" style={{ gap: "10px" }}>
                <Image src={spLogo} alt="SocialPrachar Logo" width={32} height={32} style={{ objectFit: "contain", borderRadius: "6px" }} />
                <span style={{ fontWeight: 700, fontSize: "17px", color: "#1e40af" }}>
                  SocialPrachar
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Live classes with expert trainers",
                  "Mentorship from industry professionals",
                  "Industry-aligned curriculum",
                  "Doubt support & doubt-clearing sessions",
                  "Placement guidance & career support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="d-flex align-items-start mb-2"
                    style={{ gap: "6px" }}
                  >
                    <CheckIcon color="#2563eb" />
                    <span style={{ fontSize: "13px", lineHeight: 1.35, color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 - Ziro */}
            <div
              className="ecosystemCard"
              style={{
                background: "#fff7f2",
                border: "1px solid #ffd9c2",
                borderRadius: "16px",
                padding: "16px 14px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                textAlign: "left",
              }}
            >
              <div className="d-flex align-items-center mb-2" style={{ gap: "10px" }}>
                <Image src={ziroLogo} alt="Ziro Logo" width={32} height={32} style={{ objectFit: "contain", borderRadius: "6px" }} />
                <span style={{ fontWeight: 700, fontSize: "17px", color: "#ff5003" }}>Ziro</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "AI practice labs & smart learning",
                  "Weekly skill assessments",
                  "Performance dashboard & insights",
                  "Real-world projects with evaluation",
                  "Internship workspace & trackers",
                  "Interview preparation & mock tests",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="d-flex align-items-start mb-2"
                    style={{ gap: "6px" }}
                  >
                    <CheckIcon color="#ff5003" />
                    <span style={{ fontSize: "13px", lineHeight: 1.35, color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 - Track Skills */}
            <FeatureCard
              tint="#eef5ff"
              border="#d6e6fb"
              titleColor="#2563eb"
              icon={<TargetIcon />}
              title="Track Skills"
              description="Real-time skill scores, progress & insights."
            >
              <SkillProgressGraphic />
            </FeatureCard>

            {/* Card 4 - Build Projects */}
            <FeatureCard
              tint="#eefaf1"
              border="#d3f0dc"
              titleColor="#16a34a"
              icon={<BriefcaseIcon />}
              title="Build Projects"
              description="Work on real datasets and deploy projects."
            >
              <ChurnPredictionGraphic />
            </FeatureCard>

            {/* Card 5 - Practice with AI */}
            <FeatureCard
              tint="#f5f0fe"
              border="#e5d8fb"
              titleColor="#9333ea"
              icon={<SparkleIcon />}
              title="Practice with AI"
              description="Get instant help, explanations & AI-powered practice."
            >
              <ChatBotGraphic />
            </FeatureCard>
          </div>

          {/* ================= Bottom 5 Cards Feature Bar ================= */}
          <div className="ecosystemFooter">
            <div className="ecosystemFooterGrid">
              {ecosystemFooterItems.map((item, idx) => (
                <div key={idx} className="footerCard">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: item.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#111827",
                        margin: "0 0 3px 0",
                        lineHeight: 1.3,
                        textAlign: "left",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#6b7280",
                        margin: 0,
                        lineHeight: 1.4,
                        textAlign: "left",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .ecosystemWrapper {
            background-color: #eaf6ff;
            padding: 56px 16px;
          }
          .ecosystemGrid {
            position: relative;
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            align-items: stretch;
          }
          @media (min-width: 576px) {
            .ecosystemGrid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1200px) {
            .ecosystemGrid {
              grid-template-columns: minmax(0, 1.3fr) minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
            }
          }
          .ecosystemCard {
            width: 100%;
            height: 100%;
            min-width: 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
          }
          .ecosystemFooter {
            background-color: #ffffff;
            border-radius: 20px;
            padding: 24px;
            margin-top: 32px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
            border: 1px solid #eef2f6;
            width: 100%;
          }
          .ecosystemFooterGrid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            align-items: stretch;
            width: 100%;
          }
          @media (min-width: 576px) {
            .ecosystemFooterGrid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1200px) {
            .ecosystemFooterGrid {
              grid-template-columns: repeat(5, 1fr);
            }
          }
          .footerCard {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            text-align: left;
            box-sizing: border-box;
          }
          .plusDivider {
            display: none;
          }
          @media (min-width: 1200px) {
            .plusDivider {
              display: flex;
              position: absolute;
              top: 50%;
              left: calc(23.2% - 8px);
              transform: translate(-50%, -50%);
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: #fff;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              align-items: center;
              justify-content: center;
              font-size: 20px;
              font-weight: 300;
              color: #9ca3af;
              z-index: 2;
            }
          }
        `}</style>
      </div>
      {/* ================= End Powered Learning Ecosystem Section ================= */}


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