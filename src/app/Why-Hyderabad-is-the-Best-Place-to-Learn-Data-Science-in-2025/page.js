'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
// image imports
import heroImage from '@/assets/whyhyd/img-1.png';
import heroImage1 from '@/assets/whyhyd/img-2.png';
import heroImage2 from '@/assets/whyhyd/img-3.png';
import heroImage3 from '@/assets/whyhyd/img-4.png';



// --- SVG ICON COMPONENTS ---
const DataAnalystIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>);
const BusinessAnalystIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" /><path d="M3 7V5c0-1.1.9-2 2-2h1" /><path d="M21 17v2c0 1.1-.9 2-2 2h-1" /><path d="M12 13h.01" /><path d="M16 13h.01" /><path d="M8 13h.01" /></svg>);
const MLEngineerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>);
const AIEngineerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6Z" /><path d="M4 14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z" /><path d="M14 14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z" /><path d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" /><path d="M6 12h8" /><path d="M12 6v8" /></svg>);
const BigDataIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25" /><path d="M16 16h2v5h-2zM6 16h2v5H6zM11 16h2v5h-2z" /></svg>);
const DataScientistIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5" /><path d="M12 22a10 10 0 0 1-7.16-3.5" /></svg>);

const ProgrammingIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>);
const VisualizationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>);
const MachineLearningIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6Z" /><path d="M4 14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z" /><path d="M14 14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z" /><path d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" /><path d="M6 12h8" /><path d="M12 6v8" /></svg>);
const BigDataCloudIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25" /><path d="M16 16h2v5h-2zM6 16h2v5H6zM11 16h2v5h-2z" /></svg>);
const CurriculumIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>);
const MentorshipIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM16 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 18c0-2.21 2.69-4 6-4s6 1.79 6 4M14 22c0-2.21 2.69-4 6-4" /></svg>);
const HandsOnIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2H7l-5 5v15h15z" /><path d="M12 18h4" /><path d="M9 14h4" /></svg>);
const PlacementIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>);
const NetworkingIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></svg>);
const FlexibleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>);




