/** @format */
"use client"
import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import { useDateContext } from "@/components/Forms/DateContext";
import Form from '@/components/Forms/Careerworkshopform';


function formatDateWithSuffix(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-IN", { month: "long" });
  const year = date.getFullYear();

  const getOrdinalSuffix = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}

const Button = () => {
  const [showForm, setShowForm] = useState(false);
  const { careerWorkshopDate } = useDateContext();
  const formattedWorkshopDate = formatDateWithSuffix(careerWorkshopDate);

  return (
    <>
      <div>
        <div className="text-center my-3">
          <button
            onClick={() => setShowForm(true)}
            className={`${style.button} btn fw-bold text-uppercase px-4 py-2`}
          >
            Book Your Demo Now!
            <br />
            <span className="text-decoration-line-through">₹999</span> FREE
          </button>
        </div>
        <div className="text-center">
          <p className="fw-bold fs-4 fs-6" style={{ fontSize: "18px" }}>
            Register by{" "}
            <span input="date" style={{ color: "#4941e1", fontSize: "22px" }}>
              {formattedWorkshopDate}
            </span>{" "}
            to unlock exclusive bonuses worth ₹5,393 – offer ends today!
          </p>
        </div>
      </div>

      {showForm && <Form onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Button;
