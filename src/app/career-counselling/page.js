import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import WhatWillYouGet from './WhatWillYouGet/WhatWillYouGet';
import Bonuses from './Bonuses/Bonuses';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import Faq from './Faq/Faq';
import Head from 'next/head';

const page = () => {
    return (
        <>
        <Head>
          <title>Career Counselling | Expert Guidance for Tech Careers – Socialprachar Hyderabad</title>
          <meta name="description" content="Get personalized career counselling for Data Science, AI, Fullstack, AWS & Digital Marketing. Expert guidance to choose the right tech career path at Socialprachar." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://socialprachar.com/career-counselling" />
          <meta property="og:title" content="Career Counselling | Expert Guidance for Tech Careers – Socialprachar Hyderabad" />
          <meta property="og:description" content="Get personalized career counselling for Data Science, AI, Fullstack, AWS & Digital Marketing. Expert guidance to choose the right tech career path at Socialprachar." />
          <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Socialprachar" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://socialprachar.com/career-counselling" />
          <meta property="twitter:title" content="Career Counselling | Expert Guidance for Tech Careers – Socialprachar Hyderabad" />
          <meta property="twitter:description" content="Get personalized career counselling for Data Science, AI, Fullstack, AWS & Digital Marketing. Expert guidance to choose the right tech career path at Socialprachar." />
          <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
        </Head>
        <ProfileHeader/>
        <WhatWillYouGet/>
        <Bonuses/>
        <ProfileDetails/>
        <Faq/>
        </>
    );
};

export default page;