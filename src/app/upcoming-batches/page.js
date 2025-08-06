import React from 'react'
import UpcomingBatches from './cards-comp/UpcomingBatches'
import Head from 'next/head'

const ogImage = "https://socialprachar.com/og/upcoming-img.webp";

export const generateMetadata = () => ({
  title: 'Upcoming Batches – Join Top Tech Courses at Socialprachar Hyderabad',
  description: 'Stay updated on our latest course batches in Data Science, AI, Fullstack, AWS & Digital Marketing. Enroll in upcoming sessions at Hyderabad\'s top-rated training institute.',
  openGraph: {
    title: 'Upcoming Batches – Join Top Tech Courses at Socialprachar Hyderabad',
    description: 'Stay updated on our latest course batches in Data Science, AI, Fullstack, AWS & Digital Marketing. Enroll in upcoming sessions at Hyderabad\'s top-rated training institute.',
    url: 'https://socialprachar.com/upcoming-batches',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Upcoming Batches OG Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming Batches – Join Top Tech Courses at Socialprachar Hyderabad',
    description: 'Stay updated on our latest course batches in Data Science, AI, Fullstack, AWS & Digital Marketing. Enroll in upcoming sessions at Hyderabad\'s top-rated training institute.',
    images: [ogImage],
    url: 'https://socialprachar.com/upcoming-batches',
  },
});

const Page = () => {
  return (
    <>
      <Head>
        <title>Upcoming Batches – Join Top Tech Courses at Socialprachar Hyderabad</title>
        <meta name="description" content="Stay updated on our latest course batches in Data Science, AI, Fullstack, AWS & Digital Marketing. Enroll in upcoming sessions at Hyderabad's top-rated training institute." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/upcoming-batches" />
        <meta property="og:title" content="Upcoming Batches – Join Top Tech Courses at Socialprachar Hyderabad" />
        <meta property="og:description" content="Stay updated on our latest course batches in Data Science, AI, Fullstack, AWS & Digital Marketing. Enroll in upcoming sessions at Hyderabad's top-rated training institute." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/upcoming-batches" />
        <meta property="twitter:title" content="Upcoming Batches – Join Top Tech Courses at Socialprachar Hyderabad" />
        <meta property="twitter:description" content="Stay updated on our latest course batches in Data Science, AI, Fullstack, AWS & Digital Marketing. Enroll in upcoming sessions at Hyderabad's top-rated training institute." />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <UpcomingBatches />
    </>
  );
}

export default Page
