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
          <link rel="canonical" href="https://socialprachar.com/events" />
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
          <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "SocialPrachar Workshops, Webinars & Events",
            "description": "Join SocialPrachar’s live workshops, career events & webinars on tech topics like Data Science, Full Stack, AI and Cloud in Hyderabad and online.",
            "url": "https://socialprachar.com/events",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Event",
                  "name": "Career Workshop – Data Science",
                  "startDate": "2025-11-10T10:00:00+05:30",
                  "endDate": "2025-11-10T17:00:00+05:30",
                  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                  "url": "https://socialprachar.com/career-workshop/data-science",
                  "description": "Deep dive into data science career paths, skills & live Q&A with industry experts.",
                  "organizer": {
                    "@type": "Organization",
                    "name": "SocialPrachar",
                    "url": "https://socialprachar.com"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Event",
                  "name": "DataClash 2.0 – National Data Science Hackathon",
                  "startDate": "2025-12-05T09:00:00+05:30",
                  "endDate": "2025-12-06T18:00:00+05:30",
                  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
                  "url": "https://socialprachar.com/dataclash",
                  "description": "Compete in teams, solve real-world data science problems and win prizes worth ₹1,50,000.",
                  "organizer": {
                    "@type": "Organization",
                    "name": "SocialPrachar",
                    "url": "https://socialprachar.com"
                  }
                }
              }
              /* Add more events similarly */
            ]
          })}
          </script>
        </Head>
        <EventMainPage/>
        </>
    );
};

export default page;