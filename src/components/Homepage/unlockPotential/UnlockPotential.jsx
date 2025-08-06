"use client";

import React from "react";

import bulb from "@/assets/homepage/reUsed_Pics/bulb.png";
import SvgBulb from "@/assets/homepage/reUsed_Pics/bulbSvg.png";
import BookSvg from "@/assets/homepage/reUsed_Pics/book.png";
import AwardImg from "@/assets/homepage/UnlockPotential/homePic.png";
import iconPicOne from "@/assets/homepage/UnlockPotential/student_icon_1.png";
import iconPicTwo from "@/assets/homepage/UnlockPotential/student_icon_2.png";
import iconPicThree from "@/assets/homepage/UnlockPotential/student_icon_3.png";
import flowtingBtn from "@/assets/homepage/UnlockPotential/flowtingBtn_1.png";
import flowtingBtn2 from "@/assets/homepage/UnlockPotential/flowtingBtn_2.png";
import dumbelSvg from "@/assets/homepage/UnlockPotential/dumbel.png";
import yellowLine from "@/assets/homepage/UnlockPotential/yellowLine.png";
import ArrowButton from "@/components/reusedComponents/ArrowButton";
import ParallaxEffect from "@/components/reusedComponents/ParallaxEffect";

// import { useNavigate } from "react-router-dom";

import { useRouter } from "next/navigation";

import homeStyle from "@/components/Homepage/unlockPotential/UnlockPotential.module.css";
import Image from "next/image";

const UnlockPotential = () => {
  const images = [
    {
      src: dumbelSvg,
      className: "objectOne",
      dataValue: "5",
      alt: "Image 1",
    },
    {
      src: BookSvg,
      className: "objectTwo",
      dataValue: "5",
      alt: "Image 2",
    },
    {
      src: SvgBulb,
      className: "objectThree",
      dataValue: "5",
      alt: "Image 3",
    },
  ];

  const router = useRouter(); // Use Next.js router

  const handleClick = () => {
    router.push("/courses"); // Navigate to /courses
  };
  return (
    <>
      <div className="main-container container-fluid " id="forFooterBtn">
        {/* <ParallaxEffect images={images} /> */}
        <div
          className={`row containerFluidForPadding bg-body-tertiary forHoverEffect ${homeStyle.fullHome} `}
        >
          {/* content side of home code starts */}
          <div
            className={`col-md-6 col-lg-6 col-xl-6 ${homeStyle.homeLeftSide}`}
          >
            <div>
              <div className="d-flex">
                <span className="bulbSpan">
                  <Image src={bulb} alt="bulb" />
                </span>
                <p className="blueText">
                  Your Journey To a Dream Job Starts Here
                </p>
              </div>
              <p className={`${homeStyle.title}`}>
                Unlock Your Potential with SocialPrachar
              </p>
              <Image
                src={yellowLine}
                alt="yellowLine"
                className={`${homeStyle.yellowLine} `}
              />
              <br />
              <p className="greyText ">
                Discover a world of knowledge and opportunities with our Mentor
                job-ready courses.
              </p>

              <div className="row mt-4 ">
                <div className="col-12 col-sm-12 col-xl-5 ">
                  <ArrowButton
                    ArrowText="View All Courses"
                    handleClick={handleClick}
                  />
                </div>
                <div className="col-12 col-sm-12 mt-sm-3 mt-3 mt-xl-0 col-xl-6 d-flex justify-content-around">
                  <div className={`${homeStyle.imgIcons} d-flex`}>
                    <Image src={iconPicOne} alt="student_icon" />
                    <Image
                      src={iconPicTwo}
                      className={`${homeStyle.secondIconImg}`}
                      alt="student_icon"
                    />
                    <Image
                      src={iconPicThree}
                      className={`${homeStyle.thirdIconImg}`}
                      alt="student_icon"
                    />
                    <div className={`${homeStyle.plusIcon}`}>+</div>
                  </div>
                  <div>
                    <p className={`${homeStyle.studentNoText}`}>16000+ students</p>
                    <p className={`greyText ${homeStyle.greyTextStyle}`}>Strong Alumni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content side of home code ends */}

          <div
            className={`${homeStyle.homeRightSide} col-md-6 col-lg-6 col-xl-6 `}
          >
            <div className={`${homeStyle.forFlowingBtn}`}>
              <div className={`${homeStyle.flowtingLeftBtn}`}>
                <Image src={flowtingBtn} alt="flowtingBtn" />
                <div>
                  <span className={`${homeStyle.flowtingBtnFirst}`}>4.8</span>
                  <br />
                  <span className={`${homeStyle.flowtingBtnGreyText}`}>
                    {"("}4.8k reviews{")"}
                  </span>
                </div>
              </div>

              <div className={`${homeStyle.flowtingRightBtn}`}>
                <Image src={flowtingBtn2} alt="flowtingBtn" />
                <div>
                  <span className={`${homeStyle.flowtingBtnFirst}`}>20+</span>
                  <br />
                  <span className={`${homeStyle.flowtingBtnGreyText}`}>
                    Job ready courses
                  </span>
                </div>
              </div>
            </div>

            <Image
              src={AwardImg}
              className={`${homeStyle.homePic}`}
              alt="AwardImg"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UnlockPotential;
