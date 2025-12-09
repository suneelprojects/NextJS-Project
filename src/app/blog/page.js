import { getAllBlogs } from "@/lib/getBlogsServer";
import BlogClient from "./BlogClient";

export const dynamic = "force-dynamic"; // Always fetch fresh data
export const revalidate = 3600; // Revalidate once per hour

export async function generateMetadata() {  
  return {
  title: " Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar",
  description: "Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad's leading training institute.",
  openGraph: {
    title: " Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar",
    description: "Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad's leading training institute.",
    url: "https://socialprachar.com/blog",
    siteName: "Socialprachar",
    images: [
      {
        url: "https://socialprachar.com/og/Home-image.png",
        width: 1200,
        height: 630,
        alt: "Course Blogs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " Blogs | Tips, Trends & Insights on Top Tech Skills – Socialprachar",
    description: "Stay updated with blogs on Data Science, AI, Fullstack, and Digital Marketing. Insights, career tips, and learning resources from Hyderabad's leading training institute.",
    images: ["https://socialprachar.com/og/Home-image.png"],
  },
};
}
export default async function BlogPage() {
  const blogs = await getAllBlogs(); // Server-side fetch

  return (
    <div className="min-h-screen">
      <BlogClient blogs={blogs} />
    </div>
  );
}
