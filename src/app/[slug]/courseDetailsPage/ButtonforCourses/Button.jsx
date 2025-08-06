"use client"
import React, { useState } from 'react';
import Buttonstyle from './Button.module.css';
import SignInForm from '@/components/Forms/coursesForm';

const Button = ({ label, courseID, actionType }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className={Buttonstyle.Enrollbutton}>
      <button className={Buttonstyle.shinebtn} onClick={togglePopup}>
        <span> {label}</span>
      </button>

      {isPopupVisible && (
        <SignInForm
          onClose={togglePopup}
          courseID={courseID}
          actionType={actionType}
        />
      )}
    </div>
  );
};

export default Button;