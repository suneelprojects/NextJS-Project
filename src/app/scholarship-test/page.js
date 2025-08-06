import React from 'react';
import ScholarShipTest from './ScholarshipTest';
import Head from 'next/head';

const ogImage = "https://socialprachar.com/og/scolorship-img.png";

export const generateMetadata = () => ({
  title: 'Scholarship Test | Earn Course Scholarships via MCQ Exam – Socialprachar',
  description: 'Apply now for the Socialprachar Scholarship Test. Attempt the MCQ exam to win scholarships for top tech courses like Data Science, Fullstack & Digital Marketing.',
  openGraph: {
    title: 'Scholarship Test | Earn Course Scholarships via MCQ Exam – Socialprachar',
    description: 'Apply now for the Socialprachar Scholarship Test. Attempt the MCQ exam to win scholarships for top tech courses like Data Science, Fullstack & Digital Marketing.',
    url: 'https://socialprachar.com/scholarship-test',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Scholarship Test OG Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarship Test | Earn Course Scholarships via MCQ Exam – Socialprachar',
    description: 'Apply now for the Socialprachar Scholarship Test. Attempt the MCQ exam to win scholarships for top tech courses like Data Science, Fullstack & Digital Marketing.',
    images: [ogImage],
    url: 'https://socialprachar.com/scholarship-test',
  },
});

const Page = () => {
  return (
    <>
      <Head>
        <title>Scholarship Test | Earn Course Scholarships via MCQ Exam – Socialprachar</title>
        <meta name="description" content="Apply now for the Socialprachar Scholarship Test. Attempt the MCQ exam to win scholarships for top tech courses like Data Science, Fullstack & Digital Marketing." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/scholarship-test" />
        <meta property="og:title" content="Scholarship Test | Earn Course Scholarships via MCQ Exam – Socialprachar" />
        <meta property="og:description" content="Apply now for the Socialprachar Scholarship Test. Attempt the MCQ exam to win scholarships for top tech courses like Data Science, Fullstack & Digital Marketing." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/scholarship-test" />
        <meta property="twitter:title" content="Scholarship Test | Earn Course Scholarships via MCQ Exam – Socialprachar" />
        <meta property="twitter:description" content="Apply now for the Socialprachar Scholarship Test. Attempt the MCQ exam to win scholarships for top tech courses like Data Science, Fullstack & Digital Marketing." />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <div>
        <ScholarShipTest />
      </div>
    </>
  );
};

export default Page;
