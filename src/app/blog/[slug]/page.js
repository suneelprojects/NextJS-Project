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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog?.title || "SocialPrachar Blog",
    description: blog?.description || blog?.metaDescription || blog?.excerpt || "",
    datePublished: blog?.date || blog?.createdAt || "",
    dateModified: blog?.updatedAt || blog?.date || "",
    image: blog?.imageUrl || "https://socialprachar.com/og/Home-image.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://socialprachar.com/blog/${blog?.slug}`,
    },
    author: {
      "@type": "Person",
      name: blog?.author || "SocialPrachar Editorial Team",
      url: blog?.authorUrl || "https://socialprachar.com/aboutUs",
    },
    publisher: {
      "@type": "Organization",
      name: "SocialPrachar",
      logo: {
        "@type": "ImageObject",
        url: "https://socialprachar.com/SP_Logo.png",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://socialprachar.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://socialprachar.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog?.title || slug,
        item: `https://socialprachar.com/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
