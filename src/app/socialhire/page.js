import SocialHireClient from './SocialHireClient';
import Head from 'next/head';

const ogImage = "https://socialprachar.com/og/Courses-img.png";

export const generateMetadata = () => ({
  title: 'SocialHire by Socialprachar | Placement-Ready Career Acceleration Platform',
  description: 'Get job-ready with SocialHire – a placement preparation platform by Socialprachar. Resume building, mock interviews, skill grooming & hiring assistance.',
  openGraph: {
    title: 'SocialHire by Socialprachar | Placement-Ready Career Acceleration Platform',
    description: 'Get job-ready with SocialHire – a placement preparation platform by Socialprachar. Resume building, mock interviews, skill grooming & hiring assistance.',
    url: 'https://socialprachar.com/socialhire',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'SocialHire OG Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SocialHire by Socialprachar | Placement-Ready Career Acceleration Platform',
    description: 'Get job-ready with SocialHire – a placement preparation platform by Socialprachar. Resume building, mock interviews, skill grooming & hiring assistance.',
    images: [ogImage],
    url: 'https://socialprachar.com/socialhire',
  },
});

export default function Page() {
  return (
    <>
      <Head>
        <title>SocialHire by Socialprachar | Placement-Ready Career Acceleration Platform</title>
        <meta name="description" content="Get job-ready with SocialHire – a placement preparation platform by Socialprachar. Resume building, mock interviews, skill grooming & hiring assistance." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/socialhire" />
        <meta property="og:title" content="SocialHire by Socialprachar | Placement-Ready Career Acceleration Platform" />
        <meta property="og:description" content="Get job-ready with SocialHire – a placement preparation platform by Socialprachar. Resume building, mock interviews, skill grooming & hiring assistance." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/socialhire" />
        <meta property="twitter:title" content="SocialHire by Socialprachar | Placement-Ready Career Acceleration Platform" />
        <meta property="twitter:description" content="Get job-ready with SocialHire – a placement preparation platform by Socialprachar. Resume building, mock interviews, skill grooming & hiring assistance." />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <SocialHireClient />
    </>
  );
}
