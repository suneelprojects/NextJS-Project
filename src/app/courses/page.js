import React from 'react';
import MainCoursePage from './mainCoursePage/MainCoursePage';
import Head from 'next/head';

const ogImage = "https://socialprachar.com/og/Courses-img.png";

export const generateMetadata = () => ({
  title: 'Top Training Courses in Hyderabad | Data Science, AI, Fullstack, AWS & Digital Marketing',
  description: 'Explore industry-leading courses in Data Science, Artificial Intelligence, Fullstack, AWS DevOps & Digital Marketing at Socialprachar — Hyderabad\'s favorite training institute.',
  openGraph: {
    title: 'Top Training Courses in Hyderabad | Data Science, AI, Fullstack, AWS & Digital Marketing',
    description: 'Explore industry-leading courses in Data Science, Artificial Intelligence, Fullstack, AWS DevOps & Digital Marketing at Socialprachar — Hyderabad\'s favorite training institute.',
    url: 'https://socialprachar.com/courses',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Courses OG Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Training Courses in Hyderabad | Data Science, AI, Fullstack, AWS & Digital Marketing',
    description: 'Explore industry-leading courses in Data Science, Artificial Intelligence, Fullstack, AWS DevOps & Digital Marketing at Socialprachar — Hyderabad\'s favorite training institute.',
    images: [ogImage],
    url: 'https://socialprachar.com/courses',
  },
});

const Page = () => {
  return (
    <>
      <Head>
        <title>Top Training Courses in Hyderabad | Data Science, AI, Fullstack, AWS & Digital Marketing</title>
        <meta name="description" content="Explore industry-leading courses in Data Science, Artificial Intelligence, Fullstack, AWS DevOps & Digital Marketing at Socialprachar — Hyderabad's favorite training institute." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/courses" />
        <meta property="og:title" content="Top Training Courses in Hyderabad | Data Science, AI, Fullstack, AWS & Digital Marketing" />
        <meta property="og:description" content="Explore industry-leading courses in Data Science, Artificial Intelligence, Fullstack, AWS DevOps & Digital Marketing at Socialprachar — Hyderabad's favorite training institute." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/courses" />
        <meta property="twitter:title" content="Top Training Courses in Hyderabad | Data Science, AI, Fullstack, AWS & Digital Marketing" />
        <meta property="twitter:description" content="Explore industry-leading courses in Data Science, Artificial Intelligence, Fullstack, AWS DevOps & Digital Marketing at Socialprachar — Hyderabad's favorite training institute." />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <div>
        <MainCoursePage />
      </div>
    </>
  );
};

export default Page;
