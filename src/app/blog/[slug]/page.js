export const dynamic = "force-dynamic";
export const revalidate = 60;

import Script from "next/script";
import { getBlog } from "@/lib/getBlog";
import OpenCourseBlog from "../OpenCourseBlog";
import { sanitizeBlogHtml } from "@/utils/sanitizeHtmlServer";

// --------------------------
// META TAGS ONLY (NO SCHEMA)
// --------------------------
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found - SocialPrachar",
      description: "This blog does not exist.",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,

    alternates: {
      canonical: `https://socialprachar.com/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      url: `https://socialprachar.com/blog/${blog.slug}`,
      images: blog.imageUrl ? [{ url: blog.imageUrl }] : [],
      type: "article",
    },
  };
}

// --------------------------
// PAGE CONTENT + SCHEMA
// --------------------------
export default async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  if (!blog) return <div>Blog Not Found</div>;

  // sanitize HTML on server
  blog.content = sanitizeBlogHtml(blog.content || "");

  return (
    <>
      {/* ✅ REAL schema injection (this WORKS) */}
      {blog.schemaJsonLd && (
        <Script
          id="blog-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blog.schemaJsonLd),
          }}
        />
      )}

      <OpenCourseBlog blog={blog} />
    </>
  );
}
