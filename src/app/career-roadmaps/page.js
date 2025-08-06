import React from 'react';
import CareerRoadmap from './CareerRoadmap';
import Head from 'next/head';

export const metadata = {
  title: "Career Roadmaps for Tech Roles | Data Science, Cloud, Fullstack & More socialprachar",
  description: "Explore expert-designed career roadmaps to become a pro in Data Science, Fullstack, AI & Cloud. Socialprachar Hyderabad helps you chart the path to tech success.",
  openGraph: {
    title: "Career Roadmaps for Tech Roles | Data Science, Cloud, Fullstack & More",
    description: "Explore expert-designed career roadmaps to become a pro in Data Science, Fullstack, AI & Cloud. Socialprachar Hyderabad helps you chart the path to tech success.",
    url: "https://socialprachar.com/career-roadmaps",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "Career Roadmaps for Tech Roles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Roadmaps for Tech Roles | Data Science, Cloud, Fullstack & More",
    description: "Explore expert-designed career roadmaps to become a pro in Data Science, Fullstack, AI & Cloud. Socialprachar Hyderabad helps you chart the path to tech success.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};

const page = () => {
    return (
        <>
        <Head>
          <title>Career Roadmaps for Tech Roles | Data Science, Cloud, Fullstack & More socialprachar</title>
          <meta name="description" content="Explore expert-designed career roadmaps to become a pro in Data Science, Fullstack, AI & Cloud. Socialprachar Hyderabad helps you chart the path to tech success." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://socialprachar.com/career-roadmaps" />
          <meta property="og:title" content="Career Roadmaps for Tech Roles | Data Science, Cloud, Fullstack & More" />
          <meta property="og:description" content="Explore expert-designed career roadmaps to become a pro in Data Science, Fullstack, AI & Cloud. Socialprachar Hyderabad helps you chart the path to tech success." />
          <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Socialprachar" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://socialprachar.com/career-roadmaps" />
          <meta property="twitter:title" content="Career Roadmaps for Tech Roles | Data Science, Cloud, Fullstack & More" />
          <meta property="twitter:description" content="Explore expert-designed career roadmaps to become a pro in Data Science, Fullstack, AI & Cloud. Socialprachar Hyderabad helps you chart the path to tech success." />
          <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
        </Head>
        <div>
            <CareerRoadmap/>
        </div>
        </>
    );
};

export default page;