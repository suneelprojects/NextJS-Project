/** @format */

"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation"; 
import styles from "./CourseFaqs.module.css";
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData"; 

const CourseFaqs = () => {
  const { slug } = useParams();
  const [courseData, setCourseData] = useState(null); 
  const [openIndex, setOpenIndex] = useState(null);

  // Fetch the course data based on slug
  useEffect(() => {
    const course = data.find((item) => item.slug === slug); 
    setCourseData(course); 
  }, [slug]);

  // Toggle the FAQ accordion
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };

  if (!courseData) {
    return <p>Loading...</p>; // Show loading if courseData is not found
  }

  return (
    <>
      <p className="text-center fs-2 fs-5 fw-bold">
        Frequently Asked Questions
      </p>
      <div className={styles.accordion}>
        {courseData.accordionContent &&
        courseData.accordionContent.length > 0 ? (
          courseData.accordionContent.map((faq, index) => (
            <div key={index} className={styles.accordionItem}>
              <h2 className={styles.accordionHeader}>
                <button
                  className={`${styles.accordionButton} ${
                    openIndex === index ? "" : styles.collapsed
                  }`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={openIndex === index ? "true" : "false"}
                >
                  {faq.title}
                  <span className={styles.symbol}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
              </h2>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${faq.content.length * 2}rem`
                      : "0px",
                }} // Expand the content
              >
                <div className={styles.accordionBody}>{faq.content}</div>
              </div>
            </div>
          ))
        ) : (
          <p>No FAQs available</p>
        )}
      </div>
    </>
  );
};

export default CourseFaqs;
