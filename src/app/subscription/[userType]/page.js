'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Loading from '@/components/reusedComponents/Loading';
import SubscriptionHeader from './subscription-comp/SubscriptionHeader';
import AffordableEMI from './subscription-comp/AffordableEMI'
import StillConfused from './subscription-comp/StillConfused'
import LearningPlansAndPacks from './subscription-comp/LearningPlansAndPacks'
import Linkedin from '@/app/success-stories/linkedinReviews/linkedin'
import Google from '@/app/success-stories/googleReviews/GoogleReviews'
import SubscriptionFaqs from './subscription-comp/SubscriptionFaqs'

export default function Page() {
  return (
    <>
      <Head>
        <title>Affordable Learning Plans for Students and Working Professionals | socialprachar</title>
        <meta name="description" content="Get student-friendly plans to learn top tech skills. Begin your career in Data Science, AI, Fullstack & more with expert guidance from Hyderabad's trusted institute – Socialprachar." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/subscription" />
        <meta property="og:title" content="Affordable Learning Plans for Students and Working Professionals | socialprachar" />
        <meta property="og:description" content="Get student-friendly plans to learn top tech skills. Begin your career in Data Science, AI, Fullstack & more with expert guidance from Hyderabad's trusted institute – Socialprachar." />
        <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/subscription" />
        <meta property="twitter:title" content="Affordable Learning Plans for Students and Working Professionals | socialprachar" />
        <meta property="twitter:description" content="Get student-friendly plans to learn top tech skills. Begin your career in Data Science, AI, Fullstack & more with expert guidance from Hyderabad's trusted institute – Socialprachar." />
        <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
      </Head>
      <Suspense fallback={<Loading />}>
        <SubscriptionHeader />
        <AffordableEMI />
        <StillConfused />
        <LearningPlansAndPacks />
        <Linkedin />
        <Google />
        <SubscriptionFaqs />
      </Suspense>
    </>
  );
}
