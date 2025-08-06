"use client"
import React, { useEffect, useState } from 'react';
import style from "../Header/Header.module.css";
import styles from './NextcohortStarts.module.css';
import { useParams } from 'next/navigation';
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData";
import EnrollButton from "../ButtonforCourses/Button";

const NextcohortStarts = () => {
    const { slug } = useParams();
    const [card, setCard] = useState(null);
    const [courseID, setCourseID] = useState(null);
    // const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
      setIsPopupVisible(!isPopupVisible);
    };

    useEffect(() => {
      const cardDetails = data.find((card) => card.slug === slug);
      setCard(cardDetails);
      setCourseID(cardDetails.courseID);
    }, [slug]);

    // Event date calculation and setting
    useEffect(() => {
      const savedEventDate = localStorage.getItem("eventDate");
      let eventDate;

      if (savedEventDate) {
        eventDate = new Date(savedEventDate);
      } else {
        eventDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // One week from now
        localStorage.setItem("eventDate", eventDate);
      }

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Countdown finished
        if (distance < 0) {
          clearInterval(interval);
          localStorage.removeItem("eventDate");
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          return;
        }

        // Calculate time left
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(interval);
    }, []);
    return (
      <>
        <div className={styles.masterClassContent}>
          <div className={styles.nextLive}>
            <h1>
              Next <span style={{ color: "#ff5003" }}>cohort</span> Starts in
            </h1>
            <div className={styles.timerBoxes}>
              <div className={styles.timerBox}>
                <div className={styles.timeCount}>{timeLeft.days}</div>
                <div>Days</div>
              </div>
              <div className={styles.timerBox}>
                <div className={styles.timeCount}>{timeLeft.hours}</div>
                <div>Hours</div>
              </div>
              <div className={styles.timerBox}>
                <div className={styles.timeCount}>{timeLeft.minutes}</div>
                <div>Minutes</div>
              </div>
              <div className={styles.timerBox}>
                <div className={styles.timeCount}>{timeLeft.seconds}</div>
                <div>Seconds</div>
              </div>
            </div>
            <div className="pt-5">
             
              {card && (
                <EnrollButton
                  label="Get Details"
                  courseID={card.id}
                  className={style.Button}
                  actionType="Get Details"
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
};

export default NextcohortStarts;