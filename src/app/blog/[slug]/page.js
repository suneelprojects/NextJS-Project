export const revalidate = 3600;

import { getBlog } from "@/lib/getBlog";
import OpenCourseBlog from "../OpenCourseBlog";
import { sanitizeBlogHtml } from "@/utils/sanitizeHtmlServer";

// --------------------------
// METADATA ONLY
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
      type: "article",
      images: blog.imageUrl
        ? [
            {
              url: blog.imageUrl,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
  };
}

// --------------------------
// PAGE CONTENT
// --------------------------
export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div>Blog Not Found</div>;
  }

  blog.content = sanitizeBlogHtml(blog.content || "");

  return (
    <>
      {blog.schemaJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blog.schemaJsonLd),
          }}
        />
      )}

      <OpenCourseBlog blog={blog} />
    </>
  );
}
