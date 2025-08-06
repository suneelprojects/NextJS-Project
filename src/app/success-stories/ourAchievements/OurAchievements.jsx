/** @format */
"use client";
import React, { useEffect, useState } from "react";
import btnStyle from "./OurAchievements.module.css";
import style from "@/app/success-stories/SuccessStoriesglobalStyling.module.css";
import { OurAchievementsData } from "./OurAchievementsData";
import Image from "next/image";
import Homeform from "@/components/Forms/Homeform";
import { db } from "../../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import AchievementCard from "./AchievementCard";

const OurAchievements = () => {
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const [showForm, setShowForm] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedSection, setSelectedSection] = useState("all");

  const [filter, setFilter] = useState("All");
  const handleFilterChange = (category) => {
    setFilter(category);
  };
  // const filteredAchievements = OurAchievementsData.filter((achievement) => {
  //   if (filter === "All") return true;
  //   return achievement.category === filter;
  // });

  // fetching Achievements
  const filteredAchievements = achievements.filter((achievement) => {
    const roleMatch =
      selectedRole === "all" || achievement.role === selectedRole;
    const sectionMatch =
      selectedSection === "all" ||
      achievement.applicableSection === selectedSection;
    return roleMatch && sectionMatch;
  });

  useEffect(() => {
    const fetchAchievements = async () => {
      const snapshot = await getDocs(
        collection(db, "successStories-studentAchievements")
      );
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAchievements(data);
    };
    fetchAchievements();
  }, []);

  const groupAchievementsByCategory = (achievements) => {
    return achievements.reduce((acc, achievement) => {
      const category = achievement.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(achievement);
      return acc;
    }, {});
  };

  const groupedAchievements = groupAchievementsByCategory(filteredAchievements);
  return (
    <>
      <div style={{ background: "#543cdf31" }}>
        {/* Filter Buttons */}
        <div className={`${style.filterButtons} d-flex justify-content-center`}>
          <div className={style.btn_group}>
            <button
              type="button"
              className={style.btn}
              onClick={() =>
                setSelectedSection("Full Stack Development - Java")
              }
            >
              Full Stack Java
            </button>
            <button
              type="button"
              className={style.btn}
              onClick={() =>
                setSelectedSection("Full Stack Development - Python")
              }
            >
              Full Stack Python
            </button>
            <button
              type="button"
              className={style.btn}
              onClick={() => setSelectedSection("Data Science & AI")}
            >
              Data Science & AI
            </button>
            <button
              type="button"
              className={style.btn}
              onClick={() => setSelectedSection("Digital Marketing")}
            >
              Digital Marketing
            </button>
            <button
              type="button"
              className={style.btn}
              onClick={() => setSelectedSection("all")}
            >
              Show All
            </button>
          </div>
        </div>

        {/* OurAchievements */}
        <div className="container py-4">
          <div
            className={`d-flex flex-column ${style.hide_scrollbar}`}
            style={{ maxHeight: "90vh", overflowY: "auto" }}
          >
            {Object.keys(groupedAchievements).map((category) => {
              const achievements = groupedAchievements[category];
              const mid = Math.ceil(achievements.length / 2);
              const firstRow = achievements.slice(0, mid);
              const secondRow = achievements.slice(mid);

              return (
                <div key={category} className="mb-5">
                  <div
                    className={`d-flex flex-nowrap mb-3 ${style.hide_scrollbar}`}
                    style={{
                      overflowX: "auto",
                      overflowY: "hidden",
                      gap: "20px",
                      paddingBottom: "10px",
                    }}
                  >
                    {firstRow.map((achievement, index) => (
                      <div key={index} style={{ minWidth: "320px" }}>
                        <AchievementCard achievement={achievement} />
                      </div>
                    ))}
                  </div>

                  <div
                    className={`d-flex flex-nowrap ${style.hide_scrollbar}`}
                    style={{
                      overflowX: "auto",
                      overflowY: "hidden",
                      gap: "20px",
                      paddingBottom: "10px",
                    }}
                  >
                    {secondRow.map((achievement, index) => (
                      <div key={index} style={{ minWidth: "320px" }}>
                        <AchievementCard achievement={achievement} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="mx-auto w-75" />
        <div className="text-center" style={{ fontSize: "18px" }}>
          <p className="fw-bold">
            SocialPrachar alumni are working in 1,100+ companies across India.
            Contact us to know more about placements!
          </p>
          <button className={btnStyle.btn} onClick={openForm}>
            Know More
          </button>

          {showForm && (
            <div
              className="text-start position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 9999,
                backdropFilter: "blur(4px)",
                fontSize: "14px",
              }}
            >
              <div
                className="px-3 py-2 bg-white shadow-lg rounded-4 position-relative animate__animated animate__fadeInDown"
                style={{
                  maxWidth: "340px",
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={closeForm}
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "10px",
                    border: "none",
                    background: "#f5f5ff",
                    fontSize: "24px",
                    cursor: "pointer",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    lineHeight: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                  aria-label="Close form"
                >
                  &times;
                </button>
                {/* Form Content */}
                <Homeform sheetName="successStories" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OurAchievements;
