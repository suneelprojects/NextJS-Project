// ✅ CodeClash page with updated OG image
import CodeClashClient from './CodeClashClient';
import Head from 'next/head';

const ogImage = "https://socialprachar.com/og/Home-image.png";

export const generateMetadata = () => ({
  title: 'Code Clash Hackathon | Test Your Skills in Coding Challenges – Socialprachar',
  description: 'Participate in Code Clash, a dynamic coding hackathon designed for aspiring developers and coders. Compete, solve real-world problems, and win exciting prizes.',
  openGraph: {
    title: 'Code Clash Hackathon | Test Your Skills in Coding Challenges – Socialprachar',
    description: 'Participate in Code Clash, a dynamic coding hackathon designed for aspiring developers and coders. Compete, solve real-world problems, and win exciting prizes.',
    url: 'https://socialprachar.com/code-clash',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Code Clash OG Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Clash Hackathon | Test Your Skills in Coding Challenges – Socialprachar',
    description: 'Participate in Code Clash, a dynamic coding hackathon designed for aspiring developers and coders. Compete, solve real-world problems, and win exciting prizes.',
    images: [ogImage],
    url: 'https://socialprachar.com/code-clash',
  },
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Code Clash Hackathon | Test Your Skills in Coding Challenges – Socialprachar</title>
        <meta name="description" content="Participate in Code Clash, a dynamic coding hackathon designed for aspiring developers and coders. Compete, solve real-world problems, and win exciting prizes." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/code-clash" />
        <meta property="og:title" content="Code Clash Hackathon | Test Your Skills in Coding Challenges – Socialprachar" />
        <meta property="og:description" content="Participate in Code Clash, a dynamic coding hackathon designed for aspiring developers and coders. Compete, solve real-world problems, and win exciting prizes." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Socialprachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/code-clash" />
        <meta property="twitter:title" content="Code Clash Hackathon | Test Your Skills in Coding Challenges – Socialprachar" />
        <meta property="twitter:description" content="Participate in Code Clash, a dynamic coding hackathon designed for aspiring developers and coders. Compete, solve real-world problems, and win exciting prizes." />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <CodeClashClient />
    </>
  );
}
