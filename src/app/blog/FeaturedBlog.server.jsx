// Server Component - Featured Blog (LCP optimized)
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

export default function FeaturedBlog({ featuredPost }) {
  if (!featuredPost) return null;

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured Article</h2>

      <Link
        href={`/blog/${featuredPost.slug}`}
        className="block bg-white rounded-3xl shadow-xl overflow-hidden no-underline hover:no-underline text-inherit"
        style={{ textDecoration: "none" }}
      >
        <div className="lg:flex">
          <div className="lg:w-1/2 relative">
            <Image
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              width={800}
              height={450}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <span className="text-indigo-600 font-semibold mb-2">
              {featuredPost.category[0]}
            </span>

            <h2 className="text-2xl font-bolder mb-4">
              {featuredPost.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {featuredPost.excerpt || featuredPost.metaDescription}
            </p>

            <div className="flex items-center text-md font-semibold text-gray-500">
              <User className="h-4 w-4 mr-2" />
              {featuredPost.author || "Unknown Author"}
              <span className="mx-4">|</span>
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(featuredPost.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

