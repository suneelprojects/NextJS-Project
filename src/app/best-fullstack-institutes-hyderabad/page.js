"use client";
import Image from 'next/image';
import styles from './BestFullstackInstitutesHyderabad.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
// import fullstackCareerImage from "../../assets/newassets/Artical1-img1.jpg";
import socialpracharImage from "../../assets/newassets/Artical1-img2.jpg";
import fullstackTrainingImage from "../../assets/newassets/Artical1-img3.jpg";
import careerOpportunitiesImage from "../../assets/newassets/Artical1-img4.jpg";
import salaryTrendsImage from "../../assets/newassets/Artical1-img-5.jpg";
// import finalThoughtsImage from "../../assets/newassets/Artical1-img-6.jpg";
import DataAnalyticsForm from '../best-data-analytics-hyderabad/DataAnalyticsForm';
import Head from 'next/head';

export default function BestFullstackInstitutesHyderabad() {
  const scrollToSection = (sectionId) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        element.scrollIntoView({  
          behavior: prefersReducedMotion ? 'auto' : 'smooth'  
        });
      }
    }
  };

  const reasons = [
    {
      number: "1",
      title: "High Market Demand",
      description: "Companies prefer Fullstack developers who can work on both frontend (React, Angular, Vue.js) and backend (Node.js, Python, Java, PHP) technologies.",
      icon: "🚀"
    },
    {
      number: "2",  
      title: "Excellent Salary Packages",
      description: "Fresh graduates can expect packages between ₹4-6 LPA, while experienced developers can earn ₹15+ LPA easily.",
      icon: "💰"
    },
    {
      number: "3",
      title: "Technical Versatility",  
      description: "Build complete web applications, enterprise systems, e-commerce platforms, and integrate modern AI solutions.",
      icon: "🔧"
    },
    {
      number: "4",
      title: "Global Career Opportunities",
      description: "Fullstack skills are in demand worldwide - US, UK, Canada, Europe, and remote work opportunities.",
      icon: "🌍"
    },
    {
      number: "5",
      title: "Entrepreneurial Potential",
      description: "Strong foundation for freelancing, consulting, or launching your own tech startup with complete development skills.",
      icon: "💼"
    }
  ];

  const modules = [
    {
      title: "Frontend Development",
      items: ["HTML5, CSS3, JavaScript ES6+", "React.js, Bootstrap, TailwindCSS", "Responsive & Mobile-First Design", "Progressive Web Apps"],
      icon: "🎨",
      color: "blue"
    },
    {
      title: "Backend Development", 
      items: ["Python/Django OR Node.js/Express", "RESTful API Development", "Authentication & Security", "Server Architecture"],
      icon: "⚙️",
      color: "green"
    },
    {
      title: "Database Management",
      items: ["SQL (MySQL/PostgreSQL)", "NoSQL (MongoDB)", "Database Design", "Query Optimization"],
      icon: "🗄️",
      color: "purple"
    },
    {
      title: "Version Control & Collaboration",
      items: ["Git & GitHub", "Team Collaboration", "Code Review Process", "Branch Management"],
      icon: "🔀",
      color: "orange"
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS, Google Cloud, Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Deployment Strategies"],
      icon: "☁️",
      color: "teal"
    },
    {
      title: "Modern AI Integration",
      items: ["AI-Powered Development Tools", "Chatbot Implementation", "Machine Learning APIs", "Automated Code Generation"],
      icon: "🤖",
      color: "red"
    }
  ];

  const otherInstitutes = [
    {
      name: "Naresh IT",
      rating: "4.2/5",
      features: ["Comprehensive MERN stack training", "Affordable fee structure", "Weekend & weekday batches", "Basic placement assistance"]
    },
    {
      name: "Durga Soft", 
      rating: "4.0/5",
      features: ["Strong in Java & Python backends", "Theoretical foundation focus", "Experienced faculty", "Limited modern framework coverage"]
    },
    {
      name: "Kelly Technologies",
      rating: "4.3/5",
      features: ["Hands-on project-based learning", "Industry-oriented curriculum", "Flexible batch timings", "Placement support available"]
    },
    {
      name: "AchieversIT",
      rating: "4.1/5",
      features: ["Real-time case studies", "MERN stack specialization", "Mock interview preparation", "Project portfolio development"]
    },
    {
      name: "Digital Lync",
      rating: "4.4/5",
      features: ["Industry-aligned curriculum", "Job-ready training approach", "Interview preparation", "Corporate tie-ups"]
    },
    {
      name: "Codegnan IT Solutions",
      rating: "4.0/5",
      features: ["Python Fullstack specialization", "Django framework focus", "Certification programs", "Career guidance included"]
    }
  ];

  const careerRoles = [
    { role: "Fullstack Web Developer", demand: "Very High" },
    { role: "Frontend Developer", demand: "High" }, 
    { role: "Backend Developer", demand: "High" },
    { role: "AI-Integrated Developer", demand: "Emerging" },
    { role: "Cloud Application Developer", demand: "Growing" },
    { role: "Technical Lead", demand: "High" }
  ];

  const salaryRanges = [
    { 
      range: "₹4-6 LPA", 
      level: "Entry Level", 
      description: "Fresh graduates with proper training and project portfolio", 
      color: "emerald",
      percentage: "60%" 
    },
    { 
      range: "₹7-12 LPA", 
      level: "Mid Level", 
      description: "2-4 years experience with full-stack proficiency", 
      color: "blue",
      percentage: "25%" 
    },
    { 
      range: "₹15+ LPA", 
      level: "Senior Level", 
      description: "5+ years with leadership and architecture skills", 
      color: "purple",
      percentage: "10%" 
    },
    { 
      range: "₹50K-2L/project", 
      level: "Freelancers", 
      description: "Project-based earnings with flexible working", 
      color: "orange",
      percentage: "5%" 
    }
  ];

  const faqs = [
    {
      question: "Which is the Best Fullstack Web Development Course in Hyderabad?",
      answer: "Socialprachar is highly recommended for its comprehensive curriculum, job guarantee program, and integration of modern technologies like AI and cloud platforms."
    },
    {
      question: "How long does it take to become job-ready as a Fullstack developer?",
      answer: "With dedicated learning, 4-6 months of intensive training is typically sufficient to become industry-ready with a strong project portfolio."
    },
    {
      question: "Do I need prior coding experience before joining?", 
      answer: "No prior experience required. Most reputable institutes, including Socialprachar, offer comprehensive training from basics to advanced levels."
    },
    {
      question: "What's the difference between Fullstack and specialized development roles?",
      answer: "Fullstack developers have broader skills across frontend and backend, offering more versatility and career flexibility compared to specialized roles."
    },
    {
      question: "Are job placements really guaranteed?",
      answer: "While many institutes offer placement assistance, only select institutes like Socialprachar provide job guarantee programs with real accountability."
    },
    {
      question: "What modern tools and technologies will I learn?",
      answer: "You'll master development environments, version control (Git), cloud platforms (AWS/Azure), containerization (Docker), and AI-powered development tools."
    },
    {
      question: "What salary expectations should freshers have in Hyderabad?",
      answer: "Freshers can realistically expect ₹4-6 LPA, with potential for higher packages based on skills in modern technologies and strong project portfolios."
    },
    {
      question: "Which companies actively hire Fullstack developers in Hyderabad?",
      answer: "Major recruiters include Infosys, TCS, Accenture, Cognizant, plus growing startups like Soulpage IT Solutions and NYXIFY Technologies."
    },
    {
      question: "Why choose Socialprachar over other training institutes?",
      answer: "Socialprachar combines comprehensive training, mentorship, real projects, industry connections, and job guarantee - a complete career transformation package."
    },
    {
      question: "Can working professionals pursue this course part-time?",
      answer: "Yes, flexible scheduling options including evening batches, weekend classes, and online learning accommodate working professionals."
    }
  ];

