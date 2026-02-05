// Server Component - Blog Page
import { getAllBlogs } from "@/lib/getBlogsServer";
import BlogClient from "./BlogClient.client";
import FeaturedBlog from "./FeaturedBlog.server";

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
  // Server-side fetch - No Firebase JS in client bundle
  const blogs = await getAllBlogs();

  if (!blogs || blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">No blogs found</h2>
        </div>
      </div>
    );
  }

  // Extract featured post and categories on server
  const featuredPost = blogs[0];
  const blogPosts = blogs.slice(1);

  const categories = Array.from(
    new Set(
      blogPosts
        .flatMap((post) => {
          if (Array.isArray(post.category)) return post.category;
          return [post.category];
        })
        .filter(Boolean)
    )
  ).map((cat, i) => ({
    id: i,
    name: cat,
    category: cat,
    count: blogPosts.filter((p) => {
      if (Array.isArray(p.category)) return p.category.includes(cat);
      return p.category === cat;
    }).length,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* FEATURED POST - Server rendered (LCP optimized) */}
        <FeaturedBlog featuredPost={featuredPost} />

        {/* BLOG LIST + SIDEBAR - Client handles state */}
        <BlogClient
          blogs={blogPosts}
          featuredPost={featuredPost}
          categories={categories}
        />
      </main>
    </div>
  );
}
