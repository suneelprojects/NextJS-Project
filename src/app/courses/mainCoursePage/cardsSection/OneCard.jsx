import React,{ useState } from 'react';
import cardsCSS from './Cards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar, faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import calendar from '@/assets/courses/calendar-lines-pen.png';
import user from '@/assets/courses/usergroup.png';
import Image from 'next/image';

const OneCard = ({ card, selectedButton, handleCardTitleClick }) => {
  return (
    <div
      className={`mt-4 ${cardsCSS.cardItem} ${
        selectedButton === "list" ? "col-12" : "col-md-4"
      }`}
    >
      <div
        className={`card ${cardsCSS.card}  ${
          selectedButton === "list" ? cardsCSS.listViewCard : ""
        }`}
        onClick={() => handleCardTitleClick(card.courseID)}
      >
        <div
          className={`${cardsCSS.cardImgContainer} ${
            selectedButton === "list" ? cardsCSS.listViewImageContainer : ""
          }`}
        >
          <div
            className={`${cardsCSS.imgWrapper} ${
              selectedButton === "list" ? cardsCSS.listViewImgWrapper : ""
            }`}
          >
            <Image
              src={card.imageSrc}
              className={cardsCSS.cardImgTop}
              alt={card.courseTitle}
            />
          </div>
          <FontAwesomeIcon
            icon={faBookmark}
            className={`${cardsCSS.saveIcon}`}
            // onClick={handleSaveIconClick}
          />
        </div>
        <div className={cardsCSS.card_body}>
          <p className={cardsCSS.CardTitle}>{card.courseTitle}</p>
          <div className={cardsCSS.lessons}>
            <div className={cardsCSS.calendar_pen}>
              <Image src={calendar} alt="Calendar Icon" />
              <p className={cardsCSS.lesson}>{card.Duration}</p>
            </div>
            <div className={cardsCSS.users}>
              <Image src={user} alt="User  Icon" />
              <p className={cardsCSS.students}>{card.students}</p>
            </div>
          </div>
          <h5
            className={cardsCSS.course_title}
            onClick={() => handleCardTitleClick(card.courseID)}
          >
            {card.text}
          </h5>
          <div className={cardsCSS.starPrice}>
            <div className={cardsCSS.rating}>
              {Array.from({ length: 5 }, (_, starIndex) => {
                if (starIndex < Math.floor(card.rating)) {
                  return (
                    <FontAwesomeIcon
                      key={starIndex}
                      icon={faStar}
                      className={cardsCSS.filledStar}
                    />
                  );
                } else if (starIndex < card.rating) {
                  return (
                    <FontAwesomeIcon
                      key={starIndex}
                      icon={faStarHalfAlt}
                      className={cardsCSS.filledStar}
                    />
                  );
                } else {
                  return (
                    <FontAwesomeIcon
                      key={starIndex}
                      icon={faStar}
                      className={cardsCSS.emptyStar}
                    />
                  );
                }
              })}
            </div>

            <button
              className="btn fw-bold shadow"
              style={{
                background: "#553cdf",
                color: "white",
                position: "relative",
                bottom: "10px",
                left: "-8px",
                border: "1px solid #212529",
              }}
              // onClick={handleButtonClick}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;