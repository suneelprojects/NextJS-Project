/** @format */

"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./QuickHelpButton.module.css";
import { FaPhone } from "react-icons/fa";

const QuickHelpButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push("/suggestions");
  };

  useEffect(() => {
    const excludedPaths = ["/career-quiz"];
    setIsVisible(!excludedPaths.includes(pathname));
  }, [pathname]);

  useEffect(() => {
    // Check for mobile or tablet screen
    const checkScreen = () => {
      setIsMobileOrTablet(window.matchMedia('(max-width: 1024px)').matches);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  if (!isVisible || !isMobileOrTablet) return null;

  // Responsive sizing
  const cardWidth = typeof window !== 'undefined' && window.innerWidth < 400 ? 40 : 50;
  const cardHeight = typeof window !== 'undefined' && window.innerWidth < 400 ? 80 : 100;
  const iconSize = typeof window !== 'undefined' && window.innerWidth < 400 ? 22 : 28;
  const fontSize = typeof window !== 'undefined' && window.innerWidth < 400 ? 14 : 16;

  return (
    <div
      className={styles.callCardWrapper}
      style={{
        position: "fixed",
        top: "40%",
        left: 0,
        zIndex: 1000,
        background: "transparent",
        padding: 0,
      }}
    >
      <a
        href="tel:+918019479419"
        className={styles.callCard}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          background: "transparent",
          borderRadius: "16px",
          boxShadow: "none",
          textDecoration: "none",
        }}
      >
        <FaPhone style={{ color: "#219653", fontSize: iconSize, marginBottom: 6, transform: "none" }} />
        <span
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontWeight: 700,
            color: "#111",
            fontSize: fontSize,
            letterSpacing: 1,
            background: "transparent",
            transform: "rotate(180deg)",
          }}
        >
          Call
        </span>
      </a>
    </div>
  );
};

export default QuickHelpButton;
