"use client"; 

import React, { useState } from 'react';
import EnrollDetailsStyle from './enrollDetails.module.css';
import axios from 'axios';
import enrollStyle from '@/assets/homepage/enrollDetails/enrollDetails.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Image from 'next/image';
import Homeform from '@/components/Forms/Homeform';


const EnrollDetails = () => {

  return (
    <div className={`container mb-5`}>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
        <div className={`col ${EnrollDetailsStyle.infoAboutUser}`}>
          <Image src={enrollStyle} alt="Enroll Details" />
        </div>

        <div>
          <h2 className="text-center fw-bold" style={{ color: "#221859" }}>
            Let's...! Get Start
          </h2>
          <Homeform sheetName="mainHomepage"/>
        </div>
      </div>
    </div>
  );
};

export default EnrollDetails;
