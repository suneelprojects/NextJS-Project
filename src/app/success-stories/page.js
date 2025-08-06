import React from 'react';
import SuccessStoriesReader from './SuccessStories/SuccessStoriesReader';
import OurAchievements from './ourAchievements/OurAchievements';
import Linkedin from './linkedinReviews/linkedin';
import Google from './googleReviews/GoogleReviews';
import JustDialReviews from './justdialReviews/JustDialReviews';
import OurAluminiReviews from './ourAluminiReviews/OurAluminiReviews';
import Head from 'next/head';

const ogImage = "https://socialprachar.com/og/success-stories-img.png";

export const generateMetadata = () => ({
  title: 'Student Success Stories | Real Reviews & Placements at Socialprachar Hyderabad',
  description: 'Discover inspiring success stories of students who launched their careers through Socialprachar\'s top-rated courses in Data Science, AI, Fullstack, AWS & Digital Marketing.',
  openGraph: {
    title: 'Student Success Stories | Real Reviews & Placements at Socialprachar Hyderabad',
    description: 'Discover inspiring success stories of students who launched their careers through Socialprachar\'s top-rated courses in Data Science, AI, Fullstack, AWS & Digital Marketing.',
    url: 'https://socialprachar.com/success-stories',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Success Stories OG Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Success Stories | Real Reviews & Placements at Socialprachar Hyderabad',
    description: 'Discover inspiring success stories of students who launched their careers through Socialprachar\'s top-rated courses in Data Science, AI, Fullstack, AWS & Digital Marketing.',
    images: [ogImage],
    url: 'https://socialprachar.com/success-stories',
  },
});

const Page = () => {
  return (
    <>
      <Head>
        <title>Student Success Stories | Real Reviews & Placements at Socialprachar Hyderabad</title>
        <meta name="description" content="Discover inspiring success stories of students who launched their careers through Socialprachar's top-rated courses in Data Science, AI, Fullstack, AWS & Digital Marketing." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/success-stories" />
        <meta property="og:title" content="Student Success Stories | Real Reviews & Placements at Socialprachar Hyderabad" />
        <meta property="og:description" content="Discover inspiring success stories of students who launched their careers through Socialprachar's top-rated courses in Data Science, AI, Fullstack, AWS & Digital Marketing." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/success-stories" />
        <meta property="twitter:title" content="Student Success Stories | Real Reviews & Placements at Socialprachar Hyderabad" />
        <meta property="twitter:description" content="Discover inspiring success stories of students who launched their careers through Socialprachar's top-rated courses in Data Science, AI, Fullstack, AWS & Digital Marketing." />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <div>
        <SuccessStoriesReader />
        <OurAchievements />
        <Linkedin />
        <Google />
        <JustDialReviews />
        <OurAluminiReviews />
      </div>
    </>
  );
};

export default Page;
