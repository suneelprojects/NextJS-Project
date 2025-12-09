export const dynamic = "force-dynamic";
export const revalidate = 60;

import { getBlog } from "@/lib/getBlog";
import OpenCourseBlog from "../OpenCourseblog";

// --------------------------
// DYNAMIC META TAGS + JSON-LD
// --------------------------
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found - SocialPrachar",
      description: "This blog does not exist.",
    };
  }

  // JSON-LD Schema
  const schema = blog.schemaJsonLd ? JSON.stringify(blog.schemaJsonLd) : "";

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
      images: [{ url: blog.imageUrl }],
      type: "article",
    },

    // ⭐⭐⭐ Correct JSON-LD injection — Google-friendly
    scripts: [
      {
        type: "application/ld+json",
        children: schema,
      },
    ],
  };
}


// --------------------------
// PAGE CONTENT
// --------------------------
export default async function BlogPage({ params }) {
  // await params before using its properties
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) return <div>Blog Not Found</div>;

  return <OpenCourseBlog blog={blog} />;
}
