const fs = require('fs');
const path = require('path');

// ============================
// 1. Course Slugs
// ============================
const courseSlugs = [
  'data-science',
  'python-full-stack-development-course',
  'java-full-stack-development-course',
  'full-stack-developer-course',
  'awsdevopscourse',
  'artificial-intelligence-course-training-in-hyderabad',
  'generative-ai-course-training-in-hyderabad',
  'digital-marketing-course-training-institute-hyderabad',
  'data-analytics-course-training-hyderabad',
  'snowflake-training-in-hyderabad',
  'salesforce-course'
];

// ============================
// 2. Static URLs
// ============================
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
  '/blog',
  '/events',
  '/startups-of-socialprachar',
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
  '/data-science-course-in-hyderabad'
];

// ============================
// 3. blog URLs (You Provided)
// ============================

const BlogUrls = [
  '/blog/how-to-become-a-data-scientist-in-2025-complete-roadmap-for-beginners',
  '/blog/where-can-i-find-data-science-institutes-in-hyderabad-that-offer-hands-on-learning-and-industry-mentorship',
  '/blog/how-full-stack-developers-are-using-ai-to-build-apps-faster-than-ever',
  '/blog/how-ai-is-transforming-data-driven-decision-making-across-industries-ultimate-2025-26-guide',
  '/blog/agentic-ai-the-future-of-automation-every-student-must-understand-202526-mega-guide',
  '/blog/the-rise-of-full-stack-ai-developers-why-coding-alone-isnt-enough-in-202526',
  '/blog/react-node-ai-the-new-super-trio-of-full-stack-development-2025-ultimate-guide',
  '/blog/how-generative-ai-is-reinventing-education-design-coding-creativity-ultimate-guide-for-students',
  '/blog/how-react-js-is-revolutionizing-full-stack-development',
  '/blog/why-hyderabad-is-becoming-indias-next-tech-education-hub',
  '/blog/ai-and-data-science-synergy-how-they-work-together',
  '/blog/best-online-platforms-to-practice-data-science-web-development-skills',
  '/blog/the-future-of-tech-jobs-why-hybrid-skills-will-rule-2025-26',
  '/blog/how-to-build-a-tech-career-portfolio-that-gets-you-hired',
  '/blog/from-html-to-ai-how-full-stack-developers-are-adapting-to-the-future',
  '/blog/top-10-common-questions-students-ask-before-joining-a-data-science-course-in-hyderabad',
  '/blog/python-vs-r-vs-sql-which-language-should-you-learn-first-for-data-science',
  '/blog/fullstack-ai-how-cloud-ai-data-science-are-shaping-the-future-of-tech-careers',
  '/blog/top-5-emerging-ai-trends-every-data-science-student-should-know-in-2025',
  '/blog/freshers-roadmap-from-graduate-to-data-scientist-with-internship-experience',
  '/blog/ai-powered-data-science-how-modern-companies-use-it-for-real-world-problems',
  '/blog/how-an-internship-in-data-science-ai-boosts-your-job-readiness',
  '/blog/frontend-vs-backend-vs-fullstack-which-path-is-right-for-you',
  '/blog/socialprachar-vs-top-hyderabad-full-stack-institutes-which-is-the-best-choice-for-your-career-in-2025',
  '/blog/generative-engine-optimization-geo',
  '/blog/fullstack-web-development-course-with-cloud-ai-tools-integration-complete-guide-2025',
  '/blog/seo-vs-ppc-vs-social-media-choosing-the-right-digital-marketing-course',
  '/blog/data-science-vs-artificial-intelligence-whats-the-difference',
  '/blog/digital-marketing-career-path-from-fresher-to-expert',
  '/blog/must-have-skills-for-data-science-with-ai-professionals'
];

// ============================
// 4. Combine All URLs
// ============================
const urls = [
  ...staticUrls,
  ...courseSlugs.map(slug => `/${slug}`),
  ...BlogUrls
];

// ============================
// 5. Generate XML
// ============================
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      url => `
    <url>
      <loc>https://socialprachar.com${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${
        url === '/'
          ? '1.0'
          : url.startsWith('/blog')
          ? '0.9'
          : url.includes('data') || url.includes('full-stack')
          ? '0.8'
          : '0.7'
      }</priority>
    </url>`
    )
    .join('')}
</urlset>`;

// ============================
// 6. Output sitemap.xml
// ============================
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log('✅ Sitemap generated successfully including all blog URLs with daily crawling!');
