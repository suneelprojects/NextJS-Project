/** @format */

import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

export default function AchievementCard({ achievement }) {
  if (!achievement) {
    return null; // or a fallback UI
  }
  return (
    <>
      <div
        className="card text-center p-3 shadow-sm"
        style={{ minWidth: "330px", height: "250px", borderRadius: "12px" }}
      >
        <div className="d-flex text-start align-items-center">
          <div>
            <Image
              src={achievement.profileImage || "/placeholder.jpg"}
              alt={achievement.name || "Achievement"}
              className="rounded-circle mb-2"
              width={80}
              height={80}
              style={{
                border: "4px solid #553cdf",
                marginRight: "16px",
              }}
            />
          </div>
          <div>
            <h5 className="card-title">{achievement.name}</h5>
            <p className="text-muted mb-2" style={{ fontSize: "14px" }}>
              {achievement.role}
            </p>
            <span
              className="badge py-1 px-3"
              style={{
                color: "#553cdf",
                borderRadius: "12px",
                fontSize: "12px",
                background: "#543cdf31",
              }}
            >
              {achievement.hike}
            </span>
          </div>
        </div>

        <div className="d-flex justify-content-around align-items-center mt-3">
          <div className="text-center">
            <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
              Pre Social Prachar
            </p>
            <div
              className="position-relative d-flex align-items-center justify-content-center"
              style={{ width: "80px", height: "40px" }}
            >
              <Image
                src={achievement.preCompany || "/placeholder.jpg"}
                alt="Previous Company Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <i className="bi bi-arrow-right fs-4 text-muted"></i>
          </div>
          <div className="text-center">
            <p className="text-muted mb-1" style={{ fontSize: "14px" }}>
              Post Social Prachar
            </p>
            <div
              className="position-relative d-flex align-items-center justify-content-center"
              style={{ width: "80px", height: "40px" }}
            >
              <Image
                src={achievement.postCompany || "/placeholder.jpg"}
                alt="Current Company Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <hr className="my-1" />
        <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
          Started from <br />
          <strong className="text-dark">{achievement.startCompanyType}</strong>
        </p>
      </div>
    </>
  );
};

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    profileImage: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    hike: PropTypes.string,
    preCompany: PropTypes.string,
    postCompany: PropTypes.string,
    startCompanyType: PropTypes.string,
  }),
};
