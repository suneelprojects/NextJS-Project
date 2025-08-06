/** @format */
"use client";
import React, { useEffect, useState } from "react";
import style from "./Banner.module.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fullStackImage from "@/assets/courses/courseDetailspage/classplus-banner-fullstack.webp";
import { useParams } from "next/navigation";
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData";
import Image from "next/image";
import EnrollButton from "../ButtonforCourses/Button";

const Banner = () => {
  const { slug } = useParams();
  const [card, setCard] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const cardDetails = data.find((item) => item.slug === slug);
    setCard(cardDetails);
  }, [slug]);

  if (!card) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className={style.banner}>
        <div className={style.bannerContent}>
          <div className={style.bannerInfo}>
            <Image
              src={fullStackImage}
              alt="Banner_Image"
              className={style.bannerImage}
            />
            <div className={style.bannerText}>
              <h2>{card.bannerHeader}</h2>
              <p>{card.bannerStudentsEnrolled}</p>
            </div>
          </div>
          <div className={`${style.bannerPrice}`}>
            <span className={style.originalPrice}>
              Unlock Exclusive OFFERS
              <p>
                Almost Full{" "}
                <span className={style.offerText}>Only 5 Slots Left!</span>
              </p>
            </span>
          </div>
          <div>
            {card && (
              <EnrollButton
                courseID={card.id}
                // className={style.Button}
                actionType="Download Curriculum"
                label={
                  <>
                    <FontAwesomeIcon icon={faDownload} />
                    Curriculum
                  </>
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
