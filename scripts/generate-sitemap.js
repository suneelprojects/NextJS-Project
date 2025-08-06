const fs = require('fs');
const path = require('path');

// List of all course slugs
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

// List of all static URLs
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
  '/courseBlog',
  '/courseBlogDashboard',
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
  
];

const urls = [
  ...staticUrls,
  ...courseSlugs.map(slug => `/${slug}`)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>https://socialprachar.com${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${url === '/' ? '1.0' : url.startsWith('/data-science') || url.startsWith('/full-stack-developer-course') ? '0.9' : '0.7'}</priority>
    </url>`).join('')}
</urlset>`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log('Sitemap generated successfully with daily updates for all pages!'); 