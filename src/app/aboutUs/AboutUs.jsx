"use client";

import React, { useEffect, useRef, useState } from "react";
import smallBuss from "@/assets/homepage/AboutUs/smallBuss.png";
import faculty from "@/assets/homepage/AboutUs/faculty.png";
import placement from "@/assets/homepage/AboutUs/placement.png";
import certify from "@/assets/homepage/AboutUs/certification.png";
import twentyfour from "@/assets/homepage/AboutUs/24Seven.png";
import aboutUsWomen from "@/assets/homepage/AboutUs/aboutUsWomen.png";
import aboutusPic1 from "@/assets/homepage/AboutUs/aboutusPic1.png";
import aboutusPic2 from "@/assets/homepage/AboutUs/aboutusPic2.png";
import aboutusPic3 from "@/assets/homepage/AboutUs/aboutusPic3.png";


import Image from "next/image";
import "@/components/Homepage/index.css";
import styles from "./aboutus.module.css";

// ---- Awards & Achievements gallery ----
import Award1 from "@/assets/CareerAward_Awards/SPAward1.jpg";
import Award2 from "@/assets/CareerAward_Awards/SPAward2.jpg";
import Award3 from "@/assets/CareerAward_Awards/SPAward3.jpg";
import Award4 from "@/assets/CareerAward_Awards/SPAward4.jpg";
import Award5 from "@/assets/CareerAward_Awards/SpAward5.jpg";
import Award6 from "@/assets/CareerAward_Awards/SPAward6.jpg";
import Award7 from "@/assets/CareerAward_Awards/awardimage1.jpeg";
import Award8 from "@/assets/CareerAward_Awards/awardimage2.jpg";
import Award9 from "@/assets/CareerAward_Awards/awardimage3.jpg";
import Award10 from "@/assets/CareerAward_Awards/awardimage4.jpg";
import Award11 from "@/assets/CareerAward_Awards/awardimage5.jpg";
import Award12 from "@/assets/CareerAward_Awards/Home-image.png";
import Award13 from "@/assets/CareerAward_Awards/ChatGPT Image Jul 16, 2026, 10_40_29 AM.png";
import Award14 from "@/assets/CareerAward_Awards/ChatGPT Image Jul 16, 2026, 10_46_55 AM.png";
import Award15 from "@/assets/CareerAward_Awards/ChatGPT Image Jul 16, 2026, 10_59_59 AM.png";



// ---- Featured partnership photos ----
import mouSigning1 from "@/assets/vignan/vignanMouSigning1.jpg";
import mouGroupPhoto from "@/assets/vignan/vignanMouSigning3.jpg";

/* ============================================================
   Icons
   ============================================================ */
const MedalIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <circle cx="12" cy="14" r="6.25" fill="#FFB300" stroke="#B97600" strokeWidth="0.6" />
    <circle cx="12" cy="14" r="3.6" fill="#FFFDF6" />
    <path d="M9.5 2.5 7 9l3.4-1.2L12 9.5l1.6-1.7L17 9l-2.5-6.5h-2.1L12 4.6l-.4-2.1H9.5Z" fill="#FFB300" />
  </svg>
);

