"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './ScholarShipTest.module.css';
import ScholarshipFormTest from './ScholarshipFormTest';

// images importing 
import heroimg from '@/assets/schlorship/schlorshippage-1.jpg'
import heroimg3 from '@/assets/schlorship/img-3.png'
import backgroundImage from '@/assets/schlorship/image.png'

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
    const element = document.getElementById('scholarship-table');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
              Explore Scholarship Rewards
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
      <section  className={styles.scholarshipSection}>
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
          <Card id="scholarship-table" className={styles.scholarshipTable}>
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
