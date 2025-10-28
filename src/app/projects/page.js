import React from 'react';
import Blog from './Blog';
import Head from 'next/head';

export const metadata = {
  title: "Student Projects | Real-world Tech Projects by Socialprachar Students",
  description: "Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar.",
  openGraph: {
    title: "Student Projects | Real-world Tech Projects by Socialprachar Students",
    description: "Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar.",
    url: "https://socialprachar.com/projects",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "Student Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Projects | Real-world Tech Projects by Socialprachar Students",
    description: "Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};

const page = () => {
    return (
        <>
        <Head>
          <link rel="canonical" href="https://socialprachar.com/projects" />
          <title>Student Projects | Real-world Tech Projects by Socialprachar Students</title>
          <meta name="description" content="Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar." />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://socialprachar.com/projects" />
          <meta property="og:title" content="Student Projects | Real-world Tech Projects by Socialprachar Students" />
          <meta property="og:description" content="Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar." />
          <meta property="og:image" content="https://socialprachar.com/og/Home-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Socialprachar" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://socialprachar.com/projects" />
          <meta property="twitter:title" content="Student Projects | Real-world Tech Projects by Socialprachar Students" />
          <meta property="twitter:description" content="Explore real-world projects built by our students in Data Science, AI, Fullstack Development, and Digital Marketing. See the practical skills and expertise gained at Socialprachar." />
          <meta property="twitter:image" content="https://socialprachar.com/og/Home-image.png" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "SocialPrachar Student & Alumni Projects",
                "description": "Showcase of real-world capstone projects, internship deliverables, and industry simulations completed by students at SocialPrachar.",
                "url": "https://socialprachar.com/projects",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "Project",
                      "name": "E-commerce Sales Forecasting using Python & ML",
                      "description": "A comprehensive data science project where students built a forecasting model for e-commerce sales, including data cleaning, feature engineering and deployment.",
                      "url": "https://socialprachar.com/projects/ecommerce-sales-forecasting",
                      "startDate": "2025-01-10",
                      "endDate": "2025-03-15",
                      "creator": {
                        "@type": "Person",
                        "name": "Alice Kumar",
                        "affiliation": {
                          "@type": "Organization",
                          "name": "SocialPrachar"
                        }
                      }
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "Project",
                      "name": "Full-Stack Web Application – Real Estate Listing Platform",
                      "description": "Built a MERN stack web application for managing real-estate listings, user authentication and admin dashboard as part of full-stack module.",
                      "url": "https://socialprachar.com/projects/real-estate-web-app",
                      "startDate": "2025-02-05",
                      "endDate": "2025-04-10",
                      "creator": {
                        "@type": "Person",
                        "name": "Rahul Verma",
                        "affiliation": {
                          "@type": "Organization",
                          "name": "SocialPrachar"
                        }
                      }
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "Project",
                      "name": "Digital Marketing Campaign – Lead Generation for EdTech",
                      "description": "Students developed and executed a Google Ads + Facebook Ads campaign with A/B testing and built KPI tracking for lead generation in EdTech sector.",
                      "url": "https://socialprachar.com/projects/edtech-lead-generation",
                      "startDate": "2025-03-01",
                      "endDate": "2025-04-30",
                      "creator": {
                        "@type": "Person",
                        "name": "Swathi Rao",
                        "affiliation": {
                          "@type": "Organization",
                          "name": "SocialPrachar"
                        }
                      }
                    }
                  }
                  /* Add more project entries as needed */
                ]
              })
            }}
          />
        </Head>
        <Blog/>
        </>
    );
};

export default page;