const SealCheckIcon = () => (
  <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
    <circle cx="12" cy="12" r="10.5" fill="#0E6B5C" />
    <path d="M7.2 12.6 10.4 15.8 16.9 9.2" stroke="#FFFDF6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="#FFB300" aria-hidden="true">
    <path d="M12 2.5 14.9 8.6l6.7.8-4.9 4.6 1.3 6.6L12 17.6l-5.9 3.1 1.2-6.6-4.8-4.6 6.7-.8L12 2.5Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2.1 2.1Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.9 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.4-8.4 8.4Zm4.6-6.3c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8.9-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.1-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ============================================================
   Animation helpers
   ============================================================ */
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const Reveal = ({ children, delay = 0, className = "", as = "div", ...rest }) => {
  const [ref, visible] = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`spReveal ${visible ? "spRevealVisible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

const Counter = ({ end, prefix = "", suffix = "", duration = 1500 }) => {
  const [ref, visible] = useReveal(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = null;
    let frame;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [visible, end, duration]);

  return (
    <span ref={ref} className="spCounter">
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

const AboutUs = () => {
  const pillars = [
    {
      n: "01",
      image: faculty,
      heading: "Real-Time, In-House Faculty",
      sentense: "Microsoft- and Google-certified trainers who've shipped real production work — not freelancers.",
    },
    {
      n: "02",
      image: placement,
      heading: "Dedicated Placement Engine",
      sentense: "Full-time HR team handling resume audits, mock interviews, and 1,100+ hiring-partner introductions from day one.",
    },
    {
      n: "03",
      image: certify,
      heading: "Globally Recognized Certifications",
      sentense: "Graduate certified by Meta, Google, and four other international bodies — at zero extra cost.",
    },
    {
      n: "04",
      image: twentyfour,
      heading: "Always-On Mentor Access",
      sentense: "Trainers reachable 24/7/365, online or offline, until you're placed — not just until the course ends.",
    },
  ];

  const principles = [
    "10+ years of EdTech expertise, trusted by 16,000+ alumni",
    "95% placement success rate, with an average 127% salary hike",
    "₹8L average package on offer, with top offers touching ₹21L",
    "Alumni placed across 1,100+ hiring partners pan-India",
    "Certifications co-delivered with IIT Madras' Pravartak Foundation",
    "Performance-based internships that come with a real stipend",
    "Curriculum rebuilt every cohort around live AI tooling",
    "9+ national EdTech awards, including Training & Development Company of the Year",
  ];

  const awardsArray = [Award1, Award2, Award4, Award6, Award12, Award11, Award13, Award14, Award15, Award8];

  const testimonials = [
    {
      quote: "SocialPrachar's Data Science & AI course was practical and job-focused. The trainers were always available, and the placement support helped me land my dream role.",
      name: "Narmada M",
      role: "Big Data Engineer",
    },
    {
      quote: "Hands-on projects, expert mentors, and a tireless placement team — SocialPrachar turned my career around completely.",
      name: "Navneetha K",
      role: "Machine Learning Engineer",
    },
    {
      quote: "Industry trainers, cutting-edge content, and a placement team that never gave up — SocialPrachar is the real deal for anyone serious about tech.",
      name: "Bhavishya B",
      role: "Software Engineer",
    },
    {
      quote: "Well-structured curriculum, patient trainers, and outstanding placement support. SocialPrachar made me job-ready faster than I imagined.",
      name: "Sravani P",
      role: "Data Analyst Python",
    },
  ];

  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const markReady = () => setTimeout(() => setPageReady(true), 200);
    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady);
      return () => window.removeEventListener("load", markReady);
    }
  }, []);

  return (
    <div className={styles.spAboutPage}>

      {/* ===================== Page Loader ===================== */}
      <div className={`${styles.spPageLoader} ${pageReady ? styles.spPageLoaderHidden : ""}`} aria-hidden={pageReady}>
        <div className={styles.spLoaderRing}>
          <div className={styles.spLoaderRingInner} />
        </div>
        <p className={styles.spLoaderBrand}>
          Social<span>Prachar</span>
        </p>
        <div className={styles.spLoaderDots}>
          <span className={styles.spLoaderDot} style={{ animationDelay: "0ms" }} />
          <span className={styles.spLoaderDot} style={{ animationDelay: "180ms" }} />
          <span className={styles.spLoaderDot} style={{ animationDelay: "360ms" }} />
        </div>
      </div>

      {/* ===================== 1. Hero ===================== */}
      <section className={styles.spHero}>
        <div className={styles.spHeroImageWrap}>
          <Image
            src={smallBuss}
            alt="Inside SocialPrachar — students and trainers at work"
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
            unoptimized
          />
          <div className={styles.spHeroImageFade} aria-hidden="true" />
        </div>

        <div className={styles.spHeroContentWrap}>
          <Reveal className={styles.spHeroInner + " text-center"}>
            <p className={`spEyebrow ${styles.spEyebrowCenter}`}>About SocialPrachar</p>
            <h1 className={`${styles.spHeroTitle} ${styles.spHeroTitleFull}`}>
              Built On Placements, <span className="text-primary">Not Promises.</span>
            </h1>

            <p className={styles.spHeroAbout}>
              Founded in 2014 by an IIM alumnus, SocialPrachar runs 20+ job-ready programs
              across Hyderabad and Bengaluru — taught by in-house, industry-certified trainers
              with a dedicated placement team from day one.
            </p>
            <p className={styles.spHeroAbout}>
              16,000+ students trained. 95% placement rate. 1,100+ hiring partners.
              Nine national EdTech awards. The numbers say it all.
            </p>
          </Reveal>
        </div>
      </section>

      <div className={styles.spContainerXl}>
        {/* ===================== 2. The Institutional Advantage ===================== */}
        <Reveal as="p" className="spEyebrow text-center">
          The Institutional Advantage
        </Reveal>
        <Reveal as="h2" className="spSectionTitle text-center mb-5">
          Four Institutional Pillars Built for Your Absolute Career Success
        </Reveal>
        <div className={styles.spProvideGrid}>
          {pillars.map((p, i) => (
            <Reveal as="div" delay={i * 90} key={i} className={styles.spProvideCol}>
              <div className={styles.spProvideCard}>
                <div className={styles.spProvideImgWrap}>
                  <Image src={p.image} alt={p.heading} unoptimized />
                </div>
                <h5>{p.heading}</h5>
                <p>{p.sentense}</p>
              </div>
            </Reveal>
          ))}
        </div>



        {/* ===================== 4. Institutional Affiliations ===================== */}
        <div className={styles.spValidationSection} id="industry-validation">
          <Reveal className={styles.spValidationHeadFull}>
            <p className="spEyebrow text-center">Institutional Affiliations</p>
            <h2 className={`spSectionTitle ${styles.spValidationTitle}`}>Industry Validation &amp; Endorsements</h2>
            <p className={styles.spAwardsLead}>
              Every number and every partner is independently verifiable — including our certification tie-up with IIT Madras&apos; Pravartak Foundation.
            </p>
          </Reveal>

          <div className={`${styles.spLogoGrid} ${styles.spLogoGridLarge}`}>
            {[aboutusPic1, aboutusPic2, aboutusPic3].map((pic, i) => (
              <Reveal as="div" delay={i * 100} key={i} className={styles.spLogoCol}>
                <div className={`${styles.spLogoCard} ${styles.spLogoCardLarge}`}>
                  <Image
                    src={pic}
                    alt={`SocialPrachar industry recognition ${i + 1}`}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    unoptimized
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <div className={`${styles.spOutcomeBar} ${styles.spOutcomeBarFull}`}>
            <Reveal delay={0} className={styles.spOutcomeItem}>
              <h3>
                <Counter end={1100} suffix="+" />
              </h3>
              <p className={styles.spOutcomeLabel}>Hiring Partners</p>
            </Reveal>
            <Reveal delay={90} className={styles.spOutcomeItem}>
              <h3>
                <Counter end={127} suffix="%" />
              </h3>
              <p className={styles.spOutcomeLabel}>Avg. Placement Hike</p>
            </Reveal>
            <Reveal delay={180} className={styles.spOutcomeItem}>
              <h3>
                <Counter prefix="₹" end={8} suffix="L" />
              </h3>
              <p className={styles.spOutcomeLabel}>Average CTC</p>
            </Reveal>
            <Reveal delay={270} className={styles.spOutcomeItem}>
              <h3>
                <Counter prefix="₹" end={21} suffix="L" />
              </h3>
              <p className={styles.spOutcomeLabel}>Highest CTC</p>
            </Reveal>
          </div>
        </div>

        {/* ===================== 5. Elite Recognition Portfolio ===================== */}
        <div className={styles.spAwardsSection}>
          <Reveal className={`text-center ${styles.spAwardsHead}`}>
            <p className="spEyebrow">Elite Recognition Portfolio</p>
            <h2 className="spSectionTitle">
              One Decade. Nine National Trophies. <span className="text-primary">Earning Industry Validation.</span>
            </h2>
            <p className={styles.spAwardsLead}>
              Awards are earned through placement data, not marketing. Most recently: Training &amp; Development Company of the Year, 2025.
            </p>
          </Reveal>

          <div className={styles.spAwardsGrid}>
            {awardsArray.map((award, i) => (
              <div className={styles.spAwardGridCard} key={i}>
                <Image
                  src={award}
                  alt={`SocialPrachar award and achievement ${i + 1}`}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  style={{ objectFit: "contain", padding: "8px" }}
                  unoptimized
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <Reveal className={styles.spTestimonialStrip}>
            <p className={`${styles.spChipLead} ${styles.spTestimonialStripLead}`}>What our alumni say</p>
            <div className={styles.spTestimonialGridNew}>
              {testimonials.map((t, i) => (
                <div className={styles.spTestimonialCardNew} key={i}>
                  <div className={styles.spTestimonialCardTop}>
                    <div className={styles.spTestimonialAvatar}>
                      {t.name.charAt(0)}
                    </div>
                    <div className={styles.spTestimonialMeta}>
                      <span className={styles.spTestimonialNameNew}>{t.name}</span>
                      <span className={styles.spTestimonialRoleNew}>{t.role}</span>
                    </div>
                    <div className={styles.spTestimonialStars}>
                      {[...Array(5)].map((_, s) => <StarIcon key={s} />)}
                    </div>
                  </div>
                  <div className={styles.spTestimonialDivider} />
                  <p className={styles.spTestimonialQuoteNew}>&ldquo;{t.quote}&rdquo;</p>
                  <div className={styles.spTestimonialCardGlow} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ===================== 6. Vignan Partnership Feature ===================== */}
        <article className={styles.spFeatureSection}>
          <Reveal className={styles.spFeatureHeadFull}>
            <p className="spEyebrow text-center">Industry Spotlight</p>
            <h2 className={`spSectionTitle ${styles.spFeatureHeadTitle}`}>
              <span className={styles.spFeatureHeadBlack}>
                SocialPrachar Expands AI Education Through
              </span>{" "}
              <span className="text-primary">
                Strategic Partnership with Vignan&apos;s University
              </span>
            </h2>
          </Reveal>

          <p className={styles.spFeatureCaption}>
            Vajra.ai and Vignan&apos;s University Sign MoU to Equip Students with
            Future-Ready AI Skills
          </p>

          <Reveal className={styles.spFeatureBody}>
            <p>
              Vajra.ai and Vignan&apos;s University have signed an MoU to equip students
              with future-ready AI and automation skills through hands-on, industry-driven education.
            </p>

            <p>Under this collaboration, students gain access to:</p>

            <ul className={styles.spFeatureBulletList}>
              <li>Training on modern AI tools and platforms</li>
              <li>Generative AI and Automation workshops</li>
              <li>Industry-led mentoring sessions</li>
              <li>Real-world AI projects and case studies</li>
              <li>Internship and career development opportunities</li>
              <li>Exposure to current industry workflows and best practices</li>
            </ul>

            <p className={styles.spFeaturePullQuote}>
              Our vision is simple: empower students with the knowledge, tools, and
              practical experience needed to succeed in an AI-driven future.
            </p>
          </Reveal>

          <div className={styles.spFeatureGallery}>
            <Reveal delay={0} className={styles.spFeatureGalleryImg}>
              <Image
                src={mouSigning1}
                alt="Representatives of Vignan's University and Vajra.ai during the MoU signing ceremony"
                style={{ width: "100%", height: "auto", display: "block" }}
                unoptimized
              />
            </Reveal>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutUs;