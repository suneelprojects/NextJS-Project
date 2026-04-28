"use client";

/**
 * ZiroChatWidget — Premium Conversational UI (Collect.chat-style)
 * ------------------------------------------------------------------
 * FIXES:
 * 1. Auto-opens 6s after every page load / Next.js route change
 * 2. Input row no longer clips the "Continue" button
 * 3. Custom logo/icon replaces the "SP" placeholder everywhere
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import SpLogo from "../assets/sp-logo.jpg"

// ─── Constants ─────────────────────────────────────────────────────────────
const LS_VISITOR_KEY = "ziro_chat_visitor_id";

const FONT_FAMILY =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const COURSE_OPTIONS = [
  "Full Stack Java/Python",
  "Data Science & AI",
  "Data Analytics",
  "AI Ops / ML Ops / DevOps",
];

const STATUS_OPTIONS = [
  "Final year student",
  "Recent graduate",
  "Working professional",
  "Career restart",
];

// ─── YOUR LOGO URL ──────────────────────────────────────────────────────────
// Replace this with the actual URL of your website's logo/icon.
// It should ideally be a square image (PNG/SVG) that looks good on a
// coloured background. Example: "/logo.png" or "https://yourdomain.com/icon.png"
const LOGO_URL = SpLogo; // ← ✏️  UPDATE THIS

// ─── Helpers ───────────────────────────────────────────────────────────────
function uuidv4() {
  const c = typeof crypto !== "undefined" ? crypto : null;
  if (c?.randomUUID) return c.randomUUID();
  if (c?.getRandomValues) {
    const b = new Uint8Array(16);
    c.getRandomValues(b);
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    const h = Array.from(b, (x) => x.toString(16).padStart(2, "0"));
    return `${h.slice(0, 4).join("")}-${h.slice(4, 6).join("")}-${h
      .slice(6, 8)
      .join("")}-${h.slice(8, 10).join("")}-${h.slice(10, 16).join("")}`;
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ch) => {
    const r = (Math.random() * 16) | 0;
    const v = ch === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getOrCreateVisitorId() {
  try {
    const existing = localStorage.getItem(LS_VISITOR_KEY);
    if (existing && /^[0-9a-f-]{36}$/i.test(existing)) return existing;
  } catch {
    /* localStorage might be blocked */
  }
  const fresh = uuidv4();
  try {
    localStorage.setItem(LS_VISITOR_KEY, fresh);
  } catch {
    /* ignore */
  }
  return fresh;
}

function readUtm() {
  if (typeof window === "undefined") {
    return { source_page: "/", utm_source: null, utm_medium: null, utm_campaign: null };
  }
  const sp = new URLSearchParams(window.location.search);
  return {
    source_page: window.location.pathname || "/",
    utm_source: sp.get("utm_source"),
    utm_medium: sp.get("utm_medium"),
    utm_campaign: sp.get("utm_campaign"),
  };
}

function isValidIndianPhone(p) {
  const d = p.replace(/\D/g, "");
  return d.length === 10 && /^[6-9]/.test(d);
}

function isValidEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
}

function isValidName(n) {
  const t = n.trim();
  return t.length >= 2 && t.length <= 80 && /[a-zA-ZÀ-ÿ]/.test(t);
}

// ─── Logo/Avatar components ────────────────────────────────────────────────

/** Small circular avatar shown next to bot bubbles */
const Avatar = React.memo(({ primaryColor }) => (
  <div
    aria-hidden="true"
    style={{
      width: 30,
      height: 30,
      borderRadius: "50%",
      // background: `linear-gradient(135deg, ${primaryColor} 0%, #3b82f6 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      boxShadow: "0 2px 6px rgba(29,78,216,0.30)",
      marginTop: 2,
      overflow: "hidden",
    }}
  >
    <Image
      src={LOGO_URL}
      alt="SocialPrachar"
      width={24}
      height={24}
      style={{ objectFit: "contain" }}
      onError={(e) => {
        // Fallback to "SP" text if image fails to load
        e.currentTarget.style.display = "none";
        e.currentTarget.parentElement.innerHTML =
          '<span style="color:#fff;font-size:11px;font-weight:700;">SP</span>';
      }}
    />
  </div>
));
Avatar.displayName = "Avatar";

