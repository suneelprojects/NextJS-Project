import React from 'react';
import AboutUs from './AboutUs';
import Head from 'next/head';

export const generateMetadata = () => ({
  title: 'About Socialprachar | Hyderabad&apos;s Most Loved Tech Training Institute',
  description: 'Learn more about Socialprachar – the go-to training institute in Hyderabad for cutting-edge tech courses in Data Science, AI, Fullstack, AWS, and Digital Marketing.',
  openGraph: {
    title: 'About Socialprachar | Hyderabad&apos;s Most Loved Tech Training Institute',
    description: 'Learn more about Socialprachar – the go-to training institute in Hyderabad for cutting-edge tech courses in Data Science, AI, Fullstack, AWS, and Digital Marketing.',
    url: 'https://socialprachar.com/aboutUs',
    type: 'website',
    images: [
      {
        url: 'https://socialprachar.com/og/About-img.png',
        width: 1200,
        height: 630,
        alt: 'About Socialprachar OG Image'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Socialprachar | Hyderabad&apos;s Most Loved Tech Training Institute',
    description: 'Learn more about Socialprachar – the go-to training institute in Hyderabad for cutting-edge tech courses in Data Science, AI, Fullstack, AWS, and Digital Marketing.',
    images: ['https://socialprachar.com/og/About-img.png'],
    url: 'https://socialprachar.com/aboutUs',
  },
});

const Page = () => {
  return (
    <>
      <Head>
        <title>About Socialprachar | Hyderabad&apos;s Most Loved Tech Training Institute</title>
        <meta name="description" content="Learn more about Socialprachar – the go-to training institute in Hyderabad for cutting-edge tech courses in Data Science, AI, Fullstack, AWS, and Digital Marketing." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/aboutUs" />
        <meta property="og:title" content="About Socialprachar | Hyderabad&apos;s Most Loved Tech Training Institute" />
        <meta property="og:description" content="Learn more about Socialprachar – the go-to training institute in Hyderabad for cutting-edge tech courses in Data Science, AI, Fullstack, AWS, and Digital Marketing." />
        <meta property="og:image" content="https://socialprachar.com/og/About-img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/aboutUs" />
        <meta property="twitter:title" content="About Socialprachar | Hyderabad&apos;s Most Loved Tech Training Institute" />
        <meta property="twitter:description" content="Learn more about Socialprachar – the go-to training institute in Hyderabad for cutting-edge tech courses in Data Science, AI, Fullstack, AWS, and Digital Marketing." />
        <meta property="twitter:image" content="https://socialprachar.com/og/About-img.png" />
      </Head>
      <div>
        <AboutUs />
      </div>
    </>
  );
};

export default Page;
