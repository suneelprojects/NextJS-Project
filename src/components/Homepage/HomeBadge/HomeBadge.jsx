/** @format */

"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import fourImageOne from "@/assets/homepage/HomeBadge/fourStep (1).png";
import fourImageTwo from "@/assets/homepage/HomeBadge/fourStep (2).png";
import fourImageThree from "@/assets/homepage/HomeBadge/fourStep (3).png";
import fourImageFour from "@/assets/homepage/HomeBadge/fourStep (4).png";

import circleSvg from "@/assets/homepage/reUsed_Pics/circleSvg.png";
import wavesPic from "@/assets/homepage/reUsed_Pics/waves.png";

import ParallaxEffect from "@/components/reusedComponents/ParallaxEffect";

import fourStepsStyle from "@/components/Homepage/HomeBadge/HomeBadge.module.css";
import Image from "next/image";

const fourStepsArray = [
  {
    fourImg: fourImageOne,
    fourFirstText: 155000,
    fourSecondText: `Hours Classes \n Delivered`,
  },
  {
    fourImg: fourImageTwo,
    fourFirstText: 530,
    fourSecondText: "Batches Completed",
  },
  {
    fourImg: fourImageThree,
    fourFirstText: 16000,
    fourSecondText: "Students Trained",
  },
  {
    fourImg: fourImageFour,
    fourFirstText: 9,
    fourSecondText: `Prestigious EdTech \n Award Received`,
  },
];

const HomeBadge = () => {

  const images = [
    { src: wavesPic, className: "objectOne", dataValue: "5", alt: "Image 1" },
    { src: circleSvg, className: "objectTwo", dataValue: "5", alt: "Image 2" },
  ];

  const [currentNumbers, setCurrentNumbers] = useState(
    fourStepsArray.map(() => 0)
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  const animationFrameRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Only animate when in view and hasn't animated yet
    if (!inView || hasAnimatedRef.current) return;

    const startTime = Date.now();
    const duration = 2000; // 2 seconds animation
    const targetValues = fourStepsArray.map(step => step.fourFirstText);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCurrentNumbers(() => {
        const newNumbers = targetValues.map((targetValue) => {
          const currentValue = Math.floor(targetValue * easeOutQuart);
          return Math.min(currentValue, targetValue);
        });

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          hasAnimatedRef.current = true;
        }

        return newNumbers;
      });
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [inView]);

  return (
    <>
      <div ref={ref} className="fourStepsHover container-fluid mt-5">
        <div
          className={` row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 ${fourStepsStyle.fourStepContainer} py-4 `}
        >
          {fourStepsArray.map((fourStepEle, i) => (
            <div className={`col ${fourStepsStyle.fourStep}`} key={i}>
              <div className="d-flex flex-column align-items-center text-center">
                <Image
                  src={fourStepEle.fourImg}
                  alt="Step"
                  className="mx-auto d-block"
                />
                <p className={`${fourStepsStyle.fourStepTextOne}`}>
                  {currentNumbers[i]}
                  <span style={{ fontSize: "30px" }}>+</span>
                </p>
                <p style={{ whiteSpace: "pre-wrap" }}>
                  {fourStepEle.fourSecondText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeBadge;
