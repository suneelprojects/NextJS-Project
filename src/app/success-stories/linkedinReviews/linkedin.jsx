/** @format */
"use client"
import React, { useRef } from "react";
import { linkedinData } from "./linkedinReviewsData";
import style from "@/app/success-stories/SuccessStoriesglobalStyling.module.css";
import linkedinLogo from "@/assets/successStories/linkedin.png";
import Image from "next/image";

const linkedin = () => {
    const scrollRef = useRef(null);
    const handleMouseMove = (e) => {
      const container = scrollRef.current;
      if (container) {
        container.scrollLeft += e.movementX;
      }
    };

  return (
    <>
      <div className={style.linkedin}>
        <div className="text-center pt-5">
          <h1
            className={`${style.linkedinHeader} mb-4 d-flex align-items-center justify-content-center`}
          >
            Linked
            <span>
              <Image
                src={linkedinLogo}
                alt="LinkedIn Logo"
                className={style.HeadingLinkedinLogo}
              />
            </span>
          </h1>
        </div>

        <div
          className={`${style.wholeLinkedinCard} container`}
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            // cursor: "grab",
          }}
          onMouseMove={handleMouseMove}
        >
          <div className="row flex-row flex-nowrap">
            {linkedinData.map((profile) => (
              <div className="col-4 col-md-4 col-lg-4" key={profile.id}>
                <div className={`${style.customCard} card`}>
                  <div className={`${style.linkedinInnerCardtitle} d-flex`}>
                    Linked
                    <span>
                      <Image
                        src={linkedinLogo}
                        alt=""
                        className={style.linkedinLogo}
                      />
                    </span>
                  </div>
                  <div className={`${style.linkedinInnerBox} card-body shadow`}>
                    <div className="d-flex align-items-center">
                      <Image
                        src={profile.image}
                        alt=""
                        className={`${style.profileImage} rounded-circle me-3`}
                      />
                      <div className={style.profileName}>
                        <h5 className="mb-1">{profile.name}</h5>
                        <p className="mb-0 text-muted">{profile.role}</p>
                      </div>
                    </div>
                    <div className={`${style.linkedinContent} mt-3`}>
                      <p>{profile.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default linkedin;
