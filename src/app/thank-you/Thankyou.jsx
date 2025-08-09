'use client';
import { useState } from 'react';
import React from 'react'
import Script from 'next/script';
import Buttonstyle from '@/app/subscription/[userType]/subscription-comp/Enrollbutton.module.css';


const Thankyou = () => {

    const styles = {
        container: {
            fontFamily: "'Arial', sans-serif",
            backgroundColor: '#f4f7fb',
            margin: 0,
            padding: 0
        },
        thankyouWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            backgroundColor: '#f4f7fb',
            textAlign: 'center'
        },
        contentBox: {
            backgroundColor: '#fff',
            padding: '40px 30px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px'
        },
        heading: {
            fontSize: '2.5rem',
            color: '#2d3a4b',
            marginBottom: '20px'
        },
        paragraph: {
            fontSize: '1.1rem',
            color: '#6c757d',
            margin: '10px 0'
        },
        highlight: {
            fontWeight: 'bold',
            color: '#007bff'
        },
        phoneNumber: {
            fontWeight: 'bold',
            color: '#28a745'
        },
        button: {
            marginTop: '20px',
            padding: '12px 30px',
            fontSize: '1.1rem',
            color: 'white',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        }
    };

    const [dropdown, setDropdown] = useState(false);
    
      const toggleDropdown = () => {
        setDropdown(!dropdown);
      };

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-930111032"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-930111032');
        `}
      </Script>
      
      <div style={styles.container}>
    <div style={styles.thankyouWrapper}>
        <div style={styles.contentBox}>
            <h1 style={styles.heading}>
                Thanks for Enquiring!
            </h1>
            <p style={styles.paragraph}>
                Thank you for enquiring at <span style={styles.highlight}>Socialprachar.com</span> for your course requirement.
            </p>
            <p style={styles.paragraph}>
                Our friendly team will connect with you shortly.
            </p>
            <p style={styles.paragraph}>
                In case of quick support, call <strong style={styles.phoneNumber}> 8019 479 419 .</strong>
            </p>
            <div className="dropdown">
                <button className={`${Buttonstyle.shinebtn} btn btn-secondary dropdown-toggle`} type="button"  onClick={() => toggleDropdown()} >
                    Download Curriculums
                </button>
                <ul className={`dropdown-menu ${dropdown ? "show" : ""}`}>
                    <li>
                        <a className="dropdown-item" href="/curriculum_pdfs/full_stack_curriculum.pdf" download="full_stack_curriculum.pdf">
                            Full Stack Curriculum
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/curriculum_pdfs/Data_Science_Curriculum.pdf" download="Data_Science_Curriculum.pdf">
                            Data Science Curriculum
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/curriculum_pdfs/DM_Advanced_Curriculum_Hyd.pdf" download="DM_Advanced_Curriculum_Hyd.pdf">
                            Digital Marketing Curriculum
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    </div>
</div>
    </>
  )
}

export default Thankyou;
