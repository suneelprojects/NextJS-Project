import React from 'react';
import Blog from './Blog';
import Head from 'next/head';

export const metadata = {
  title: "Student Projects | Real-world Tech Projects by Socialprachar Students",
  description: "Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar.",
  openGraph: {
    title: "Student Projects | Real-world Tech Projects by Socialprachar Students",
    description: "Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar.",
    url: "https://socialprachar.com/projects",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "Student Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Projects | Real-world Tech Projects by Socialprachar Students",
    description: "Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};

const page = () => {
    return (
        <>
        <Head>
          <title>Student Projects | Real-world Tech Projects by Socialprachar Students</title>
          <meta name="description" content="Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://socialprachar.com/projects" />
          <meta property="og:title" content="Student Projects | Real-world Tech Projects by Socialprachar Students" />
          <meta property="og:description" content="Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar." />
          <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Socialprachar" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://socialprachar.com/projects" />
          <meta property="twitter:title" content="Student Projects | Real-world Tech Projects by Socialprachar Students" />
          <meta property="twitter:description" content="Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar." />
          <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
        </Head>
        <Blog/>
        </>
    );
};

export default page;