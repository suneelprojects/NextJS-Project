import React from 'react';
import Hosting from './Hosting';
import Head from 'next/head';

const page = () => {
    return (
        <>
        <Head>
          <title>Web Hosting Services | Reliable Hosting Solutions – Socialprachar</title>
          <meta name="description" content="Get reliable web hosting services with 99.9% uptime guarantee. Professional hosting solutions for businesses and individuals at competitive prices." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://socialprachar.com/hosting" />
          <meta property="og:title" content="Web Hosting Services | Reliable Hosting Solutions – Socialprachar" />
          <meta property="og:description" content="Get reliable web hosting services with 99.9% uptime guarantee. Professional hosting solutions for businesses and individuals at competitive prices." />
          <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Socialprachar" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://socialprachar.com/hosting" />
          <meta property="twitter:title" content="Web Hosting Services | Reliable Hosting Solutions – Socialprachar" />
          <meta property="twitter:description" content="Get reliable web hosting services with 99.9% uptime guarantee. Professional hosting solutions for businesses and individuals at competitive prices." />
          <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
        </Head>
        <div>
            <Hosting />
        </div>
        </>
    );
};

export default page;