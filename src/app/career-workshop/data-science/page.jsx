
import React from 'react';
import CareerWorkshop from './components/Datascience';
import Head from 'next/head';

export const metadata = {
  title: "Data Science Career Counselling | Build Your Future with Socialprachar",
  description: "Plan your Data Science career with Hyderabad's most trusted institute. Get personalized guidance and a roadmap to master AI, ML, Python & more at Socialprachar.",
  openGraph: {
    title: "Data Science Career Counselling | Build Your Future with Socialprachar",
    description: "Plan your Data Science career with Hyderabad's most trusted institute. Get personalized guidance and a roadmap to master AI, ML, Python & more at Socialprachar.",
    url: "https://socialprachar.com/career-workshop/data-science",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "Data Science Career Counselling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Science Career Counselling | Build Your Future with Socialprachar",
    description: "Plan your Data Science career with Hyderabad's most trusted institute. Get personalized guidance and a roadmap to master AI, ML, Python & more at Socialprachar.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};

const page = () => {
  return (
    <>
    <Head>
      <title>Data Science Career Counselling | Build Your Future with Socialprachar</title>
      <meta name="description" content="Plan your Data Science career with Hyderabad's most trusted institute. Get personalized guidance and a roadmap to master AI, ML, Python & more at Socialprachar." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://socialprachar.com/career-workshop/data-science" />
      <meta property="og:title" content="Data Science Career Counselling | Build Your Future with Socialprachar" />
      <meta property="og:description" content="Plan your Data Science career with Hyderabad's most trusted institute. Get personalized guidance and a roadmap to master AI, ML, Python & more at Socialprachar." />
      <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Socialprachar" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://socialprachar.com/career-workshop/data-science" />
      <meta property="twitter:title" content="Data Science Career Counselling | Build Your Future with Socialprachar" />
      <meta property="twitter:description" content="Plan your Data Science career with Hyderabad's most trusted institute. Get personalized guidance and a roadmap to master AI, ML, Python & more at Socialprachar." />
      <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
    </Head>
    <div>
      <CareerWorkshop />
    </div>
    </>
  );
};

export default page; 