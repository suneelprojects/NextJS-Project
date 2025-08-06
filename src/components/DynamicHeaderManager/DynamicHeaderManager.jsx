/** @format */
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";

const DEFAULT_IMAGE = "/default-og-image.jpg"; // Place a default image in public folder

export default function DynamicHeaderManager() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  // These paths should not show popup
  const popupExcludedPaths = ["/thank-you", "/privacy-policy", "/contact"];

  // These paths will not render anything from this component
  const renderExcludedPaths = ["/career-quiz"];

  useEffect(() => {
    // --- Route meta for static pages ---
    const routeMeta = {
      "/": {
        title: "Top Choice Leading Tech Training Institute in Hyderabad | SocialPrachar",
        description: "Join the top-rated tech training institute in Hyderabad with real-time projects and expert mentors at SocialPrachar.",
        image: DEFAULT_IMAGE,
      },
      "/courses": {
        title: "Top Training Courses in Hyderabad | Data Science, AI, Fullstack, AWS & Digital Marketing",
        description: "Explore industry-leading courses in Data Science, Artificial Intelligence, Fullstack, AWS DevOps & Digital Marketing at Socialprachar — Hyderabad’s favorite training institute.",
        og: {
          title: "Top Training Courses in Hyderabad | Data Science, AI, Fullstack, AWS & Digital Marketing",
          description: "Explore industry-leading courses in Data Science, Artificial Intelligence, Fullstack, AWS DevOps & Digital Marketing at Socialprachar — Hyderabad’s favorite training institute.",
          url: "https://socialprachar.com/courses",
          type: "website",
          image: "https://socialprachar.com/images/og/courses.jpg"
        }
      },
      "/success-stories": {
        title: "Student Success Stories | Real Reviews & Placements at Socialprachar Hyderabad",
        description: "Discover inspiring success stories of students who launched their careers through Socialprachar’s top-rated courses in Data Science, AI, Fullstack, AWS & Digital Marketing.",
        og: {
          title: "Student Success Stories | Real Reviews & Placements at Socialprachar Hyderabad",
          description: "Discover inspiring success stories of students who launched their careers through Socialprachar’s top-rated courses in Data Science, AI, Fullstack, AWS & Digital Marketing.",
          url: "https://socialprachar.com/success-stories",
          type: "article",
          image: "https://socialprachar.com/images/og/success-stories.jpg"
        }
      },
      "/career-workshop/full-stack": {
        title: "Full Stack Developer Career Guidance | Roadmap to Success – Socialprachar Hyderabad",
        description: "Get expert career counselling in Full Stack Development. Learn the roadmap to become a successful full-stack developer from Hyderabad’s leading training institute – Socialprachar.",
        og: {
          title: "Full Stack Developer Career Guidance | Roadmap to Success – Socialprachar Hyderabad",
          description: "Get expert career counselling in Full Stack Development. Learn the roadmap to become a successful full-stack developer from Hyderabad’s leading training institute – Socialprachar.",
          url: "https://socialprachar.com/career-counselling/full-stack",
          type: "article",
          image: "https://socialprachar.com/images/og/fullstack.jpg"
        }
      },
      "/career-workshop/data-science": {
        title: "Data Science Career Counselling | Build Your Future with Socialprachar",
        description: "Plan your Data Science career with Hyderabad’s most trusted institute. Get personalized guidance and a roadmap to master AI, ML, Python & more at Socialprachar.",
        og: {
          title: "Data Science Career Counselling | Build Your Future with Socialprachar",
          description: "Plan your Data Science career with Hyderabad’s most trusted institute. Get personalized guidance and a roadmap to master AI, ML, Python & more at Socialprachar.",
          url: "https://socialprachar.com/career-counselling/data-science",
          type: "article",
          image: "https://socialprachar.com/images/og/data-science.jpg"
        }
      },
      "/career-workshop/cloud-career": {
        title: "Cloud & AWS Career Counselling | Launch Your Cloud Tech Career",
        description: "Learn how to become a Cloud Computing or AWS expert with guidance from Hyderabad’s favorite tech institute. Start your journey with expert-led counselling at Socialprachar.",
        og: {
          title: "Cloud & AWS Career Counselling | Launch Your Cloud Tech Career",
          description: "Learn how to become a Cloud Computing or AWS expert with guidance from Hyderabad’s favorite tech institute. Start your journey with expert-led counselling at Socialprachar.",
          url: "https://socialprachar.com/career-counselling/cloud",
          type: "article",
          image: "https://socialprachar.com/images/og/cloud.jpg"
        }
      },
      "/upcoming-batches": {
        title: "Upcoming Batches – Join Top Tech Courses at Socialprachar Hyderabad",
        description: "Stay updated on our latest course batches in Data Science, AI, Fullstack, AWS & Digital Marketing. Enroll in upcoming sessions at Hyderabad’s top-rated training institute.",
        og: {
          title: "Upcoming Batches – Join Top Tech Courses at Socialprachar Hyderabad",
          description: "Stay updated on our latest course batches in Data Science, AI, Fullstack, AWS & Digital Marketing. Enroll in upcoming sessions at Hyderabad’s top-rated training institute.",
          url: "https://socialprachar.com/upcoming-batches",
          type: "website",
          image: "https://socialprachar.com/images/og/upcoming-batches.jpg"
        }
      },
      "/subscription/working-professionals": {
        title: "Flexible Learning for Working Professionals | Weekend & Online Courses",
        description: "Advance your career with flexible courses tailored for working professionals. Learn Data Science, AI, Fullstack, AWS, and Digital Marketing from Hyderabad’s best tech institute.",
        og: {
          title: "Flexible Learning for Working Professionals | Weekend & Online Courses",
          description: "Advance your career with flexible courses tailored for working professionals. Learn Data Science, AI, Fullstack, AWS, and Digital Marketing from Hyderabad’s best tech institute.",
          url: "https://socialprachar.com/subscription/working-professionals",
          type: "website",
          image: "https://socialprachar.com/images/og/working-professionals.jpg"
        }
      },
      "/subscription/students": {
        title: "Affordable Learning Plans for Students | Data Science, Fullstack, Digital Marketing",
        description: "Get student-friendly plans to learn top tech skills. Begin your career in Data Science, AI, Fullstack & more with expert guidance from Hyderabad’s trusted institute – Socialprachar.",
        og: {
          title: "Affordable Learning Plans for Students | Data Science, Fullstack, Digital Marketing",
          description: "Get student-friendly plans to learn top tech skills. Begin your career in Data Science, AI, Fullstack & more with expert guidance from Hyderabad’s trusted institute – Socialprachar.",
          url: "https://socialprachar.com/subscription/students",
          type: "website",
          image: "https://socialprachar.com/images/og/students.jpg"
        }
      },
      "/aboutUs": {
        title: "About Socialprachar | Hyderabad’s Most Loved Tech Training Institute",
        description: "Learn more about Socialprachar – the go-to training institute in Hyderabad for cutting-edge tech courses in Data Science, AI, Fullstack, AWS, and Digital Marketing.",
        og: {
          title: "About Socialprachar | Hyderabad’s Most Loved Tech Training Institute",
          description: "Learn more about Socialprachar – the go-to training institute in Hyderabad for cutting-edge tech courses in Data Science, AI, Fullstack, AWS, and Digital Marketing.",
          url: "https://socialprachar.com/aboutUs",
          type: "website",
          image: "https://socialprachar.com/images/og/about.jpg"
        }
      },
      "/courseBlog": {
        title: "Course Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar",
        description: "Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad’s leading training institute.",
        og: {
          title: "Course Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar",
          description: "Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad’s leading training institute.",
          url: "https://socialprachar.com/courseBlog",
          type: "blog",
          image: "https://socialprachar.com/images/og/blog.jpg"
        }
      },
      "/events": {
        title: "Workshops, Events & Webinars | Tech Learning at Socialprachar Hyderabad",
        description: "Join live workshops, career events & webinars on tech topics like Data Science, AI, Fullstack & AWS. Learn from Hyderabad’s top trainers at Socialprachar.",
        og: {
          title: "Workshops, Events & Webinars | Tech Learning at Socialprachar Hyderabad",
          description: "Join live workshops, career events & webinars on tech topics like Data Science, AI, Fullstack & AWS. Learn from Hyderabad’s top trainers at Socialprachar.",
          url: "https://socialprachar.com/events",
          type: "website",
          image: "https://socialprachar.com/images/og/events.jpg"
        }
      },
      "/career-roadmaps": {
        title: "Career Roadmaps for Tech Roles | Data Science, Cloud, Fullstack & More",
        description: "Explore expert-designed career roadmaps to become a pro in Data Science, Fullstack, AI & Cloud. Socialprachar Hyderabad helps you chart the path to tech success.",
        og: {
          title: "Career Roadmaps for Tech Roles | Data Science, Cloud, Fullstack & More",
          description: "Explore expert-designed career roadmaps to become a pro in Data Science, Fullstack, AI & Cloud. Socialprachar Hyderabad helps you chart the path to tech success.",
          url: "https://socialprachar.com/career-roadmaps",
          type: "article",
          image: "https://socialprachar.com/images/og/roadmap.jpg"
        }
      },
      "/data-science": {
        title: "Best Data Science Course Training Institute in Hyderabad | SocialPrachar",
        description: "Join SocialPrachar's Data Science Course with hands-on training, projects, and placement support. Learn from experts and boost your career.",
        og: {
          title: "Data Science Course | SocialPrachar",
          description: "Advance your career with SocialPrachar's Data Science Course in Hyderabad. Real-time projects, expert trainers, and job assistance.",
          url: "https://socialprachar.com/data-science",
          type: "website",
          image: "https://socialprachar.com/path-to-default-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/data-science",
            title: "Data Science Course | Learn & Get Placed",
            description: "Enroll in Data Science Course at SocialPrachar. Get certified and job-ready with practical skills.",
            image: "https://socialprachar.com/path-to-default-twitter-image.jpg"
          }
        }
      },
      "/full-stack-developer-course": {
        title: "Best Full Stack Developer Course Training Institute in Hyderabad | SocialPrachar",
        description: "Join SocialPrachar's Full Stack Developer Course with hands-on training, projects, and placement support. Learn from experts and boost your career.",
        og: {
          title: "Full Stack Developer Course | SocialPrachar",
          description: "Advance your career with SocialPrachar's Full Stack Developer Course in Hyderabad. Real-time projects, expert trainers, and job assistance.",
          url: "https://socialprachar.com/full-stack-developer-course",
          type: "website",
          image: "https://socialprachar.com/path-to-default-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/full-stack-developer-course",
            title: "Full Stack Developer Course | Learn & Get Placed",
            description: "Enroll in Full Stack Developer Course at SocialPrachar. Get certified and job-ready with practical skills.",
            image: "https://socialprachar.com/path-to-default-twitter-image.jpg"
          }
        }
      },
      "/artificial-intelligence-course-training-institute-in-hyderabad": {
        title: "Best Artificial Intelligence Course Training Institute in Hyderabad | SocialPrachar",
        description: "Master Artificial Intelligence with SocialPrachars expert-led training in Hyderabad. Learn Machine Learning, Deep Learning, Python, NLP, and AI projects with placement guarantee.",
        og: {
          title: "Artificial Intelligence Course in Hyderabad ML, DL, Python | SocialPrachar",
          description: "Accelerate your AI career with SocialPrachars Artificial Intelligence course in Hyderabad. Work on real-time projects and become job-ready in AI & ML.",
          url: "https://socialprachar.com/artificial-intelligence-course-training-institute-in-hyderabad",
          type: "website",
          image: "https://socialprachar.com/path-to-ai-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/artificial-intelligence-course-training-institute-in-hyderabad",
            title: "AI Course Training in Hyderabad | Learn ML, DL, Python, NLP",
            description: "Join SocialPrachars AI course in Hyderabad and master Artificial Intelligence tools and techniques through expert-led training and real-time projects.",
            image: "https://socialprachar.com/path-to-ai-twitter-image.jpg"
          }
        }
      },
      "/digital-marketing-course-training-institute-hyderabad": {
        title: "Digital Marketing Course Training Institute in Hyderabad | SocialPrachar",
        description: "Learn SEO, Google Ads, Social Media, and more with SocialPrachars Digital Marketing Course in Hyderabad. Real-time projects, expert mentors, and placement guarantee.",
        og: {
          title: "Digital Marketing Course in Hyderabad SEO, Google Ads, Meta Ads | SocialPrachar",
          description: "Become a certified digital marketer with SocialPrachars Digital Marketing course in Hyderabad. Master SEO, PPC, social media, and analytics with placements.",
          url: "https://socialprachar.com/digital-marketing-course-training-institute-hyderabad",
          type: "website",
          image: "https://socialprachar.com/path-to-digital-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/digital-marketing-course-training-institute-hyderabad",
            title: "Digital Marketing Training in Hyderabad | SEO, PPC, SMM with Placements",
            description: "Join SocialPrachars Digital Marketing course and build your career with hands-on tools like Google Ads, Meta Ads, and real-time marketing projects.",
            image: "https://socialprachar.com/path-to-digital-og-image.jpg"
          }
        }
      },
      "/generative-ai-course-training-institute-hyderabad": {
        title: "Best Generative AI Course Training Institute in Hyderabad | SocialPrachar",
        description: "Join SocialPrachar's Generative  AI Course with hands-on training, projects, and placement support. Learn from experts and boost your career.",
        og: {
          title: "Generative AI Course | SocialPrachar",
          description: "Advance your career with SocialPrachar's Generative AI Course in Hyderabad. Real-time projects, expert trainers, and job assistance.",
          url: "https://socialprachar.com/generative-ai-course-training-institute-Hyderabad",
          type: "website",
          image: "https://socialprachar.com/path-to-default-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/generative-ai-course-training-institute-Hyderabad",
            title: "Generative AI Course | Learn & Get Placed",
            description: "Enroll in Generative AI Course at SocialPrachar. Get certified and job-ready with practical skills.",
            image: "https://socialprachar.com/path-to-default-twitter-image.jpg"
          }
        }
      },
      "/data-analytics-course-training-hyderabad": {
        title: "Best Data Analytics Course Training Institute in Hyderabad | SocialPrachar",
        description: "Join SocialPrachar's Data Analytics Course with hands-on training, projects, and placement support. Learn from experts and boost your career.",
        og: {
          title: "Data Analytics Course | SocialPrachar",
          description: "Advance your career with SocialPrachar's Data Analytics Course in Hyderabad. Real-time projects, expert trainers, and job assistance.",
          url: "https://socialprachar.com/data-analytics-course-training-Hyderabad",
          type: "website",
          image: "https://socialprachar.com/path-to-default-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/data-analytics-course-training-Hyderabad",
            title: "Data Analytics Course | Learn & Get Placed",
            description: "Enroll in Data Analytics Course at SocialPrachar. Get certified and job-ready with practical skills.",
            image: "https://socialprachar.com/path-to-default-twitter-image.jpg"
          }
        }
      },
      "/snowflake-training-in-hyderabad": {
        title: "Best Snowflake Training Institute in Hyderabad | SocialPrachar",
        description: "Join SocialPrachar's Snowflake Training with hands-on training, projects, and placement support. Learn from experts and boost your career.",
        og: {
          title: "Snowflake Training | SocialPrachar",
          description: "Advance your career with SocialPrachar's Snowflake Training in Hyderabad. Real-time projects, expert trainers, and job assistance.",
          url: "https://socialprachar.com/snowflake-training-in-Hyderabad",
          type: "website",
          image: "https://socialprachar.com/path-to-default-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/snowflake-training-in-Hyderabad",
            title: "Snowflake Training | Learn & Get Placed",
            description: "Enroll in Snowflake Training at SocialPrachar. Get certified and job-ready with practical skills.",
            image: "https://socialprachar.com/path-to-default-twitter-image.jpg"
          }
        }
      },
      "/salesforce-course": {
        title: "Best Salesforce Course Training Institut  e in Hyderabad | SocialPrachar",
        description: "Join SocialPrachar's Salesforce Course with hands-on training, projects, and placement support. Learn from experts and boost your career.",
        og: {
          title: "Salesforce Course | SocialPrachar",
          description: "Advance your career with SocialPrachar's Salesforce Course in Hyderabad. Real-time projects, expert trainers, and job assistance.",
          url: "https://socialprachar.com/salesforce-course",
          type: "website",
          image: "https://socialprachar.com/path-to-default-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/salesforce-course",
            title: "Salesforce Course | Learn & Get Placed",
            description: "Enroll in Salesforce Course at SocialPrachar. Get certified and job-ready with practical skills.",
            image: "https://socialprachar.com/path-to-default-twitter-image.jpg"
          }
        }
      },
      "/python-full-stack-development-course": {
        title: "Python Full Stack Developer Course in Hyderabad | SocialPrachar",
        description: "Join SocialPrachar's Python Full Stack Developer Course with hands-on training, projects, and placement support. Learn from experts and boost your career.",
        og: {
          title: "Python Full Stack Developer Course | SocialPrachar",
          description: "Advance your career with SocialPrachar's Python Full Stack Developer Course in Hyderabad. Real-time projects, expert trainers, and job assistance.",
          url: "https://socialprachar.com/python-full-stack-development-course",
          type: "website",
          image: "https://socialprachar.com/path-to-default-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/python-full-stack-development-course",
            title: "Python Full Stack Developer Course | Learn & Get Placed",
            description: "Enroll in Python Full Stack Developer Course at SocialPrachar. Get certified and job-ready with practical skills.",
            image: "https://socialprachar.com/path-to-default-twitter-image.jpg"
          }
        }
      },
      "/java-full-stack-development-course": {
        title: "Best Java Full Stack Developer Course Training Institute in Hyderabad | SocialPrachar",
        description: "Become a Java Full Stack Developer with expert training from SocialPrachar. Learn Core Java, Spring Boot, React, SQL, and build real-time projects with placement support.",
        og: {
          title: "Java Full Stack Developer Course in Hyderabad Spring Boot, React, SQL | SocialPrachar",
          description: "Master Java Full Stack development with SocialPrachars job-oriented course in Hyderabad. Learn Java, frontend/backend, and work on real-world applications.",
          url: "https://socialprachar.com/java-full-stack-development-course",
          type: "website",
          image: "https://socialprachar.com/path-to-java-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/java-full-stack-development-course",
            title: "Java Full Stack Developer Training in Hyderabad | Core Java, Spring Boot",
            description: "Join SocialPrachars Java Full Stack course and gain hands-on experience with Java, frontend frameworks, APIs, and databases. Get placement support.",
            image: "https://socialprachar.com/path-to-java-twitter-image.jpg"
          }
        }
      },
      "/awsdevopscourse": {
        title: "Best AWS DevOps Course Training Institute in Hyderabad | SocialPrachar",
        description: "Master AWS DevOps with SocialPrachars expert-led course in Hyderabad. Learn CI/CD, Docker, Kubernetes, AWS tools with real-time projects and placement guarantee.",
        og: {
          title: "AWS DevOps Course in Hyderabad CI/CD, Docker, AWS Tools | SocialPrachar",
          description: "Kickstart your cloud and DevOps career with SocialPrachars AWS DevOps course in Hyderabad. Learn automation, deployment pipelines, and get placed!",
          url: "https://socialprachar.com/aws-devops-course",
          type: "website",
          image: "https://socialprachar.com/path-to-aws-og-image.jpg",
          twitter: {
            card: "summary_large_image",
            url: "https://socialprachar.com/aws-devops-course",
            title: "AWS DevOps Training in Hyderabad | Master CI/CD, Docker, Kubernetes",
            description: "Enroll in SocialPrachars AWS DevOps course and learn real-timedeployment, monitoring, and automation techniques. Launch your cloud career today.",
            image: "https://socialprachar.com/path-to-aws-twitter-image.jpg"
          }
        }
      },
      "/code-clash": {
        title: "Code Clash Hackathon | Test Your Skills in Coding Challenges – Socialprachar",
        description: "Participate in Code Clash, a dynamic coding hackathon designed for aspiring developers and coders. Compete, solve real-world problems, and win exciting prizes.",
        og: {
          title: "Code Clash Hackathon | Test Your Skills in Coding Challenges – Socialprachar",
          description: "Participate in Code Clash, a dynamic coding hackathon designed for aspiring developers and coders. Compete, solve real-world problems, and win exciting prizes.",
          url: "https://socialprachar.com/code-clash",
          type: "website",
          image: "/Home-image.png"
        }
      },
      "/dataclash": {
        title: "Data Clash Hackathon | Battle of Data Minds – Socialprachar",
        description: "Join Data Clash – a thrilling data-centric hackathon focused on Data Science, AI & Analytics. Solve challenges, showcase skills, and boost your career profile.",
        og: {
          title: "Data Clash Hackathon | Battle of Data Minds – Socialprachar",
          description: "Join Data Clash – a thrilling data-centric hackathon focused on Data Science, AI & Analytics. Solve challenges, showcase skills, and boost your career profile.",
          url: "https://socialprachar.com/dataclash",
          type: "website",
          image: "/Home-image.png"
        }
      },
      "/scholarship-test": {
        title: "Scholarship Test | Earn Course Scholarships via MCQ Exam – Socialprachar",
        description: "Apply now for the Socialprachar Scholarship Test. Attempt the MCQ exam to win scholarships for top tech courses like Data Science, Fullstack & Digital Marketing.",
        og: {
          title: "Scholarship Test | Earn Course Scholarships via MCQ Exam – Socialprachar",
          description: "Apply now for the Socialprachar Scholarship Test. Attempt the MCQ exam to win scholarships for top tech courses like Data Science, Fullstack & Digital Marketing.",
          url: "https://socialprachar.com/scholarship-test",
          type: "website",
          image: "/scolorship-img.png"
        }
      },
      "/socialhire": {
        title: "SocialHire by Socialprachar | Placement-Ready Career Acceleration Platform",
        description: "Get job-ready with SocialHire – a placement preparation platform by Socialprachar. Resume building, mock interviews, skill grooming & hiring assistance.",
        og: {
          title: "SocialHire by Socialprachar | Placement-Ready Career Acceleration Platform",
          description: "Get job-ready with SocialHire – a placement preparation platform by Socialprachar. Resume building, mock interviews, skill grooming & hiring assistance.",
          url: "https://socialprachar.com/socialhire",
          type: "website",
          image: "/Home-image.png"
        }
      },
    };

    // --- Dynamic meta for course/blog/project pages ---
    let meta = routeMeta[pathname] || {};
    let dynamicData = {};
    let og = meta.og || {};

    // Course page ([slug])
    if (pathname.startsWith("/")) {
      if (window && window.__COURSE_META__) {
        dynamicData = window.__COURSE_META__;
      }
    }
    if (window && window.__BLOG_META__) {
      dynamicData = window.__BLOG_META__;
    }

    // Helper to get correct OG image path
    const getOgImage = (pathname) => {
      const courseRoutes = [
        "/courses",
        "/data-science",
        "/full-stack-developer-course",
        "/artificial-intelligence-course-training-institute-in-hyderabad",
        "/digital-marketing-course-training-institute-hyderabad",
        "/generative-ai-course-training-institute-hyderabad",
        "/data-analytics-course-training-hyderabad",
        "/snowflake-training-in-hyderabad",
        "/salesforce-course",
        "/python-full-stack-development-course",
        "/java-full-stack-development-course",
        "/awsdevopscourse"
      ];
      if (courseRoutes.includes(pathname)) return "/Courses-img.png";
      if (pathname === "/aboutUs") return "/About-img.png";
      if (pathname === "/success-stories") return "/success-stories-img.png";
      if (pathname === "/upcoming-batches") return "/upcoming-img.webp";
      return "/Home-image.png";
    };

    // Fallbacks
    const title = dynamicData.title || meta.title || document.title || "SocialPrachar";
    const description = dynamicData.description || meta.description || `Learn more about ${title.replace(" | SocialPrachar", "")} at SocialPrachar.`;
    // OG dynamic: prefer provided og fields, then dynamic, then fallback
    const ogTitle = og.title || dynamicData.ogTitle || title;
    const ogDescription = og.description || dynamicData.ogDescription || description;
    const ogImage = getOgImage(pathname);
    const ogUrl = og.url || dynamicData.ogUrl || window.location.href;
    const ogType = og.type || dynamicData.ogType || "website";

    document.title = title;
    updateMetaTag("description", description);
    // Open Graph
    updateMetaProperty("og:title", ogTitle);
    updateMetaProperty("og:description", ogDescription);
    updateMetaProperty("og:image", ogImage);
    updateMetaProperty("og:url", ogUrl);
    updateMetaProperty("og:type", ogType);
    // Twitter Card
    updateMetaName("twitter:card", "summary_large_image");
    updateMetaName("twitter:title", ogTitle);
    updateMetaName("twitter:description", ogDescription);
    updateMetaName("twitter:image", ogImage);
    updateMetaName("twitter:url", ogUrl);

    if (!popupExcludedPaths.includes(pathname)) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 15000);
      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [pathname]);

  // --- Meta tag helpers ---
  const updateMetaTag = (name, content) => {
    let metaTag = document.querySelector(`meta[name='${name}']`);
    if (metaTag) {
      metaTag.setAttribute("content", content);
    } else {
      metaTag = document.createElement("meta");
      metaTag.name = name;
      metaTag.content = content;
      document.head.appendChild(metaTag);
    }
  };
  const updateMetaProperty = (property, content) => {
    let metaTag = document.querySelector(`meta[property='${property}']`);
    if (metaTag) {
      metaTag.setAttribute("content", content);
    } else {
      metaTag = document.createElement("meta");
      metaTag.setAttribute("property", property);
      metaTag.content = content;
      document.head.appendChild(metaTag);
    }
  };
  const updateMetaName = (name, content) => {
    let metaTag = document.querySelector(`meta[name='${name}']`);
    if (metaTag) {
      metaTag.setAttribute("content", content);
    } else {
      metaTag = document.createElement("meta");
      metaTag.name = name;
      metaTag.content = content;
      document.head.appendChild(metaTag);
    }
  };

  // Don't render anything for excluded paths
  if (renderExcludedPaths.includes(pathname)) {
    return null;
  }

  // You can return null or actual JSX here
  return null;
}
