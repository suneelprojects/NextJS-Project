"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './ScholarShipTest.module.css';
import ScholarshipFormTest from './ScholarshipFormTest';

// images importing 
import heroimg from '../../assets/schlorship/schlorshippage-1.jpg'
import heroimg3 from '../../assets/schlorship/img-2.png'
import backgroundImage from '../../assets/schlorship/image.png'

// Components




// Button Component
const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const buttonClass = `${styles.button} ${styles[`button-${variant}`]} ${className}`;
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

// Card Component
const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
};

const ScholarshipTest = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const router = useRouter();

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleExploreClick = () => {
    router.push("/");
  };
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.backgroundImageContainer}>
          <Image
            src={backgroundImage}
            alt="Scholarship background"
            fill
            className={styles.backgroundImage}
            priority
            unoptimized
          />
          <div className={styles.backgroundOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Win Up to 100% Scholarship on SocialPrachar's Pre-Placement Program
          </h1>
          <p className={styles.heroSubtitle}>
            Take a 30-minute online test and secure discounts up to 100% on our Job-Ready Pre-Placement Program for Final-Year Students (BTech, MBA, MCA, Degree).
          </p>
          <div className={styles.heroButtons}>
            <Button className={styles.heroButtonPrimary} onClick={togglePopup}>
              Register Now
            </Button>
            <Button variant="outline" className={styles.heroButtonSecondary} onClick={handleExploreClick}>
              Explore SocialPrachar
            </Button>
          </div>
        </div>
      </section>

      {/* Transform Your Journey Section */}
      <section className={styles.journeySection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Transform Your Campus-to-Career Journey
          </h2>
          <div className={styles.journeyGrid}>
            <div>
              <p className={styles.journeyText}>
                The transition from campus to career can be challenging, but with the right preparation, you can stand out from the crowd. SocialPrachar's Pre-Placement Program is designed to bridge the gap between academic knowledge and industry requirements, making you job-ready from day one.
              </p>
              <p className={styles.journeyText}> Our <span className={styles.stylingtext} >  Scholarship Test 2025-26 offers</span> an incredible opportunity for final-year students to access this transformative program at a significantly reduced cost—or even for free.</p>
              <p className={styles.journeyText}> This 30-minute online assessment not only evaluates your current aptitude, coding, and reasoning skills but also rewards your performance with substantial discounts on our comprehensive pre-placement training.</p>
            </div>
            <div className={styles.journeyImageContainer}>
              <Image 
                src={heroimg} 
                alt="Professional training session" 
                className={styles.journeyImage}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Comprehensive Pre-Placement Program */}
      <section className={styles.programSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Our Comprehensive Pre-Placement Program
          </h2>
          <div className={styles.programGrid}>
            {/* What You'll Learn */}
            <Card className={styles.programCard}>
              <h3 className={styles.cardTitle}>What You'll Learn</h3>
              <ul className={styles.cardList}>
                {[
                  "Technical skills relevant to your field and industry demands",
                  "Soft skills and communication training for interviews",
                  "Resume building and LinkedIn profile optimization",
                  "Mock interviews with industry professionals",
                  "Aptitude and reasoning skill enhancement",
                  "Problem-solving and critical thinking development"
                ].map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    <div className={styles.listBullet}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Program Highlights */}
            <Card className={styles.programCard}>
              <h3 className={styles.cardTitle}>Program Highlights</h3>
              <ul className={styles.cardList}>
                {[
                  "Real-time industry projects for hands-on experience",
                  "Mentorship from active industry professionals",
                  "Placement assistance with partner companies",
                  "Regular assessments and performance tracking",
                  "Personalized feedback and improvement plans",
                  "Access to exclusive job opportunities"
                ].map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    <div className={styles.listBullet}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className={styles.programInfo}>
            <p className={styles.programPrice}>
              The Pre-Placement Program is valued at ₹45,000, reflecting its comprehensive nature and proven results. However, through our scholarship test, you can access this career-transforming program at a significantly reduced cost or even for free if you're among the top performers.
            </p>
            <p className={styles.programDescription}>
              Our curriculum is regularly updated to align with industry requirements, ensuring that you're learning skills that are currently in demand. This approach has helped our students secure packages ranging from ₹3 LPA to ₹16 LPA across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose SocialPrachar Stats */}
      <section className={styles.statsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Why Choose SocialPrachar?
          </h2>
          <div className={styles.statsGrid}>
            <div>
              <Image 
                src={heroimg3} 
                alt="Student coding in modern environment" 
                className={styles.statsImage}
                unoptimized
              />
            </div>
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Years Experience</div>
                <div className={styles.statDescription}>A decade of excellence in EdTech and placement preparation</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>16,000+</div>
                <div className={styles.statLabel}>Students Trained</div>
                <div className={styles.statDescription}>Successfully prepared thousands of students for corporate careers</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>Placement Success</div>
                <div className={styles.statDescription}>Industry-leading placement ratio across various sectors</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>9</div>
                <div className={styles.statLabel}>National Awards</div>
                <div className={styles.statDescription}>Recognized for excellence in EdTech and career preparation</div>
              </div>
            </div>
          </div>
          <div className={styles.statsFooter}>
            <p>
              With packages ranging from ₹3 LPA to ₹16 LPA secured by our students, SocialPrachar has established itself as a trusted Campus-to-Career partner for thousands of graduates. Our industry connections, real-time projects, and experienced mentors ensure you're job-ready from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship Test Section */}
      <section className={styles.scholarshipSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Scholarship Rewards Based on Your Performance
          </h2>
          <p className={styles.scholarshipIntro}>
            Our Scholarship Test 2025-26 offers an incredible opportunity for final-year students to access this transformative program at a significantly reduced cost—or even for free.
          </p>
          <p className={styles.scholarshipDescription}>
            This 30-minute online assessment not only evaluates your current aptitude, coding, and reasoning skills but also rewards your performance with substantial discounts on our comprehensive pre-placement training.
          </p>
          <p className={styles.scholarshipDetails}>
            The test consists of 30 multiple-choice questions designed to assess your readiness for the corporate world. Whether you're pursuing BTech, MBA, MCA, or any degree program, this scholarship opportunity is open to all final-year students graduating in 2025 or 2026.
          </p>
          
          {/* Scholarship Table */}
          <Card className={styles.scholarshipTable}>
            <div className={styles.tableContainer}>
              <h3 className={styles.tableTitle}>Your Score (out of 30) vs Scholarship Reward</h3>
              <div className={styles.tableContent}>
                <div className={styles.tableHeader}>
                  <div className={styles.tableHeaderCell}>Your Score (out of 30)</div>
                  <div className={styles.tableHeaderCell}>Scholarship Reward</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}>30/30</div>
                  <div className={`${styles.tableCell} ${styles.topReward}`}>100% Scholarship - FREE Program (Top 3 students per month)</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}>26-29</div>
                  <div className={styles.tableCell}>₹10,000 Discount</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}>21-25</div>
                  <div className={styles.tableCell}>₹8,000 Discount</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}>16-20</div>
                  <div className={styles.tableCell}>₹5,000 Discount</div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}>Below 15</div>
                  <div className={styles.tableCell}>₹2,000 Discount</div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className={styles.scholarshipFooter}>
            <p className={styles.scholarshipNote}>
              Every participant receives a minimum discount of ₹2,000, ensuring that everyone benefits from taking the test. However, the real prize awaits those who achieve a perfect score—the top three performers each month receive the entire program absolutely free, a value of ₹45,000!
            </p>
            <p className={styles.scholarshipSubnote}>
              This tiered reward system encourages you to prepare well and perform at your best, while still providing value to every participant regardless of their score.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Key Benefits of Our Scholarship Program
          </h2>
          <div className={styles.benefitsGrid}>
            <Card className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Financial Accessibility</h3>
              <p className={styles.benefitDescription}>
                Join our comprehensive Pre-Placement Program at an affordable cost with discounts ranging from ₹2,000 to complete fee waiver based on your test performance.
              </p>
            </Card>
            <Card className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Skill Assessment</h3>
              <p className={styles.benefitDescription}>
                Test your aptitude, coding, and reasoning abilities through a structured assessment that helps identify your strengths and areas for improvement.
              </p>
            </Card>
            <Card className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Equal Opportunity</h3>
              <p className={styles.benefitDescription}>
                Open to all streams including BTech, MBA, MCA, and other degree programs, ensuring every final-year student has access to quality placement preparation.
              </p>
            </Card>
            <Card className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>Stress-Free Career Preparation</h3>
              <p className={styles.benefitDescription}>
                Begin your Campus-to-Career journey without financial stress, focusing entirely on skill development and placement readiness.
              </p>
            </Card>
          </div>
          <div className={styles.benefitsFooter}>
            <p>
              The scholarship program is designed not just as a discount mechanism but as a comprehensive approach to make quality placement preparation accessible to deserving students. By rewarding academic merit and aptitude, we ensure that financial constraints don't stand in the way of career success.
            </p>
          </div>
          <div className={styles.benefitsNote}>
            <p>
              Monthly test cycles mean you can attempt the scholarship test multiple times if needed, giving you the flexibility to improve your score and secure a better discount.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqGrid}>
            <Card className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>Who can take this scholarship test?</h3>
              <p className={styles.faqAnswer}>
                The test is open to all final-year students graduating in 2025 and 2026, regardless of their stream (BTech, MBA, MCA, or any degree program).
              </p>
            </Card>
            <Card className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>How long is the test and what does it cover?</h3>
              <p className={styles.faqAnswer}>
                The test is 30 minutes long and consists of 30 multiple-choice questions covering aptitude, coding fundamentals, and logical reasoning.
              </p>
            </Card>
            <Card className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>What happens if I score 30/30?</h3>
              <p className={styles.faqAnswer}>
                If you achieve a perfect score, you'll be considered for the 100% scholarship. However, only the top 3 performers each month receive the program completely free. Other 30/30 scorers receive a ₹10,000 discount.
              </p>
            </Card>
          </div>
          <div className={styles.faqFooter}>
            <p>
              Our scholarship test is designed to be challenging yet fair, giving every student an equal opportunity to demonstrate their abilities. The test is conducted online, allowing you to take it from the comfort of your home or campus.
            </p>
            <p className={styles.faqSubnote}>
              Remember that even if you don't achieve a perfect score, every participant receives a minimum discount of ₹2,000 on the program fee. This ensures that taking the test is beneficial for everyone, regardless of their performance.
            </p>
          </div>
        </div>
      </section>

      {/* Equal Opportunity Section */}
      <section className={styles.opportunitySection}>
        <div className={styles.sectionContainer}>
          <div className={styles.opportunityGrid}>
            <Card className={styles.opportunityCard}>
              <h3 className={styles.opportunityTitle}>Equal Opportunity</h3>
              <p className={styles.opportunityDescription}>
                Open to all streams including BTech, MBA, MCA, and other degree programs, ensuring every final-year student has access to quality placement preparation.
              </p>
            </Card>
            <Card className={styles.opportunityCard}>
              <h3 className={styles.opportunityTitle}>Stress-Free Career Preparation</h3>
              <p className={styles.opportunityDescription}>
                Begin your Campus-to-Career journey without financial stress, focusing entirely on skill development and placement readiness.
              </p>
            </Card>
          </div>
        </div>
      </section>


      {/* The Scholarship Test Process Section */}
      <section className={styles.processSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>The Scholarship Test Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <h3>Register Online</h3>
              <p>Complete a simple registration form with your basic details and educational background.</p>
            </div>
            <div className={styles.processItem}>
              <h3>Schedule Your Test</h3>
              <p>Choose from multiple available slots that fit your schedule.</p>
            </div>
            <div className={styles.processItem}>
              <h3>Take the 30-Minute Test</h3>
              <p>Complete 30 MCQs covering aptitude, coding, and reasoning.</p>
            </div>
            <div className={styles.processItem}>
              <h3>Receive Your Results</h3>
              <p>Get your score and corresponding scholarship discount immediately after completion.</p>
            </div>
          </div>
          <p className={styles.processDescription}>
            The entire process is designed to be straightforward and user-friendly. Our online platform ensures a smooth test-taking experience, with clear instructions and a timer to help you manage your time effectively.
          </p>
          <p className={styles.processDescription}>
            After receiving your results, our team will guide you through the next steps to enroll in the Pre-Placement Program with your earned discount applied. The sooner you take the test, the earlier you can begin your preparation for placement season.
          </p>
          <p className={styles.processDescription}>
            Remember, the top 3 performers each month receive the program completely free—a 100% scholarship worth ₹45,000!
          </p>
        </div>
      </section>

      {/* Preparing for the Scholarship Test Section */}
<section className={styles.preparationSection}>
  
  <div className={styles.sectionContainer}>
    <h2 className={styles.sectionTitle}>Preparing for the Scholarship Test</h2>
      <div className={styles.preparationGrid}>
      <div className={styles.preparationItem}>
        <h3>Test Structure</h3>
        <ul>
          <li> <span className={styles.boldlist}>Duration:</span> 30 minutes</li>
          <li> <span className={styles.boldlist}>Questions:</span>  30 multiple-choice questions</li>
          <li><span className={styles.boldlist}>  Sections:</span> Aptitude, Coding Fundamentals, Logical Reasoning</li>
          <li> <span className={styles.boldlist}>Difficulty:</span> Moderate to challenging</li>
        </ul>
        <p>The test is designed to assess your current skill level and potential for growth. While challenging, it's fair and aligned with industry standards for entry-level positions.</p>
      </div>
      <div className={styles.preparationItem}>
        <h3>Preparation Tips</h3>
        <ul className={styles.preparationList}>
          <li>Review basic mathematical concepts and formulas</li>
          <li>Practice logical reasoning puzzles and patterns</li>
          <li>Brush up on fundamental programming concepts (even for non-technical students)</li>
          <li>Take timed practice tests to improve speed and accuracy</li>
          <li>Get adequate rest before the test day</li>
        </ul>
        <p>While preparation can certainly help improve your score, the test is designed to assess your natural aptitude and potential rather than just memorized knowledge. Focus on understanding concepts rather than rote learning, and practice time management to ensure you can complete all 30 questions within the 30-minute timeframe.</p>
      </div>
    </div>
  </div>

  
</section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to Transform Your Career?
          </h2>
          <p className={styles.ctaSubtitle}>
            Don't miss this opportunity to kickstart your professional journey. Take the scholarship test today and unlock your potential with SocialPrachar's comprehensive placement preparation program.
          </p>
          <div className={styles.ctaButtons}>
            <Button className={styles.ctaButtonPrimary} onClick={togglePopup}>
              Take Scholarship Test Now
            </Button>
            <Button variant="outline" className={styles.ctaButtonSecondary}>
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Scholarship Form Popup */}
      {isPopupVisible && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <ScholarshipFormTest onClose={togglePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScholarshipTest;
























// "use client";

// import React, { useEffect, useRef, useState } from "react";

// import style from "./ScholarShipTest.module.css";
// import testImage from "@/assets/more/SocialPrachar.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGraduationCap,
//   faMedal,
//   faPen,
//   faTrophy,
// } from "@fortawesome/free-solid-svg-icons";
// import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
// import ScholarshipFormTest from "./ScholarshipFormTest";
// import Image from "next/image";
// import Accordion from "../subscription/[userType]/subscription-comp/Accordion";
// import { useDateContext } from "@/components/Forms/DateContext";

// const faqData = [
//   {
//     question: "What is Social Prachar?",
//     answer:
//       "It is one of the largest online scholarship competitions in India. All Participants in Social Prachar receive a substantial scholarship for Social Prachar’s Beginner Full Stack Web Development & Data Analytics Course.",
//   },
//   {
//     question: "Who is eligible for the Test?",
//     answer:
//       "Anyone and everyone is eligible!! (Students already enrolled in Social Prachar’s Main Batch cannot avail the scholarship).",
//   },
//   {
//     question: "What total prize money will be awarded after the Test?",
//     answer:
//       "We are contributing more than Rs 1Cr. worth of scholarships for participants of our test. The prizes will be given in the form of scholarships depending on the rank you score on the aptitude test.",
//   },
//   {
//     question: "Can I use my phone to take part in this Test?",
//     answer:
//       "No. You can't use your Mobile Phones/tablets to give the Test. Use only Laptop/Desktop.",
//   },
//   {
//     question: "How exactly do I take part in this challenge?",
//     answer:
//       "Steps to take part in the challenge: Register for the challenge, Visit the challenge page on the start date/time, Click on ‘Attempt Now’ to proceed.",
//   },
//   {
//     question: "What will be the syllabus of the aptitude test?",
//     answer:
//       "The syllabus typically includes topics like logical reasoning, quantitative aptitude, verbal ability, and analytical reasoning. Check the official website for detailed syllabus information.",
//   },
//   {
//     question: "Will the questions be MCQ based?",
//     answer: "Yes, all the questions will be MCQ based.",
//   },
//   {
//     question: "When will the test results be announced?",
//     answer: "The results will be announced within 48 hours on this page.",
//   },
//   {
//     question: "Shall I write multiple times?",
//     answer:
//       "No, Only ONE time per user is eligible. We will consider your First test marks in order to provide you the discount.",
//   },
// ];

// const ScholarShipTest = () => {
//   const { scholarshipTestDate } = useDateContext();
//   const [openIndex, setOpenIndex] = useState(null);
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [wednesdayDate, setWednesdayDate] = useState("");

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };
//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // displaying Date
//   const formatDate = (dateString) => {
//     if (!dateString) return { month: "Month", day: "00", year: "0000" };

//     const date = new Date(dateString);
//     const options = { month: "long" };

//     return {
//       month: new Intl.DateTimeFormat("en-US", options).format(date),
//       day: date.getDate().toString().padStart(2, "0"),
//       year: date.getFullYear(),
//     };
//   };

//   const onlineDate = formatDate(scholarshipTestDate?.onlineDate);
//   const offlineDate = formatDate(scholarshipTestDate?.offlineDate);

//   return (
//     <>
//       <div
//         className={`${style.container} d-flex flex-column align-items-center text-center`}
//         style={{ margin: "0 auto", maxWidth: "1200px", padding: "20px" }}
//       >
//         <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//           Every week one <span className="text-orange-500">Top Winner (Offline Test)</span>,
//           whoever cracks
//           <span className="text-green-600"> 30/30 </span> in less time will get
//           a
//           <span className="text-orange-500 uppercase font-black">
//             {" "}
//             complete FREE Course{" "}
//           </span>
//           <span className="text-indigo-600">(No Hidden Charges)</span> & Guaranteed Placement
//         </h1>
//         <div className="relative w-full max-w-3xl mb-8 shadow-2xl rounded-xl overflow-hidden">
//           <Image
//             src={testImage}
//             alt="Scholarship Test"
//             className="img-fluid"
//             priority
//           />
//         </div>
//         <h1 className="mb-2 fw-bold text-black py-2 text-center">
//           Upcoming Tests:
//         </h1>
//         <div className={`${style.eventsContainer} d-flex gap-3 hover`}>
//           {/* Online Test Card */}
//           <div className={`${style.eventCard}`}>
//             <div className={style.dateBox}>
//               <div className={style.month}>{onlineDate.month}</div>
//               <div className={style.day}>{onlineDate.day}</div>
//               <div className={style.year}>{onlineDate.year}</div>
//             </div>

//             <div className={style.eventDetails}>
//               <div className={`${style.eventTitle} online`}>
//                 <div className={`${style.eventIcon} online`}>💻</div>
//                 Online Test
//               </div>
//               <div className={style.eventTime}>
//                 <h4 style={{ color: "#3a36e0", fontWeight: "bold" }}>
//                   {scholarshipTestDate?.onlineDate || "TBD"}
//                 </h4>
//               </div>
//             </div>
//           </div>

//           {/* Offline Test Card */}
//           <div className={`${style.eventCard} offline`}>
//             <div className={style.dateBox}>
//               <div className={style.month}>{offlineDate.month}</div>
//               <div className={style.day}>{offlineDate.day}</div>
//               <div className={style.year}>{offlineDate.year}</div>
//             </div>

//             <div className={style.eventDetails}>
//               <div className={`${style.eventTitle} offline`}>
//                 <div className={`${style.eventIcon} offline`}>📝</div>
//                 Offline Test
//               </div>
//               <div className={style.eventTime}>
//                 <h4 style={{ color: "#ff3002", fontWeight: "bold" }}>
//                   {scholarshipTestDate?.offlineDate || "TBD"}
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//         <p className="mb-4 fs-2">
//           Student Discounts Totaling 4,65,000 INR Awarded in the Past Month
//         </p>
//         <button
//           className="btn mb-5 fw-bold"
//           onClick={togglePopup}
//           style={{ background: "#553cdf", color: "white" }}
//         >
//           Register Now
//         </button>
//         {isPopupVisible && <ScholarshipFormTest onClose={togglePopup} />}

//         <p className="fs-4 mb-5 text-danger fw-bold">
//           We are excited to announce the Scholarship Test 2025, an exclusive
//           opportunity for recent graduates to secure incredible benefits while
//           enrolling in our courses. This is your chance to prove your aptitude
//           and gain access to high-quality education at a fraction of the cost—or
//           even for free!
//         </p>

//         <div className="mb-4">
//           <h2 className="mb-4 fw-bold" style={{ color: "#553cdf" }}>
//             Invest in Your Education, Empower Your Future
//           </h2>
//           <h4 className="mb-4 text-center text-secondary">
//             {" "}
//             At Social Prachar, we believe that education is the key to a
//             brighter future. We are proud to announce our exclusive Scholarship
//             Test, designed to recognize and support talented students like you.
//             This is your chance to shine, gain financial assistance, and embark
//             on a rewarding educational journey.
//           </h4>

//           <div className="mb-5">
//             <p className={style.boxBars}>
//               <FontAwesomeIcon icon={faCheckSquare} />
//               MCQ Based Aptitude Questions
//             </p>
//             <p className={style.boxBars}>
//               <FontAwesomeIcon icon={faPen} />
//               No Negative Marking
//             </p>
//             <p className={style.boxBars}>
//               <FontAwesomeIcon icon={faGraduationCap} />
//               Everyone is Eligible
//             </p>
//           </div>
//         </div>

//         <div className="mb-4">
//           <h3 className="fw-bold text-secondary">Benefits</h3>
//           <h2 className="fw-bold pb-2" style={{ color: "#553cdf" }}>
//             Unlock Amazing Benefits
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition p-6 border-t-4 border-orange-500">
//               <h3 className="text-2xl font-bold mb-3 text-gray-800">
//                 Benefit 1
//               </h3>
//               <h4 className="text-xl font-semibold mb-4 text-orange-600" style={{color:"#ff3002"}}>
//                 Win a Generous Scholarship
//               </h4>
//               <p className="text-gray-600">
//                 Get up to{" "}
//                 <span className="font-bold text-black">33% Discount</span> on
//                 course fees. It&rsquo;s a live online test, get the test results
//                 & assured Discount coupon code to your email within 12 hours
//                 after completion of the test.
//               </p>
//             </div>

//             <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition p-6 border-t-4 border-orange-500">
//               <h3 className="text-2xl font-bold mb-3 text-gray-800">
//                 Benefit 2
//               </h3>
//               <h4 className="text-xl font-semibold mb-4 text-orange-600" style={{color:"#ff3002"}}>
//                 Recognition and Prestige
//               </h4>
//               <p className="text-gray-600">
//                 Our scholarship winners receive recognition for their
//                 achievements, boosting their confidence and setting them apart
//                 from their peers.
//               </p>
//             </div>

//             <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition p-6 border-t-4 border-orange-500">
//               <h3 className="text-2xl font-bold mb-3 text-gray-800">
//                 Benefit 3
//               </h3>
//               <h4 className="text-xl font-semibold mb-4 text-orange-600" style={{color:"#ff3002"}}>
//                 Access to Exceptional Resources
//               </h4>
//               <p className="text-gray-600">
//                 Scholarship recipients gain access to our exclusive learning
//                 materials, experienced faculty, and a supportive educational
//                 community.
//               </p>
//             </div>
//           </div>

//           <div className="d-flex justify-content-center align-items-center my-5 gap-5">
//             <h3 className="fw-bold" style={{ color: "#553cdf" }}>
//               Secure Your Future Today! <br /> Limited Seats Available.
//             </h3>
//             <button
//               className="fw-bold btn"
//               onClick={togglePopup}
//               style={{ background: "#553cdf", color: "white" }}
//             >
//               Claim Your Discount
//             </button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-muted fw-bold">
//             Social Prachar&rsquo;s Scholarship Test 2025
//           </h2>
//           <p className="fs-1 fw-bold" style={{ color: "#ff3002" }}>
//             Everyone is a Winner: 30 Questions - 40 Minutes - 30 Marks
//           </p>
//         </div>

//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className={`${style.downBoxBars} bg-primary`}>
//                 <div className={style.discount_icon}>
//                   <FontAwesomeIcon
//                     icon={faTrophy}
//                     style={{ color: "#FFD43B", fontSize: "50px" }}
//                   />
//                 </div>
//                 <div className={style.marks}>
//                   <h3 className="fw-bold text-start">30 Marks</h3>
//                   {/* <h3>Eligible for Fee Discount (Or) 100% Free</h3> */}
//                   <h3>(In Offline TEST): Eligible for Fee Discount (Or) 100% Free</h3>
//                   <h3>(In Online TEST): Eligible for Fee Discount (Or) 50% Free</h3>
//                 </div>
//               </div>

//               <div className={`${style.downBoxBars} bg-primary`}>
//                 <div className={style.discount_icon}>
//                   <FontAwesomeIcon
//                     icon={faTrophy}
//                     style={{ color: "#969696", fontSize: "50px" }}
//                   />
//                 </div>
//                 <div className={style.marks}>
//                   <h3 className="fw-bold text-start">27-29 Marks</h3>
//                   <h3>Eligible for Fee Discount of 10,000 INR</h3>
//                 </div>
//               </div>
//               <div className={`${style.downBoxBars} bg-primary`}>
//                 <div className={style.discount_icon}>
//                   <FontAwesomeIcon
//                     icon={faTrophy}
//                     style={{ color: "#f56200", fontSize: "50px" }}
//                   />
//                 </div>
//                 <div className={style.marks}>
//                   <h3 className="fw-bold text-start">21-26 Marks</h3>
//                   <h3>Eligible for Fee Discount of 8,000 INR</h3>
//                 </div>
//               </div>
//               <div className={`${style.downBoxBars} bg-primary`}>
//                 <div className={style.discount_icon}>
//                   <FontAwesomeIcon
//                     icon={faMedal}
//                     style={{ fontSize: "50px" }}
//                   />
//                 </div>
//                 <div className={style.marks}>
//                   <h3 className="fw-bold text-start">15-20 Marks</h3>
//                   <h3>Eligible for Fee Discount of 5,000 INR</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Frequently Asked Questions faqData */}

//       <div className=" py-4 ">
//         <h1 className="text-center my-4">Frequently Asked Questions</h1>
//         <div className="container my-4 col-md-8">
//           <Accordion faqs={faqData} />
//         </div>
//       </div>
//       <div className="py-12 bg-gradient-to-r from-indigo-700 to-purple-700 text-center">
//         <button
//           className="btn mb-4 fw-bold"
//           onClick={togglePopup}
//           style={{ background: "white", color: "black" }}
//         >
//           Register Now
//         </button>
//         <p className="text-indigo-200 mx-auto fs-5">
//           Take the first step towards an exceptional education and career. Join
//           our scholarship test today!
//         </p>
//       </div>
//     </>
//   );
// };

// export default ScholarShipTest;