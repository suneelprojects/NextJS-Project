'use client';

import React from 'react';
import CareerQuiz from './CareerQuiz';
import Head from 'next/head';

const page = () => {
    return (
        <>
        <Head>
          <title>Career Quiz | Find Your Perfect Tech Career Path – Socialprachar</title>
          <meta name="description" content="Take our comprehensive career quiz to discover the best tech career path for you. Get personalized recommendations for Data Science, AI, Fullstack, AWS & Digital Marketing." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://socialprachar.com/career-quiz" />
          <meta property="og:title" content="Career Quiz | Find Your Perfect Tech Career Path – Socialprachar" />
          <meta property="og:description" content="Take our comprehensive career quiz to discover the best tech career path for you. Get personalized recommendations for Data Science, AI, Fullstack, AWS & Digital Marketing." />
          <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Socialprachar" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://socialprachar.com/career-quiz" />
          <meta property="twitter:title" content="Career Quiz | Find Your Perfect Tech Career Path – Socialprachar" />
          <meta property="twitter:description" content="Take our comprehensive career quiz to discover the best tech career path for you. Get personalized recommendations for Data Science, AI, Fullstack, AWS & Digital Marketing." />
          <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
        </Head>
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#ffffff',
            width: '100%',
            position: 'relative'
        }}>
            <CareerQuiz/>
        </div>
        </>
    );
}

export default page