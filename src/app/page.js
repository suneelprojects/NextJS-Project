// ✅ Home page with route-based OG image
import HomepageClient from "./HomepageClient";
import Head from 'next/head';

const ogImage = "https://socialprachar.com/og/Home-image.png";

export const generateMetadata = () => ({
  title: 'Best Leading  Training Institute in Hyderabad | SocialPrachar',
  description: 'Join the top-rated leading Training Institute  in Hyderabad with real-time projects and expert mentors at SocialPrachar.',
  openGraph: {
    title: 'Best Leading  Training Institute in Hyderabad | SocialPrachar',
    description: 'Join the top-rated leading Training Institute  in Hyderabad with real-time projects and expert mentors at SocialPrachar.',
    url: 'https://socialprachar.com/',
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Home OG Image' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Leading  Training Institute in Hyderabad | SocialPrachar',
    description: 'Join the top-rated leading Training Institute  in Hyderabad with real-time projects and expert mentors at SocialPrachar.',
    images: [ogImage],
    url: 'https://socialprachar.com/',
  },
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Leading  Training Institute in Hyderabad | SocialPrachar</title>
        <meta name="description" content="Join the top-rated leading Training Institute  in Hyderabad with real-time projects and expert mentors at SocialPrachar." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialprachar.com/" />
        <meta property="og:title" content="Best Leading  Training Institute in Hyderabad | SocialPrachar" />
        <meta property="og:description" content="Join the top-rated leading Training Institute  in Hyderabad with real-time projects and expert mentors at SocialPrachar." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SocialPrachar" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialprachar.com/" />
        <meta property="twitter:title" content="Best Leading  Training Institute in Hyderabad | SocialPrachar" />
        <meta property="twitter:description" content="Join the top-rated leading Training Institute  in Hyderabad with real-time projects and expert mentors at SocialPrachar." />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <HomepageClient />
    </>
  );
}
