import { NextResponse } from 'next/server';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase if not already initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}
const db = getFirestore(app);

const courseSlugs = [
  'data-science',
  'python-full-stack-development-course',
  'java-full-stack-development-course',
  'full-stack-developer-course',
  'awsdevopscourse',
  'artificial-intelligence-course-training-institute-in-hyderabad',
  'generative-ai-course-training-in-hyderabad',
  'digital-marketing-course-training-institute-hyderabad',
  'data-analytics-course-training-hyderabad',
  'snowflake-training-in-hyderabad',
  'salesforce-course'
];

const staticUrls = [
  '/',
  '/privacy-policy',
  '/scholarship-test',
  '/career-roadmaps',
  '/courses',
  '/aboutUs',
  '/success-stories',
  '/upcoming-batches',
  '/thank-you',
  '/hosting',
  '/codeclash',
  '/Blog',
  '/courseBlog-dashboard',
  '/OurAchievementsDashboard',
  '/events',
  '/project-dashboard',
  '/projects',
  '/socialhire',
  '/dataclash',
  '/digital-marketing-course-hyderabad',
  '/subscription',
  '/subscription/student',
  '/subscription/working-professional',
  '/career-workshop/full-stack',
  '/career-workshop/data-science',
  '/career-workshop/cloud-career',
  '/career-counselling',
  '/career-quiz',
  '/datesform',
  '/digital_marketing-career_path',
  '/how-long-does-it-take-to-become-fullstackdeveloper',
  '/preplacement',
  '/video-lead',
  '/Why-Hyderabad-is-the-Best-Place-to-Learn-Data-Science-in-2025',
  '/why-small-business-need-digital-marketing',
  '/best-ai-institute-in-hyderabad',
  '/best-data-analytics-hyderabad',
  '/best-fullstack-institutes-hyderabad',
  '/data_science-artificial_intelligence',
  '/data-science-ai-course-training-institutes-in-hyderabad',
  '/artificial-intelligence-course-in-hyderabad',
  '/data-analytics-course-in-hyderabad',
  '/data-science-course-in-hyderabad',
];

export async function POST() {
  try {
    // Fetch blogs from Firestore
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const blogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Filter published blogs (not scheduled for future)
    const publishedBlogs = blogs.filter(blog => {
      if (!blog.publishAt) return true; // If no publishAt, consider published
      const publishTime = blog.publishAt.seconds ? blog.publishAt.seconds * 1000 : new Date(blog.publishAt).getTime();
      return publishTime <= Date.now();
    });

    // Generate blog URLs
    const blogUrls = publishedBlogs.map(blog => `/Blog/${blog.slug}`);

    // Combine all URLs
    const allUrls = [
      ...staticUrls,
      ...courseSlugs.map(slug => `/${slug}`),
      ...blogUrls
    ];

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
    <url>
      <loc>https://socialprachar.com${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${url === '/' ? '1.0' : url.startsWith('/data-science') || url.startsWith('/full-stack-developer-course') || url.startsWith('/Blog/') ? '0.9' : '0.7'}</priority>
    </url>`).join('')}
</urlset>`;

    // Write to file
    const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);

    return NextResponse.json({ success: true, message: 'Sitemap updated successfully', blogCount: publishedBlogs.length });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
