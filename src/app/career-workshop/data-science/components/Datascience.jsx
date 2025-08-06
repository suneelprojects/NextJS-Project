'use client';
import React, { useState } from 'react';
import styles from './carrier.module.css';
import Image from 'next/image';
import ceoimg from '../../../../assets/careerworkshop/ceoImage-removebg-preview.png';
import herosection from '../../../../assets/homeReplaceImage.png';
import Award1 from '../../../../assets/CareerAward_Awards/SPAward1.jpg';
import Award2 from '../../../../assets/CareerAward_Awards/SPAward2.jpg';
import Award3 from '../../../../assets/CareerAward_Awards/SPAward3.jpg';
import Award4 from '../../../../assets/CareerAward_Awards/SPAward4.jpg';
import Award5 from '../../../../assets/CareerAward_Awards/SpAward5.jpg';
import Award6 from '../../../../assets/CareerAward_Awards/SPAward6.jpg';
import Button2 from './BookDemo';
import Testimonials from './Testmonails';
import SuccessStories from '../../../../components/Homepage/PlacedStudents/PlacedStudents';
import NewsOnUs from '../../../../components/Homepage/newsArticle/newsOnUs';

const CareerWorkshop = () => {
  const [openFaq, setOpenFaq] = useState('faq1');

  const awardImages = [
    Award1,
    Award2,
    Award3,
    Award4,
    Award5,
    Award6,
  ];

  return (
    <div className={styles.careerWorkshop}>
      {/* Hero Section */}
      <section className={styles.heroImageSection}>
        <div className={styles.heroImageContainer}>
          <div className={styles.heroOverlay}>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 text-center">
                  <h1 className={styles.heroOverlayTitle}>
                    Build a High-Growth Career in{' '}
                    <span className={styles.mentorName}>Data Science & AI</span>{' '}
                    — With Less Coding 
                  </h1>
                  <p className={styles.heroOverlaySubtitle}>
                    Discover how you can launch a rewarding career in{' '}
                    <span>Data Science & AI</span> — with{' '}
                    <span>minimal coding, maximum impact</span>, and strong
                    earning potential.
                  </p>
                  <p className={styles.heroOverlaySubtitle}>
                    Join our exclusive session led by{' '}
                    <span className={styles.mentorName}>
                      {' '}
                      Mahesh Babu Channa{' '}
                    </span>
                    , an IIM alumnus and industry expert with 12+ years of
                    experience in tech, training, and career transformation.
                  </p>
                  <p className={styles.heroOverlayNote}>
                    Discover how you can build a rewarding{' '}
                    <span className={styles.mentorName}>
                      Data Science & AI career
                    </span>{' '}
                    — starting from zero, with clear steps, job-ready skills,
                    and proven mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={herosection}
            alt="Insurance Career Hero"
            className={styles.heroBackgroundImage}
          />
        </div>
      </section>

      {/* Webinar Scheduling Section */}
      <section className={styles.webinarScheduleSection}>
        <div className="container">
          <div className="row align-items-center">
            <div>
              <div className={styles.webinarInfo}>
                <p className={styles.webinarText}>
                  Free 90-Minute Webinar is scheduled on
                </p>
                <Button2 />
                <p className={styles.limitedSeats}>Limited Seats Available!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className={styles.targetAudience}>
        <div className="container">
          <h2 className={styles.sectionTitleWithUnderline}>
            This Masterclass is for You, If You Are...
          </h2>
          <div className="row">
            {[
              ' A student or fresher confused about which tech career to choose in 2025?',
              '  A working professional stuck in a low-growth job and planning a career switch?',
              'A non-coder or beginner curious if Data Science & AI is possible without strong coding?',
              'Already learning Python or Excel and want to convert your skills into a high-paying job?',
            ].map((text, index) => (
              <div
                key={index}
                className="col-12 col-md-6 d-flex align-items-start mb-4"
              >
                <div className={styles.numberArrow}>{index + 1}</div>
                <p className={styles.numberArrowText}>{text}</p>
              </div>
            ))}
          </div>
          <p className={styles.webinarForYouText}>
            <em>If yes, this Masterclass is for you!</em>
          </p>
        </div>
      </section>

      {/* What You'll Discover Section */}
      <section className={styles.discoverSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            In This 90-Minute FREE Webinar, You Will Discover:
          </h2>
          <div className={styles.discoverList}>
            {[
              'How to launch your career in Data Science & AI — even if you’re from a non-coding background ',
              'How to build a second income through freelancing in AI while continuing your current job',
              ' The exact 8-year roadmap to grow from fresher to leadership roles in tech',
              'Proven strategies to crack interviews and land job offers confidently',
              ' How Mahesh Babu Channa’s mentorship can transform your career journey',
              ' Real-life success stories of students who started from scratch and got placed!',
            ].map((item, index) => (
              <div
                key={index}
                className={styles.discoverItem}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsOnUs />

      <SuccessStories />

      <div className="container-fluid">
        <Testimonials />
      </div>

      {/* Meet Your Host Section */}
      <section className={styles.hostSection}>
        <div className="container">
          <h2 className={styles.sectionTitleWithUnderline}>Meet Your Host</h2>
          <div className="row align-items-center flex-column flex-lg-row">
            <div className="col-12 col-lg-4 order-lg-1 order-1">
              <div className={styles.hostImageContainer}>
                <Image
                  src={ceoimg}
                  alt="Mahesh Babu Channa"
                  className={styles.hostImage}
                />
              </div>
            </div>
            <div className="col-12 col-lg-8 order-lg-2 order-2">
              <div className={styles.hostInfo}>
                <h3 className={styles.mentor}> Mahesh Babu Channa</h3>
                <h6 className={styles.mentordescription1}>
                  Career Mentor | IIM Alumnus | Founder – Vajra.ai, Finversity,
                  SocialPracha
                </h6>
                <p>
                  Hi, I’m Mahesh Babu Channa, an IIM alumnus and Founder of
                  Vajra,ai, Finversity, SocialPrachar, one of India’s top EdTech
                  platforms. With 12+ years of experience and over 8,000
                  students trained, I’ve helped freshers, job seekers, and
                  working professionals build rewarding careers in Data Science,
                  AI, Full Stack Development, Digital Marketing, and more. These
                  free career orientation masterclasses are designed to give you
                  clarity and direction in a fast-changing job market. Whether
                  you’re confused after graduation, restarting after a break, or
                  stuck in the wrong role — I’ll show you the exact steps to
                  start a high-growth career with or without a tech background.
                </p>
                <p>
                  From guiding students who had no clue to helping them land
                  dream jobs — I’ve seen transformations happen. Now it's your
                  turn. Join the session and let’s figure out your best-fit
                  career path together. Your career deserves the right start
                </p>
                <h6 className={styles.mentordescription1}>
                  — Mahesh Babu Channa <br></br>
                  Career Mentor | EdTech Leader | Digital Trainer
                </h6>
                <div className={styles.hostStats}>
                  <div className={styles.statItem}>
                    <strong>12+</strong>
                    <span className={styles.sucesstext}>
                      Years of Experience
                    </span>
                  </div>
                  <div className={styles.statItem}>
                    <strong>8000+</strong>
                    <span className={styles.sucesstext}>
                      Professionals Mentored
                    </span>
                  </div>
                  <div className={styles.statItem}>
                    <strong>100%</strong>
                    <span className={styles.sucesstext}>Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className={styles.bonusSection}>
        <div className="container">
          <h2 className={styles.sectionTitleWithUnderline}>
            Bonus: Free Career Consultation for Attendees!
          </h2>
          <p className={styles.bonusText}>
            All webinar attendees will get a free 1-3 Hour Career Consultation
            Call with Mahesh Babu Channa to chart their career path in the
            insurance industry. Session Limit: 100 people.
          </p>
          <Button2 />
        </div>
      </section>

      {/* Awards & Recognitions Carousel */}
      <section className={styles.awardsSection}>
        <div className="container-fluid">
          <h2 className={styles.sectionTitle}>Awards & Recognitions</h2>
          <div
            id="awardsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {awardImages.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <Image
                    src={image}
                    className={`d-block w-100 ${styles.awardImage}`}
                    alt={`Award ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#awardsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{ filter: 'invert(1)' }}
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#awardsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{ filter: 'invert(1)' }}
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container-fluid">
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <div className={styles.faqContainer}>
            {[
              {
                id: 'faq1',
                question: 'Who can attend this masterclass?',
                answer:
                  'Anyone! Whether you are a student, fresher, working professional, or someone from a non-technical background — this session is designed to help you understand if Data Science & AI is the right path for you.',
              },
              {
                id: 'faq2',
                question:
                  'Do I need to know coding to start a career in Data Science & AI?',
                answer:
                  'No. Many successful Data professionals started with zero coding experience. We’ll show you how to get started with beginner-friendly tools and gradually build technical skills.',
              },
              {
                id: 'faq3',
                question: 'Is this session really free?',
                answer:
                  'Yes, 100% FREE. There are no hidden charges. This is a value-packed session to guide your career direction and show you what’s possible.',
              },
              {
                id: 'faq4',
                question: 'Will I get a certificate for attending?',
                answer:
                  'Yes! All attendees will receive a Certificate of Participation after the session.',
              },
              {
                id: 'faq5',
                question: 'What if I miss the live session?',
                answer:
                  'This is a live-only masterclass. No replays will be shared. We recommend blocking your calendar to attend it live and make the most of the interaction.',
              },
              {
                id: 'faq6',
                question: 'What are the bonuses included?',
                answer: [
                  '- Fresher Job Kit',
                  '- 50+ ChatGPT Job Search Prompts',
                  '- AI Career Roadmap PDF',
                  '- Interview Tips & Resources',
                ],
              },
              {
                id: 'faq7',
                question: 'How do I register?',
                answer:
                  'Simply click the "Reserve My Free Seat" button on this page and fill in your details. You’ll receive confirmation and session access via email or WhatsApp.',
              },
              {
                id: 'faq8',
                question: 'What can I expect after attending the masterclass?',
                answer: [
                  '- Complete clarity on DA/DS/AI career options',
                  '- A personalized path to get started',
                  '- Knowledge of high-demand skills',
                  '- An understanding of freelancing opportunities',
                  '- Connection with a mentor and a career-oriented community',
                ],
              },
            ].map(({ id, question, answer }) => {
              const isOpen = openFaq === id;
              return (
                <div
                  className={styles.faqItem}
                  key={id}
                >
                  <button
                    className={`${styles.faqQuestion} ${
                      isOpen ? styles.faqQuestionActive : ''
                    }`}
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : id)}
                    aria-expanded={isOpen}
                  >
                    {question}
                    <span
                      className={`${styles.faqIcon} ${
                        isOpen ? styles.faqIconRotated : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`${styles.faqAnswer} ${
                      isOpen ? styles.faqAnswerOpen : ''
                    }`}
                  >
                    <div className={styles.faqAnswerContent}>
                      {Array.isArray(answer) ? (
                        <ul>
                          {answer.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p style={{ whiteSpace: 'pre-line' }}>{answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerWorkshop; 