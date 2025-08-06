import React from 'react';
import EventMainPage from './EventMainPage';
import Head from 'next/head';

export const metadata = {
  title: "Workshops, Events & Webinars | Tech Learning at Socialprachar Hyderabad",
  description: "Join live workshops, career events & webinars on tech topics like Data Science, AI, Fullstack & AWS. Learn from Hyderabad's top trainers at Socialprachar.",
  openGraph: {
    title: "Workshops, Events & Webinars | Tech Learning at Socialprachar Hyderabad",
    description: "Join live workshops, career events & webinars on tech topics like Data Science, AI, Fullstack & AWS. Learn from Hyderabad's top trainers at Socialprachar.",
    url: "https://socialprachar.com/events",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "Workshops, Events & Webinars",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshops, Events & Webinars | Tech Learning at Socialprachar Hyderabad",
    description: "Join live workshops, career events & webinars on tech topics like Data Science, AI, Fullstack & AWS. Learn from Hyderabad's top trainers at Socialprachar.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};

const page = () => {
    return (
        <>
        <Head>
          <title>Workshops, Events & Webinars | Tech Learning at Socialprachar Hyderabad</title>
          <meta name="description" content="Join live workshops, career events & webinars on tech topics like Data Science, AI, Fullstack & AWS. Learn from Hyderabad's top trainers at Socialprachar." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://socialprachar.com/events" />
          <meta property="og:title" content="Workshops, Events & Webinars | Tech Learning at Socialprachar Hyderabad" />
          <meta property="og:description" content="Join live workshops, career events & webinars on tech topics like Data Science, AI, Fullstack & AWS. Learn from Hyderabad's top trainers at Socialprachar." />
          <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Socialprachar" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://socialprachar.com/events" />
          <meta property="twitter:title" content="Workshops, Events & Webinars | Tech Learning at Socialprachar Hyderabad" />
          <meta property="twitter:description" content="Join live workshops, career events & webinars on tech topics like Data Science, AI, Fullstack & AWS. Learn from Hyderabad's top trainers at Socialprachar." />
          <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
        </Head>
        <EventMainPage/>
        </>
    );
};

export default page;