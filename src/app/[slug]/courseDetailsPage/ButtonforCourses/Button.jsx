/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Buttonstyle from "./Button.module.css";
import SignInForm from "@/components/Forms/coursesForm";

const Button = ({ label, courseID, actionType, className }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  /*
   * Portal should only render after the component
   * has mounted in the browser.
   *
   * This prevents document/body access during SSR.
   */
  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  /*
   * Open / close popup
   */
  const togglePopup = () => {
    setIsPopupVisible((previousState) => !previousState);
  };

  /*
   * Close popup explicitly.
   */
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={`${Buttonstyle.Enrollbutton}${className ? ` ${className}` : ''}`}>
      {/* CTA BUTTON */}
      <button
        type="button"
        className={Buttonstyle.shinebtn}
        onClick={togglePopup}
      >
        <span className={Buttonstyle.btntext}>
          {label}
        </span>
      </button>

      {/*
       * IMPORTANT:
       *
       * Previously SignInForm was rendered directly inside
       * .Enrollbutton.
       *
       * That meant the popup could become trapped inside the
       * Header's left/right stacking contexts.
       *
       * createPortal() renders the form directly under
       * document.body instead.
       */}
      {isMounted &&
        isPopupVisible &&
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