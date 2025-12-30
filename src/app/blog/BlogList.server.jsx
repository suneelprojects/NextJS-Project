// Lightweight component - Renders blog list (no state, minimal JS)
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

export default function BlogList({ blogs, currentPage, postsPerPage }) {
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  if (paginatedBlogs.length === 0) {
    return (
      <div className="xl:w-2/3 text-center py-12">
        <p className="text-gray-500">No blogs found for this page.</p>
      </div>
    );
  }

  return (
    <div className="xl:w-2/3 space-y-8">
      {paginatedBlogs.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow no-underline hover:no-underline text-inherit"
        >
          <div className="md:flex">
            <div className="md:w-80 relative">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={320}
                height={180}
                sizes="(max-width: 768px) 100vw, 320px"
                loading="lazy"
                className="w-full h-full object-cover"
                quality={75}
              />
            </div>

            <div className="p-6 flex-1">
              <span className="text-indigo-600 text-xs font-semibold">
                {post.category}
              </span>

              <h3 className="text-xl font-bold mt-2 mb-3 text-indigo-600">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt || post.metaDescription}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>

                <span className="flex items-center font-bold text-indigo-600">
                  Read more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

