"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import "./styles.css";
import Image from "next/image";
import heroDashboard from "../../assets/ds-program/hero-dashboard.jpg";
import smartnotesPreview from "../../assets/ds-program/smartnotes-preview.jpg";
import zassistPreview from "../../assets/ds-program/zassist-preview.jpg";
import englishEnginePreview from "../../assets/ds-program/english-engine-preview.jpg";
import buildaiPreview from "../../assets/ds-program/buildai-preview.jpg";
import agentStudioPreview from "../../assets/ds-program/agent-studio-preview.jpg";
import resumeAiPreview from "../../assets/ds-program/resume-ai-preview.jpg";

import Vyshanvi from "../../assets/ds-program/placements/vyshnavi.png";
import placementMahesh from "../../assets/ds-program/placements/mahesh.png";
import placementVarun from "../../assets/ds-program/placements/varun.png";
import placementSrinidhi from "../../assets/ds-program/placements/srinidhi.png";
import placementVyshanvi from "../../assets/ds-program/placements/vyshanvi.png";
import placementHaripriya from "../../assets/ds-program/placements/haripriya.png";
import placementBalu from "../../assets/ds-program/placements/balu.png";
import placementNarasimha from "../../assets/ds-program/placements/narasimha.png";
import placementDivija from "../../assets/divija-placement.png";





