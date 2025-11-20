import React from 'react';
import Head from 'next/head';
import SOSGallery from './SOSGallery';

export const metadata = {
  title: "SOS - Startups of Socialprachar",
  description: "Showcaseing of all our student projects from Socialprachar's Startup of Students program.",
  openGraph: {
    title: "SOS - Startups of Socialprachar",
    description: "Showcaseing of all our student projects from Socialprachar's Startup of Students program.",
    url: "https://socialprachar.com/sos",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "SOS Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS - Startups of Socialprachar",
    description: "Showcaseing of all our student projects from Socialprachar's Startup of Students program.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};

const SOSPage = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://socialprachar.com/sos" />
        <title>SOS Gallery - Startups of Socialprachar</title>
        <meta name="description" content="Showcase of all student projects from Socialprachar's Startup of Students program." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/sos" />
        <meta property="og:title" content="SOS Gallery - Startups of Socialprachar" />
        <meta property="og:description" content="Showcase of all student projects from Socialprachar's Startup of Students program." />
        <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/sos" />
        <meta property="twitter:title" content="SOS Gallery - Startups of Socialprachar" />
        <meta property="twitter:description" content="Showcase of all student projects from Socialprachar's Startup of Students program." />
        <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
      </Head>
      <SOSGallery />
    </>
  );
};

export default SOSPage;
