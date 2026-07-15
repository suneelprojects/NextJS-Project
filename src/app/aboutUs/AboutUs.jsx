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
      sentense:
        "Every course is taught by our own Microsoft- and Google-certified trainers — practitioners who've shipped real production work, not freelancers reading off slides.",
    },
    {
      n: "02",
      image: placement,
      heading: "Dedicated Placement Engine",
      sentense:
        "A full-time HR and placement team owns your job search from week one: resume audits, mock interviews, and warm introductions into our 1,100+ hiring-partner network.",
    },
    {
      n: "03",
      image: certify,
      heading: "Globally Recognized Certifications",
      sentense:
        "Graduate certified by Meta, Google, and four other international bodies, at zero extra cost — credentials recruiters already trust on sight.",
    },
    {
      n: "04",
      image: twentyfour,
      heading: "Always-On Mentor Access",
      sentense:
        "Stuck the night before an interview? Trainers and mentors stay reachable 24/7/365, online or offline, until you're placed — not just until the course ends.",
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

  const awardsArray = [Award1, Award2, Award3, Award4, Award5, Award6,Award12, Award7, Award8, Award9, Award10, Award11];

  const testimonials = [
    {
      quote:
        "I can confidently say that choosing SocialPrachar for my career transformation was the best decision I made. The Full Stack Data Science and AI course was not only comprehensive but also highly practical, with real-world projects that made learning engaging and effective. The trainers were incredibly knowledgeable and supportive, always ready to guide me whenever I faced challenges. Thanks to their excellent training and career assistance, I've now landed my dream job. I highly recommend SocialPrachar to anyone looking to build a career in tech!",
      name: "Narmada M",
      role: "Big Data Engineer",
    },
    {
      quote:
        "My journey at SocialPrachar has been nothing short of amazing. The Full Stack Data Science and AI course was designed to make complex concepts easy to understand, with hands-on practice and real-time case studies. The trainers were experts in their fields, and their mentorship played a huge role in my success. The placement support team worked tirelessly to help me prepare for interviews and secure a great job. I'm so grateful for everything SocialPrachar has done for me and would recommend them to anyone looking to upskill and grow in their career.",
      name: "Navneetha K",
      role: "Machine Learning Engineer",
    },
    {
      quote:
        "I want to thank SocialPrachar for providing such a transformative learning experience. The Full Stack Data Science and AI course was packed with cutting-edge content and delivered by trainers who are industry professionals. Their guidance and feedback helped me improve tremendously, and the placement team made sure I was ready to step into the job market. Today, I'm starting my dream job, and it wouldn't have been possible without SocialPrachar. If you're serious about a career in tech, this is the place to be!",
      name: "Bhavishya B",
      role: "Software Engineer",
    },
    {
      quote:
        "Enrolling in the Full Stack Data Science and AI course at SocialPrachar was a game-changer for my career. The curriculum was well-structured, focusing on both theoretical concepts and practical skills, which made me job-ready. The trainers were amazing—they were patient, knowledgeable, and always willing to clarify doubts. What stood out the most was the placement support, which helped me land a great job in the tech industry. Thank you, SocialPrachar, for helping me achieve my career goals!",
      name: "Sravani P",
      role: "Data Analyst Python",
    },
  ];

  return (
    <div className="spAboutPage">
      {/* ===================== 1. Hero ===================== */}
      <section className="spHero">
        <div className="spHeroImageWrap">
          <Image
            src={smallBuss}
            alt="Inside SocialPrachar — students and trainers at work"
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
            unoptimized
          />
          <div className="spHeroImageFade" aria-hidden="true" />
        </div>

        <div className="spHeroContentWrap">
          <Reveal className="spHeroInner text-center">
            <p className="spEyebrow spEyebrowCenter">About SocialPrachar</p>
            <h1 className="spHeroTitle spHeroTitleFull">
              Built On Placements, <span className="text-primary">Not Promises.</span>
            </h1>

            <p className="spHeroAbout">
              SocialPrachar is Hyderabad&apos;s outcomes-first tech training institute,
              founded by an IIM alumnus in 2014 with a simple mandate: build careers, not
              just curriculums. Across our Hyderabad and Bengaluru campuses, we run 20+
              job-ready programs spanning Full Stack Development, Data Science &amp; AI,
              Cloud Computing &amp; DevOps, and Digital Marketing — each one taught by
              in-house, industry-certified trainers and backed by a dedicated placement
              team from day one.
            </p>
            <p className="spHeroAbout">
              A decade in, the numbers speak for themselves: 16,000+ students trained, a
              95% placement success rate, alumni working inside 1,100+ companies across
              India, and nine national EdTech awards — most recently Training &amp;
              Development Company of the Year, 2025. SocialPrachar isn&apos;t the loudest
              training institute in Hyderabad. It&apos;s just the one with the placement
              record to back up what it says.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="spContainerXl">
        {/* ===================== 2. The Institutional Advantage ===================== */}
        <Reveal as="p" className="spEyebrow text-center">
          The Institutional Advantage
        </Reveal>
        <Reveal as="h2" className="spSectionTitle text-center mb-5">
          Four Institutional Pillars Built for Your Absolute Career Success
        </Reveal>
        <div className="spProvideGrid">
          {pillars.map((p, i) => (
            <Reveal as="div" delay={i * 90} key={i} className="spProvideCol">
              <div className="spProvideCard">
                <div className="spProvideImgWrap">
                  <Image src={p.image} alt={p.heading} unoptimized />
                </div>
                <h5>{p.heading}</h5>
                <p>{p.sentense}</p>
              </div>
            </Reveal>
          ))}
        </div>



        {/* ===================== 4. Institutional Affiliations ===================== */}
        <div className="spValidationSection" id="industry-validation">
          <Reveal className="spValidationHeadFull">
            <p className="spEyebrow text-center">Institutional Affiliations</p>
            <h2 className="spSectionTitle spValidationTitle">Industry Validation &amp; Endorsements</h2>
            <p className="spAwardsLead">
              Every certificate, every placement number, and every hiring partner below is
              independently verifiable — including our certification partnership with IIT
              Madras&apos; Pravartak Technologies Foundation.
            </p>
          </Reveal>

          <div className="spLogoGrid spLogoGridLarge">
            {[aboutusPic1, aboutusPic2, aboutusPic3].map((pic, i) => (
              <Reveal as="div" delay={i * 100} key={i} className="spLogoCol">
                <div className="spLogoCard spLogoCardLarge">
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

          <div className="spOutcomeBar spOutcomeBarFull">
            <Reveal delay={0} className="spOutcomeItem">
              <h3>
                <Counter end={1100} suffix="+" />
              </h3>
              <p className="spOutcomeLabel">Hiring Partners</p>
            </Reveal>
            <Reveal delay={90} className="spOutcomeItem">
              <h3>
                <Counter end={127} suffix="%" />
              </h3>
              <p className="spOutcomeLabel">Avg. Placement Hike</p>
            </Reveal>
            <Reveal delay={180} className="spOutcomeItem">
              <h3>
                <Counter prefix="₹" end={8} suffix="L" />
              </h3>
              <p className="spOutcomeLabel">Average CTC</p>
            </Reveal>
            <Reveal delay={270} className="spOutcomeItem">
              <h3>
                <Counter prefix="₹" end={21} suffix="L" />
              </h3>
              <p className="spOutcomeLabel">Highest CTC</p>
            </Reveal>
          </div>
        </div>

        {/* ===================== 5. Elite Recognition Portfolio ===================== */}
        <div className="spAwardsSection">
          <Reveal className="text-center spAwardsHead">
            <p className="spEyebrow">Elite Recognition Portfolio</p>
            <h2 className="spSectionTitle">
              One Decade. Nine National Trophies. <span className="text-primary">Earning Industry Validation.</span>
            </h2>
            <p className="spAwardsLead">
              Industry juries don&apos;t hand out EdTech awards for good marketing — they
              hand them out for placement data that holds up under scrutiny. Most recently:
              Training &amp; Development Company of the Year, 2025.
            </p>
          </Reveal>

          <div className="spAwardsGrid">
            {awardsArray.map((award, i) => (
              <div className="spAwardGridCard" key={i}>
                <Image
                  src={award}
                  alt={`SocialPrachar award and achievement ${i + 1}`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  style={{ objectFit: "contain", padding: "8px" }}
                  unoptimized
                />
              </div>
            ))}
          </div>

          <Reveal className="spTestimonialStrip">
            <p className="spChipLead spTestimonialStripLead">What our alumni say</p>
            <div className="spTestimonialGridNew">
              {testimonials.map((t, i) => (
                <div className="spTestimonialCardNew" key={i}>
                  <div className="spTestimonialCardTop">
                    <div className="spTestimonialAvatar">
                      {t.name.charAt(0)}
                    </div>
                    <div className="spTestimonialMeta">
                      <span className="spTestimonialNameNew">{t.name}</span>
                      <span className="spTestimonialRoleNew">{t.role}</span>
                    </div>
                    <div className="spTestimonialStars">
                      {[...Array(5)].map((_, s) => <StarIcon key={s} />)}
                    </div>
                  </div>
                  <div className="spTestimonialDivider" />
                  <p className="spTestimonialQuoteNew">&ldquo;{t.quote}&rdquo;</p>
                  <div className="spTestimonialCardGlow" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ===================== 6. Vignan Partnership Feature ===================== */}
        <article className="spFeatureSection">
          <Reveal className="spFeatureHeadFull">
            <p className="spEyebrow text-center">Industry Spotlight</p>
            <h2 className="spSectionTitle spFeatureHeadTitle">
              <span className="spFeatureHeadBlack">
                SocialPrachar Expands AI Education Through
              </span>{" "}
              <span className="text-primary">
                Strategic Partnership with Vignan&apos;s University
              </span>
            </h2>
          </Reveal>

          <p className="spFeatureCaption">
            Vajra.ai and Vignan&apos;s University Sign MoU to Equip Students with
            Future-Ready AI Skills
          </p>

          <Reveal className="spFeatureBody">
            <p>
              In a significant step toward strengthening industry-academia
              collaboration, Vajra.ai, led by the SocialPrachar leadership
              ecosystem, has officially signed a Memorandum of Understanding (MoU)
              with Vignan&apos;s University.
            </p>

            <p>
              The partnership is focused on preparing students for the rapidly
              evolving world of Artificial Intelligence, Automation, Generative AI,
              and emerging technologies through hands-on learning and
              industry-driven education.
            </p>

            <p>Under this collaboration, students will gain access to:</p>

            <ul className="spFeatureBulletList">
              <li>Training on modern AI tools and platforms</li>
              <li>Generative AI and Automation workshops</li>
              <li>Industry-led mentoring sessions</li>
              <li>Real-world AI projects and case studies</li>
              <li>Internship and career development opportunities</li>
              <li>Exposure to current industry workflows and best practices</li>
            </ul>

            <p>
              As AI continues to transform every industry, universities must move
              beyond traditional classroom learning and provide students with
              practical, industry-relevant experience. This partnership is designed
              to bridge that gap by connecting academic learning with real-world
              applications.
            </p>

            <p>
              Through the SocialPrachar ecosystem and Vajra.ai&apos;s expertise in
              Artificial Intelligence, students will have opportunities to explore
              the latest advancements in AI technologies while developing skills
              that align with current industry demands.
            </p>

            <p className="spFeaturePullQuote">
              Our vision is simple: empower students with the knowledge, tools, and
              practical experience needed to succeed in an AI-driven future.
            </p>

            <p>
              The collaboration reflects a shared commitment between Vignan&apos;s
              University and Vajra.ai to foster innovation, encourage research,
              promote skill development, and create stronger pathways from education
              to employment.
            </p>

            <p>
              As the demand for AI professionals continues to grow, this partnership
              represents an important milestone in building the next generation of
              industry-ready talent.
            </p>
          </Reveal>

          <div className="spFeatureGallery">
            <Reveal delay={0} className="spFeatureGalleryImg">
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

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,900&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap");
      `}</style>

      <style jsx>{`
        /* ============================================================
           ROOT & TOKENS — pure white foundation throughout
           ============================================================ */
        .spAboutPage {
          --sp-ink: #11181f;
          --sp-ink-soft: #4c5366;
          --sp-paper: #ffffff;
          --sp-paper-alt: #f9f9fb;
          --sp-gold: #ffb300;
          --sp-gold-deep: #b97600;
          --sp-gold-soft: #fff8e1;
          --sp-teal: #0e6b5c;
          --sp-teal-light: #e8f5f2;
          --sp-shadow: rgba(17, 24, 31, 0.08);
          --sp-shadow-strong: rgba(17, 24, 31, 0.16);
          --sp-line: rgba(17, 24, 31, 0.09);
          font-family: "Manrope", sans-serif;
          color: var(--sp-ink);
          background: #ffffff;
          overflow-x: hidden;
        }

        /* ---------- Scroll reveal ---------- */
        :global(.spReveal) {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        :global(.spRevealVisible) {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---------- Shared typography ---------- */
        :global(.spSectionTitle) {
          font-family: "Fraunces", serif;
          font-weight: 900;
          font-size: clamp(28px, 3vw, 56px);
          line-height: 1.2;
          color: var(--sp-ink);
          margin: 12px 0 14px;
        }
        :global(.spSectionTitleLeft) {
          text-align: left;
        }
        :global(.spEyebrow) {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--sp-gold-deep);
          margin: 0;
        }
        .spEyebrowCenter {
          text-align: center;
        }
        .spAwardsLead {
          max-width: 640px;
          margin: 0 auto 28px;
          font-size: 16px;
          color: var(--sp-ink-soft);
          line-height: 1.85;
        }
        .spAwardsHead {
          margin-bottom: 36px;
        }
        .spContainerXl {
          width: 100%;
          max-width: 1520px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 48px;
          padding-right: 48px;
        }

        /* ============================================================
           1. HERO — white bg, no dark overlays
           ============================================================ */
        .spHero {
          position: relative;
          background: #ffffff;
        }
        .spHeroImageWrap {
          position: relative;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        .spHeroImageWrap :global(img) {
          width: 100%;
          height: auto;
          display: block;
        }
        /* Very subtle fade — just softens the very bottom edge */
        .spHeroImageFade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            transparent 85%,
            rgba(255, 255, 255, 0.15) 95%,
            rgba(255, 255, 255, 0.25) 100%
          );
          pointer-events: none;
        }
        .spHeroContentWrap {
          position: relative;
          padding: 48px 48px 64px;
          background: #ffffff;
          max-width: 1520px;
          margin: 0 auto;
          width: 100%;
        }
        .spHeroInner {
          max-width: 100%;
          width: 100%;
          margin: 0 auto;
        }
        .spHeroTitle {
          font-family: "Fraunces", serif;
          font-weight: 900;
          font-size: clamp(28px, 4.2vw, 64px);
          line-height: 1.12;
          color: var(--sp-ink);
          margin: 12px 0 22px;
        }
        .spHeroTitleFull {
          max-width: 100%;
        }
        .spHeroTitle .text-primary {
          color: var(--sp-gold-deep);
        }
        .spHeroAbout {
          font-size: 17px;
          color: var(--sp-ink-soft);
          line-height: 1.85;
          max-width: 1000px;
          margin: 0 auto 16px;
          text-align: left;
        }

        /* ============================================================
           2. PILLARS — white cards on white page
           ============================================================ */
        .spProvideGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin: 8px 0 80px;
        }
        .spProvideCard {
          position: relative;
          height: 100%;
          background: #ffffff;
          border-radius: 18px;
          padding: 28px 20px;
          text-align: center;
          box-shadow: 0 2px 0 var(--sp-line), 0 12px 28px var(--sp-shadow);
          border: 1px solid var(--sp-line);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          overflow: hidden;
        }
        .spProvideCard::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--sp-gold), var(--sp-gold-deep));
          border-radius: 18px 18px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .spProvideCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px var(--sp-shadow-strong);
        }
        .spProvideCard:hover::before {
          opacity: 1;
        }
        .spProvideImgWrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 4px;
        }
        .spProvideCard :global(img) {
          transition: transform 0.35s ease;
          margin: 0 auto;
          display: block;
        }
        .spProvideCard:hover :global(img) {
          transform: scale(1.08) rotate(-3deg);
        }
        .spProvideCard h5 {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 15.5px;
          margin: 14px 0 8px;
          color: var(--sp-ink);
        }
        .spProvideCard p {
          font-size: 13px;
          line-height: 1.7;
          color: var(--sp-ink-soft);
          margin: 0;
        }

        /* ============================================================
           3. MANIFESTO — white throughout, tinted check items
           ============================================================ */
        .spStoryRow {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: start;
          margin-bottom: 80px;
        }
        :global(.spFloatImg) {
          animation: spGentleFloat 5s ease-in-out infinite;
        }
        @keyframes spGentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .spStoryPara {
          font-size: 16px;
          line-height: 1.85;
          color: var(--sp-ink-soft);
          margin-bottom: 16px;
        }
        .spWhyTitle {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 16px;
          margin: 24px 0 14px;
          color: var(--sp-ink);
        }
        .spCheckList {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        :global(.spCheckItem) {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 13.5px;
          color: var(--sp-ink);
          background: #ffffff;
          border: 1px solid transparent;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        :global(.spCheckItem:hover) {
          background: var(--sp-gold-soft);
          border-color: rgba(255, 179, 0, 0.3);
        }
        :global(.spCheckItem svg) {
          flex-shrink: 0;
          margin-top: 1px;
        }
        .spStoryCta {
          background: var(--sp-ink);
          color: #fff;
          padding: 20px 24px;
          border-radius: 16px;
        }
        .spStoryCta p {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.7;
          color: #d8dae2;
        }

        /* ============================================================
           4. AFFILIATIONS — white cards, no tinted section bg
           ============================================================ */
        .spValidationSection {
          margin-bottom: 88px;
          scroll-margin-top: 24px;
          background: #ffffff;
        }
        .spValidationHeadFull {
          width: 100%;
          text-align: center;
          margin-bottom: 36px;
        }
        .spValidationTitle {
          width: 100%;
          text-align: center;
        }
        .spLogoGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 760px;
          margin: 0 auto 48px;
        }
        .spLogoGridLarge {
          max-width: 100%;
          gap: 28px;
        }
        .spLogoCard {
          border-radius: 16px;
          border: 1px solid var(--sp-line);
          background: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .spLogoCardLarge {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 32px var(--sp-shadow);
        }
        .spLogoCardLarge :global(img) {
          width: 100%;
          height: auto;
          display: block;
        }
        .spLogoCard:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px var(--sp-shadow-strong);
        }
        .spOutcomeBar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin: 0 auto 36px;
        }
        .spOutcomeBarFull {
          max-width: 100%;
          width: 100%;
        }
        .spOutcomeItem {
          text-align: center;
          font-weight: 600;
          color:black;
          background: #ffffff;
          border: 1px solid var(--sp-line);
          border-radius: 18px;
          padding: 30px 16px;
          box-shadow: 0 8px 24px var(--sp-shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .spOutcomeItem:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px var(--sp-shadow-strong);
        }
        .spOutcomeItem h3 {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 900;
          font-size: clamp(40px, 4.5vw, 56px);
          margin: 0 0 10px;
          line-height: 1;
        }
        .spOutcomeItem :global(.spCounter) {
          font-weight: 900;
          background: linear-gradient(135deg, var(--sp-teal), #17b89a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .spOutcomeLabel {
          margin: 0;
          font-size: 14.5px;
          font-weight: 700;
          color: #000000;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        /* ============================================================
           5. AWARDS — white bg, no gray fills
           ============================================================ */
        .spAwardsSection {
          margin-bottom: 88px;
          background: #ffffff;
        }
        /* ============================================================
           Awards responsive grid
           ============================================================ */
        .spAwardsGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 60px;
        }
        .spAwardGridCard {
          position: relative;
          width: 100%;
          aspect-ratio: 4/ 3;
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          transition: transform 0.35s ease;
        }
        .spAwardGridCard:hover {
          transform: translateY(-5px);
        }
        .spAwardGridCard:hover :global(img) {
          transform: scale(1.04);
          filter: drop-shadow(0 20px 40px rgba(17,24,31,0.22));
        }
        .spAwardGridCard :global(img) {
          transition: transform 0.45s ease, filter 0.45s ease;
          filter: drop-shadow(0 10px 24px rgba(17,24,31,0.13));
        }

        /* ---------- Testimonials ---------- */
        .spTestimonialStripLead {
          text-align: center;
          font-size: 26px;
          font-family: "Fraunces", serif;
          font-weight: 700;
          color: var(--sp-ink);
          margin-bottom: 32px;
        }
        .spChipLead {
          font-size: 22px;
          text-align: center;
          color: #000;
          margin: 20px 0 20px;
        }
        .spTestimonialGridNew {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .spTestimonialCardNew {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(255, 179, 0, 0.2);
          border-radius: 24px;
          padding: 28px 26px;
          box-shadow: 0 10px 28px var(--sp-shadow);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          overflow: hidden;
        }
        .spTestimonialCardNew:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px var(--sp-shadow-strong);
        }
        .spTestimonialCardGlow {
          position: absolute;
          bottom: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 179, 0, 0.12), transparent 70%);
          pointer-events: none;
        }
        .spTestimonialCardTop {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }
        .spTestimonialAvatar {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--sp-gold), var(--sp-gold-deep));
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(255, 179, 0, 0.3);
        }
        .spTestimonialMeta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }
        .spTestimonialNameNew {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--sp-ink);
        }
        .spTestimonialRoleNew {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--sp-gold-deep);
        }
        .spTestimonialStars {
          display: flex;
          gap: 2px;
          margin-left: auto;
        }
        .spTestimonialDivider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255, 179, 0, 0.4), transparent);
          margin-bottom: 16px;
        }
        .spTestimonialQuoteNew {
          font-family: "Fraunces", serif;
          font-size: 14.5px;
          line-height: 1.75;
          color: var(--sp-ink-soft);
          margin: 0;
          font-style: italic;
        }

        /* ============================================================
           6. FEATURE SECTION — white bg, accent header strip
           ============================================================ */
        .spFeatureSection {
          margin-bottom: 48px;
          background: #ffffff;
        }

        /* The header strip uses a light gold tint instead of dark navy */
        .spFeatureHeadFull {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          text-align: center;
          margin-bottom: 36px;
          padding: 56px 24px 48px;
          background: #fffbf0;
          border-top: 1px solid rgba(255, 179, 0, 0.2);
          border-bottom: 1px solid rgba(255, 179, 0, 0.2);
        }
        .spFeatureHeadFull .spEyebrow {
          color: var(--sp-gold-deep);
          margin-bottom: 14px;
        }
        .spFeatureHeadTitle {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          font-size: clamp(26px, 4vw, 52px);
          line-height: 1.2;
        }
        .spFeatureHeadBlack {
          color: var(--sp-ink);
        }
        .spFeatureHeadTitle .text-primary {
          color: var(--sp-gold-deep);
        }

        .spFeatureCaption {
          max-width: 860px;
          margin: 28px auto 40px;
          text-align: center;
          font-size: 18px;
          font-style: italic;
          color: var(--sp-ink-soft);
          border-bottom: 1px solid var(--sp-line);
          padding-bottom: 32px;
        }
        .spFeatureBody {
          max-width: 720px;
          margin: 0 auto 40px;
          background: #ffffff;
        }
        .spFeatureBody p {
          font-size: 15.5px;
          line-height: 1.85;
          color: var(--sp-ink-soft);
          margin-bottom: 18px;
        }
        .spFeatureBulletList {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .spFeatureBulletList li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 15px;
          line-height: 1.75;
          color: var(--sp-ink);
          padding: 12px 16px;
          background: #fffbf0;
          border-left: 3px solid var(--sp-gold);
          border-radius: 0 10px 10px 0;
          border-top: 1px solid rgba(255, 179, 0, 0.15);
          border-bottom: 1px solid rgba(255, 179, 0, 0.15);
          border-right: 1px solid rgba(255, 179, 0, 0.15);
        }
        .spFeatureBulletList li::before {
          content: "✦";
          color: var(--sp-gold-deep);
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 5px;
        }
        .spFeaturePullQuote {
          font-family: "Fraunces", serif;
          font-style: italic;
          font-size: 19px;
          line-height: 1.65;
          color: var(--sp-ink);
          border-left: 3px solid var(--sp-gold);
          padding: 4px 0 4px 20px;
          margin: 28px 0;
          background: transparent;
        }
        .spFeatureGallery {
          display: flex;
          justify-content: center;
          margin: 0 auto 36px;
          width: 100%;
        }
        .spFeatureGalleryImg {
          width: 100%;
          max-width: 760px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 18px 48px var(--sp-shadow-strong);
        }
        .spFeatureGalleryImg :global(img) {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .spFeatureGalleryImg:hover :global(img) {
          transform: scale(1.03);
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */
        @media (max-width: 991px) {
          .spProvideGrid {
            grid-template-columns: repeat(2, 1fr);
          }
          .spStoryRow {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .spTestimonialGridNew {
            grid-template-columns: 1fr;
          }
          .spOutcomeBar {
            grid-template-columns: repeat(2, 1fr);
          }
          .spOutcomeBarFull {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Tablet: 768px – 991px */
        @media (min-width: 768px) and (max-width: 991px) {
          .spAwardsGrid {
            grid-template-columns: 1fr;
          }
          .spLogoGridLarge {
            grid-template-columns: repeat(2, 1fr);
          }
          .spContainerXl {
            padding-left: 32px;
            padding-right: 32px;
          }
          .spHeroContentWrap {
            padding-left: 32px;
            padding-right: 32px;
          }
        }

        /* Mobile: < 768px → 1 column */
        @media (max-width: 767px) {
          .spHeroAbout {
            text-align: left;
          }
          .spContainerXl {
            padding-left: 16px;
            padding-right: 16px;
          }
          .spHeroContentWrap {
            padding-left: 16px;
            padding-right: 16px;
          }
          .spProvideGrid {
            grid-template-columns: 1fr;
          }
          .spLogoGrid {
            grid-template-columns: 1fr;
          }
          .spLogoGridLarge {
            grid-template-columns: 1fr;
          }
          .spAwardsGrid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .spOutcomeBar {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Small mobile: ≤ 560px — add side padding to hero text */
        @media (max-width: 560px) {
          .spHeroAbout {
            padding-left: 16px;
            padding-right: 16px;
          }
        }

        /* ---------- Reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          :global(.spReveal) {
            opacity: 1;
            transform: none;
            transition: none;
          }
          :global(.spFloatImg) {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;