// ─── Sub-components ────────────────────────────────────────────────────────
const BotBubble = React.memo(({ primaryColor, children }) => (
  <div
    className="ziro-msg-in"
    style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}
  >
    <Avatar primaryColor={primaryColor} />
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "78%" }}>
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e6edf7",
          borderRadius: "16px 16px 16px 4px",
          padding: "11px 14px",
          color: "#0f172a",
          fontSize: 14,
          lineHeight: 1.5,
          boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.04)",
          wordBreak: "break-word",
        }}
      >
        {children}
      </div>
      <span style={{ fontSize: 10, color: "#94a3b8", marginTop: 3, marginLeft: 6 }}>
        Just now
      </span>
    </div>
  </div>
));
BotBubble.displayName = "BotBubble";

const UserBubble = React.memo(({ primaryColor, children }) => (
  <div
    className="ziro-msg-in"
    style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}
  >
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "78%", alignItems: "flex-end" }}>
      <div
        style={{
          background: `linear-gradient(135deg, ${primaryColor} 0%, #2563eb 60%, #3b82f6 100%)`,
          color: "#ffffff",
          border: "none",
          borderRadius: "16px 16px 4px 16px",
          padding: "11px 14px",
          fontSize: 14,
          lineHeight: 1.5,
          fontWeight: 500,
          boxShadow: "0 4px 12px rgba(29,78,216,0.25)",
          wordBreak: "break-word",
        }}
      >
        {children}
      </div>
      <span style={{ fontSize: 10, color: "#94a3b8", marginTop: 3, marginRight: 6 }}>
        Just now
      </span>
    </div>
  </div>
));
UserBubble.displayName = "UserBubble";

const TypingBubble = React.memo(({ primaryColor }) => (
  <div
    className="ziro-msg-in"
    style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}
    aria-live="polite"
    aria-label="Assistant is typing"
  >
    <Avatar primaryColor={primaryColor} />
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e6edf7",
        borderRadius: "16px 16px 16px 4px",
        padding: "12px 16px",
        display: "inline-flex",
        gap: 4,
        alignItems: "center",
        boxShadow: "0 1px 2px rgba(15,23,42,0.04)",
      }}
    >
      <span className="ziro-typing-dot" />
      <span className="ziro-typing-dot" />
      <span className="ziro-typing-dot" />
    </div>
  </div>
));
TypingBubble.displayName = "TypingBubble";

const OptionPill = React.memo(({ primaryColor, label, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={selected ? "ziro-pill ziro-pill-selected" : "ziro-pill"}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      width: "100%",
      textAlign: "left",
      background: selected ? primaryColor : "#ffffff",
      border: `1.5px solid ${selected ? primaryColor : "#bfdbfe"}`,
      color: selected ? "#ffffff" : "#1e3a8a",
      borderRadius: 999,
      padding: "12px 18px",
      marginBottom: 10,
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 600,
      boxShadow: selected
        ? "0 6px 16px rgba(29,78,216,0.30)"
        : "0 1px 2px rgba(15,23,42,0.04), 0 2px 6px rgba(29,78,216,0.06)",
      fontFamily: FONT_FAMILY,
    }}
  >
    <span>{label}</span>
    {selected && <span aria-hidden="true" style={{ fontSize: 14 }}>✓</span>}
  </button>
));
OptionPill.displayName = "OptionPill";

