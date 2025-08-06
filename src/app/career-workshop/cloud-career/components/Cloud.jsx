'use client';
import React, { useState } from 'react';
import styles from './carrier.module.css';
import Image from 'next/image';
import ceoimg from '../../../../assets/Sunil sir.jpg';
import herosection from '../../../../assets/homeReplaceImage.png';
import Award1 from '../../../../assets/CareerAward_Awards/SPAward1.jpg';
import Award2 from '../../../../assets/CareerAward_Awards/SPAward2.jpg';
import Award3 from '../../../../assets/CareerAward_Awards/SPAward3.jpg';
import Award4 from '../../../../assets/CareerAward_Awards/SPAward4.jpg';
import Award5 from '../../../../assets/CareerAward_Awards/SpAward5.jpg';
import Award6 from '../../../../assets/CareerAward_Awards/SPAward6.jpg';
import Button2 from './BookDemo';
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
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 text-center">
                  <h1 className={styles.heroOverlayTitle}>
                    Launch a High-Growth Career in Cloud Computing — Even
                    Without Prior Experience!
                  </h1>
                  <p className={styles.heroOverlaySubtitle}>
                    In this FREE 90-Minute Career Workshop{' '}
                    <span className={styles.mentorName}>
                      {' '}
                      Suneel Kumar Kola{' '}
                    </span>
                    , a hands-on Cloud Engineer with deep expertise in{' '}
                    <span className={styles.mentorName}>
                      {' '}
                      AWS, Azure, and DevOps.
                    </span>
                    – an industry expert with 8+ years of experience!
                  </p>
                  <p className={styles.heroOverlayNote}>
                    Discover how you can enter the world of{' '}
                    <span className={styles.mentorName}>
                      {' '}
                      cloud engineering{' '}
                    </span>{' '}
                    — even with a non-technical or beginner background — and
                    become job-ready for high-paying cloud roles that drive
                    digital transformation across industries.
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
              ' A student or fresher confused about which tech career to pursue in 2025?',
              ' A working professional planning to switch to a more dynamic, future-ready field?',
              'Curious about AWS, Azure, or DevOps but unsure where to begin or how to grow?',
              ' From a non-coding or non-tech background, wondering if Cloud is still possible for you?',
              ' Already learning DevOps or Linux, and want a career roadmap in the cloud space?',
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
              ' How to start a career in Cloud Computing with or without a coding background',
              'What roles like Cloud Engineer, DevOps Engineer, SRE, and Cloud Architect actually involve',
              ' A proven 8-year career roadmap to grow from fresher to senior roles in cloud',
              'The best tools, platforms, and certifications to focus on in 2025 (AWS, Azure, Docker, Terraform & more)',
              ' How to land jobs in cloud + DevOps roles through smart learning and portfolio building',
              ' How Suneel Kumar Kola’s mentorship can help you break into cloud careers with confidence',
              'Real success stories of students who entered cloud roles from various non-tech backgrounds',
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

      {/* Meet Your Host Section */}
      <section className={styles.hostSection}>
        <div className="container">
          <h2 className={styles.sectionTitleWithUnderline}>Meet Your Host</h2>
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 order-lg-1 order-1">
              <div className={styles.hostImageContainer}>
                <Image
                  src={ceoimg}
                  alt="Suneel Kumar Kola"
                  className={styles.hostImage}
                />
              </div>
            </div>
            <div className="col-12 col-lg-8 order-lg-2 order-2">
              <div className={styles.hostInfo}>
                <h3 className={styles.mentor}>Suneel Kumar Kola</h3>
                <p className={styles.mentordescription1}>
                  Cloud Engineer | DevOps Advocate | Mentor
                </p>
                <p>
                  Hi, I’m Suneel Kumar Kola, a dedicated and results-driven
                  Cloud Engineer. I specialize in transforming traditional IT
                  infrastructure into scalable, secure, and efficient
                  cloud-native solutions using AWS and Azure. With real-world
                  experience implementing DevOps practices and automating
                  infrastructure for various projects, I help bridge the gap
                  between development and operations to drive faster delivery
                  and smoother deployments.
                </p>
                <p>
                  I’m deeply passionate about mentoring and empowering beginners
                  in tech — whether you're coming from a coding, non-coding, or
                  even non-tech background. My mission is to simplify the cloud
                  journey for you, show you what works, and help you build a
                  career you’re proud of.
                </p>
                <p className={styles.mentordescription1}>
                  Join me in this exclusive workshop — and let’s explore how to
                  shape your future in the cloud.
                </p>
                <div className={styles.hostStats}>
                  <div className={styles.statItem}>
                    <strong>8+</strong>
                    <span className={styles.sucesstext}>
                      Years of Experience
                    </span>
                  </div>
                  <div className={styles.statItem}>
                    <strong>5000+</strong>
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
            Call with Suneel Kumar Kola to chart their career path in the cloud
            industry. Session Limit: 100 people.
          </p>
          <Button2 />
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <div className={styles.faqContainer}>
            {[
              {
                id: 'faq1',
                question: 'Who can attend this masterclass?',
                answer:
                  'Anyone! Whether you are a student, fresher, working professional, or someone from a non-tech background — this workshop is for you if you’re curious about cloud careers.',
              },
              {
                id: 'faq2',
                question: 'Do I need coding experience?',
                answer:
                  'Not at all. While basic scripting helps, we’ll show you how to start from zero and build the skills required for cloud and DevOps roles.',
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
                  '- Cloud Career Roadmap PDF',
                  '- DevOps Toolkit Checklist',
                  '- 50+ ChatGPT Prompts for Cloud Jobs',
                  '- Beginner-to-Expert Certification Guide',
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
                  '- A clear path to start or switch to a cloud career',
                  '- Guidance on certifications, tools, and platforms',
                  '- Insights into real-world job roles and salaries',
                  '- A chance to join a mentorship and cloud learner community',
                  '- Motivation, clarity, and confidence to move forward',
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