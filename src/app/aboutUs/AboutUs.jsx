import React from 'react';
import aboutusStyle from "./aboutus.module.css";
import smallBuss from "@/assets/homepage/AboutUs/smallBuss.png";
import faculty from "@/assets/homepage/AboutUs/faculty.png";
import placement from "@/assets/homepage/AboutUs/placement.png";
import certify from "@/assets/homepage/AboutUs/certification.png";
import twentyfour from "@/assets/homepage/AboutUs/24Seven.png";
import aboutUsWomen from "@/assets/homepage/AboutUs/aboutUsWomen.png";
import aboutusPic1 from "@/assets/homepage/AboutUs/aboutusPic1.png";
import aboutusPic2 from "@/assets/homepage/AboutUs/aboutusPic2.png";
import aboutusPic3 from "@/assets/homepage/AboutUs/aboutusPic3.png";
import BulbText from "@/components/reusedComponents/bulbText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHourglass,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import "@/components/Homepage/index.css";
const AboutUs = () => {
      const aboutusArray = [
        {
          image: faculty,
          heading: "Real Time Faculty",
          sentense:
            "Learn Digital Marketing From Microsoft & Google Certified Expert Trainers. We offer Training from Real-time in-house team",
        },
        {
          image: placement,
          heading: "Placement Support",
          sentense:
            "We provide the dedicated HR placement team to help you get started with latest Digital Marketing jobs",
        },
        {
          image: certify,
          heading: "Certifications",
          sentense:
            "SocialPrachar supports you to get all the certifications from Facebook, Google and 4 Other MNC Certifications for free of cost",
        },
        {
          image: twentyfour,
          heading: "24/7/365 Days",
          sentense:
            "Life time query support to advance your career. We provide 24*7 Trainer support online/offline from experts and professionals",
        },
      ];
    
      const checkCircleArray = [
        "10+ years of expertise in EdTech",
        "16,000+ students trained",
        "95% placement success",
        "Industry-relevant curriculum",
        "Collaboration with IIT Madras Pravartak for certifications",
        "Performance-based internships with stipends",
        "Cutting-edge AI tools for learning and career support",
      ];
      return (
        <div>
          <div className={`container ${aboutusStyle.containerXl}`}>
            <div className={aboutusStyle.smallBuss}>
              <Image src={smallBuss} alt="smallBussiness" />
            </div>
    
            <h1 className="my-5 text-center">What We Provide</h1>
            <div className="row row-gap-4 my-5">
              {aboutusArray.map((aboutusItem, i) => (
                <div
                  className={`col-12 col-sm-6 col-md-6 col-lg-3 ${aboutusStyle.weProvide}`}
                  key={i}
                >
                  <div>
                    <Image src={aboutusItem.image} alt="aboutUsItem" />
                    <h5>{aboutusItem.heading}</h5>
                    <p>{aboutusItem.sentense}</p>
                  </div>
                </div>
              ))}
            </div>
    
            <div
              className={`row my-5 d-flex align-items-center ${aboutusStyle.aboutUsWomenCon}`}
            >
              <div
                className={`col-12 col-md-4  d-flex justify-content-center ${aboutusStyle.aboutUsWomenConImg}`}
              >
                <Image src={aboutUsWomen} alt="aboutUswomen" />
              </div>
              <div className="col-12 col-md-8">
                <BulbText
                  BulbText="About Us"
                  bulbTitle="Join Us"
                  GreyText="You'll find something to spark your curiosity and enhance"
                />
                <div className="aboutusStyle.para">
                  <div className="container">
                    <div>
                      <h3 className="fs-3 fs-6 text-start mb-4 text-primary font-weight-bold">
                        At SocialPrachar, We Empower Careers
                      </h3>
                      <p style={{ fontSize: "12px" }}>
                        At SocialPrachar, we are committed to transforming careers
                        and empowering individuals with cutting-edge technical
                        skills. Founded by an IIM alumnus, SocialPrachar has been a
                        pioneer in the EdTech industry for over a decade, delivering
                        excellence in education and career development. With
                        state-of-the-art training programs in Full Stack
                        Development, Data Science, AI, Cloud Computing, and Digital
                        Marketing, we aim to prepare our students for in-demand tech
                        roles.
                      </p>
                      <p style={{ fontSize: "12px" }}>
                        We have successfully trained over 16,000 students through
                        both online and classroom programs in Hyderabad and
                        Bangalore. Recognized with 9 prestigious EdTech awards, our
                        focus on quality education and student success has set us
                        apart in the industry. Our efforts have resulted in a
                        remarkable 95% placement ratio, with graduates securing job
                        packages ranging from ₹3 to ₹12 LPA.
                      </p>
                    </div>
                    <h3>Why Choose SocialPrachar?</h3>
                    <ul className="list-group list-group-flush">
                      {checkCircleArray.map((item, i) => (
                        <li key={i}>
                          <FontAwesomeIcon
                            className="fs-6"
                            icon={faCheckCircle}
                            style={{ color: "green" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center mt-5">
                      <h4 className="text-success font-weight-bold">
                        <FontAwesomeIcon
                          className="fs-4"
                          icon={faHourglass}
                          style={{ color: "black" }}
                        />{" "}
                        Join us at SocialPrachar and take the first step toward a
                        brighter, future-ready career!
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Industry Recognitions */}
            <div className="text-center my-5">
              <BulbText BulbText="Certified By" bulbTitle="Industry Recognitions" />
    
              <div className={`row row-gap-4 ${aboutusStyle.AboutusPics}`}>
                <div className="col col-lg-4">
                  <Image src={aboutusPic1} alt="pic1" />
                </div>
    
                <div className="col col-lg-4">
                  <Image src={aboutusPic2} alt="pic2" />
                </div>
    
                <div className="col col-lg-4">
                  <Image src={aboutusPic3} alt="pic3" />
                </div>
              </div>
            </div>
          </div>
          {/* <FooterBtn /> */}
        </div>
      );
};

export default AboutUs;