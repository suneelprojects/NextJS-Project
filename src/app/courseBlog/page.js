import React from 'react';
import Blog from './Blog';
import Head from 'next/head';

export const metadata = {
  title: "Course Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar",
  description: "Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad's leading training institute.",
  openGraph: {
    title: "Course Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar",
    description: "Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad's leading training institute.",
    url: "https://socialprachar.com/courseBlog",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "Course Blogs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Course Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar",
    description: "Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad's leading training institute.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};

const page = () => {
    return (
        <>
        <Head>
          <title>Course Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar</title>
          <meta name="description" content="Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad's leading training institute." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://socialprachar.com/courseBlog" />
          <meta property="og:title" content="Course Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar" />
          <meta property="og:description" content="Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad's leading training institute." />
          <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Socialprachar" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://socialprachar.com/courseBlog" />
          <meta property="twitter:title" content="Course Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar" />
          <meta property="twitter:description" content="Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad's leading training institute." />
          <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
        </Head>
        <div>
            <Blog/>
        </div>
        </>
    );
};

export default page;