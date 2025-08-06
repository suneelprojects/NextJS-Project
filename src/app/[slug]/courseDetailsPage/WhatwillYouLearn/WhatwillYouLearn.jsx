"use client"
import React, { useEffect, useState } from 'react';
import styles from './WhatwillYouLearn.module.css';
import { data } from '@/app/courses/mainCoursePage/cardsSection/CardData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useParams } from 'next/navigation';
import backgroundImage from "@/assets/courses/courseDetailspage/background.png";
import Image from 'next/image';
import EnrollButton from "../ButtonforCourses/Button";

const colors = [
  "#f0f8ff",
  "#f5f5dc",
  "#ffe4e1",
  "#e6e6fa",
  "#ffefd5",
  "#d3ffce",
  "#e6e6fa",
  "#ffefd5",
  "#d3ffce",
];

const WhatwillYouLearn = () => {
     const { slug } = useParams();
     const [card, setCard] = useState(null);
     const [courseID, setCourseID] = useState(null);
     const [isPopupVisible, setIsPopupVisible] = useState(false);

     const togglePopup = () => {
       setIsPopupVisible(!isPopupVisible);
     };

     useEffect(() => {
       const cardDetails = data.find((item) => item.slug === slug);
       setCard(cardDetails);
       setCourseID(cardDetails.courseID);
     }, [slug]);

    return (
      <>
        <div className={styles.totalPage} id="what-will-you-learn-section">
          <div className={styles.container}>
            <div className={styles.header}>
              <p className={styles.heading}>
                What will you <span>Learn</span>?
              </p>
              <p className={styles.description}>
                {card?.Description || "No description available."}
              </p>
            </div>

            <div className={styles.modules}>
              {card?.moduleContent &&
                card.moduleContent.map((module, index) => (
                  <div
                    key={module.id}
                    className={styles.moduleContainer}
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    <div className={styles.moduleHeader}>
                      <p className={styles.moduleTitle}>{module.module}</p>
                      <p className={`${styles.moduleSubTitle} fw-bold`}>
                        {module.title}
                      </p>
                    </div>

                    <div className={styles.detailsContainer}>
                      <div className={styles.details}>
                        <div className={styles.detailItem}>
                          <FontAwesomeIcon icon={faClock} />
                          <p>Time: {module.details.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.descriptionsContainer}>
                      {module.details.descriptions.map((description, i) => (
                        <p key={i} className={styles.descriptionItem}>
                          {description}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className={styles.masterclassInfo}>
            <Image
              src={backgroundImage}
              alt="Background"
              className={styles.backgroundImage}
            />
            <p className={styles.masterclassQuestion}>
              Who is this <span>Course</span> for...?
            </p>
            <section className={styles.roleContainer}>
              {card &&
                card.courseFor.map((course, index) => (
                  <article key={index} className={styles.role}>
                    <Image
                      src={course.image}
                      alt={course.alt}
                      className={styles.roleImage}
                    />
                    <div className={styles.roleContent}>
                      <h3 className={styles.roleTitle}>{course.title}</h3>
                      <p className={styles.roleDescription}>{course.content}</p>
                    </div>
                  </article>
                ))}
            </section>

            <div className={`${styles.skillUp}`}>
              
              {card && (
                <EnrollButton
                  label="Get Details"
                  courseID={card.id}
                  // className={style.Button}
                  actionType="Get Details"
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
};

export default WhatwillYouLearn;