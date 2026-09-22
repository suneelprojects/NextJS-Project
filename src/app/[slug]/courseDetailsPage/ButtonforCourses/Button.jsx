/** @format */
"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import Buttonstyle from "./Button.module.css";
import SignInForm from "@/components/Forms/coursesForm";

const Button = ({ label, courseID, actionType }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={Buttonstyle.Enrollbutton}>
      <button
        type="button"
        className={Buttonstyle.shinebtn}
        onClick={openPopup}
      >
        <span className={Buttonstyle.btntext}>{label}</span>
      </button>

      {isPopupVisible &&
        typeof document !== "undefined" &&
        createPortal(
          <SignInForm
            onClose={closePopup}
            courseID={courseID}
            actionType={actionType}
          />,
          document.body
        )}
    </div>
  );
};

export default Button;
