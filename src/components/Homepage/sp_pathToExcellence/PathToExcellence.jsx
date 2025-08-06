"use client";

import React from "react";

import our_service_1 from "@/assets/homepage/sp_PathToExcellence/our_Services (1).png";
import our_service_2 from "@/assets/homepage/sp_PathToExcellence/our_Services (2).png";
import our_service_3 from "@/assets/homepage/sp_PathToExcellence/our_Services (3).png";
import our_service_4 from "@/assets/homepage/sp_PathToExcellence/our_Services (4).png";
import our_service_5 from "@/assets/homepage/sp_PathToExcellence/our_Services (5).png";
import our_service_6 from "@/assets/homepage/sp_PathToExcellence/our_Services (6).png";

import mentor from "@/assets/homepage/sp_PathToExcellence/mentor_pic.png";
import boy_in_class from "@/assets/homepage/sp_PathToExcellence/boy_in_class.jpg";

import ArrowButton from "@/components/reusedComponents/ArrowButton";
import BulbText from "@/components/reusedComponents/bulbText";
import ParallaxEffect from "@/components/reusedComponents/ParallaxEffect";

import pathToExcellenceStyle from "@/components/Homepage/sp_pathToExcellence/PathToExcellence.module.css";

import whiteBulb from "@/assets/homepage/reUsed_Pics/whiteBulb.png";
import wavesPic from "@/assets/homepage/reUsed_Pics/waves.png";
import BookSvg from "@/assets/homepage/reUsed_Pics/book.png";

import Image from "next/image";

import { useRouter } from "next/navigation";

const PathToExcellence = () => {
  const images = [
    {
      src: wavesPic,
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
  ];

  var our_service_Array = [
    {
      our_service_img: our_service_1,
      our_service_text: "Expert Instructors",
    },
    {
      our_service_img: our_service_2,
      our_service_text: "Interactive Learning",
    },
    {
      our_service_img: our_service_3,
      our_service_text: "Affordable Learning",
    },
    {
      our_service_img: our_service_4,
      our_service_text: "Career Advance",
    },
    {
      our_service_img: our_service_5,
      our_service_text: "Course Selection",
    },
    {
      our_service_img: our_service_6,
      our_service_text: "Support Community",
    },
  ];

  const router = useRouter(); // Use Next.js router

  const handleClick = () => {
    router.push("/courses"); // Navigate to /courses
  };
  return (
    <>
      <div
        className={`${pathToExcellenceStyle.pathToExcelContainer} container-fluid `}
        id="circleAnimationHover"
      >
        {/* <ParallaxEffect images={images} /> */}

        <div className="row    containerFluidForPadding ">
          {/* left side box code start */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className={`${pathToExcellenceStyle.leftSideImg}`}>
              <div className={`${pathToExcellenceStyle.leftImg}`}>
                <Image
                  src={boy_in_class}
                  alt="boy_in_Class"
                  style={{ borderRadius: "8px" }}
                />
              </div>

              <div className={`${pathToExcellenceStyle.rightImg} shadow`}>
                <Image src={mentor} alt="mentor" />
              </div>
            </div>
          </div>
          {/* left side box code end */}
          {/* right side box code start */}

          <div
            className={`col-12 col-sm-12 col-md-12  col-lg-6 col-xl-6  mt-5 ${pathToExcellenceStyle.rightSideImg} `}
          >
            <span className={pathToExcellenceStyle.whiteBulb}>
              <BulbText
                whiteBulb={whiteBulb}
                BulbText="Why Choose Us"
                bulbTitle={`SocialPrachar - Your Path to\nExcellence & Success`}
                GreyText={`We are passionate about education and dedicated to \n providing high-quality learning resources for learners of all backgrounds.`}
              />
            </span>

            <div
              className={`row row-cols-2 row-col-sm-2 row-cols-lg-4 row-cols-xl-3 py-4 row-gap-4 ${pathToExcellenceStyle.pathToExcelRowDiv}`}
            >
              {our_service_Array.map((item, i) => (
                <div
                  className={`${pathToExcellenceStyle.pathToExcelDiv}  col`}
                  key={i}
                >
                  <Image src={item.our_service_img} alt="our_service_img" />
                  <p>{item.our_service_text}</p>
                </div>
              ))}
            </div>

            <div className={`${pathToExcellenceStyle.whiteBtn}`}>
              <ArrowButton
                ArrowText="View All Courses"
                handleClick={handleClick}
              />
            </div>
          </div>
          {/* right side box code end */}
        </div>
      </div>
    </>
  );
};

export default PathToExcellence;
