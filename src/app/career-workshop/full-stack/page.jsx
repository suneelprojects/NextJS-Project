
import React from 'react';
import CareerWorkshop from './components/Fullstack';
import Head from 'next/head';

export const metadata = {
  title: "Full Stack Developer Career Guidance | Roadmap to Success – Socialprachar Hyderabad",
  description: "Get expert career counselling in Full Stack Development. Learn the roadmap to become a successful full-stack developer from Hyderabad's leading training institute – Socialprachar.",
  openGraph: {
    title: "Full Stack Developer Career Guidance | Roadmap to Success – Socialprachar Hyderabad",
    description: "Get expert career counselling in Full Stack Development. Learn the roadmap to become a successful full-stack developer from Hyderabad's leading training institute – Socialprachar.",
    url: "https://socialprachar.com/career-workshop/full-stack",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "Full Stack Developer Career Guidance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer Career Guidance | Roadmap to Success – Socialprachar Hyderabad",
    description: "Get expert career counselling in Full Stack Development. Learn the roadmap to become a successful full-stack developer from Hyderabad's leading training institute – Socialprachar.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>Full Stack Developer Career Guidance | Roadmap to Success – Socialprachar Hyderabad</title>
        <meta name="description" content="Get expert career counselling in Full Stack Development. Learn the roadmap to become a successful full-stack developer from Hyderabad's leading training institute – Socialprachar." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/career-workshop/full-stack" />
        <meta property="og:title" content="Full Stack Developer Career Guidance | Roadmap to Success – Socialprachar Hyderabad" />
        <meta property="og:description" content="Get expert career counselling in Full Stack Development. Learn the roadmap to become a successful full-stack developer from Hyderabad's leading training institute – Socialprachar." />
        <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/career-workshop/full-stack" />
        <meta property="twitter:title" content="Full Stack Developer Career Guidance | Roadmap to Success – Socialprachar Hyderabad" />
        <meta property="twitter:description" content="Get expert career counselling in Full Stack Development. Learn the roadmap to become a successful full-stack developer from Hyderabad's leading training institute – Socialprachar." />
        <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
      </Head>
      <div>
        <CareerWorkshop />
      </div>
    </>
  );
};

export default page; 