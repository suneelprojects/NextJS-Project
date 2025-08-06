import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

const destinations = [
  {
    href: '/data-science',
    title: 'Data Science',
    description: 'Comprehensive data science course',
    label: 'Explore course',
    icon: (
      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: '/full-stack-developer-course',
    title: 'Full Stack',
    description: 'Complete web development course',
    label: 'Explore course',
    icon: (
      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    href: '/digital-marketing-course-training-institute-hyderabad',
    title: 'Digital Marketing',
    description: 'Professional digital marketing training',
    label: 'Explore course',
    icon: (
      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
];

export default function NotFound() {
  return (
    <div className={styles.notFoundFullPage}>
      {/* <div className={styles.visualAccent} /> */}
      <div className={styles.notFoundContentWide}>
        <div className={styles.notFoundTitleBig}>404</div>
        <div className={styles.notFoundHeading}>Page Not Found</div>
        <div className={styles.notFoundTextWide}>
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.<br />
          Let&apos;s help you find your way!
        </div>
        <div className={styles.destinationsGridWide}>
          {destinations.map(({ href, title, description, label, icon }, idx) => (
            <Link href={href} key={idx} className={styles.destinationCardWide}>
              <div className={styles.destinationIcon}>{icon}</div>
              <div className={styles.destinationTitle}>{title}</div>
              <div className={styles.destinationDesc}>{description}</div>
              <div className={styles.destinationLabel}>{label} &rarr;</div>
            </Link>
          ))}
        </div>
        <Link href="/" className={styles.backHomeBtnWide}>
          &#8592; Return to Homepage
        </Link>
      </div>
    </div>
  );
} 