// ─── Main Component ─────────────────────────────────────────────────────────
export default function ZiroChatWidget({
  endpoint,
  primaryColor = "#1d4ed8",
  autoOpenDelayMs = 6000,
  branch,
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    course_interest: null,
    student_status: null,
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [typing, setTyping] = useState(false);
  const typingTimerRef = useRef(null);
  const autoOpenTimerRef = useRef(null);
  const bodyRef = useRef(null);
  const hasScrolledOnceRef = useRef(false);
  const visitorIdRef = useRef("");
  const ctxRef = useRef(readUtm());

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current);
    };
  }, []);

  // ── FIX 1: Auto-open on every page load / Next.js route change ──────────
  // We use a key derived from the pathname so that every route change re-runs
  // the effect and schedules a fresh 6-second open timer.
  const [pathname, setPathname] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  // Listen for Next.js router events (App Router uses popstate / pushstate)
  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(window.location.pathname);
      ctxRef.current = readUtm(); // refresh UTM on navigation too
    };

    window.addEventListener("popstate", handleRouteChange);

    // Patch history.pushState / replaceState to catch client-side navigation
    const origPush = history.pushState.bind(history);
    const origReplace = history.replaceState.bind(history);

    history.pushState = (...args) => {
      origPush(...args);
      handleRouteChange();
    };
    history.replaceState = (...args) => {
      origReplace(...args);
      handleRouteChange();
    };

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      history.pushState = origPush;
      history.replaceState = origReplace;
    };
  }, []);

  // Every time the pathname changes (including initial load), schedule open
  useEffect(() => {
    if (autoOpenDelayMs <= 0) return;

    // Reset widget state on navigation so it reopens fresh
    setOpen(false);
    setStep(0);

    if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current);

    autoOpenTimerRef.current = setTimeout(() => {
      setOpen(true);
    }, autoOpenDelayMs);

    return () => {
      if (autoOpenTimerRef.current) clearTimeout(autoOpenTimerRef.current);
    };
  }, [pathname, autoOpenDelayMs]);

  // Auto-scroll to bottom on step/typing change
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      try {
        el.scrollTo({ top: el.scrollHeight, behavior: hasScrolledOnceRef.current ? "smooth" : "auto" });
      } catch {
        el.scrollTop = el.scrollHeight;
      }
      hasScrolledOnceRef.current = true;
    });
  }, [step, typing]);

  // Initialise visitor ID
  useEffect(() => {
    visitorIdRef.current = getOrCreateVisitorId();
  }, []);

  // Detect mobile viewport
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 640px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Start conversation when widget opens
  useEffect(() => {
    if (open && step === 0) setStep(1);
  }, [open, step]);

  // ── Helpers ──
  const restart = () => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setTyping(false);
    setError(null);
    setData({ course_interest: null, student_status: null, name: "", phone: "", email: "" });
    setStep(1);
  };

  const advanceWithTyping = useCallback((nextStep) => {
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    setTyping(true);
    const delayMs = 700 + Math.floor(Math.random() * 500);
    typingTimerRef.current = setTimeout(() => {
      setTyping(false);
      setStep(nextStep);
    }, delayMs);
  }, []);

  const postStep = useCallback(
    async (n, payload) => {
      if (!endpoint) return;
      try {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            visitor_session_id: visitorIdRef.current,
            step: n,
            data: payload,
            context: ctxRef.current,
            branch: branch,
          }),
        });
      } catch (e) {
        console.warn("[ZiroChatWidget] step post failed:", e);
      }
    },
    [endpoint, branch],
  );

  const pickCourse = useCallback(
    (c) => {
      setError(null);
      setData((d) => ({ ...d, course_interest: c }));
      void postStep(1, { course_interest: c });
      advanceWithTyping(2);
    },
    [postStep, advanceWithTyping],
  );

  const pickStatus = useCallback(
    (s) => {
      setError(null);
      setData((d) => ({ ...d, student_status: s }));
      void postStep(2, { student_status: s });
      advanceWithTyping(3);
    },
    [postStep, advanceWithTyping],
  );

  const submitName = useCallback(async () => {
    if (!isValidName(data.name)) {
      setError("Please enter your full name (letters only).");
      return;
    }
    setError(null);
    setSubmitting(true);
    await postStep(3, { name: data.name.trim() });
    setSubmitting(false);
    advanceWithTyping(4);
  }, [data.name, postStep, advanceWithTyping]);

  const submitPhone = useCallback(async () => {
    if (!isValidIndianPhone(data.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    setError(null);
    setSubmitting(true);
    await postStep(4, { phone: data.phone.replace(/\D/g, "") });
    setSubmitting(false);
    advanceWithTyping(5);
  }, [data.phone, postStep, advanceWithTyping]);

  const submitEmail = useCallback(async () => {
    if (!isValidEmail(data.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitting(true);
    await postStep(5, { email: data.email.trim().toLowerCase() });
    setSubmitting(false);
    advanceWithTyping(6);
  }, [data.email, postStep, advanceWithTyping]);

  const handleInputFocus = useCallback(() => {
    setTimeout(() => {
      const el = bodyRef.current;
      if (!el) return;
      try {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      } catch {
        el.scrollTop = el.scrollHeight;
      }
    }, 250);
  }, []);

  // ── Styles ──
  const launcherStyle = useMemo(
    () => ({
      position: "fixed",
      right: 24,
      bottom: "50%",
      width: 62,
      height: 62,
      borderRadius: "50%",
      // background: `linear-gradient(135deg, ${primaryColor} 0%, #2563eb 55%, #3b82f6 100%)`,
      color: "#fff",
      border: "3px solid rgba(255,255,255,0.95)",
      cursor: "pointer",
      boxShadow: "0 12px 32px rgba(29,78,216,0.40), 0 4px 10px rgba(0,0,0,0.14)",
      zIndex: 999998,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 200ms ease, box-shadow 200ms ease",
      overflow: "hidden",
      padding: 0,
    }),
    [primaryColor],
  );

  const panelStyle = useMemo(
    () =>
      isMobile
        ? {
            position: "fixed",
            inset: 0,
            height: "100dvh",
            minHeight: "100dvh",
            maxHeight: "100dvh",
            background: "#ffffff",
            zIndex: 999999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: FONT_FAMILY,
          }
        : {
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 420,
            height: 640,
            maxHeight: "calc(100vh - 40px)",
            background: "#ffffff",
            borderRadius: 20,
            boxShadow: "0 28px 70px rgba(15,23,42,0.35), 0 6px 16px rgba(15,23,42,0.12)",
            zIndex: 999999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: FONT_FAMILY,
          },
    [isMobile],
  );

  const backdropStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(15, 23, 42, 0.45)",
    zIndex: 999998,
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    animation: "ziroFadeIn 200ms ease both",
  };

  const headerStyle = useMemo(
    () => ({
      background: `linear-gradient(135deg, ${primaryColor} 0%, #2563eb 55%, #3b82f6 100%)`,
      color: "#fff",
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 2px 10px rgba(29,78,216,0.25)",
      flexShrink: 0,
    }),
    [primaryColor],
  );

  const headerBtn = {
    background: "rgba(255,255,255,0.14)",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: 14,
    width: 30,
    height: 30,
    borderRadius: 10,
    padding: 0,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 160ms ease",
  };

  const bodyStyle = useMemo(
    () => ({
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      overflowX: "hidden",
      padding: isMobile ? "20px 16px 100px" : "20px 16px 12px",
      background: "linear-gradient(180deg, #f8fafc 0%, #eef4ff 60%, #f8fafc 100%)",
      WebkitOverflowScrolling: "touch",
    }),
    [isMobile],
  );

  const errorStyle = {
    color: "#b91c1c",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 50,
    marginBottom: 6,
  };

  const footerStyle = {
    padding: isMobile
      ? "10px 12px calc(10px + env(safe-area-inset-bottom, 0px))"
      : "10px 12px",
    borderTop: "1px solid #e2e8f0",
    fontSize: 11,
    color: "#94a3b8",
    textAlign: "center",
    background: "#fff",
    flexShrink: 0,
  };

  // ── FIX 2: Input row — button is always fully visible ──────────────────
  // Key change: the outer wrapper uses a fixed/min-width strategy so the
  // button is never pushed off-screen. The input shrinks, button stays put.
  const renderInputRow = (inputEl, onSubmit, submitLabel) => (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
        marginTop: 4,
        marginBottom: 8,
        // Do NOT add left margin on the row itself — it caused the clip.
        // The body has horizontal padding already.
        width: "100%",
        boxSizing: "border-box",
        minWidth: 0,
      }}
    >
      {/* Input takes all available space but never pushes button away */}
      <div style={{ flex: "1 1 0", minWidth: 0 }}>
        {inputEl}
      </div>
      <button
        type="button"
        onClick={onSubmit}
        disabled={submitting}
        style={{
          flexShrink: 0,         // never shrink
          whiteSpace: "nowrap",
          background: submitting
            ? "#94a3b8"
            : `linear-gradient(135deg, ${primaryColor} 0%, #3b82f6 100%)`,
          color: "#fff",
          border: "none",
          borderRadius: 999,
          padding: "0 20px",
          height: 44,
          minWidth: 100,
          cursor: submitting ? "not-allowed" : "pointer",
          fontSize: 14,
          fontWeight: 600,
          boxShadow: submitting ? "none" : "0 4px 12px rgba(29,78,216,0.30)",
          transition: "transform 140ms ease, box-shadow 180ms ease",
          fontFamily: FONT_FAMILY,
        }}
      >
        {submitting ? "…" : submitLabel}
      </button>
    </div>
  );

  const chatInputStyle = {
    width: "100%",
    height: 44,
    boxSizing: "border-box",
    padding: "0 16px",
    border: "1.5px solid #cbd5e1",
    borderRadius: 999,
    fontSize: 16,
    outline: "none",
    background: "#ffffff",
    color: "#0f172a",
    fontFamily: FONT_FAMILY,
  };

  const firstName = data.name ? data.name.trim().split(" ")[0] : "";

  const renderBody = () => {
    if (step === 6) {
      return (
        <>
          <BotBubble primaryColor={primaryColor}>
            👋 Hi! Welcome to <strong>SocialPrachar</strong>.
            <br /><br />
            We help graduates build job-ready tech careers with internships,
            AI-powered learning, and placement support.
          </BotBubble>
          {data.course_interest && (
            <UserBubble primaryColor={primaryColor}>{data.course_interest}</UserBubble>
          )}
          {data.student_status && (
            <UserBubble primaryColor={primaryColor}>{data.student_status}</UserBubble>
          )}
          {data.name && <UserBubble primaryColor={primaryColor}>{data.name}</UserBubble>}
          {data.phone && <UserBubble primaryColor={primaryColor}>+91 {data.phone}</UserBubble>}
          {data.email && <UserBubble primaryColor={primaryColor}>{data.email}</UserBubble>}
          <BotBubble primaryColor={primaryColor}>
            🎉 <strong>Thank you{firstName ? `, ${firstName}` : ""}!</strong>
            <br />
            Our career counsellor will contact you shortly on{" "}
            <strong>+91 {data.phone}</strong>.
            <br /><br />
            Meanwhile, explore how Ziro helps students save time, practise
            better, and become job-ready faster.
          </BotBubble>
          <div className="ziro-msg-in" style={{ marginLeft: 38, marginTop: 4, marginBottom: 8 }}>
            <a
              href="https://ziro.digital/ziro-advantage"
              target="_blank"
              rel="noopener noreferrer"
              className="ziro-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: `linear-gradient(135deg, ${primaryColor} 0%, #2563eb 55%, #3b82f6 100%)`,
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: 999,
                padding: "12px 20px",
                fontSize: 14,
                fontWeight: 700,
                boxShadow: "0 8px 22px rgba(29,78,216,0.32)",
                fontFamily: FONT_FAMILY,
              }}
            >
              Explore Ziro Advantage <span aria-hidden="true">→</span>
            </a>
          </div>
        </>
      );
    }

    return (
      <>
        <BotBubble primaryColor={primaryColor}>
          👋 Hi! Welcome to <strong>SocialPrachar</strong>.
          <br />
          We help graduates build job-ready tech careers with internships,
          AI-powered learning, and placement support.
        </BotBubble>

        {step >= 1 && (
          <BotBubble primaryColor={primaryColor}>Which course are you looking for?</BotBubble>
        )}
        {step === 1 && !typing &&
          COURSE_OPTIONS.map((c) => (
            <div key={c} style={{ marginLeft: 38 }}>
              <OptionPill primaryColor={primaryColor} label={c} onClick={() => pickCourse(c)} />
            </div>
          ))}
        {data.course_interest && step >= 2 && (
          <UserBubble primaryColor={primaryColor}>{data.course_interest}</UserBubble>
        )}

        {step >= 2 && step < 6 && (
          <BotBubble primaryColor={primaryColor}>You are currently:</BotBubble>
        )}
        {step === 2 && !typing &&
          STATUS_OPTIONS.map((s) => (
            <div key={s} style={{ marginLeft: 38 }}>
              <OptionPill primaryColor={primaryColor} label={s} onClick={() => pickStatus(s)} />
            </div>
          ))}
        {data.student_status && step >= 3 && (
          <UserBubble primaryColor={primaryColor}>{data.student_status}</UserBubble>
        )}

        {step >= 3 && step < 6 && (
          <BotBubble primaryColor={primaryColor}>Great! What&apos;s your full name?</BotBubble>
        )}
        {step === 3 && !typing && (
          <>
            {renderInputRow(
              <input
                key="name-input"
                style={chatInputStyle}
                value={data.name}
                onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                onFocus={handleInputFocus}
                placeholder="Your full name"
                autoFocus
                autoComplete="name"
                onKeyDown={(e) => e.key === "Enter" && submitName()}
              />,
              submitName,
              "Continue",
            )}
            {error && <div style={errorStyle}>{error}</div>}
          </>
        )}
        {data.name && step >= 4 && (
          <UserBubble primaryColor={primaryColor}>{data.name}</UserBubble>
        )}

        {step >= 4 && step < 6 && (
          <BotBubble primaryColor={primaryColor}>
            Thanks{firstName ? ` ${firstName}` : ""}. Please share your WhatsApp
            number so our career team can guide you.
          </BotBubble>
        )}
        {step === 4 && !typing && (
          <>
            {renderInputRow(
              <input
                key="phone-input"
                style={chatInputStyle}
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={data.phone}
                onChange={(e) =>
                  setData((d) => ({ ...d, phone: e.target.value.replace(/\D/g, "").slice(0, 10) }))
                }
                onFocus={handleInputFocus}
                placeholder="10-digit mobile"
                autoFocus
                autoComplete="tel"
                onKeyDown={(e) => e.key === "Enter" && submitPhone()}
              />,
              submitPhone,
              "Continue",
            )}
            {error && <div style={errorStyle}>{error}</div>}
          </>
        )}
        {data.phone && step >= 5 && (
          <UserBubble primaryColor={primaryColor}>+91 {data.phone}</UserBubble>
        )}

        {step >= 5 && step < 6 && (
          <BotBubble primaryColor={primaryColor}>Last step — your email address?</BotBubble>
        )}
        {step === 5 && !typing && (
          <>
            {renderInputRow(
              <input
                key="email-input"
                style={chatInputStyle}
                type="email"
                value={data.email}
                onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                onFocus={handleInputFocus}
                placeholder="you@example.com"
                autoFocus
                autoComplete="email"
                onKeyDown={(e) => e.key === "Enter" && submitEmail()}
              />,
              submitEmail,
              "Submit",
            )}
            {error && <div style={errorStyle}>{error}</div>}
          </>
        )}

        {typing && <TypingBubble primaryColor={primaryColor} />}
      </>
    );
  };

  // ── Launcher (widget closed) ──────────────────────────────────────────────
  if (!open) {
    return (
      <>
        <style>{`
          @keyframes ziroPulseRing {
            0%   { transform: translate(-50%, -50%) scale(0.85); opacity: 0.55; }
            70%  { transform: translate(-50%, -50%) scale(1.6);  opacity: 0;    }
            100% { transform: translate(-50%, -50%) scale(1.6);  opacity: 0;    }
          }
          @keyframes ziroLauncherIn {
            0%   { opacity: 0; transform: scale(0.6); }
            100% { opacity: 1; transform: scale(1);   }
          }
          .ziro-launcher:hover {
            transform: scale(1.08) !important;
            box-shadow: 0 16px 38px rgba(29,78,216,0.50), 0 6px 14px rgba(0,0,0,0.18) !important;
          }
        `}</style>
        <button
          type="button"
          aria-label="Open SocialPrachar Career Assistant"
          className="ziro-launcher"
          style={{
            ...launcherStyle,
            animation: "ziroLauncherIn 320ms cubic-bezier(0.34, 1.56, 0.64, 1) both",
          }}
          onClick={() => setOpen(true)}
        >
          {/* Pulse ring */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: primaryColor,
              opacity: 0.4,
              animation: "ziroPulseRing 2.2s infinite ease-out",
              pointerEvents: "none",
            }}
          />

          {/* ── FIX 3: Custom website icon in launcher ── */}
          <Image
            src={LOGO_URL}
            alt="SocialPrachar"
            width={34}
            height={34}
            style={{ objectFit: "contain", position: "relative", borderRadius: "50%" }}
            onError={(e) => {
              // Fallback to chat SVG if logo fails
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "block";
            }}
          />
          {/* Fallback chat icon (hidden by default, shown if Image fails) */}
          <svg
            aria-hidden="true"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ position: "absolute", display: "none" }}
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>

          {/* Online indicator dot */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 6,
              right: 6,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#22c55e",
              border: "2px solid #ffffff",
              boxShadow: "0 0 0 2px rgba(34,197,94,0.25)",
            }}
          />
        </button>
      </>
    );
  }

  // ── Panel (widget open) ───────────────────────────────────────────────────
  return (
    <>
      {/* Backdrop — desktop only */}
      {!isMobile && (
        <div
          style={backdropStyle}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        role="dialog"
        aria-label="SocialPrachar Career Assistant"
        className={isMobile ? "ziro-panel ziro-panel-mobile" : "ziro-panel ziro-panel-desktop"}
        style={panelStyle}
      >
        <style>{`
          @keyframes ziroFadeIn {
            0%   { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes ziroTypingBounce {
            0%, 80%, 100% { transform: translateY(0);    opacity: 0.4; }
            40%            { transform: translateY(-4px); opacity: 1;   }
          }
          .ziro-typing-dot {
            display: inline-block;
            width: 7px; height: 7px;
            border-radius: 50%;
            background: #64748b;
            animation: ziroTypingBounce 1.2s infinite ease-in-out both;
          }
          .ziro-typing-dot:nth-child(1) { animation-delay: -0.32s; }
          .ziro-typing-dot:nth-child(2) { animation-delay: -0.16s; }

          @keyframes ziroMsgIn {
            0%   { opacity: 0; transform: translateY(6px); }
            100% { opacity: 1; transform: translateY(0);   }
          }
          .ziro-msg-in { animation: ziroMsgIn 260ms ease-out both; }

          @keyframes ziroPanelInDesktop {
            0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.92); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1);    }
          }
          @keyframes ziroPanelInMobile {
            0%   { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0);    }
          }
          .ziro-panel-desktop { animation: ziroPanelInDesktop 320ms cubic-bezier(0.22, 1, 0.36, 1) both; }
          .ziro-panel-mobile  { animation: ziroPanelInMobile  280ms cubic-bezier(0.22, 1, 0.36, 1) both; }

          .ziro-pill { transition: background 180ms ease, border-color 180ms ease, transform 140ms ease, color 180ms ease; }
          .ziro-pill:not(.ziro-pill-selected):hover {
            background: #eff6ff !important;
            border-color: #3b82f6 !important;
            transform: translateY(-1px);
          }

          .ziro-cta { transition: transform 160ms ease, box-shadow 200ms ease; }
          .ziro-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(29,78,216,0.38); }

          .ziro-header-btn { transition: background 160ms ease; }
          .ziro-header-btn:hover { background: rgba(255,255,255,0.28) !important; }
        `}</style>

        {/* Header */}
        <div style={headerStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
            {/* ── FIX 3: Custom logo in header ── */}
            <div
              aria-hidden="true"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                // background: "rgba(255,255,255,0.18)",
                // border: "1.5px solid rgba(255,255,255,0.40)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <Image
                src={LOGO_URL}
                alt="SocialPrachar"
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML +=
                    '<span style="color:#fff;font-size:13px;font-weight:700;">SP</span>';
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: -1,
                  right: -1,
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "2px solid #1d4ed8",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2, minWidth: 0 }}>
              <strong
                style={{
                  fontSize: 14,
                  letterSpacing: 0.1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                SocialPrachar Career Assistant
              </strong>
              <span
                style={{
                  fontSize: 11,
                  opacity: 0.92,
                  marginTop: 2,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Get course guidance in minutes
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
            <button
              type="button"
              aria-label="Restart conversation"
              title="Restart"
              className="ziro-header-btn"
              style={headerBtn}
              onClick={restart}
            >
              ↻
            </button>
            <button
              type="button"
              aria-label="Close"
              title="Close"
              className="ziro-header-btn"
              style={headerBtn}
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div ref={bodyRef} style={bodyStyle}>
          {renderBody()}
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          Powered by <strong style={{ color: "#475569" }}>Ziro.digital</strong>
        </div>
      </div>
    </>
  );
}