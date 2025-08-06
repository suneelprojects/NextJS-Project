
import React from 'react';
import CareerWorkshop from './components/Cloud';
import Head from 'next/head';

export const metadata = {
  title: "Cloud & AWS Career Counselling | Launch Your Cloud Tech Career",
  description: "Learn how to become a Cloud Computing or AWS expert with guidance from Hyderabad's favorite tech institute. Start your journey with expert-led counselling at Socialprachar.",
  openGraph: {
    title: "Cloud & AWS Career Counselling | Launch Your Cloud Tech Career",
    description: "Learn how to become a Cloud Computing or AWS expert with guidance from Hyderabad's favorite tech institute. Start your journey with expert-led counselling at Socialprachar.",
    url: "https://socialprachar.com/career-workshop/cloud-career",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "Cloud & AWS Career Counselling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud & AWS Career Counselling | Launch Your Cloud Tech Career",
    description: "Learn how to become a Cloud Computing or AWS expert with guidance from Hyderabad's favorite tech institute. Start your journey with expert-led counselling at Socialprachar.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};

const page = () => {
  return (
    <>
    <Head>
      <title>Cloud & AWS Career Counselling | Launch Your Cloud Tech Career</title>
      <meta name="description" content="Learn how to become a Cloud Computing or AWS expert with guidance from Hyderabad's favorite tech institute. Start your journey with expert-led counselling at Socialprachar." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://socialprachar.com/career-workshop/cloud-career" />
      <meta property="og:title" content="Cloud & AWS Career Counselling | Launch Your Cloud Tech Career" />
      <meta property="og:description" content="Learn how to become a Cloud Computing or AWS expert with guidance from Hyderabad's favorite tech institute. Start your journey with expert-led counselling at Socialprachar." />
      <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Socialprachar" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://socialprachar.com/career-workshop/cloud-career" />
      <meta property="twitter:title" content="Cloud & AWS Career Counselling | Launch Your Cloud Tech Career" />
      <meta property="twitter:description" content="Learn how to become a Cloud Computing or AWS expert with guidance from Hyderabad's favorite tech institute. Start your journey with expert-led counselling at Socialprachar." />
      <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
    </Head>
    <div>
      <CareerWorkshop />
    </div>
    </>
  );
};

export default page; 