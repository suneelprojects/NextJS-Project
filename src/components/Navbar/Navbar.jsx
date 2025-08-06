
'use client';

import Link from "next/link";

import React, { useEffect, useState } from "react";
import navBarStyle from "@/components/Navbar/navbar.module.css"

import Marquee from 'react-fast-marquee';
import { faGraduationCap, faUsers, faHandshake, faMedal } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import spLogo from "@/assets/SP_Logo.png";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";


const NavBar = () => {


  const dropDownValues = [
    { label: "Data Science + AI", path: "/data-science" },
    { label: "Full Stack Program", path: "/full-stack-developer-course" },
    { label: "Digital Marketing", path: "/digital-marketing-course-training-institute-hyderabad" }
  ];

  const pathname=usePathname();
  const [selectedValue, setSelectedValue] = useState("");
  const router=useRouter();


  const handleCategoryDropDown = (event) => {
    const selectedIndex = event.target.selectedIndex;
    if (selectedIndex > 0) {
      const selectedOption = dropDownValues[selectedIndex - 1]; // Adjust for default option
      router.push(selectedOption.path, { state: { category: selectedOption.label } });
      setSelectedValue(""); // Reset dropdown after navigation
    }
  };

  const [expanded, setExpand] = useState(false);
  const Showtoggle = () => {
    setExpand(!expanded);
  };
  const closeToggle = () => {
    setExpand(false);
  };

  
  const isCareerWorkshopPage = pathname === "/Career-Success-workshop";

  // for drop Down
  const [dropdowns, setDropdowns] = useState({
    dropdown1: false,
    dropdown2: false,
    careerDropdown: false, // Add state for career workshop dropdown
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown], // Toggle only the clicked dropdown
    }));
  };

  const closeDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: false, // Close only the specified dropdown
    }));
  };

  const marqueeItems = [
    { text: "Learn Till Get Placed", icon: <FontAwesomeIcon icon={faGraduationCap} className="me-3" style={{ color: 'white' }} /> },
    { text: "Micro Batches - Just 15 students!", icon: <FontAwesomeIcon icon={faUsers} className="me-3" style={{ color: 'white' }} /> },
    { text: "Get Guaranteed Internships & Full-Time Jobs", icon: <FontAwesomeIcon icon={faHandshake} className="me-3" style={{ color: 'white' }} /> },
    { text: "16,000+ Success stories since 2014", icon: <FontAwesomeIcon icon={faMedal} className="me-3" style={{ color: 'white' }} /> },
  ];

  const navbarRouters=[
    {hrefLink:"/",routerName:"Home"},
    {hrefLink:"/courses",routerName:"Courses"},
    {hrefLink:"/success-stories",routerName:"Success Stories"},
    {hrefLink:"/upcoming-batches",routerName:"Upcoming Batches"}
  ]

  const secondDDrouters = [
    { hrefLink: "/aboutUs", routerName: "About us" },
    { hrefLink: "/courseBlog", routerName: "CourseBlog" },
    { hrefLink: "/events", routerName: "Events" },
    { hrefLink: "/dataclash", routerName: "DataClash" },
    { hrefLink: "/codeclash", routerName: "CodeClash" },
    { hrefLink: "/scholarship-test", routerName: "Scholarship Test" },
    { hrefLink: "/socialhire", routerName: "SocialHire" },
    { hrefLink: "/projects", routerName: "Students-Projects" },
    { hrefLink: "/career-roadmaps", routerName: "Career Roadmaps" },
    { hrefLink: "/career-quiz", routerName: "Career Quiz" },
    { hrefLink: "https://finversity.in", routerName: "Finversity" }
  ];
   
         
