/** @format */

import React, { useEffect, useState } from "react";
import BulbText from "@/components/reusedComponents/bulbText";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import newsStyle from "@/components/Homepage/newsArticle/news.module.css";
import AchievementCard from "@/app/success-stories/ourAchievements/AchievementCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";

const PlacedStudents = () => {
  const [achievements, setAchievements] = useState([]);
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedSection, setSelectedSection] = useState("all");

  const handleRedirect = () => {
    window.location.href = "success-stories";
  };

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
      const category = achievement.category || "Other"; // Default to 'Other' if no category
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(achievement);
      return acc;
    }, {});
  };

  const groupedAchievements = groupAchievementsByCategory(filteredAchievements);

  return (
    <div className="containerFluidForPadding my-5">
      <div className={newsStyle.marqueeAchievements}>
        <div className={newsStyle.BulbTextStyle}>
          <BulbText
            BulbText="Our Placed Students"
            bulbTitle="16k+ Success Stories Since 2014"
            GreyText="Are You Ready to Be the Next?"
          />
        </div>
        <div className={`${newsStyle.marquee} marquee`}>
          <div className="py-4">
            <div
              className={`d-flex flex-column ${newsStyle.hide_scrollbar}`}
              style={{ maxHeight: "90vh", overflowY: "auto" }}
            >
              <Marquee direction="left" speed={120}>
                {Object.keys(groupedAchievements).map((category) => {
                  const achievements = groupedAchievements[category];
                  const mid = Math.ceil(achievements.length / 2);
                  const firstRow = achievements.slice(0, mid);
                  const secondRow = achievements.slice(mid);

                  return (
                    <div key={category} className="mb-3">
                      <div
                        className={`d-flex flex-nowrap mb-3 ${newsStyle.hide_scrollbar}`}
                        style={{
                          overflowX: "auto",
                          overflowY: "hidden", // Hide vertical scrollbar
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
                        className={`d-flex flex-nowrap ${newsStyle.hide_scrollbar}`}
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
              </Marquee>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {/* <button
            className="btn fw-bold"
            style={{ background: "#553cdf", color: "white" }}
            onClick={handleRedirect}
          >
            Know More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PlacedStudents;
