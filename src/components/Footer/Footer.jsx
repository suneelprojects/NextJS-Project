/** @format */
"use client";

import { useRouter } from "next/navigation";
import footerStyle from "@/components/Footer/footer.module.css";
import footerImg from "@/assets/footer/footer2_cta_image.png";
import googlePlay from "@/assets/footer/google_play.svg";
import AppleStore from "@/assets/footer/app_store.svg";
import spLogo from "@/assets/SP_Logo.png";
import wavesPic from "@/assets/homepage/reUsed_Pics/waves.png";
import BookSvg from "@/assets/homepage/reUsed_Pics/book.png";
import whiteBulb from "@/assets/homepage/reUsed_Pics/whiteBulb.png";
import ParallaxEffect from "@/components/reusedComponents/ParallaxEffect";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  const images = [
    { src: wavesPic, className: "objectOne", dataValue: "5", alt: "Waves Image" },
    { src: BookSvg, className: "objectTwo", dataValue: "5", alt: "Book Image" },
  ];

  const iconsArray = [
    { icon: <i className="bi bi-facebook"></i>, iconLink: "https://www.facebook.com/socialprachar/" },
    { icon: <i className="bi bi-instagram"></i>, iconLink: "https://www.instagram.com/socialprachar_institute/" },
    { icon: <i className="bi bi-linkedin"></i>, iconLink: "https://www.linkedin.com/company/6635034/admin/dashboard/" },
    { icon: <i className="bi bi-youtube"></i>, iconLink: "https://youtube.com/@socialprachar?si=jPmucrBrLin2Ppu6" },
    { icon: <i className="bi bi-twitter-x"></i>, iconLink: "https://x.com/i/flow/login?redirect_after_login=%2Fsocial_prachar" },
  ];

  const OfficeDetails = [
    <b>New Updates:</b>,
    <div onClick={() => handleNavigate("/best-fullstack-institutes-hyderabad")}>
      Best Full Stack Institute Hyderabad
    </div>,
    <div onClick={() => handleNavigate("/best-data-analytics-hyderabad")}>
      Best Data Analytics Institute Hyderabad
    </div>,
    <div onClick={() => handleNavigate("/Why-Hyderabad-is-the-Best-Place-to-Learn-Data-Science-in-2025")}>
      Why Hyderabad is the Best Place to Learn Data Science in 2025
    </div>,
    <div onClick={() => handleNavigate("/how-long-does-it-take-to-become-fullstackdeveloper")}>
      How Long Does It Take to Become a Full Stack Developer
    </div>,
    <div onClick={() => handleNavigate("/why-small-business-need-digital-marketing")}>
      Why Small Businesses Need Digital Marketing
    </div>,
    <div onClick={() => handleNavigate("/data_science-artificial_intelligence")}>
      Difference Between Data Science & Artificial Intelligence
    </div>,
    <div onClick={() => handleNavigate("/digital_marketing-career_path")}>
      Digital Marketing Career Path
    </div>,
    <button
      style={{
        borderRadius: "40px",
        backgroundColor: "#1C45E8",
        color: "white",
        padding: "3px 10px",
        cursor: "pointer",
        border: "none",
      }}
      onClick={() => handleNavigate("/courseBlog")}
    >
      Explore More Blogs
    </button>,
  ];

  const TrainingCenter = [
    <b>Head Office:</b>,
    "#301, 3rd Floor,",
    "Sathyabhama Commercial Complex,",
    "Bhagya Nagar Colony,",
    "KPHB, Hyderabad - 500085.",
    "Contact: +91-8019 479 419",
  ];

  const QuickLinks = [
    { name: "Full Stack Web Development", path: "/full-stack-developer-course" },
    { name: "AWS + DevOps", path: "/awsdevopscourse" },
    { name: "Data Science + AI", path: "/data-science" },
    { name: "Digital Marketing", path: "/digital-marketing-course-training-institute-hyderabad/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Artificial Intelligence Course in Hyderabad", path: "/artificial-intelligence-course-in-hyderabad" },
    { name: "Data Analytics Course in Hyderabad", path: "/data-analytics-course-in-hyderabad" },
    { name: "Data Science Course in Hyderabad", path: "/data-science-course-in-hyderabad" },
  ];

  const NavToAppleStore = () =>
    window.open("https://apps.apple.com/us/app/classplus/id1324522260", "_blank");

  const NavToPlayStore = () =>
    window.open("https://play.google.com/store/apps/details?id=co.diy7.vjaau&hl=en_IN", "_blank");

  const navigateToSocial = (iconLink) => window.open(iconLink, "_blank");

  const handleNavigate = (path) => router.push(path);

  return (
    <>
      <div className="container-fluid footerHover">
        {/* Floating elements */}
        <ParallaxEffect images={images} />

        {/* Footer Top Section */}
        <div>
          <div className={`row row-cols-sm-12 row-gap-5 py-3 ${footerStyle.footerCertificate}`}>
            <div className={`col ${footerStyle.certificateText}`}>
              <div className="d-block">
                <span className={`d-flex ms-1 ${footerStyle.whiteBulb}`}>
                  <Image src={whiteBulb} alt="white bulb" priority />
                  <h4>Learn On The Go</h4>
                </span>
                <p>
                  Build your Skills For a Better Tomorrow
                  <br /> Learn Till You Get Placed
                </p>
                <div className={`${footerStyle.StoreBtns}`}>
                  <Image
                    src={AppleStore}
                    alt="apple store"
                    className={footerStyle.AppleStore}
                    onClick={NavToAppleStore}
                  />
                  <Image
                    src={googlePlay}
                    alt="google play store"
                    onClick={NavToPlayStore}
                  />
                </div>
              </div>
            </div>

            <div className={`col ${footerStyle.certificateImg}`} id={`${footerStyle.certificateImg}`}>
              <Image src={footerImg} alt="footer img" priority />
            </div>
          </div>

          {/* Footer Main Content */}
          <div className={`row ${footerStyle.fotterList}`}>
            {/* Column 1 - About + Map + NAP */}
            <div className="col-12 col-md-3">
              <div className={footerStyle.spLogo}>
                <Image src={spLogo} alt="SP Logo" priority />
              </div>
              <p>
                SocialPrachar, founded by an IIM alumnus, is a leading EdTech company
                with 10+ years of expertise. We’ve trained 16,000+ students and
                achieved a 95% placement success rate. Offering cutting-edge programs
                in Full Stack, Data Science, AI, and Cloud.
              </p>
              {TrainingCenter.map((detail, i) => (
                <div className={footerStyle.Explore} key={i}>
                  {detail}
                </div>
              ))}


              

              {/* Social Icons */}
              <div className="d-flex gap-4 mt-3">
                {iconsArray.map((iconItem, i) => (
                  <div
                    className={footerStyle.mediaIcon}
                    key={i}
                    onClick={() => navigateToSocial(iconItem.iconLink)}
                  >
                    {iconItem.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Office Details */}
            <div className="col-12 col-md-3">
              {OfficeDetails.map((detail, i) => (
                <div className={footerStyle.useFullLink} key={i}>
                  {detail}
                </div>
              ))}
            </div>

            {/* Column 3 - Training Center */}
            <div className="col-12 col-md-3">
             
              {/* NAP + Google Map */}
              <div className="mt-3">
                <h5 className="fw-bold mb-2">Address:</h5>
                <p className="mb-1"><strong>Social Prachar</strong></p>
                <p className="mb-1">
                  Satyabama Complex, 301, KPHB Main Rd,<br />
                  Opp. Sai Baba Temple, Bhagya Nagar Colony,<br />
                  Hyderabad, Telangana 500072
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:08019479419">080194 79419</a>
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=17.491839,78.3910161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm mb-3"
                  style={{ borderRadius: "20px", backgroundColor: "#1C45E8" }}
                >
                  Get Directions
                </a>

                {/* Embedded Google Map */}
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.453265774153!2d78.3910161!3d17.491839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f20663c46d%3A0x846796db82f76735!2sSocial%20Prachar!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Column 4 - Quick Links */}
            <div className="col-12 col-md-3">
              <b>Job Guarantee Programs</b>
              <div>
                {QuickLinks.map((link, i) => (
                  <div
                    className={footerStyle.Explore}
                    key={i}
                    onClick={() => handleNavigate(link.path)}
                  >
                    {link.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={footerStyle.copyRight}>
        <p>Copyright © 2025 All Rights Reserved by Social Prachar</p>
      </div>
    </>
  );
};

export default Footer;