export default function Home() {
  const router = useRouter();
  const [activeAccordion, setActiveAccordion] = useState(0);

  const faqData = [
    { question: "Is Hyderabad good for learning Data Science?", answer: "Yes, due to its thriving IT sector, startup ecosystem, and affordable training options." },
    { question: "What is the average salary for Data Scientists?", answer: "Entry-level: ₹5-8 LPA. Experienced professionals: ₹20-25 LPA." },
    { question: "Do I need coding skills before joining?", answer: "Basic knowledge helps, but institutes start with foundational programming before advanced concepts." }
  ];

  const jobRoles = [
    { role: "Data Analyst", description: "Analyzing data for insights", salary: "₹6 LPA to ₹12 LPA", icon: <DataAnalystIcon /> },
    { role: "Business Analyst", description: "Applying data to business problems", salary: "₹8 LPA to ₹15 LPA", icon: <BusinessAnalystIcon /> },
    { role: "Machine Learning Engineer", description: "Building machine learning models", salary: "₹12 LPA to ₹22 LPA", icon: <MLEngineerIcon /> },
    { role: "AI Engineer", description: "Developing artificial intelligence systems", salary: "₹15 LPA to ₹25 LPA", icon: <AIEngineerIcon /> },
    { role: "Big Data Specialist", description: "Managing large datasets", salary: "₹18 LPA to ₹30 LPA", icon: <BigDataIcon /> },
    { role: "Data Scientist", description: "Creating predictive models", salary: "₹10 LPA to ₹28 LPA", icon: <DataScientistIcon /> },
  ];

  const skills = [
    { title: "Programming Languages", tools: "Python, R, SQL", icon: <ProgrammingIcon /> },
    { title: "Data Analysis & Visualization", tools: "Pandas, NumPy, Matplotlib, Power BI, Tableau", icon: <VisualizationIcon /> },
    { title: "Machine Learning", tools: "Algorithms, Deep Learning, Neural Networks", icon: <MachineLearningIcon /> },
    { title: "Big Data & Cloud", tools: "Hadoop, Spark, AWS, Azure, Google Cloud", icon: <BigDataCloudIcon /> }
  ];

  const advantages = [
    { title: "Industry-Driven Curriculum", description: "Real-time case studies and industry-relevant tools ensure you learn what's actually used in the workplace.", icon: <CurriculumIcon /> },
    { title: "Expert Mentorship", description: "Learn from practicing Data Scientists and industry professionals with years of experience.", icon: <MentorshipIcon /> },
    { title: "Hands-on Learning", description: "Internships and live projects provide valuable real-world experience.", icon: <HandsOnIcon /> },
    { title: "Placement Assistance", description: "Top institutes have tie-ups with leading companies, ensuring high placement rates and career growth.", icon: <PlacementIcon /> },
    { title: "Networking Opportunities", description: "Hyderabad hosts tech meetups, workshops, and conferences on AI, ML, and Big Data for professional networking.", icon: <NetworkingIcon /> },
    { title: "Flexible Learning", description: "Weekend, evening, and online batches to fit the schedules of working professionals and students.", icon: <FlexibleIcon /> },
  ];

  
  
  const redirect = () => {
    router.push('/courses');
  };

  const EnrollNow = () => {
    router.push('/data-science');
  }

  return (
    <>
      <Head>
        <title>Best Data Science Course Training in Hyderabad 2025 | Socialprachar</title>
        <meta name="description" content="Discover why Hyderabad is the best place to learn Data Science in 2025. Get expert training, 100% placement assistance, and affordable courses at Socialprachar." />
        <meta name="keywords" content="Data Science Course Hyderabad, Data Science Training, Machine Learning Course, AI Training, Python Training, Data Analytics Course, Socialprachar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroTitle}>Why Hyderabad is the Best Place to Learn Data Science in 2025</h1>
            <div className={styles.heroContent}>
              <p>In today&apos;s data-driven world, <span className={styles.highlight}>Data Science</span> has become one of the most in-demand skills. Every business, from healthcare to e-commerce, is leveraging data to make informed decisions. With the rise of AI, Machine Learning, and Big Data, the demand for skilled Data Scientists is growing exponentially.</p>
              <p>When it comes to pursuing <span className={styles.highlight}>Data Science training in Hyderabad</span>, students and professionals have a unique advantage. Known as &ldquo;India&apos;s Silicon Valley of the South,&rdquo; Hyderabad is a leading destination for skill development, technology, and innovation.</p>
              <p>This article explores why <span className={styles.highlight}>Hyderabad is the best place to learn Data Science in 2025</span>, the opportunities available, and how institutes like <span className={styles.highlight}>Socialprachar</span> are shaping the future of Data Science education.</p>
              <div className={styles.heroButtons}>
                <button className={styles.exploreButton} onClick={()=>redirect()} >Explore Courses</button>
                {/* <button className={styles.contactButton}>Contact Us</button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Hyderabad Section */}
        <section className={styles.whyHyderabadSection}>
          <h2 className={styles.whyHyderabadTitle}>Why Choose Hyderabad for Data Science?</h2>
          <div className={styles.whyHyderabadContent}>
            <div className={styles.whyHyderabadText}>
              <p className={styles.whyHyderabadIntro}>Hyderabad stands out as the premier destination for Data Science education, offering unparalleled opportunities in India&apos;s fastest-growing tech ecosystem.</p>
            </div>
            <div className={styles.whyHyderabadImageContainer}>
              <Image src={heroImage} alt='Why Hyderabad for Data Science' className={styles.whyHyderabadImage} unoptimized/>
            </div>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}><div className={styles.benefitIcon}>🏢</div><h3>IT and Tech Hub</h3><p>Home to global giants like <span className={styles.highlight}>Microsoft, Google, & Amazon</span>, creating continuous demand for Data Scientists.</p></div>
            <div className={styles.benefit}><div className={styles.benefitIcon}>🚀</div><h3>Thriving Startups</h3><p>Ranked among top startup cities with <span className={styles.highlight}>T-Hub and WE-Hub</span> supporting innovation in AI, FinTech, and HealthTech.</p></div>
            <div className={styles.benefit}><div className={styles.benefitIcon}>💰</div><h3>Affordable Costs</h3><p><span className={styles.highlight}>Lower training fees and living costs</span> compared to other metro cities, without compromising on quality.</p></div>
            <div className={styles.benefit}><div className={styles.benefitIcon}>🎯</div><h3>Placement Opportunities</h3><p>Most institutes offer <span className={styles.highlight}>100% placement assistance</span> with strong ties to MNCs and startups.</p></div>
            <div className={styles.benefit}><div className={styles.benefitIcon}>🎓</div><h3>Educational Environment</h3><p>Home to leading institutions like <span className={styles.highlight}>IIT-H, ISB, and IIIT-H</span>, fostering a rich learning and networking culture.</p></div>
          </div>
        </section>

        {/* Career Opportunities Section */}
        <section className={styles.careerSection}>
          <h2 className={styles.careerTitle}>Data Science Career Opportunities</h2>
          <div className={styles.careerContent}>
            <div className={styles.careerText}>
              <div className={styles.marketInfo}>
                <p>The demand for Data Science professionals in Hyderabad is booming. With India expected to create <span className={styles.highlight}>11 million Data Science jobs</span> by 2026, the city is at the forefront of this growth.</p>
                <ul>
                  <li>Key roles include Data Analyst, ML Engineer, AI Engineer, and Big Data Specialist.</li>
                  <li>Average salaries range from <span className={styles.highlight}>₹6 LPA to ₹25 LPA+</span>, based on experience.</li>
                </ul>
              </div>
            </div>
            <div className={styles.careerImageContainer}>
              <Image src={heroImage1} alt='Data Science Career Opportunities' className={styles.careerImage} unoptimized />
            </div>
          </div>
          <h3 className={styles.subheading}>Top Data Science Roles</h3>
          <div className={styles.jobRolesGrid}>
            {jobRoles.map((job) => (
              <div key={job.role} className={styles.jobRole}>
                <div className={styles.jobIcon}>{job.icon}</div>
                <div className={styles.jobInfo}>
                  <h4>{job.role}</h4>
                  <p>{job.description}</p>
                  <span className={styles.salary}>{job.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>Essential Data Science Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.title} className={styles.skillItem}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.tools}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages Section */}
        <section className={styles.advantagesSection}>
          <h2 className={styles.advantagesTitle}>Advantages of Training in Hyderabad</h2>
          <div className={styles.advantagesImageContainerTop}>
            <Image src={heroImage2} alt='Training Advantages in Hyderabad' className={styles.advantagesImage} unoptimized />
          </div>
          <div className={styles.advantagesGrid}>
            {advantages.map((adv) => (
              <div key={adv.title} className={styles.advantage}>
                <div className={styles.advantageIcon}>{adv.icon}</div>
                <div className={styles.advantageText}>
                  <h3>{adv.title}</h3>
                  <p>{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Institute Section */}
        <section className={styles.instituteSection}>
          <h2 className={styles.instituteTitle}>Socialprachar: Leading Training Institute</h2>
          <div className={styles.instituteContent}>
            <div className={styles.instituteText}>
              <p className={styles.instituteDescription}>Among many institutes, <span className={styles.highlight}>Socialprachar</span> stands out as a top choice for students and professionals who want to master Data Science.</p>
              <div className={styles.instituteFeatures}>
                <div className={styles.featureItem}><span className={styles.featureLabel} style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>Expert Faculty</span><p className={styles.featureDesc}>Industry professionals with 10+ years experience</p></div>
                <div className={styles.featureItem}><span className={styles.featureLabel} style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>100% Placement</span><p className={styles.featureDesc}>Guaranteed job placement with top companies</p></div>
                <div className={styles.featureItem}><span className={styles.featureLabel} style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>Live Projects</span><p className={styles.featureDesc}>Work on real industry projects and case studies</p></div>
                <div className={styles.featureItem}><span className={styles.featureLabel} style={{ background: 'linear-gradient(135deg, #43e97b, #38f9d7)' }}>Flexible Timing</span><p className={styles.featureDesc}>Weekend and evening batches for working professionals</p></div>
              </div>
            </div>
            <div className={styles.instituteImageContainer}>
              <Image src={heroImage3} alt='Socialprachar Training Institute' className={styles.instituteImage} unoptimized/>
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem} onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}>
                <div className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <span className={`${styles.faqIcon} ${activeAccordion === index ? styles.active : ''}`}>+</span>
                </div>
                {activeAccordion === index && (
                  <div className={styles.faqAnswer}><p>{faq.answer}</p></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Start Your Data Science Journey Today</h2>
          <p className={styles.ctaDescription}>In 2025, Hyderabad continues to strengthen its reputation as a <span className={styles.highlight}>global IT and data hub</span>, making it the <span className={styles.highlight}>best place to pursue Data Science training</span>. With abundant job opportunities, world-class infrastructure, affordable education, and a thriving tech ecosystem, Hyderabad offers everything needed for a successful career.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.enrollButton} onClick={()=>EnrollNow()}>Enroll Today</button>
            {/* <button className={styles.consultButton}></button> */}
          </div>
        </section>

      </div>
    </>
  );
}
