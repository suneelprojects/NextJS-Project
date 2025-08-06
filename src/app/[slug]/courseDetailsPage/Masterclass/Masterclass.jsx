/** @format */

"use client"
import React, { useEffect, useRef, useState } from "react";
// import style from "@/app/[slug]/courseDetailsPage/Header/Header.module.css";
import style from './Masterclass.module.css';
import Redline from "@/assets/successStories/RedLine.webp";
import questionMark from "@/assets/courses/courseDetailspage/RedQuestionmark.svg";
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData";
import { useParams, useRouter } from "next/navigation";
import masterClassImage from "@/assets/courses/courseDetailspage/Free.png";
import Image from "next/image";


const Masterclass = () => {
   const router = useRouter();
  const { slug } = useParams();
  const [card, setCard] = useState(null);
  const doughtsPartRef = useRef(null);
  const redLineRef = useRef(null);
  const header1Ref = useRef(null);
  const header2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.DoughtsPartVisible);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (doughtsPartRef.current) observer.observe(doughtsPartRef.current);
    if (redLineRef.current) observer.observe(redLineRef.current);

    return () => {
      if (doughtsPartRef.current) observer.unobserve(doughtsPartRef.current);
      if (redLineRef.current) observer.unobserve(redLineRef.current);
    };
  }, []);

  useEffect(() => {
    const cardDetails = data.find((item) => item.slug === slug);
    setCard(cardDetails);
  }, [slug]);

  return (
    <>
      <div className={style.DoughtsPart} ref={doughtsPartRef}>
        <p ref={header1Ref} className={`${style.header1} text-center fw-bold`}>
          Do you Feel Confused About
        </p>
        <p ref={header2Ref} className={`${style.header2} text-center fw-bold`}>
          {card?.selfQuestioning}
        </p>

        <Image
          ref={redLineRef}
          src={Redline}
          alt=""
          className={`${style.redLine}`}
        />
        <div
          className={style.SelfQuestioning}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {card &&
            card.questions &&
            card.questions.map((question, index) => (
              <div className={style.questionItem} key={index}>
                <Image
                  src={questionMark}
                  alt="Question mark"
                  className={style.questionIcon}
                />
                <p>{question}</p>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className={style.MasterClass}>
          <div className={style.headings}>
            <p className={style.Text1}>That's why we created</p>
            <p className={style.Text2}>A masterclass</p>
            <p className={style.Text3}>
              to help you speak with confidence and clarity
            </p>
          </div>
        </div>

        <div className={style.classVideo}>
          <Image
            src={masterClassImage}
            alt="Masterclass"
            className={style.ClassImage}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className={`${style.shinebtn} btn`}
            onClick={() => router.push("/career-counselling")}
          >
            Book Free Session
          </button>
        </div>
      </div>
    </>
  );
};

export default Masterclass;
