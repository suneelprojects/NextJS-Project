import React from 'react';
import { data } from '@/app/courses/mainCoursePage/cardsSection/CardData';
import Header from './courseDetailsPage/Header/Header';
import Testimonials from './courseDetailsPage/Testimonials/Testimonials';
import NextcohortStarts from './courseDetailsPage/NextcohortStarts/NextcohortStarts';
import WhatwillYouLearn from './courseDetailsPage/WhatwillYouLearn/WhatwillYouLearn';
import Unlockbonuses from './courseDetailsPage/Unlockbonuses/Unlockbonuses';
import Coursepath from './courseDetailsPage/Coursepath/Coursepath';
import CourseFaqs from './courseDetailsPage/courseFAQs/CourseFaqs';
import Masterclass from './courseDetailsPage/Masterclass/Masterclass';
import ConnectUs from '@/components/ConnectUs/ConnectUs';
import Banner from './courseDetailsPage/Banner/Banner';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = data.find(c => c.slug === slug);

  if (!course) {
    return {
      title: 'Course Not Found | SocialPrachar',
      description: 'This course does not exist.',
    };
  }

  const courseName = course.title || slug.replace(/-/g, ' ');

  const metaTitle = `Best ${courseName} Training Institute in Hyderabad | SocialPrachar`;
  const metaDescription = `Learn the top-rated ${courseName} course in Hyderabad with real-time projects and expert mentors at SocialPrachar.`;

  const ogImageMap = {
    'data-science': 'https://socialprachar.com/og/Courses-img.png',
    'full-stack-developer-course': 'https://socialprachar.com/og/Courses-img.png',
    'artificial-intelligence-course-training-in-hyderabad': 'https://socialprachar.com/og/Courses-img.png',
    'digital-marketing-course-training-institute-hyderabad': 'https://socialprachar.com/og/Courses-img.png',
    'generative-ai-course-training-institute-hyderabad': 'https://socialprachar.com/og/Courses-img.png',
    'data-analytics-course-training-hyderabad': 'https://socialprachar.com/og/Courses-img.png',
    'snowflake-training-in-hyderabad': 'https://socialprachar.com/og/Courses-img.png',
    'salesforce-course': 'https://socialprachar.com/og/Courses-img.png',
    'python-full-stack-development-course': 'https://socialprachar.com/og/Courses-img.png',
    'java-full-stack-development-course': 'https://socialprachar.com/og/Courses-img.png',
    'awsdevopscourse': 'https://socialprachar.com/og/Courses-img.png',
  };

  const ogImage = ogImageMap[slug] || 'https://socialprachar.com/og/Home-image.png';
  const url = `https://socialprachar.com/${slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${courseName} OG Image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
      url,
    },
  };
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const course = data.find(c => c.slug === slug);
  if (!course) return notFound();

  return (
    <div className='px-2'>
      <Header />
      <Testimonials />
      <WhatwillYouLearn />
      <Unlockbonuses />
      <Coursepath />
      <NextcohortStarts />
      <CourseFaqs />
      <Masterclass />
      <ConnectUs />
      <Banner />
    </div>
  );
};

export default Page;
