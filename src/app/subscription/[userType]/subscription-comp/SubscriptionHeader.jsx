'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FaRobot, FaRupeeSign } from 'react-icons/fa';
import style from '@/app/career-counselling/ButtonDemoBooking/Button.module.css';
import RegisterForm from './FormButton';
import JD_course from '@/assets/Subscription/JD_course.png';
import { useDateContext } from '@/components/Forms/DateContext';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const SubscriptionHeader = () => {
    const { careerWorkshopDate } = useDateContext();

    const formatDateWithSuffix = (dateString) => {
        if (!dateString) return null;
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        let suffix = 'th';
        if (day === 1 || day === 21 || day === 31) {
            suffix = 'st';
        } else if (day === 2 || day === 22) {
            suffix = 'nd';
        } else if (day === 3 || day === 23) {
            suffix = 'rd';
        }

        return `${day}${suffix} ${month}, ${year}`;
    };

    const formattedWorkshopDate = careerWorkshopDate ? formatDateWithSuffix(careerWorkshopDate) : null;

    const params = useParams();
    const userType = params.userType;
    
    // console.log("User Type:", userType); 
    const displayText = userType === "students" ? "Students can" : "Working Professionals";

    return (
        <>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="text-center">
                        <h1 className="fw-bold col-md-10 mx-auto">
                            Upskill Yourself with <span style={{ color: '#ff5003' }}>Hyderabad’s #1 Subscription-Based</span> Learning Plan!
                        </h1>
                    </div>

                    <div className="col-md-6 p-5">
                        <h2 className='fw-bold' style={{ color: '#2c2c2c' }}>
                            {displayText} <span style={{ color: '#ff5003' }}>Save 95%</span> with SocialPrachar's Subscription Plan!
                        </h2>
                        <h4 className='py-3' style={{ color: '#443cdf' }}>
                            <FontAwesomeIcon icon={faTags} className='px-2' />One Subscription – Learn Multiple Courses!
                        </h4>
                        <p>
                            Get unlimited access to <span className='fw-bold'>Full Stack Development, Data Science, AI, Cloud, and more</span> with SocialPrachar's <span className='fw-bold'>all-in-one subscription.</span>
                            Gain hands-on experience, expert mentorship, and AI-powered career tools—all at an unbeatable price!
                        </p>
                        <p className='fw-bold'><FaRobot className="me-2 d-inline" size={30} /> Exclusive AI-driven tools & career support included!</p>
                        <p className='fw-bold'>
                          <FaRupeeSign className="me-2 d-inline" size={30} />
                          {userType === 'students' ? 'Starting From 25,000 INR' : 'Starting From 12,000 INR'}
                        </p>
                        <p>Invest in your future—One Subscription, <span className='fw-bold'>Unlimited Learning!</span></p>
                        <div className="text-center">
                            <RegisterForm label={"Book Free Demo Now"} className={`${style.button} my-3 fw-bold`} />
                            <p className="fw-bold" style={{ fontSize: '18px' }}>
                                Register by <span style={{ color: '#4941e1', fontSize: '22px' }}>{formattedWorkshopDate}</span> to unlock exclusive bonuses
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image src={JD_course} alt="jd_course" style={{ background: 'black', color: 'white', borderRadius: '15px' }} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default SubscriptionHeader;