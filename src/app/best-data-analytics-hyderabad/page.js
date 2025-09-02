"use client"
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
import styles from './dataanalytics.module.css';
import img2 from '@/assets/newassets/artical-2.jpg';
import img3 from '@/assets/newassets/artical-2.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import DataAnalyticsForm from './DataAnalyticsForm';

const Section = ({ children, className = '', id }) => (
  <motion.section
    id={id}
    className={`${styles.section} ${className}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className={styles.faqItem}>
    <button
      className={styles.faqQuestion}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      aria-label={`${isOpen ? 'Collapse' : 'Expand'} FAQ: ${question}`}
    >
      <span>{question}</span>
      <motion.span
        className={styles.faqChevron}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      >
        ▼
      </motion.span>
    </button>
    <motion.div
      id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      className={styles.faqAnswer}
      initial={false}
      animate={{
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ duration: 0.2 }}
      role="region"
      aria-hidden={!isOpen}
    >
      <div className={styles.faqAnswerContent}>
        {answer}
      </div>
    </motion.div>
  </div>
);

const Stat = ({ value, label, className = '' }) => (
  <div className={`${styles.stat} ${className}`}>
    <div className={styles.statValue}>{value}</div>
    <div className={styles.statLabel}>{label}</div>
  </div>
);

export default function NowPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const finalCTARef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToFinalCTA = () => {
    if (finalCTARef.current) {
      finalCTARef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const router = useRouter();


  const faqs = [
    {
      question: "Who can join the Data Analytics course at Socialprachar?",
      answer: "Anyone with a graduation degree (B.Tech, B.Sc, B.Com, MBA, etc.) can join. Prior IT knowledge is not mandatory."
    },
    {
      question: "Do I need coding experience to learn Data Analytics?",
      answer: "No, basic logical skills are enough. The course starts from beginner level."
    },
    {
      question: "How long is the internship?",
      answer: "The internship typically lasts for 2 months and involves real datasets."
    },
    {
      question: "What kind of projects will I work on during the internship?",
      answer: "Projects include Sales Forecasting, Customer Behavior Analysis, HR Analytics, and Financial Reporting dashboards."
    }
  ];

  return (
    <div  className={`${styles.container} ${styles.rootVariables} ` }>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent} ref={finalCTARef}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Best Data Analytics Course with Internship in Hyderabad – Socialprachar
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            In today&apos;s data-driven world, organizations are making decisions not on gut feeling but on data-backed insights. From tech giants to startups, data analytics is at the heart of strategic planning, product launches, customer engagement, and revenue growth. This rising demand has created a massive career opportunity for skilled data analysts.
          </motion.p>
          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.button
              className={`${styles.button} ${styles.buttonPrimary}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
               onClick={() => setShowFormPopup(true)}
              
            >
              Enroll Now
            </motion.button>
            <motion.button
              className={`${styles.button} ${styles.buttonSecondary}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/courses')}
            >
              Explore Courses
            </motion.button>

          </motion.div>
        </div>
      </header>

      <main>
        {/* Why Choose Data Analytics */}
        <Section id="why-choose" className={styles.whyChoose}>
          <div className={styles.containerFluid}>
            <h2 className={`${styles.sectionTitle} ${styles.gradientText1}`}>Why Choose Data Analytics as a Career?</h2>
            <div className={styles.grid}>
              <div className={`${styles.card} ${styles.cardOrange} ${styles.cardHover}`}>
                <h3 className={styles.cardTitle}>High Demand Across Industries</h3>
                <p className={styles.cardText}>Every sector (IT, Healthcare, Banking, Retail, E-commerce, Telecom, etc.) requires data analysts.</p>
              </div>
              <div className={`${styles.card} ${styles.cardTeal} ${styles.cardHover}`}>
                <h3 className={styles.cardTitle}>Skill Shortage</h3>
                <p className={styles.cardText}>While the demand is high, the availability of skilled professionals is still low, creating abundant job opportunities.</p>
              </div>
              <div className={`${styles.card} ${styles.cardPurple} ${styles.cardHover}`}>
                <h3 className={styles.cardTitle}>Lucrative Salaries</h3>
                <p className={styles.cardText}>In India, entry-level data analysts earn ₹5-7 LPA, while experienced professionals earn ₹12-25 LPA+. Globally, the salaries are even higher.</p>
              </div>
              <div className={`${styles.card} ${styles.cardBlue} ${styles.cardHover}`}>
                <h3 className={styles.cardTitle}>Career Growth</h3>
                <p className={styles.cardText}>Data analysts can progress into roles like Data Scientist, Business Analyst, Data Engineer, and AI Specialist.</p>
              </div>
              <div className={`${styles.card} ${styles.cardGreen} ${styles.cardHover}`}>
                <h3 className={styles.cardTitle}>Future-Proof Career</h3>
                <p className={styles.cardText}>With AI and automation growing, data analytics is among the few careers that will always remain relevant.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Why Internships Matter */}
        <div className={styles.sideBySideLayout}>
          <Section id="internships-matter" className={styles.internshipsMatter}>
            <div className={styles.containerFluid}>
              <h2 className={`${styles.sectionTitle} ${styles.gradientText2}`}>Why Internships Matter in Data Analytics</h2>
              <p className={styles.sectionText}>One of the biggest challenges freshers face is lack of industry experience. Recruiters prefer candidates who have worked on real-world datasets rather than those who only know theory.</p>
              <p className={styles.sectionText}>This is where Socialprachar makes a difference – it offers a Data Analytics Course with Internship, so students:</p>
              <ul className={styles.bulletList}>
                <li>Get hands-on exposure to real business problems.</li>
                <li>Build a strong portfolio with projects that can be showcased in interviews.</li>
                <li>Gain confidence to work in corporate environments.</li>
                <li>Stand out in the job market with internship certification.</li>
              </ul>
            </div>
          </Section>

          {/* Course Image 1 */}
          <Section className={styles.imageSection}>
            <div className={styles.containerFluid}>
              <Image
                src={img2}
                alt="Data Analytics Course"
                className={styles.sectionImage}
              />
            </div>
          </Section>
        </div>

        {/* Why Socialprachar */}
        <Section id="why-socialprachar" className={styles.whySocialprachar}>
          <div className={styles.containerFluid}>
            <h2 className={`${styles.sectionTitle} ${styles.gradientText3}`}>Why Socialprachar Offers the Best Data Analytics Course with Internship in Hyderabad</h2>
            <p className={styles.sectionText}><strong>Socialprachar</strong> is a <span className={styles.highlights}>leading EdTech institute in Hyderabad</span> with a strong reputation for providing industry-oriented training. Here&apos;s why it is considered the Best Data Analytics Course with Internship in Hyderabad:</p>
            <ul className={styles.featureList}>
              <li><strong>Comprehensive Curriculum</strong><br />Covers Python, SQL, Excel, Power BI, Tableau, Statistics, Machine Learning basics, and Cloud tools.</li>
              <li><strong>Internship Included</strong><br />Every student gets an opportunity to work on live projects through the internship program.</li>
              <li><strong>Expert Trainers</strong><br />Trainers come from top companies like Accenture, TCS, Amazon, and Deloitte.</li>
              <li><strong>Placement Assistance</strong><br />Dedicated team for resume building, interview prep, and mock sessions.</li>
              <li><strong>Flexible Learning</strong><br />Classroom + Online sessions available.</li>
              <li><strong>Affordable Fees</strong><br />Competitive pricing with EMI options.</li>
              <li><strong>Strong Alumni Network</strong><br />Many students placed in MNCs like Wipro, Cognizant, Infosys, Deloitte, and SoulPage IT Solutions.</li>
            </ul>
          </div>
        </Section>

        {/* Course Highlights */}
        <Section id="course-highlights" className={styles.courseHighlights}>
          <div className={styles.containerFluid}>
            <h2 className={`${styles.sectionTitle} ${styles.gradientText4}`}>Course Highlights</h2>
            <h3 className={styles.subsectionTitle}>Program Details</h3>
            <div className={styles.detailsGrid}>
              <div className={`${styles.detail} ${styles.detailEnhanced}`}>
                <div className={styles.detailIcon}>📅</div>
                <div>
                  <strong>Duration:</strong> 4–6 months
                  <p className={styles.detailSub}>Comprehensive training program</p>
                </div>
              </div>
              <div className={`${styles.detail} ${styles.detailEnhanced}`}>
                <div className={styles.detailIcon}>💻</div>
                <div>
                  <strong>Mode:</strong> Online / Classroom (Hybrid options available)
                  <p className={styles.detailSub}>Flexible learning options</p>
                </div>
              </div>
              <div className={`${styles.detail} ${styles.detailEnhanced}`}>
                <div className={styles.detailIcon}>🎯</div>
                <div>
                  <strong>Internship:</strong> 2-month guaranteed internship with real-world projects
                  <p className={styles.detailSub}>Hands-on industry experience</p>
                </div>
              </div>
              <div className={`${styles.detail} ${styles.detailEnhanced}`}>
                <div className={styles.detailIcon}>🏆</div>
                <div>
                  <strong>Certification:</strong> Industry-recognized certificate from Socialprachar
                  <p className={styles.detailSub}>Boost your professional credentials</p>
                </div>
              </div>
              <div className={`${styles.detail} ${styles.detailEnhanced}`}>
                <div className={styles.detailIcon}>🤝</div>
                <div>
                  <strong>Placement Support:</strong> 100% job assistance with interview preparation
                  <p className={styles.detailSub}>Complete career support</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Core Modules */}
        <Section id="core-modules" className={styles.coreModules}>
          <div className={styles.containerFluid}>
            <h2 className={`${styles.sectionTitle} ${styles.gradientText5}`}>Core Modules</h2>
            <div className={styles.moduleGrid}>
              <div className={styles.module}>Python for Data Analysis</div>
              <div className={styles.module}>Data Cleaning & Wrangling</div>
              <div className={styles.module}>SQL & Database Management</div>
              <div className={styles.module}>Statistics & Probability</div>
              <div className={styles.module}>Data Visualization (Power BI, Tableau)</div>
              <div className={styles.module}>Excel for Analytics</div>
              <div className={styles.module}>Introduction to Machine Learning</div>
              <div className={styles.module}>Cloud Deployment Basics</div>
            </div>
          </div>
        </Section>

        {/* Career Opportunities */}
        <Section id="career-opportunities" className={styles.careerOpportunities}>
          <div className={styles.containerFluid}>
            <h2 className={`${styles.sectionTitle} ${styles.gradientText6}`}>Career Opportunities After the Course</h2>
            <p className={styles.sectionText}>Completing the <strong>Best Data Analytics Course with Internship in Hyderabad – Socialprachar</strong> opens the door to multiple job roles:</p>

            <h3 className={styles.subsectionTitle}>Job Roles</h3>
            <div className={styles.jobRoles}>
              <div className={styles.jobRole}>Data Analyst</div>
              <div className={styles.jobRole}>Business Analyst</div>
              <div className={styles.jobRole}>BI Developer</div>
              <div className={styles.jobRole}>Data Visualization Specialist</div>
              <div className={styles.jobRole}>Junior Data Scientist</div>
              <div className={styles.jobRole}>Reporting Analyst</div>
              <div className={styles.jobRole}>SQL Developer</div>
            </div>

            <div className={styles.salaryGrid}>
              <Stat value="₹4-6 LPA" label="Freshers" className={styles.statFresher} />
              <Stat value="₹6-10 LPA" label="1-3 Years Experience" className={styles.statMid} />
              <Stat value="₹12-20+ LPA" label="5+ Years Experience" className={styles.statSenior} />
              <Stat value="$70K-120K" label="Global Salaries (Annual)" className={styles.statGlobal} />
            </div>
          </div>
        </Section>

        {/* Side-by-Side Layout for Why Hyderabad and Image */}
        <div className={styles.sideBySideLayout}>
          {/* Why Hyderabad */}
          <Section id="why-hyderabad" className={styles.whyHyderabad}>
            <div className={styles.containerFluid}>
              <h2 className={`${styles.sectionTitle} ${styles.gradientText7}`}>Why Hyderabad is the Best Place to Learn Data Analytics</h2>
              <p className={styles.sectionText}>Hyderabad has evolved into a tech hub of India, attracting MNCs and startups alike. With global giants like Amazon, Microsoft, Google, Deloitte, Accenture, and a thriving startup ecosystem, Hyderabad provides abundant career opportunities in Data Analytics.</p>
              <p className={styles.sectionText}>This makes pursuing the Best Data Analytics Course with Internship in Hyderabad – Socialprachar even more valuable, as you are learning in the city where jobs are in high demand.</p>
            </div>
          </Section>

          {/* Course Image 2 */}
          <Section className={styles.imageSection}>
            <div className={styles.containerFluid}>
              <Image
                src={img2}
                alt="Data Analytics Training"
                className={`${styles.sectionImage} ${styles.sideBySideImage}`}
              />
            </div>
          </Section>
        </div>

        {/* Success Stories */}
        <Section id="success-stories" className={styles.successStories}>
          <div className={styles.containerFluid}>
            <h2 className={`${styles.sectionTitle} ${styles.gradientText8}`}>Success Stories at Socialprachar</h2>
            <div className={styles.storiesGrid}>
              <div className={styles.story}>
                <h3 className={styles.storyName}>Mahanth</h3>
                <p className={styles.storyText}>Placed at SoulPage IT Solutions after completing Data Analytics training with internship.</p>
              </div>
              <div className={styles.story}>
                <h3 className={styles.storyName}>Sravani</h3>
                <p className={styles.storyText}>Transitioned from a B.Com background to Data Analyst at Deloitte.</p>
              </div>
              <div className={styles.story}>
                <h3 className={styles.storyName}>Rohit</h3>
                <p className={styles.storyText}>Mechanical Engineer who shifted to IT with a Data Analyst role at TCS.</p>
              </div>
            </div>
            <p className={styles.sectionText}>These success stories prove that with the right training + internship exposure, anyone can kickstart a rewarding career in Data Analytics.</p>
          </div>
        </Section>

        {/* FAQs */}
        <Section id="faqs" className={styles.faqs}>
          <div className={styles.containerFluid}>
            <h2 className={`${styles.sectionTitle} ${styles.gradientText9}`}>FAQs – Data Analytics Course with Internship in Hyderabad</h2>
            <div className={styles.faqContainer}>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Conclusion */}
        <Section id="conclusion" className={styles.conclusion}>
          <div className={styles.containerFluid}>
            <h2 className={`${styles.sectionTitle} `}>Conclusion</h2>
            <p className={styles.sectionText}>If you are serious about building a future-proof career, choosing the <strong>Best Data Analytics Course with Internship in Hyderabad – Socialprachar</strong> is the smartest decision you can make. With practical training, expert mentorship, real-world projects, and guaranteed internship opportunities, you will graduate as a job-ready professional with confidence to succeed in the data-driven world.</p>
            <div className={styles.calloutBox}>
              <p className={styles.callout}>👉 Your career in Data Analytics starts today – Join <strong >Socialprachar</strong> and unlock endless opportunities!</p>
            </div>
            {/* Final CTA */}
            
              <Section className={styles.finalCTA}>
                <div className={styles.containerFluid}>
                  <div className={styles.ctaButtons}>
                    <motion.button
                      className={`${styles.button} ${styles.buttonPrimary}`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={scrollToFinalCTA}
                     
                    >
                      Apply Now
                    </motion.button>
                    {/* <motion.button 
                className={`${styles.button} ${styles.buttonSecondary}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button> */}
                  </div>
                </div>
              </Section>
            
          </div>
        </Section>


      </main>
      <AnimatePresence>
        {showFormPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DataAnalyticsForm
              isPopup={true}
              onClose={() => setShowFormPopup(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}