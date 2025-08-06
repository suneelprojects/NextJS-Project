import DataClashClient from './DataClashClient';
import Head from 'next/head';

const ogImage = "https://socialprachar.com/og/Home-image.png";

export const generateMetadata = () => ({
  title: 'Data Clash Hackathon | Battle of Data Minds – Socialprachar',
  description: 'Join Data Clash – a thrilling data-centric hackathon focused on Data Science, AI & Analytics. Solve challenges, showcase skills, and boost your career profile.',
  openGraph: {
    title: 'Data Clash Hackathon | Battle of Data Minds – Socialprachar',
    description: 'Join Data Clash – a thrilling data-centric hackathon focused on Data Science, AI & Analytics. Solve challenges, showcase skills, and boost your career profile.',
    url: 'https://socialprachar.com/dataclash',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Data Clash OG Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Clash Hackathon | Battle of Data Minds – Socialprachar',
    description: 'Join Data Clash – a thrilling data-centric hackathon focused on Data Science, AI & Analytics. Solve challenges, showcase skills, and boost your career profile.',
    images: [ogImage],
    url: 'https://socialprachar.com/dataclash',
  },
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Data Clash Hackathon | Battle of Data Minds – Socialprachar</title>
        <meta name="description" content="Join Data Clash – a thrilling data-centric hackathon focused on Data Science, AI & Analytics. Solve challenges, showcase skills, and boost your career profile." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/dataclash" />
        <meta property="og:title" content="Data Clash Hackathon | Battle of Data Minds – Socialprachar" />
        <meta property="og:description" content="Join Data Clash – a thrilling data-centric hackathon focused on Data Science, AI & Analytics. Solve challenges, showcase skills, and boost your career profile." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/dataclash" />
        <meta property="twitter:title" content="Data Clash Hackathon | Battle of Data Minds – Socialprachar" />
        <meta property="twitter:description" content="Join Data Clash – a thrilling data-centric hackathon focused on Data Science, AI & Analytics. Solve challenges, showcase skills, and boost your career profile." />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <DataClashClient />
    </>
  );
}
