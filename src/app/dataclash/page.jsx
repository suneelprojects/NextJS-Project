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
        <link rel="canonical" href="https://socialprachar.com/dataclash" />
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

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "DataClash 2.0 – National Data Science Hackathon",
              "description": "Join SocialPrachar’s DataClash 2.0: a multi-day data science hackathon featuring online rounds and an offline finale. Win cash prizes and subscriptions worth ₹1,50,000 INR.",
              "startDate": "2025-XX-XXT09:00:00+05:30",
              "endDate": "2025-XX-XXT18:00:00+05:30",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "KPHB Office, Hyderabad",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Bhagya Nagar Colony, KPHB",
                  "addressLocality": "Hyderabad",
                  "addressRegion": "Telangana",
                  "postalCode": "500072",
                  "addressCountry": "IN"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "SocialPrachar",
                "url": "https://socialprachar.com"
              },
              "image": [
                "https://socialprachar.com/wp-content/uploads/2025/XX/dataclash-banner.jpg"
              ],
              "offers": {
                "@type": "Offer",
                "url": "https://socialprachar.com/dataclash",
                "price": "0",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              },
              "performer": {
                "@type": "Organization",
                "name": "Vajra AI"
              }
            })
          }}
        />
      </Head>
      <DataClashClient />
    </>
  );
}