const [showFormPopup, setShowFormPopup] = useState(false);

  return (

    <div className={styles.pageContainer}>

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // Organization Schema for Socialprachar
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Socialprachar",
              "url": "https://socialprachar.com",
              "logo": "https://socialprachar.com/images/socialprachar-logo.png",
              "description": "Leading EdTech institute in Hyderabad providing industry-oriented training in data analytics, fullstack development, and digital marketing.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/socialprachar",
                "https://www.instagram.com/socialprachar",
                "https://www.linkedin.com/company/socialprachar"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fullstack Development Training Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Fullstack Web Development Course",
                      "description": "Complete fullstack development training covering frontend, backend, databases, and modern AI integration."
                    }
                  }
                ]
              }
            },
            // ItemList Schema for Institute Listings
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Top Fullstack Institutes in Hyderabad",
              "description": "Comprehensive list of the best fullstack web development training institutes in Hyderabad",
              "numberOfItems": 7,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "EducationalOrganization",
                    "name": "Socialprachar",
                    "description": "Leading institute with job guarantee program and AI integration",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Hyderabad",
                      "addressRegion": "Telangana",
                      "addressCountry": "IN"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "EducationalOrganization",
                    "name": "Naresh IT",
                    "description": "Comprehensive MERN stack training institute",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Hyderabad",
                      "addressRegion": "Telangana",
                      "addressCountry": "IN"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "EducationalOrganization",
                    "name": "Durga Soft",
                    "description": "Strong focus on Java and Python backend development",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Hyderabad",
                      "addressRegion": "Telangana",
                      "addressCountry": "IN"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "EducationalOrganization",
                    "name": "Kelly Technologies",
                    "description": "Hands-on project-based learning institute",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Hyderabad",
                      "addressRegion": "Telangana",
                      "addressCountry": "IN"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "EducationalOrganization",
                    "name": "AchieversIT",
                    "description": "MERN stack specialization with real-time case studies",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Hyderabad",
                      "addressRegion": "Telangana",
                      "addressCountry": "IN"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "EducationalOrganization",
                    "name": "Digital Lync",
                    "description": "Industry-aligned curriculum with corporate tie-ups",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Hyderabad",
                      "addressRegion": "Telangana",
                      "addressCountry": "IN"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "item": {
                    "@type": "EducationalOrganization",
                    "name": "Codegnan IT Solutions",
                    "description": "Python fullstack specialization institute",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Hyderabad",
                      "addressRegion": "Telangana",
                      "addressCountry": "IN"
                    }
                  }
                }
              ]
            },
            // BreadcrumbList Schema
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://socialprachar.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Courses",
                  "item": "https://socialprachar.com/courses"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Best Fullstack Institutes in Hyderabad",
                  "item": "https://socialprachar.com/best-fullstack-institutes-hyderabad"
                }
              ]
            },
            // FAQPage Schema
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the Best Fullstack Web Development Course in Hyderabad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Socialprachar is highly recommended for its comprehensive curriculum, job guarantee program, and integration of modern technologies like AI and cloud platforms."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to become job-ready as a Fullstack developer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With dedicated learning, 4-6 months of intensive training is typically sufficient to become industry-ready with a strong project portfolio."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need prior coding experience before joining?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No prior experience required. Most reputable institutes, including Socialprachar, offer comprehensive training from basics to advanced levels."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the difference between Fullstack and specialized development roles?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fullstack developers have broader skills across frontend and backend, offering more versatility and career flexibility compared to specialized roles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are job placements really guaranteed?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While many institutes offer placement assistance, only select institutes like Socialprachar provide job guarantee programs with real accountability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What modern tools and technologies will I learn?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You'll master development environments, version control (Git), cloud platforms (AWS/Azure), containerization (Docker), and AI-powered development tools."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What salary expectations should freshers have in Hyderabad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Freshers can realistically expect ₹4-6 LPA, with potential for higher packages based on skills in modern technologies and strong project portfolios."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which companies actively hire Fullstack developers in Hyderabad?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Major recruiters include Infosys, TCS, Accenture, Cognizant, plus growing startups like Soulpage IT Solutions and NYXIFY Technologies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Socialprachar over other training institutes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Socialprachar combines comprehensive training, mentorship, real projects, industry connections, and job guarantee - a complete career transformation package."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can working professionals pursue this course part-time?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, flexible scheduling options including evening batches, weekend classes, and online learning accommodate working professionals."
                  }
                }
              ]
            }
          ])
        }}
      />

      <Head>
        <title>Best Fullstack Institutes in Hyderabad – Socialprachar</title>
        <meta name="description" content="Discover the top fullstack web development training institutes in Hyderabad. Comprehensive curriculum covering frontend, backend, databases, and modern AI integration with job guarantee." />
        <meta name="keywords" content="fullstack institutes hyderabad, fullstack web development training, best fullstack course hyderabad, fullstack developer training, fullstack certification hyderabad" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Socialprachar" />
        <link rel="canonical" href="https://socialprachar.com/best-fullstack-institutes-hyderabad" />
        <meta property="og:title" content="Best Fullstack Institutes in Hyderabad – Socialprachar" />
        <meta property="og:description" content="Join the best fullstack web development training in Hyderabad at Socialprachar. Master frontend, backend, databases, and AI integration with guaranteed job placement." />
        <meta property="og:url" content="https://socialprachar.com/best-fullstack-institutes-hyderabad" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://socialprachar.com/images/fullstack-training.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Fullstack Institutes in Hyderabad – Socialprachar" />
        <meta name="twitter:description" content="Join the best fullstack web development training in Hyderabad at Socialprachar. Master frontend, backend, databases, and AI integration with guaranteed job placement." />
        <meta name="twitter:image" content="https://socialprachar.com/images/fullstack-training.jpg" />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Top 10 Fullstack Web Development Training Institutes in Hyderabad
            </h1>
            <p className={styles.heroSubtitle}>
              Transform your career with comprehensive full-stack development training from Hyderabad&aposs leading institutes
            </p>
            <p className={styles.heroDescription}>
              In today&aposs digital-first economy, Fullstack Web Development has emerged as one of the most sought-after career paths for students, fresh graduates, and professionals seeking career transitions. Hyderabad, as a premier IT hub in India, offers exceptional opportunities for aspiring developers.
            </p>
            <div className={styles.heroActions}>
              <button
                onClick={() => scrollToSection("institutes")}
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Explore Top Institutes
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                Get Career Guidance
              </button>
            </div>
          </div>
          {/* <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <Image
                src={fullstackCareerImage}
                alt="Fullstack development career opportunities"
                className={styles.heroImage}
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Why Choose Fullstack Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why Choose a Career in Fullstack Web Development?
            </h2>
            <p className={styles.sectionSubtitle}>
              Discover the compelling reasons why fullstack development is the career choice of the future
            </p>
          </div>

          <div className={styles.reasonsGrid}>
            {reasons.map((reason, index) => (
              <div key={index} className={styles.reasonCard}>
                <div className={styles.cardHeader}>
                  {/* <div className={styles.reasonNumber}>{reason.number}</div> */}
                  
                </div>
                <h3 className={styles.cardTitle}> <span className={styles.reasonIcon}>{reason.icon}</span>{reason.title}</h3>
                <p className={styles.cardDescription}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Institutes Section */}
      <section id="institutes" className={styles.institutesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Top Fullstack Web Development Training Institutes in Hyderabad
            </h2>
            <p className={styles.sectionSubtitle}>
              Carefully curated list of premier institutes offering comprehensive fullstack programs with excellent placement records
            </p>
          </div>

          {/* Featured Institute - Socialprachar */}
          <div className={styles.featuredInstitute}>
            <div className={styles.featuredBadge}>⭐ HIGHLY RECOMMENDED</div>
            <div className={styles.featuredGrid}>
              <div className={styles.featuredContent}>
                <h3 className={styles.featuredTitle}>
                  Socialprachar
                </h3>
                <p className={styles.featuredSubtitle}>
                  The #1 Choice for Fullstack Web Development Training in Hyderabad
                </p>
                
                <div className={styles.featuredHighlights}>
                  <div className={styles.highlight}>
                    <span className={styles.highlightIcon}>🎯</span>
                    <span>Job Guarantee Program</span>
                  </div>
                  <div className={styles.highlight}>
                    <span className={styles.highlightIcon}>🚀</span>
                    <span>AI + Cloud Integration</span>
                  </div>
                  <div className={styles.highlight}>
                    <span className={styles.highlightIcon}>👥</span>
                    <span>1-on-1 Mentorship</span>
                  </div>
                  <div className={styles.highlight}>
                    <span className={styles.highlightIcon}>💼</span>
                    <span>Industry Projects</span>
                  </div>
                </div>

                <div className={styles.featuredFeatures}>
                  <h4 className={styles.featuresTitle}>What Makes Socialprachar Special:</h4>
                  <ul className={styles.featuresList}>
                    <li>Comprehensive curriculum covering modern frontend & backend technologies</li>
                    <li>Real-world projects with live deployment experience</li>
                    <li>Integration of AI tools and cloud platform training</li>
                    <li>Flexible learning options: online, offline, and hybrid</li>
                    <li>Strong industry connections and placement guarantee</li>
                    <li>Regular doubt-clearing sessions and career counseling</li>
                  </ul>
                </div>

                <div className={styles.uniqueValue}>
                  <h4 className={styles.uniqueTitle}>Unique Advantage:</h4>
                  <p className={styles.uniqueDescription}>
                    Unlike other institutes, Socialprachar emphasizes practical AI-powered development tools and cloud deployment, preparing students for the future of web development.
                  </p>
                </div>
              </div>
              
              <div className={styles.featuredImageContainer}>
                <Image
                  src={socialpracharImage}
                  alt="Socialprachar - Best Fullstack Training Institute"
                  className={styles.featuredImage}
                  unoptimized
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.statsCard}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>95%</span>
                      <span className={styles.statLabel}>Placement Rate</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>500+</span>
                      <span className={styles.statLabel}>Alumni Placed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Notable Institutes */}
          <div className={styles.otherInstitutes}>
            <h3 className={styles.otherInstitutesTitle}>
              Other Notable Fullstack Training Institutes
            </h3>
            
            <div className={styles.institutesGrid}>
              {otherInstitutes.map((institute, index) => (
                <div key={index} className={styles.instituteCard}>
                  <div className={styles.instituteHeader}>
                    <h4 className={styles.instituteName}>{institute.name}</h4>
                    <div className={styles.rating}>
                      <span className={styles.stars}>⭐⭐⭐⭐</span>
                      <span className={styles.ratingText}>{institute.rating}</span>
                    </div>
                  </div>
                  
                  <ul className={styles.instituteFeatures}>
                    {institute.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.feature}>
                        <span className={styles.featureIcon}>✓</span>
                        <span className={styles.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className={styles.curriculumSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Comprehensive Fullstack Development Curriculum
            </h2>
            <p className={styles.sectionSubtitle}>
              Master the complete technology stack with our industry-aligned curriculum
            </p>
          </div>

          <div className={styles.curriculumGrid}>
            {modules.map((module, index) => (
              <div key={index} className={`${styles.moduleCard} ${styles[`module${module.color.charAt(0).toUpperCase() + module.color.slice(1)}`]}`}>
                <div className={styles.moduleHeader}>
                  <div className={styles.moduleIconWrapper}>
                    <span className={styles.moduleIcon}>{module.icon}</span>
                  </div>
                  <h3 className={styles.moduleTitle}>{module.title}</h3>
                </div>
                
                <ul className={styles.moduleTopics}>
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.topic}>
                      <span className={styles.topicBullet}>•</span>
                      <span className={styles.topicText}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section id="careers" className={styles.careersSection}>
        <div className={styles.container}>
          <div className={styles.careersGrid}>
            <div className={styles.careersContent}>
              <h2 className={styles.sectionTitle}>
                Career Opportunities & Growth Path
              </h2>
              <p className={styles.sectionDescription}>
                Upon completing your fullstack training at premier institutes like Socialprachar, diverse career opportunities await you in Hyderabad&aposs thriving tech ecosystem.
              </p>

              <div className={styles.careerRoles}>
                <h3 className={styles.rolesTitle}>In-Demand Career Roles:</h3>
                <div className={styles.rolesList}>
                  {careerRoles.map((career, index) => (
                    <div key={index} className={styles.roleItem}>
                      <div className={styles.roleInfo}>
                        <span className={styles.roleName}>{career.role}</span>
                        <span className={`${styles.demandBadge} ${styles[`demand${career.demand.replace(' ', '')}`]}`}>
                          {career.demand}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.hiringCompanies}>
                <h3 className={styles.companiesTitle}>Top Hiring Companies:</h3>
                <p className={styles.companiesDescription}>
                  Leading organizations actively recruiting fullstack developers include TCS, Infosys, Tech Mahindra, Deloitte, Capgemini, Accenture, and innovative startups like Soulpage IT Solutions, NYXIFY Technologies, plus numerous product-based companies and emerging AI-focused organizations.
                </p>
              </div>
            </div>
            
            <div className={styles.careersVisual}>
              <Image
                src={careerOpportunitiesImage}
                alt="Career opportunities for fullstack developers"
                className={styles.careersImage}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Salary Trends Section */}
      <section className={styles.salarySection}>
        <div className={styles.container}>
          <div className={styles.salaryHeader}>
            <h2 className={styles.sectionTitle}>
              Salary Trends for Fullstack Developers in Hyderabad
            </h2>
            <p className={styles.sectionSubtitle}>
              Understand the earning potential across different experience levels
            </p>
          </div>

          <div className={styles.salaryGrid}>
            <div className={styles.salaryChart}>
              <Image
                src={salaryTrendsImage}
                alt="Fullstack developer salary trends"
                className={styles.salaryImage}
                unoptimized
              />
            </div>
            
            <div className={styles.salaryBreakdown}>
              {salaryRanges.map((salary, index) => (
                <div key={index} className={styles.salaryCard}>
                  <div className={styles.salaryCardHeader}>
                    <div className={`${styles.salaryRange} ${styles[`salary${salary.color.charAt(0).toUpperCase() + salary.color.slice(1)}`]}`}>
                      {salary.range}
                    </div>
                    <div className={styles.marketShare}>
                      <span className={styles.percentage}>{salary.percentage}</span>
                      <span className={styles.shareLabel}>of market</span>
                    </div>
                  </div>
                  
                  <div className={styles.salaryDetails}>
                    <h4 className={styles.salaryLevel}>{salary.level}</h4>
                    <p className={styles.salaryDescription}>{salary.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions
            </h2>
            <p className={styles.sectionSubtitle}>
              Get answers to common questions about fullstack development training in Hyderabad
            </p>
          </div>

          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  <span className={styles.questionNumber}>Q{index + 1}</span>
                  <h3 className={styles.questionText}>{faq.question}</h3>
                </div>
                <div className={styles.faqAnswer}>
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Transform Your Career?
              </h2>
              <p className={styles.ctaDescription}>
                The demand for skilled Fullstack Web Developers in Hyderabad continues to surge. Choosing the right training institute is your first step toward a successful, future-proof career in technology.
              </p>
              
              <div className={styles.ctaHighlight}>
                <h3 className={styles.highlightTitle}>Why Choose Socialprachar?</h3>
                <p className={styles.highlightText}>
                  For serious career growth and the most comprehensive <strong>Fullstack Web Development training in Hyderabad</strong>, Socialprachar stands out with its job guarantee, AI integration, and industry-relevant project experience.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`} onClick={() => setShowFormPopup(true)}>
                  Start Your Journey Today
                </button>
                
              </div>

              <div className={styles.successNote}>
                <span className={styles.successIcon}>🎯</span>
                <p className={styles.successText}>
                  Whether you&aposre a fresh graduate, career switcher, or working professional, the right training can transform your future in just 4-6 months.
                </p>
              </div>
            </div>
            
            <div className={styles.ctaVisual}>
              <Image
                src={fullstackTrainingImage}
                alt="Start your fullstack development journey"
                className={styles.ctaImage}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

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