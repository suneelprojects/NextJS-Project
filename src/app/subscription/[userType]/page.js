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
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const userType = params.userType;

  const isWorkingProfessionals = userType === 'working-professionals';

  return (
    <>
      <Head>
        <link rel="canonical" href={isWorkingProfessionals ? "https://socialprachar.com/subscription/working-professionals" : "https://socialprachar.com/subscription"} />
        <title>{isWorkingProfessionals ? "Working Professionals Subscription Plans – SocialPrachar" : "Affordable Learning Plans for Students and Working Professionals | socialprachar"}</title>
        <meta name="description" content={isWorkingProfessionals ? "One subscription – multiple job-ready courses: Data Science, Full Stack, Digital Marketing, AWS & DevOps — designed for working professionals. Starting from ₹ 12,000 INR." : "Get student-friendly plans to learn top tech skills. Begin your career in Data Science, AI, Fullstack & more with expert guidance from Hyderabad's trusted institute – Socialprachar."} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={isWorkingProfessionals ? "https://socialprachar.com/subscription/working-professionals" : "https://socialprachar.com/subscription"} />
        <meta property="og:title" content={isWorkingProfessionals ? "Working Professionals Subscription Plans – SocialPrachar" : "Affordable Learning Plans for Students and Working Professionals | socialprachar"} />
        <meta property="og:description" content={isWorkingProfessionals ? "One subscription – multiple job-ready courses: Data Science, Full Stack, Digital Marketing, AWS & DevOps — designed for working professionals. Starting from ₹ 12,000 INR." : "Get student-friendly plans to learn top tech skills. Begin your career in Data Science, AI, Fullstack & more with expert guidance from Hyderabad's trusted institute – Socialprachar."} />
        <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={isWorkingProfessionals ? "https://socialprachar.com/subscription/working-professionals" : "https://socialprachar.com/subscription"} />
        <meta property="twitter:title" content={isWorkingProfessionals ? "Working Professionals Subscription Plans – SocialPrachar" : "Affordable Learning Plans for Students and Working Professionals | socialprachar"} />
        <meta property="twitter:description" content={isWorkingProfessionals ? "One subscription – multiple job-ready courses: Data Science, Full Stack, Digital Marketing, AWS & DevOps — designed for working professionals. Starting from ₹ 12,000 INR." : "Get student-friendly plans to learn top tech skills. Begin your career in Data Science, AI, Fullstack & more with expert guidance from Hyderabad's trusted institute – Socialprachar."} />
        <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />

        {isWorkingProfessionals && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "OfferCatalog",
                "name": "Working Professionals Subscription Plans – SocialPrachar",
                "description": "One subscription – multiple job-ready courses: Data Science, Full Stack, Digital Marketing, AWS & DevOps — designed for working professionals. Starting from ₹ 12,000 INR.",
                "url": "https://socialprachar.com/subscription/working-professionals",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Starter Pack",
                    "description": "₹ 12,000 – 100% Online Learning, 1-Year App Access, Access to Digital Marketing, Data Analytics, AWS, DevOps. Ideal for working professionals & freshers.",
                    "price": "12000",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://socialprachar.com/subscription/working-professionals"
                  },
                  {
                    "@type": "Offer",
                    "name": "Pro Learning Pack",
                    "description": "₹ 18,000 – Live Training (Online or Classroom) + Recorded Sessions + Expert Mentorship + Projects. Ideal for learners who prefer structured, instructor-led sessions.",
                    "price": "18000",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://socialprachar.com/subscription/working-professionals"
                  },
                  {
                    "@type": "Offer",
                    "name": "Career Growth Pack",
                    "description": "₹ 28,000 – Live Training + Internship + Hybrid Learning, Covers Data Analytics + Data Science, AWS + DevOps, Full Stack Java, MERN Stack. Ideal for career switchers.",
                    "price": "28000",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://socialprachar.com/subscription/working-professionals"
                  },
                  {
                    "@type": "Offer",
                    "name": "Ultimate Job-Ready Pack",
                    "description": "₹ 40,000 – Advanced Live Training (Online or Classroom) + Internship + Top Skills (Data Analytics + Data Science + AI, Full Stack Java + React, MERN Stack) + Resume Building, Mock Interviews & Career Support.",
                    "price": "40000",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://socialprachar.com/subscription/working-professionals"
                  }
                ],
                "provider": {
                  "@type": "Organization",
                  "name": "SocialPrachar",
                  "url": "https://socialprachar.com",
                  "logo": "https://socialprachar.com/wp-content/uploads/2023/05/socialprachar-logo.png"
                },
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Working Professionals",
                  "description": "Working professionals seeking to upskill or switch careers in tech — Data Science, Full Stack Development, Digital Marketing, Cloud & DevOps."
                },
                "keywords": [
                  "subscription plan working professionals",
                  "tech upskill subscription",
                  "unlimited courses subscription tech",
                  "working professional upskilling Hyderabad",
                  "SocialPrachar subscription plan"
                ]
              })
            }}
          />
        )}
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