/* ═══════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════ */
const WA_NUMBER = "918019479419";
const WA_MSG = encodeURIComponent(
  "Hi Team! I'm interested in the Data Science & AI Program.\n\nI want:\n• Course details\n• Career roadmap\n• Fees & offers\n• Placement support info\n\nPlease guide me."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;
const DEMO_URL = "https://ziro.digital/replays/data-science-ai-career-demo";

/* ═══════════════════════════════════════
   ICON COMPONENTS (inline SVGs)
   ═══════════════════════════════════════ */
const Icon = {
  Crown: () => <span>👑</span>,
  Play: () => <span>▶</span>,
  WA: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Check: () => <span style={{ color: "var(--gold-400)" }}>✓</span>,
  Star: () => <span>★</span>,
  Chevron: ({ open }) => <span style={{ display: "inline-block", transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>▾</span>,
};

/* ═══════════════════════════════════════
   INTERSECTION OBSERVER HOOK
   ═══════════════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("reveal--visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ═══════════════════════════════════════
   SCROLL DETECTION HOOK
   ═══════════════════════════════════════ */
function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return scrolled;
}

/* ═══════════════════════════════════════
   LEAD DIALOG
   ═══════════════════════════════════════ */
function LeadDialog({ open, onClose, intent, onSuccess }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setDone(true);
    setTimeout(() => { onClose(); setDone(false); setName(""); setPhone(""); onSuccess(intent); }, 800);
  };

  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }} onClick={onClose} />
      <div style={{
        position: "relative", background: "var(--obsidian-700)", border: "1px solid var(--border-bright)",
        borderRadius: 24, padding: 40, width: "100%", maxWidth: 440,
        boxShadow: "var(--shadow-card), var(--glow-gold)"
      }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 20, background: "none", border: "none", color: "var(--text-muted)", fontSize: 24, cursor: "pointer" }}>×</button>

        <div style={{ marginBottom: 28 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>
            <span>✦</span> {intent === "demo" ? "Watch Demo" : "Chat on WhatsApp"}
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>
            Get Instant Access
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>Free demo + career roadmap + limited-time discount</p>
        </div>

        {done ? (
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
            <p style={{ color: "var(--gold-300)", fontWeight: 600 }}>Redirecting you now…</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Full Name", type: "text", val: name, set: setName, ph: "Your full name" },
              { label: "Phone Number", type: "tel", val: phone, set: setPhone, ph: "+91 XXXXX XXXXX" },
            ].map(f => (
              <div key={f.label}>
                <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: 8 }}>{f.label}</label>
                <input
                  type={f.type} value={f.val} onChange={e => f.set(e.target.value)}
                  placeholder={f.ph} required
                  style={{
                    width: "100%", background: "var(--obsidian-600)", border: "1px solid var(--border)",
                    borderRadius: 10, padding: "12px 16px", color: "var(--text-primary)",
                    fontSize: 14, outline: "none", fontFamily: "var(--font-body)", transition: "border-color 0.2s"
                  }}
                  onFocus={e => e.target.style.borderColor = "var(--border-bright)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>
            ))}
            <button type="submit" className="btn btn--gold btn--lg" style={{ marginTop: 8, width: "100%" }}>
              {intent === "demo" ? <><Icon.Play /> Watch Demo Now</> : <><Icon.WA /> Continue to WhatsApp</>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════ */
function Navbar({ onDemo }) {
  const scrolled = useScrolled();
  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__logo">Social<span>Prachar</span></div>
      <div className="navbar__links">
        {["Courses", "Success Stories", "Roadmap", "Ecosystem", "FAQ"].map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="navbar__link">{l}</a>
        ))}
      </div>
      <div className="navbar__actions">
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--sm">
          <Icon.WA /> WhatsApp
        </a>
        <button onClick={onDemo} className="btn btn--gold btn--sm">
          <Icon.Play /> Watch Demo
        </button>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════
   HERO
   ═══════════════════════════════════════ */
function Hero({ onDemo }) {
  return (
    <section className="hero" id="hero">
      {/* Noise + grid */}
      <div className="hero__bg">
        <div className="grid-texture" />
        <div className="hero__bg-gradient" />
        <div className="bg-orb bg-orb--gold" style={{ width: 600, height: 600, top: -100, left: -100 }} />
        <div className="bg-orb bg-orb--blue" style={{ width: 500, height: 500, bottom: -100, right: -100 }} />
      </div>

      <div className="container">
        <div className="hero__content">
          {/* Left */}
          <div>
            <div className="hero__eyebrow">
              <div className="hero__award-badge">
                <span>🏆</span> India's #1 Data Science &amp; AI Program
              </div>
            </div>

            <h1 className="hero__title">
              <span className="text-shimmer">From Learning</span>
              <br />to Placement —
              <br /><span className="text-gold display-font" style={{ fontStyle: "italic" }}>Powered by Ziro AI</span>
            </h1>

            <p className="hero__subtitle">India's First Learning + Practice + Career Intelligence System</p>

            <p className="hero__desc">
              A structured journey built with SocialPrachar's training excellence and Vajra.ai intelligence to help you learn faster, practice smarter, build real skills, and become job-ready with confidence.
            </p>

            <div className="hero__features">
              {[
                "AI-Powered Data Science Practice Labs",
                "Weekly Skill Assessments & Performance Reports",
                "Personal Skill Score Dashboard",
                "30+ Real Data Science Projects",
                "3-Month Industry Internship",
                "7 Global Certifications",
              ].map(f => (
                <div key={f} className="hero__feature">
                  <div className="hero__feature-dot" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="hero__ctas">
              <button onClick={onDemo} className="btn btn--gold btn--lg">
                <Icon.Play /> Watch Free Demo
              </button>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
                <Icon.WA /> Chat on WhatsApp
              </a>
            </div>

            <div className="hero__stats">
              {[
                { val: "17K+", label: "Students Enrolled" },
                { val: "4.9/5", label: "Average Rating" },
                { val: "86%", label: "Placement Rate" },
                { val: "16 LPA", label: "Highest CTC" },
              ].map(s => (
                <div key={s.label} className="hero__stat">
                  <span className="hero__stat-value text-gold">{s.val}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hero__visual">
            <div className="hero__mockup">
              <div className="hero__mockup-bar">
                <div className="mockup-dot mockup-dot--red" />
                <div className="mockup-dot mockup-dot--yellow" />
                <div className="mockup-dot mockup-dot--green" />
                <span className="mockup-url">ziro.digital — Career Intelligence Dashboard</span>
              </div>
              {/* Dashboard Mockup */}
              <HeroDashboardMockup />
            </div>

            {/* Floating cards */}
            <div className="hero__float-card hero__float-card--top-right">
              <div className="hero__float-label">Placement Rate</div>
              <div className="hero__float-value">86%</div>
              <div className="hero__float-sub">↑ 12% from last batch</div>
            </div>
            <div className="hero__float-card hero__float-card--bottom-left">
              <div className="hero__float-label">Highest CTC</div>
              <div className="hero__float-value">₹16 LPA</div>
              <div className="hero__float-sub">LTIMindtree · Divija K.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mini dashboard inside hero mockup ─── */
function HeroDashboardMockup() {
  const bars = [
    { label: "Python", val: 88, color: "#4a7cff" },
    { label: "SQL", val: 76, color: "#e8a800" },
    { label: "ML", val: 62, color: "#10b981" },
    { label: "Power BI", val: 80, color: "#a855f7" },
  ];
  return (
    <div style={{ background: "var(--obsidian-700)", padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--text-primary)", fontWeight: 700 }}>Ziro RoleFit™</span>
        <span style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.12em" }}>LIVE</span>
      </div>
      {/* Skill bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {bars.map(b => (
          <div key={b.label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{b.label}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: b.color }}>{b.val}%</span>
            </div>
            <div style={{ height: 5, borderRadius: 100, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <div style={{ width: `${b.val}%`, height: "100%", borderRadius: 100, background: `linear-gradient(90deg, ${b.color}, ${b.color}aa)` }} />
            </div>
          </div>
        ))}
      </div>
      {/* Role cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 4 }}>
        {[
          { role: "Data Analyst", match: 92, color: "#10b981" },
          { role: "Data Scientist", match: 78, color: "#4a7cff" },
          { role: "Python Dev", match: 85, color: "#e8a800" },
          { role: "ML Engineer", match: 61, color: "#a855f7" },
        ].map(r => (
          <div key={r.role} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 12px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{r.role}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: r.color }}>{r.match}%</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: r.color, background: `${r.color}15`, padding: "2px 7px", borderRadius: 100 }}>Match</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   BRAND STRIP
   ═══════════════════════════════════════ */
function BrandStrip() {
  const brands = [
    { name: "Ziro", desc: "Learning + Practice + Career Tools", color: "var(--gold-400)" },
    { name: "SocialPrachar", desc: "Training + Mentorship + Execution", color: "var(--sapphire-300)" },
    { name: "Vajra.ai", desc: "AI Feedback + Intelligence", color: "#c084fc" },
  ];
  return (
    <div className="brand-strip">
      <div className="container">
        <p className="brand-strip__label">Powered By</p>
        <div className="brand-strip__inner">
          {brands.map((b, i) => (
            <div key={b.name} className="brand-item">
              <span className="brand-item__name display-font" style={{ color: b.color }}>{b.name}</span>
              <span className="brand-item__desc">{b.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   PROBLEM
   ═══════════════════════════════════════ */
function ProblemSection() {
  const problems = [
    { icon: "▶", text: "Just attending classes is not enough" },
    { icon: "👁", text: "No clarity on actual skill level" },
    { icon: "🔄", text: "No consistent feedback loop" },
    { icon: "🎯", text: "No structured roadmap to follow" },
    { icon: "💬", text: "Weak communication & interview prep" },
    { icon: "📄", text: "Resume not aligned to hiring needs" },
  ];
  return (
    <section className="problem-section section" id="courses">
      <div className="container">
        <div className="reveal">
          <p className="section-label"><span>✦</span> The Problem</p>
          <h2 className="section-title">Why Most Students <span className="text-gold">Stay Stuck</span></h2>
          <p className="section-sub">Most students don't fail because they lack potential. They fail because they lack structure, clarity, and guided improvement.</p>
        </div>
        <div className="problem-grid" style={{ marginTop: 48 }}>
          {problems.map((p, i) => (
            <div key={i} className={`problem-card reveal delay-${(i % 3) + 1}`}>
              <div className="problem-card__icon">{p.icon}</div>
              <p className="problem-card__text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   INDUSTRY SHIFT
   ═══════════════════════════════════════ */
function IndustryShiftSection() {
  return (
    <section className="shift-section section">
      <div className="bg-orb bg-orb--gold" style={{ width: 500, height: 500, top: "20%", right: "-10%" }} />
      <div className="grid-texture" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal">
          <p className="section-label"><span>✦</span> Industry Insight</p>
          <h2 className="section-title">The Hiring System <span className="text-gold">Has Changed</span></h2>
        </div>
        <div className="shift-grid">
          <div className="shift-card shift-card--old reveal reveal--left">
            <div className="shift-card__header">
              <div className="shift-card__icon-wrap">🛡</div>
              <div>
                <div className="shift-card__title">Old Model</div>
                <div className="shift-card__sub">What used to work</div>
              </div>
            </div>
            {["Marks", "Certificates", "Passive learning", "Generic resumes", "Hope-based preparation"].map(t => (
              <div key={t} className="shift-item">
                <div className="shift-item__dot" />
                {t}
              </div>
            ))}
          </div>
          <div className="shift-card shift-card--new reveal reveal--right">
            <div className="shift-card__header">
              <div className="shift-card__icon-wrap">⚡</div>
              <div>
                <div className="shift-card__title">New Model</div>
                <div className="shift-card__sub">What actually works now</div>
              </div>
            </div>
            {["Demonstrated skills", "Real performance", "Projects and proof", "Practice consistency", "Role-based readiness", "Interview confidence"].map(t => (
              <div key={t} className="shift-item">
                <span className="shift-item__check"><Icon.Check /></span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   LEARNING PHASES
   ═══════════════════════════════════════ */
function PhasesSection({ onDemo }) {
  const phases = [
    { phase: "Phase 1", title: "Data Analytics", duration: "0–3 Months", icon: "📊", color: "#e8a800", rgb: "232,168,0", skills: ["SQL", "Power BI", "Tableau", "Python", "Excel"] },
    { phase: "Phase 2", title: "Data Science", duration: "4th & 5th Month", icon: "🧠", color: "#4a7cff", rgb: "74,124,255", skills: ["Machine Learning", "Statistics", "Advanced Python"] },
    { phase: "Phase 3", title: "AI, Cloud & Internship", duration: "2–3 Months", icon: "✨", color: "#a855f7", rgb: "168,85,247", skills: ["NLP", "Deep Learning", "Computer Vision", "AWS"] },
    { phase: "Phase 4", title: "Generative AI", duration: "Integrated", icon: "🤖", color: "#f43f5e", rgb: "244,63,94", skills: ["LLMs", "Prompt Engineering", "RAG", "AI APIs"] },
    { phase: "Phase 5", title: "Full Day Internship", duration: "Immersive", icon: "💼", color: "#10b981", rgb: "16,185,129", skills: ["Real-time projects", "Company workflow", "Mentor supervision"] },
    { phase: "Phase 6", title: "BuildAI Projects", duration: "Continuous", icon: "🚀", color: "#f97316", rgb: "249,115,22", skills: ["Project building", "Portfolio creation", "Proof of skills"] },
  ];
  return (
    <section className="phases-section section" id="roadmap">
      <div className="container">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <p className="section-label"><span>✦</span> Program Preview</p>
          <h2 className="section-title">Your <span className="text-gold">Learning Phases</span></h2>
          <p className="section-sub">Interviews and placement-focused preparation begin as students build real competence and confidence through the program.</p>
        </div>
        <div className="phases-grid">
          {phases.map((p, i) => (
            <div key={i} className={`phase-card reveal delay-${(i % 3) + 1}`}
              style={{ "--phase-color": p.color, "--phase-rgb": p.rgb }}>
              <div className="phase-card__header">
                <div className="phase-card__icon">{p.icon}</div>
                <div>
                  <div className="phase-card__phase">{p.phase}</div>
                  <div className="phase-card__title">{p.title}</div>
                </div>
              </div>
              <div className="phase-card__duration">🕐 {p.duration}</div>
              <div className="phase-tags">
                {p.skills.map(s => <span key={s} className="phase-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 48 }} className="reveal">
          <button onClick={onDemo} className="btn btn--gold btn--lg"><Icon.Play /> Watch Demo</button>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg"><Icon.WA /> Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   ROADMAP TIMELINE
   ═══════════════════════════════════════ */
function RoadmapSection() {
  const stages = [
    { num: 1, title: "Learn Foundations", icon: "📖", color: "#4a7cff", rgb: "74,124,255", color2: "#7ea8ff", items: ["Structured concepts & guided curriculum", "Strong basics in Python, SQL, Statistics", "Mentor-led interactive sessions", "Foundation assessments"], outcome: "Solid conceptual understanding" },
    { num: 2, title: "Practice Consistently", icon: "💻", color: "#e8a800", rgb: "232,168,0", color2: "#f5c842", items: ["Daily hands-on coding exercises", "Analytics & AI practice sets", "Real dataset work", "Skill-building through repetition"], outcome: "Confidence through consistent practice" },
    { num: 3, title: "ZiroLab Practice", icon: "🧪", color: "#10b981", rgb: "16,185,129", color2: "#34d399", items: ["Topic-wise structured practice modules", "Difficulty progression per skill", "Instant feedback on every attempt", "Builds exam-level readiness"], outcome: "Deep skill mastery through structured drills" },
    { num: 4, title: "Track Performance", icon: "📊", color: "#e8a800", rgb: "232,168,0", color2: "#f5c842", items: ["Accuracy & progress visibility", "Strength/weakness clarity", "Honest current-level awareness", "Data-driven self-assessment"], outcome: "Self-awareness of readiness level" },
    { num: 5, title: "Improve with Feedback", icon: "🔄", color: "#a855f7", rgb: "168,85,247", color2: "#c084fc", items: ["Gap fixing with mentor guidance", "Communication improvement", "Assessment-driven refinement", "AI-powered improvement suggestions"], outcome: "Continuous improvement cycle" },
    { num: 6, title: "CompanySets Practice", icon: "🏢", color: "#f97316", rgb: "249,115,22", color2: "#fb923c", items: ["Company-specific question banks", "Real interview pattern practice", "TCS, Infosys, Wipro-style sets", "Role-aligned assessment prep"], outcome: "Company-ready interview confidence" },
    { num: 7, title: "Placement Ready", icon: "🎓", color: "#e8a800", rgb: "232,168,0", color2: "#f5c842", items: ["Resume preparation with AI", "Mock interviews & feedback", "Project proof & portfolio", "Readiness confidence assessment"], outcome: "Job-ready with proof and confidence" },
  ];
  return (
    <section className="roadmap-section section">
      <div className="bg-orb bg-orb--gold" style={{ width: 400, height: 400, top: "10%", left: "-5%" }} />
      <div className="bg-orb bg-orb--blue" style={{ width: 400, height: 400, bottom: "10%", right: "-5%" }} />
      <div className="grid-texture" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal roadmap-title">
          <p className="section-label" style={{ justifyContent: "center" }}><span>✦</span> The Journey</p>
          <h2 className="section-title section-title--center">Your Complete Journey —<br /><span className="text-gold">From Beginner to Placement</span></h2>
          <p className="section-sub section-sub--center">A structured system that takes you from zero to job-ready, step by step.</p>
          <div className="royal-divider" />
        </div>

        <div className="timeline">
          <div className="timeline__spine" />
          {stages.map((s, i) => {
            const isRight = i % 2 !== 0;
            return (
              <div key={i} className={`timeline-item${isRight ? " timeline-item--right" : ""}`}>
                {isRight ? (
                  <>
                    <div className="timeline-item__spacer" />
                    <div className="timeline-item__node">
                      <div className="timeline-node" style={{ "--node-color": s.color, "--node-color2": s.color2, "--node-rgb": s.rgb }}>
                        {s.num}
                      </div>
                    </div>
                    <div className={`reveal reveal--right delay-${(i % 3) + 1}`}>
                      <TimelineCard s={s} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`reveal reveal--left delay-${(i % 3) + 1}`}>
                      <TimelineCard s={s} />
                    </div>
                    <div className="timeline-item__node">
                      <div className="timeline-node" style={{ "--node-color": s.color, "--node-color2": s.color2, "--node-rgb": s.rgb }}>
                        {s.num}
                      </div>
                    </div>
                    <div className="timeline-item__spacer" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ s }) {
  return (
    <div className="timeline-card" style={{ "--node-color": s.color }}>
      <div className="timeline-card__header">
        <div className="timeline-card__icon" style={{ background: `rgba(${s.rgb},0.12)` }}>{s.icon}</div>
        <div className="timeline-card__title">{s.title}</div>
      </div>
      <div className="timeline-list">
        {s.items.map(item => (
          <div key={item} className="timeline-list__item">
            <span className="timeline-list__arrow" style={{ color: s.color }}>›</span> {item}
          </div>
        ))}
      </div>
      <div className="timeline-outcome">
        <span className="timeline-outcome__star" style={{ color: s.color }}>★</span>
        <span>Outcome: <strong style={{ color: "var(--text-secondary)" }}>{s.outcome}</strong></span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   WHAT MAKES DIFFERENT
   ═══════════════════════════════════════ */
function DifferentSection({ onDemo }) {
  const points = [
    { icon: "🗂", title: "Structured Learning Path", desc: "No guesswork — follow a proven, guided curriculum.", color: "#e8a800", rgb: "232,168,0" },
    { icon: "🎯", title: "Daily Action-Based Progress", desc: "Learn by doing, not just watching.", color: "#4a7cff", rgb: "74,124,255" },
    { icon: "📊", title: "Skill Tracking & Feedback", desc: "Always know where you stand and what to improve.", color: "#a855f7", rgb: "168,85,247" },
    { icon: "💼", title: "Real-World Readiness", desc: "Projects, presentations, and practice that mirror the workplace.", color: "#10b981", rgb: "16,185,129" },
    { icon: "🚀", title: "Placement-Focused Prep", desc: "Resumes, mock interviews, and role-specific readiness.", color: "#f97316", rgb: "249,115,22" },
    { icon: "🤖", title: "AI Career Coach (ZAssist)", desc: "Personalized guidance, performance-based recommendations & next-step clarity.", color: "#e8a800", rgb: "232,168,0" },
    { icon: "📈", title: "Adaptive Tests", desc: "Difficulty adjusts based on performance. Identifies weak areas & builds readiness.", color: "#f43f5e", rgb: "244,63,94" },
  ];
  return (
    <section className="different-section section" id="courses">
      <div className="container">
        <div className="reveal">
          <p className="section-label"><span>✦</span> Why This Program</p>
          <h2 className="section-title">More Than a Course.<br /><span className="text-gold">A Complete System.</span></h2>
          <p className="section-sub">Not just content delivery. A structured system where learning, practice, tracking, projects, and placement preparation work together.</p>
        </div>
        <div className="different-grid">
          {points.map((p, i) => (
            <div key={i} className={`different-card reveal delay-${(i % 3) + 1}`}
              style={{ "--card-rgb": p.rgb }}>
              <div className="different-card__icon" style={{ background: `rgba(${p.rgb},0.1)`, border: `1px solid rgba(${p.rgb},0.2)` }}>
                {p.icon}
              </div>
              <div className="different-card__title">{p.title}</div>
              <div className="different-card__desc">{p.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 48 }} className="reveal">
          <button onClick={onDemo} className="btn btn--gold btn--lg"><Icon.Play /> Watch Demo</button>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--lg">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   ROLEFIT
   ═══════════════════════════════════════ */
function RoleFitSection({ onDemo }) {
  const skills = [
    { name: "Python", score: 88, label: "Strong", color: "#4a7cff", rgb: "74,124,255" },
    { name: "SQL", score: 76, label: "Good", color: "#e8a800", rgb: "232,168,0" },
    { name: "Data Visualization", score: 80, label: "Strong", color: "#10b981", rgb: "16,185,129" },
    { name: "Statistics", score: 65, label: "Good", color: "#a855f7", rgb: "168,85,247" },
    { name: "Machine Learning", score: 52, label: "Improve", color: "#f97316", rgb: "249,115,22" },
  ];
  const roleCards = [
    { role: "Data Analyst", match: 92, label: "Best Fit", color: "#10b981" },
    { role: "Data Scientist", match: 78, label: "Good Match", color: "#4a7cff" },
    { role: "Python Dev", match: 85, label: "Strong", color: "#e8a800" },
    { role: "AI Engineer", match: 61, label: "Developing", color: "#a855f7" },
    { role: "ML Engineer", match: 48, label: "Improve", color: "#f97316" },
    { role: "Data Engineer", match: 72, label: "Good Match", color: "#4a7cff" },
    { role: "NLP Engineer", match: 44, label: "Improve", color: "#f97316" },
    { role: "SQL Developer", match: 80, label: "Strong", color: "#e8a800" },
  ];
  const topMatches = [
    { role: "Data Analyst", match: 92, label: "Best Fit", color: "#10b981", emoji: "🎯" },
    { role: "Data Scientist", match: 78, label: "Good Match", color: "#4a7cff", emoji: "📊" },
    { role: "ML Engineer", match: 48, label: "Needs Improvement", color: "#f97316", emoji: "⚙️" },
  ];

  return (
    <section className="rolefit-section section">
      <div className="container">
        <div className="reveal">
          <p className="section-label"><span>✦</span> Career Intelligence</p>
          <h2 className="section-title">Find Your Right Career Path<br /><span className="text-gold">with Ziro RoleFit™</span></h2>
          <p className="section-sub">Most students choose careers randomly. Ziro analyzes your skills, tracks your performance, and guides you toward the right role.</p>
        </div>
        <div className="rolefit-inner">
          {/* Left: Panel */}
          <div className="rolefit-panel reveal reveal--left">
            <div className="rolefit-panel__header">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="rolefit-panel__icon">📊</div>
                <div>
                  <div className="rolefit-panel__title">Ziro RoleFit™</div>
                  <div className="rolefit-panel__sub">Career Decision Engine</div>
                </div>
              </div>
              <div className="live-badge">LIVE</div>
            </div>

            {/* Skill bars */}
            <div className="skill-bars">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, color: "var(--text-muted)" }}>Skill Strength</span>
                <span style={{ fontSize: 11, color: "var(--text-muted)" }}>5 skills assessed</span>
              </div>
              {skills.map(s => (
                <div key={s.name} className="skill-bar-item">
                  <div className="skill-bar-meta">
                    <span className="skill-bar-name">{s.name}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span className="skill-bar-label" style={{ color: s.color, background: `rgba(${s.rgb},0.12)` }}>{s.label}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: s.color }}>{s.score}%</span>
                    </div>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${s.score}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}99)` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Top matches */}
            <div className="role-matches">
              <div className="role-matches__title">Recommended For You</div>
              <div className="role-match-list">
                {topMatches.map(m => (
                  <div key={m.role} className="role-match-item">
                    <div className="role-match-role">
                      <span className="role-match-emoji">{m.emoji}</span>
                      <div>
                        <div className="role-match-name">{m.role}</div>
                        <div className="role-match-pct">{m.match}% match</div>
                      </div>
                    </div>
                    <span className="role-match-badge" style={{ color: m.color, background: `${m.color}15`, border: `1px solid ${m.color}30` }}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="reveal reveal--right">
            <div className="rolefit-info__title">Ziro RoleFit™ — Your Career Decision Engine</div>
            <div className="rolefit-info__sub">Ziro helps you understand where you stand and which roles fit you best.</div>
            <div className="rolefit-checklist">
              {["Understand your strengths clearly", "Identify skill gaps to work on", "Measure readiness for each role", "Map your skills to real job roles", "Choose the best-fit career path"].map(item => (
                <div key={item} className="rolefit-check-item">
                  <div className="rolefit-check-icon"><Icon.Check /></div>
                  {item}
                </div>
              ))}
            </div>

            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, color: "var(--text-muted)", marginBottom: 16 }}>8+ Roles You Can Target</p>
            <div className="role-mini-grid">
              {roleCards.map(r => (
                <div key={r.role} className="role-mini-card">
                  <div className="role-mini-name">{r.role}</div>
                  <div className="role-mini-footer">
                    <span className="role-mini-pct" style={{ color: r.color }}>{r.match}%</span>
                    <span className="role-mini-label" style={{ color: r.color, background: `${r.color}12` }}>{r.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, padding: 20, borderRadius: 16, background: "rgba(200,134,10,0.06)", border: "1px solid var(--border-bright)" }}>
              <p style={{ color: "var(--text-primary)", fontSize: 14, fontWeight: 600 }}>Ziro doesn't just teach you skills.</p>
              <p style={{ color: "var(--gold-300)", fontSize: 14, fontWeight: 700, marginTop: 4 }}>It helps you choose the right career based on your strengths.</p>
            </div>
            <div style={{ marginTop: 24 }}>
              <button onClick={onDemo} className="btn btn--gold btn--lg"><Icon.Play /> Watch Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PLACEMENTS
   ═══════════════════════════════════════ */
function PlacementsSection() {
  const students = [
    {
      name: "Vyshnavi",
      role: "Data Scientist",
      company: "Tech Company",
      salary: "8 LPA",
      img: Vyshanvi,
    },
    {
      name: "Mahesh",
      role: "ML Engineer",
      company: "Tech Company",
      salary: "7 LPA",
      img: placementMahesh,
    },
    {
      name: "Varun",
      role: "AI Engineer",
      company: "Tech Company",
      salary: "9 LPA",
      img: placementVarun,
    },
    {
      name: "Srinidhi",
      role: "Data Analyst",
      company: "Tech Company",
      salary: "6 LPA",
      img: placementSrinidhi,
    },
    {
      name: "Vyshanvi NagiReddy",
      role: "AI Developer",
      company: "Tech Company",
      salary: "8 LPA",
      img: placementVyshanvi,
    },
    {
      name: "Haripriya",
      role: "ML Engineer",
      company: "Tech Company",
      salary: "7 LPA",
      img: placementHaripriya,
    },
    {
      name: "Balu",
      role: "Data Engineer",
      company: "Tech Company",
      salary: "6 LPA",
      img: placementBalu,
    },
    {
      name: "Narasimha",
      role: "AI Developer",
      company: "Tech Company",
      salary: "8 LPA",
      img: placementNarasimha,
    },
  ];
  return (
    <section className="placements-section section" id="success-stories">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ margin: "0 auto 12px" }}><span>🚀</span> Last 40 Days Success Stories</p>
          <h2 className="section-title section-title--center">Real Placements.<br /><span className="text-gold">Real Results.</span></h2>
          <p className="section-sub section-sub--center">Our students are not just learning — they are getting placed in top companies.</p>
          <div className="royal-divider" />
        </div>

        <div className="placement-stats">
          {[
            { icon: "🏆", val: "16 LPA", label: "Highest CTC" },
            { icon: "👥", val: "100+", label: "Students Placed" },
            { icon: "🏢", val: "50+", label: "Hiring Companies" },
          ].map(s => (
            <div key={s.label} className="placement-stat reveal">
              <div className="placement-stat__icon">{s.icon}</div>
              <div className="placement-stat__value">{s.val}</div>
              <div className="placement-stat__label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Featured */}
        <div className="featured-placement reveal">
          <div
            style={{
              width: 320,
              height: 300,
              position: "relative",
              flexShrink: 0,
              overflow: "hidden",
              borderRadius: 12,
            }}
          >
            <Image
              src={placementDivija}
              alt="Divija Kanneganty"
              fill
              style={{
                objectFit: "cover",

              }}
            />
          </div>
          <div className="featured-placement__info">
            <div className="featured-placement__badge"><Icon.Star /> Top Placement</div>
            <div className="featured-placement__name">Divija Kanneganty</div>
            <div className="featured-placement__company">🏢 LTIMindtree</div>
            <div className="featured-placement__ctc">16 LPA</div>
            <div className="featured-placement__note">One of our highest recent placements</div>
          </div>
        </div>

        <p style={{ textAlign: "center", marginBottom: 24, fontSize: 15, fontWeight: 500, color: "var(--text-secondary)" }}>
          From <span style={{ color: "var(--rose-400)", fontWeight: 700 }}>₹3 LPA</span> to{" "}
          <span style={{ color: "var(--emerald-300)", fontWeight: 700 }}>₹16 LPA</span> — our students are consistently growing across Data, AI & Development roles.
        </p>

        <div className="students-grid">
          {students.map((s, i) => (
            <div key={i} className={`student-card reveal delay-${(i % 4) + 1}`}>

              <div className="student-card__img-wrap">

                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                ) : (
                  <div className="student-placeholder">
                    👨‍💻
                  </div>
                )}

              </div>

              <div className="student-card__name">
                {s.name}
              </div>

              <div className="student-card__role">
                {s.role}
              </div>

              <div className="student-card__company">
                {s.company}
              </div>

              <span className="student-card__salary">
                {s.salary}
              </span>

            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="https://socialprachar.com/success-stories" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--gold-300)", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--border-bright)", paddingBottom: 2 }}>
            View More Success Stories →
          </a>
        </div>
        <p style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "var(--text-muted)" }}>1000+ successful student placements and counting…</p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   COMPANY LOGOS
   ═══════════════════════════════════════ */
function LogosSection() {
  const companies = ["Google", "Wipro", "Cognizant", "OpenText", "LTIMindtree", "Impaxive", "VSoft", "Ealkay", "Logixal"];
  return (
    <section className="logos-section section">
      <div className="container">
        <p className="logos-section__label">Where Our Students Are Working</p>
        <div className="logos-grid">
          {companies.map(c => <div key={c} className="logo-chip reveal">{c}</div>)}
        </div>
        <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "var(--text-muted)" }}>Our students are placed in top product companies, MNCs, and fast-growing startups.</p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   TECH STACK
   ═══════════════════════════════════════ */
function TechSection() {
  const techs = [
    { name: "Python", icon: "🐍", color: "#4a7cff", rgb: "74,124,255" },
    { name: "SQL", icon: "🗄", color: "#e8a800", rgb: "232,168,0" },
    { name: "Power BI", icon: "📊", color: "#f97316", rgb: "249,115,22" },
    { name: "Statistics", icon: "📈", color: "#10b981", rgb: "16,185,129" },
    { name: "Excel", icon: "📋", color: "#16a34a", rgb: "22,163,74" },
    { name: "Machine Learning", icon: "🧠", color: "#a855f7", rgb: "168,85,247" },
    { name: "Deep Learning", icon: "🔮", color: "#f43f5e", rgb: "244,63,94" },
    { name: "NLP", icon: "💬", color: "#4a7cff", rgb: "74,124,255" },
    { name: "Computer Vision", icon: "👁", color: "#e8a800", rgb: "232,168,0" },
    { name: "LLMs", icon: "🤖", color: "#a855f7", rgb: "168,85,247" },
    { name: "RAG", icon: "🔗", color: "#f97316", rgb: "249,115,22" },
    { name: "Hugging Face", icon: "🤗", color: "#f59e0b", rgb: "245,158,11" },
  ];
  return (
    <section className="tech-section section">
      <div className="container">
        <div className="reveal">
          <p className="section-label"><span>✦</span> Curriculum</p>
          <h2 className="section-title">Master the Complete<br /><span className="text-gold">Data & AI Stack</span></h2>
          <p className="section-sub">From fundamentals to advanced AI systems — everything you need to become industry-ready.</p>
        </div>
        <div className="tech-grid">
          {techs.map((t, i) => (
            <div key={t.name} className={`tech-card reveal delay-${(i % 6) + 1}`}>
              <div className="tech-card__icon" style={{ background: `rgba(${t.rgb},0.12)`, border: `1px solid rgba(${t.rgb},0.2)` }}>
                {t.icon}
              </div>
              <div className="tech-card__name" style={{ color: t.color }}>{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CERTIFICATIONS
   ═══════════════════════════════════════ */
function CertsSection({ onDemo }) {
  const certs = [
    { group: "Industry Leaders", icon: "🌐", items: ["IBM – Data Science", "Microsoft – Python", "Google Data Analytics", "Google – AI"] },
    { group: "Specialized Credentials", icon: "🏆", items: ["Nvidia – AI", "SocialPrachar – Program Completion", "Internship Certification"] },
  ];
  return (
    <section className="certs-section section">
      <div className="bg-orb bg-orb--gold" style={{ width: 400, height: 400, top: "30%", left: "30%" }} />
      <div className="grid-texture" />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal">
          <p className="section-label"><span>✦</span> Credentials</p>
          <h2 className="section-title">Global Certifications to<br /><span className="text-gold">Validate Your Expertise</span></h2>
          <p className="section-sub">Recognized credentials that validate domain knowledge and improve employability globally.</p>
        </div>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div key={c.group} className={`cert-card reveal delay-${i + 1}`}>
              <div className="cert-card__header">
                <div className="cert-card__icon">{c.icon}</div>
                <div className="cert-card__group">{c.group}</div>
              </div>
              <div className="cert-list">
                {c.items.map(item => (
                  <div key={item} className="cert-item">
                    <span className="cert-check"><Icon.Check /></span> {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 48 }} className="reveal">
          <button onClick={onDemo} className="btn btn--gold btn--lg"><Icon.Play /> Watch Demo</button>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg"><Icon.WA /> Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   ECOSYSTEM
   ═══════════════════════════════════════ */
function EcosystemSection({ onDemo }) {
  const features = [
    {
      name: "Ziro SmartNotes AI",
      label: "Revision",
      icon: "✏️",
      image: smartnotesPreview,
      color: "#a855f7",
      rgb: "168,85,247",
      desc: "Turns your learning into structured recaps. Revise faster with AI-structured notes.",
      benefits: [
        "Turns learning into structured recaps",
        "Improves retention and clarity",
        "Quick concept revision before assessments",
        "AI-powered study summaries"
      ]
    },

    {
      name: "ZAssist Career Coach",
      label: "Guidance",
      icon: "💬",
      image: zassistPreview,
      color: "#e8a800",
      rgb: "232,168,0",
      desc: "Personalized career direction and improvement guidance based on your actual performance.",
      benefits: [
        "Performance-based career suggestions",
        "Next-step clarity",
        "Improvement direction",
        "Goal-aligned coaching"
      ]
    },

    {
      name: "EnglishEngine",
      label: "Communication",
      icon: "🌐",
      image: englishEnginePreview,
      color: "#4a7cff",
      rgb: "74,124,255",
      desc: "Build interview-ready communication confidence through daily structured practice.",
      benefits: [
        "Daily English practice",
        "Speaking confidence building",
        "Interview communication readiness",
        "Pronunciation improvement"
      ]
    },

    {
      name: "BuildAI",
      label: "Projects",
      icon: "🚀",
      image: buildaiPreview,
      color: "#f97316",
      rgb: "249,115,22",
      desc: "Build real projects that prove your skills to any employer or recruiter.",
      benefits: [
        "Guided project execution",
        "Portfolio development",
        "Sprint-based building",
        "Mentor-reviewed output"
      ]
    },

    {
      name: "AI Agent Studio",
      label: "AI Tools",
      icon: "🤖",
      image: agentStudioPreview,
      color: "#10b981",
      rgb: "16,185,129",
      desc: "Explore modern AI systems and hands-on agent-building for future-ready positioning.",
      benefits: [
        "Hands-on AI agent building",
        "Future-ready skill positioning",
        "Innovation and experimentation",
        "Modern AI workflow exposure"
      ]
    },

    {
      name: "Ziro Resume AI",
      label: "Resume",
      icon: "📄",
      image: resumeAiPreview,
      color: "#f43f5e",
      rgb: "244,63,94",
      desc: "ATS-optimized resumes that dramatically improve your shortlisting chances.",
      benefits: [
        "Role-based resume optimization",
        "ATS score improvement",
        "Better shortlisting chances",
        "Professional formatting"
      ]
    }
  ];
  return (
    <section className="ecosystem-section section" id="ecosystem">
      <div className="container">
        <div className="reveal">
          <p className="section-label"><span>✦</span> Ecosystem</p>
          <h2 className="section-title">The <span className="text-gold">Ziro.digital</span> Advantage</h2>
          <p className="section-sub">A powerful learning and career ecosystem that goes beyond classes to support students at every step.</p>
        </div>

        <div style={{ marginTop: 72 }}>
          {features.map((f, i) => (
            <div key={f.name} className={`ecosystem-feature${i % 2 === 1 ? " ecosystem-feature--reverse" : ""}`}>
              {/* Mockup */}
              <div className={`reveal ${i % 2 === 0 ? "reveal--left" : "reveal--right"}`}>
                <div className="ecosystem-mockup">
                  <div className="ecosystem-mockup__bar">
                    <div className="mockup-dot mockup-dot--red" />
                    <div className="mockup-dot mockup-dot--yellow" />
                    <div className="mockup-dot mockup-dot--green" />
                    <span className="mockup-url">ziro.digital — {f.name}</span>
                  </div>
                  <div className="ecosystem-mockup__placeholder">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className={`reveal ${i % 2 !== 0 ? "reveal--left" : "reveal--right"}`}>
                <div className="ecosystem-info__badge" style={{ background: `rgba(${f.rgb},0.1)`, border: `1px solid rgba(${f.rgb},0.25)`, color: f.color }}>
                  {f.icon} {f.label}
                </div>
                <div className="ecosystem-info__title">{f.name}</div>
                <div className="ecosystem-info__desc">{f.desc}</div>
                <div className="ecosystem-benefits">
                  {f.benefits.map(b => (
                    <div key={b} className="ecosystem-benefit">
                      <span className="ecosystem-benefit__check" style={{ color: f.color }}>✓</span> {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 64 }} className="reveal">
          <button onClick={onDemo} className="btn btn--gold btn--lg"><Icon.Play /> Watch Demo</button>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg"><Icon.WA /> Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   TRANSFORMATION
   ═══════════════════════════════════════ */
function TransformationSection() {
  return (
    <section className="transformation-section section">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ margin: "0 auto 12px" }}><span>✦</span> Transformation</p>
          <h2 className="section-title section-title--center">From Confused to<br /><span className="text-gold">Career Ready</span></h2>
          <div className="royal-divider" />
        </div>
        <div className="transformation-grid">
          <div className="transformation-card transformation-card--before reveal reveal--left">
            <div className="transformation-card__header">
              <div className="transformation-card__icon">👁</div>
              <div>
                <div className="transformation-card__title">Before</div>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Where most students start</p>
              </div>
            </div>
            {["Watching classes without practicing", "No clarity on career direction", "No structured roadmap to follow", "Resume not ready for hiring"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(244,63,94,0.08)", fontSize: 14, color: "white" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(244,63,94,0.3)", flexShrink: 0 }} /> {t}
              </div>
            ))}
          </div>
          <div className="transformation-card transformation-card--after reveal reveal--right">
            <div className="transformation-card__header">
              <div className="transformation-card__icon">🚀</div>
              <div>
                <div className="transformation-card__title">After</div>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Where our students reach</p>
              </div>
            </div>
            {["Building real projects with proof", "Clear role fit based on data", "Placement-ready with confidence", "AI-optimized resume & portfolio"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(200,134,10,0.1)", fontSize: 14, color: "var(--text-secondary)", fontWeight: 500 }}>
                <Icon.Check /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   OUTCOMES
   ═══════════════════════════════════════ */
function OutcomesSection() {
  const outcomes = [
    { icon: "💡", text: "Better clarity", color: "#e8a800", rgb: "232,168,0" },
    { icon: "🛡", text: "Stronger confidence", color: "#4a7cff", rgb: "74,124,255" },
    { icon: "🎯", text: "Practice consistency", color: "#a855f7", rgb: "168,85,247" },
    { icon: "💻", text: "Project proof", color: "#f97316", rgb: "249,115,22" },
    { icon: "💬", text: "Interview readiness", color: "#10b981", rgb: "16,185,129" },
    { icon: "💼", text: "Job-focused preparation", color: "#f43f5e", rgb: "244,63,94" },
    { icon: "🎓", text: "Multiple role opportunities", color: "#4a7cff", rgb: "74,124,255" },
  ];
  return (
    <section className="outcomes-section section">
      <div className="container">
        <div className="reveal">
          <p className="section-label"><span>✦</span> Outcomes</p>
          <h2 className="section-title">Designed for <span className="text-gold">Real Outcomes</span></h2>
        </div>
        <div className="outcomes-grid">
          {outcomes.map((o, i) => (
            <div key={i} className={`outcome-card reveal delay-${(i % 4) + 1}`}>
              <div className="outcome-card__icon" style={{ background: `rgba(${o.rgb},0.1)`, border: `1px solid rgba(${o.rgb},0.2)` }}>
                {o.icon}
              </div>
              <div className="outcome-card__text">{o.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FAQ
   ═══════════════════════════════════════ */
function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "What is Data Science and why is it important?", a: "Data Science is a multidisciplinary field that uses statistics, programming, and domain knowledge to extract insights from data. It powers decision-making across industries like finance, healthcare, marketing, and technology." },
    { q: "What topics are covered in the course?", a: "The course includes Python programming, statistics, machine learning, data visualization, SQL, data cleaning, model evaluation, and real-world project work — plus Generative AI, LLMs, and cloud deployment." },
    { q: "Do I need prior programming experience?", a: "Basic programming knowledge helps but is not mandatory. The course starts with fundamentals and gradually progresses to advanced topics." },
    { q: "What is the duration of the program?", a: "The course duration varies depending on the mode of training (online or classroom) and whether you choose weekend or weekday batches. Contact the admissions team for exact schedule details." },
    { q: "Does the course include hands-on projects?", a: "Yes, the course includes 30+ real-world projects that help you build a practical portfolio for job interviews and industry roles." },
    { q: "What career opportunities are available after completing this course?", a: "Graduates can pursue roles such as Data Analyst, Data Scientist, Machine Learning Engineer, Business Intelligence Analyst, and Data Engineer." },
    { q: "Is internship support available?", a: "Yes, internship guidance is available to help learners gain industry experience and build a portfolio during the course, including a full-day immersive internship." },
    { q: "How do I register for the program?", a: "You can register online through the SocialPrachar website or by contacting the admissions team for guidance and to unlock the current pricing." },
  ];
  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ margin: "0 auto 12px" }}><span>✦</span> FAQ</p>
          <h2 className="section-title section-title--center">Frequently Asked<br /><span className="text-gold">Questions</span></h2>
          <div className="royal-divider" />
        </div>
        <div className="faq-list reveal">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? " faq-item--open" : ""}`}>
              <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <div className="faq-chevron">
                  <Icon.Chevron open={open === i} />
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer__inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════ */
function FinalCTA({ onDemo }) {
  return (
    <section className="cta-section">
      <div className="cta-section__bg" />
      <div className="grid-texture" />
      <div className="container cta-section__inner">
        {/* <span className="cta-section__crown">👑</span> */}
        <h2 className="cta-section__title">
          Stop Learning Randomly.<br />
          <span className="text-shimmer">Start Moving with Clarity.</span>
        </h2>
        <p className="cta-section__desc">
          Built for students who want structure, growth, premium AI tools, and real career outcomes. India's #1 Data Science &amp; AI Program.
        </p>
        <div className="cta-section__ctas">
          <button onClick={onDemo} className="btn btn--gold btn--xl">
            <Icon.Play /> Watch Free Demo
          </button>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--xl">
            <Icon.WA /> Chat on WhatsApp
          </a>
        </div>
        <p className="cta-section__micro">Free demo + real career roadmap + limited-time discount · No credit card required</p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">Social<span>Prachar</span></div>
        <p className="footer__tagline">Powered by SocialPrachar · Vajra.ai · Ziro · An Initiative by IIM Alumni</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, marginBottom: 24 }}>
          {[
            { label: "📞 +91-8019-479-419", href: "tel:+918019479419" },
            { label: "💬 WhatsApp Us", href: WA_URL },
          ].map(l => (
            <a key={l.label} href={l.href} style={{ fontSize: 13, color: "var(--gold-300)" }} target="_blank" rel="noopener noreferrer">{l.label}</a>
          ))}
        </div>
        <div className="footer__divider" />
        <div className="footer__links">
          {["Privacy Policy", "Terms of Service", "Contact Us", "Upcoming Batches"].map(l => (
            <a key={l} href="#" className="footer__link">{l}</a>
          ))}
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} SocialPrachar. All rights reserved. · Satyabhama Commercial Complex, KPHB, Hyderabad – 500085</p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════
   STICKY MOBILE CTA
   ═══════════════════════════════════════ */
function StickyMobileCTA({ onDemo }) {
  return (
    <div className="sticky-cta">
      <button onClick={onDemo} className="btn btn--gold" style={{ flex: 1 }}>
        <Icon.Play /> Watch Demo
      </button>
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp" style={{ flex: 1 }}>
        <Icon.WA /> WhatsApp
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════
   PAGE EXPORT
   ═══════════════════════════════════════ */
export default function DataScienceAIPage() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadIntent, setLeadIntent] = useState("demo");

  // Activate reveal animations
  useReveal();

  const openLead = useCallback((intent) => {
    setLeadIntent(intent);
    setLeadOpen(true);
  }, []);

  const handleLeadSuccess = useCallback((intent) => {
    if (intent === "demo") {
      setTimeout(() => window.open(DEMO_URL, "_blank"), 500);
    } else {
      setTimeout(() => window.open(WA_URL, "_blank"), 500);
    }
  }, []);

  const onDemo = useCallback(() => openLead("demo"), [openLead]);

  return (
    <>
      <title>Data Science & AI Program | SocialPrachar × Ziro.digital</title>
      <meta name="description" content="India's #1 Data Science & AI Program with Career Intelligence. Learn, practice, track, improve, and get placed. Powered by Ziro AI, SocialPrachar & Vajra.ai." />

      {/* Noise overlay for texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* <Navbar onDemo={onDemo} /> */}

      <main>
        <Hero onDemo={onDemo} />
        <BrandStrip />
        <ProblemSection />
        <IndustryShiftSection />
        <PhasesSection onDemo={onDemo} />
        <DifferentSection onDemo={onDemo} />
        <RoadmapSection />
        <RoleFitSection onDemo={onDemo} />
        <PlacementsSection />
        <LogosSection />
        <TechSection />
        <CertsSection onDemo={onDemo} />
        <EcosystemSection onDemo={onDemo} />
        <TransformationSection />
        <OutcomesSection />
        <FAQSection />
        <FinalCTA onDemo={onDemo} />
      </main>

      {/* <Footer /> */}
      <StickyMobileCTA onDemo={onDemo} />

      <LeadDialog
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        intent={leadIntent}
        onSuccess={handleLeadSuccess}
      />
    </>
  );
}