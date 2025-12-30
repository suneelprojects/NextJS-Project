// ✅ Home page - SERVER COMPONENT ONLY
import HomepageClient from "./HomepageClient";

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
    siteName: 'SocialPrachar',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Leading  Training Institute in Hyderabad | SocialPrachar',
    description: 'Join the top-rated leading Training Institute  in Hyderabad with real-time projects and expert mentors at SocialPrachar.',
    images: [ogImage],
  },
  alternates: {
    canonical: 'https://socialprachar.com/',
  },
});

export default function Home() {
  return <HomepageClient />;
}