const isExternal = (hrefLink) => hrefLink.startsWith("http");

  return (
    <div className={`${navBarStyle.navBarSticky}`}>
      {/* second nav bar starts */}
      <div className="py-1" style={{ background: '#553cdf' }}>
        <Marquee speed={80} gradient={false} className="fs-5 fw-semibold">
          {marqueeItems.map((item, index) => (
            <span key={index} className="mx-5 d-flex align-items-center">
              <span style={{ fontSize: '30px' }}>{item.icon} </span><span style={{ color: 'white' }}>{item.text}</span>
            </span>
          ))}
        </Marquee>
      </div>


      <nav className={`navbar navbar-expand-lg ${navBarStyle.secondNav}`}>
        <div
          className={`${navBarStyle.containerfluidForNav} container-fluid`}
        >
          {/* brand name and category code start */}
          <div className="d-flex">
            <Link className="navbar-brand"  href="/">
              <Image src={spLogo} alt="SocialPrachar Logo" className={`${navBarStyle.spLogo}`}  priority />
            </Link>
            {!isCareerWorkshopPage && (
              <div className="d-flex align-items-center">
                <select
                  className={`form-select ${navBarStyle.selectDropDown}`}
                  value={selectedValue}
                  onChange={handleCategoryDropDown}
                >
                  <option>Courses</option>
                  {dropDownValues.map((item, index) => (
                    <option key={index} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

          </div>

          {/* brand name and category code start */}

          {/* togglet code starts  */}
          <button
            className={`navbar-toggler ${navBarStyle.navbarTogglerBar}`}
            type="button"
            onClick={Showtoggle}
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          {/* togglet code ends  */}


          {/* navigation code starts */}

          <div className={`${navBarStyle.navBarList}`}>
            <div
              className={`collapse navbar-collapse offcanvas offcanvas-end ${navBarStyle.offCanvasContaniner}  ${!!expanded && "show"}`}
            >
              <div
                className={`offcanvas-header  ${navBarStyle.offCanvasContaninerHeader}`}
              >
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  style={{ position: "absolute", left: 0 }}
                  onClick={Showtoggle}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <ul className="navbar-nav me-auto mb-lg-0 ">
                {
                  navbarRouters.map((item,i)=>(
                    item.hrefLink ? (
                      <li className="nav-item " key={i} >
                        <Link
                          href={item.hrefLink}
                          className={`nav-link ${navBarStyle.NavLinkForHover}`}
                          onClick={closeToggle}
                        >{item.routerName}
                        </Link>
                      </li>
                    ) : null
                  ))
                }
                
                {/* Career Workshop Dropdown */}
                <li
                  className="nav-item"
                  onMouseLeave={() => closeDropdown('careerDropdown')}
                >
                  <button
                    className={`nav-link navbar-toggle dropdown-toggle ${navBarStyle.NavLinkForHover}`}
                    onClick={() => toggleDropdown('careerDropdown')}
                  >
                    Career Workshop
                  </button>
                  <div
                    className={`dropdown-menu ${
                      dropdowns.careerDropdown ? 'show' : ''
                    }`}
                  >
                    <Link
                      href="/career-workshop/full-stack"
                      className="dropdown-item"
                      onClick={() => {
                        closeDropdown('careerDropdown');
                        closeToggle();
                      }}
                    >
                      Full-Stack Career
                    </Link>
                    <Link
                      href="/career-workshop/data-science"
                      className="dropdown-item"
                      onClick={() => {
                        closeDropdown('careerDropdown');
                        closeToggle();
                      }}
                    >
                      Data Science Career
                    </Link>
                    <Link
                      href="/career-workshop/cloud-career"
                      className="dropdown-item"
                      onClick={() => {
                        closeDropdown('careerDropdown');
                        closeToggle();
                      }}
                    >
                      Cloud Career
                    </Link>
                  </div>
                </li>
                <li className="nav-item" onMouseLeave={() => closeDropdown("dropdown2")}>
                  <button
                    className={`nav-link navbar-toggle dropdown-toggle ${navBarStyle.NavLinkForHover}`}
                    onClick={() => toggleDropdown("dropdown2")}
                  >
                    Subscription
                  </button>
                  <div className={`dropdown-menu ${dropdowns.dropdown2 ? "show" : ""}`}>
                    <Link
                      href="/subscription/working-professionals" // ✅ Absolute Path
                      className="dropdown-item"
                      onClick={() => {
                        closeDropdown("dropdown2");
                        closeToggle();
                      }}
                    >
                      Working Professionals
                    </Link>
                    <Link
                      href="/subscription/students" // ✅ Lowercase "students"
                      className="dropdown-item"
                      onClick={() => {
                        closeDropdown("dropdown2");
                        closeToggle();
                      }}
                    >
                      Students
                    </Link>
                  </div>
                </li>



                <li className="nav-item" onMouseLeave={() => closeDropdown("dropdown1")}>
                  <button
                    className={`nav-link navbar-toggle dropdown-toggle ${navBarStyle.NavLinkForHover}`}
                    onClick={() => toggleDropdown("dropdown1")}
                  >
                    More
                  </button>
                  <div className={`dropdown-menu ${dropdowns.dropdown1 ? "show" : ""}`}>
                  
                  
                {secondDDrouters.map((item, i) => (
                  item.hrefLink && isExternal(item.hrefLink) ? (
                    <a 
                      key={i}
                      href={item.hrefLink} 
                      className="dropdown-item" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => {
                        closeDropdown("dropdown1");
                        closeToggle();
                      }}>
                      {item.routerName}
                    </a>
                  ) : item.hrefLink ? (
                    <Link 
                      key={i} 
                      href={item.hrefLink} 
                      className="dropdown-item" 
                      onClick={() => {
                        closeDropdown("dropdown1");
                        closeToggle();
                      }}>
                      {item.routerName}
                    </Link>
                  ) : null
                ))}
                
                    
                  </div>
                </li>

                <li>
                  <div>
                    <a
                      href="tel:+918019479419"
                      className={`${navBarStyle.buttonStyle} d-flex align-items-center justify-content-center`}
                      role="button"
                    >
                      <FontAwesomeIcon icon={faPhone} className="me-2" />
                      Call
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href="https://wa.me/918019479419?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${navBarStyle.buttonStyle} d-flex align-items-center justify-content-center`}
                    role="button"
                    style={{ color: 'green' }}
                  >
                    < FontAwesomeIcon icon={faWhatsapp} className="me-2" style={{ color: 'green' }} />
                    
                    WhatsApp
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* second nav bar ends */}

    </div>
  );
};

export default NavBar;
