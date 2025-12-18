"use client";

import { useState } from "react";
import {
  ChevronRight,
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Asidebar from "./Asidebar";
import Image from "next/image";
import Link from "next/link";

export default function BlogClient({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const postsPerPage = 5;

  if (!blogs || blogs.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold">No blogs found</h2>
      </div>
    );
  }

  // ✅ Derived data (NO useEffect, NO extra state)
  const featuredPost = blogs[0];
  const blogPosts = blogs.slice(1);

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category).filter(Boolean))
  ).map((cat, i) => ({
    id: i,
    name: cat,
    category: cat,
    count: blogPosts.filter((p) => p.category === cat).length,
  }));

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const filteredTotalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);
  const handleNext = () =>
    currentPage < filteredTotalPages &&
    setCurrentPage((p) => p + 1);
  const handlePrevious = () =>
    currentPage > 1 && setCurrentPage((p) => p - 1);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 " style={{textDecoration: "none"}}>
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"style={{textDecoration: "none"}} >

        {/* ================= FEATURED POST ================= */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Featured Article</h2>

            <a
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-3xl shadow-xl overflow-hidden no-underline hover:no-underline text-inherit"style={{textDecoration: "none"}} 
            >

              <div className="lg:flex">
                <div className="lg:w-1/2 relative">
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    width={800}
                    height={450}
                    priority
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <span className="text-indigo-600 font-semibold mb-2">
                    {featuredPost.category}
                  </span>

                  <h2 className="text-2xl font-bolder mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt ||
                      featuredPost.metaDescription}
                  </p>

                  <div className="flex items-center text-md font-semibold text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    {featuredPost.author || "Unknown Author"}
                    <span className="mx-4">|</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(
                      featuredPost.createdAt
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </a>
          </div>
        )}

        {/* ================= BLOG LIST + SIDEBAR ================= */}
        <div className="flex flex-col xl:flex-row gap-12">
          {/* BLOG LIST */}
          <div className="xl:w-2/3 space-y-8">
            {filteredPosts
              .slice(
                (currentPage - 1) * postsPerPage,
                currentPage * postsPerPage
              )
              .map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition no-underline hover:no-underline text-inherit" style={{textDecoration: "none"}}
                >

                  <div className="md:flex">
                    <div className="md:w-80">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={320}
                        height={180}
                        loading="lazy"
                        className="w-full h-full object-fit"
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
                        {post.excerpt ||
                          post.metaDescription}
                      </p>

                      
                      

                      <div className="flex items-center justify-between text-sm text-gray-500">

                        <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(
                        post.createdAt
                        ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        })}
                      </div>
                    
                        {/* <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div> */}

                        <span className="flex items-center font-bold text-indigo-600">
                          Read more
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-3 mt-10">

              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex items-center justify-center m-1 w-12 h-12 border border-gray-300 text-sm font-medium rounded-5 text-gray-700 bg-white hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="flex space-x-2">
                {(() => {
                  const getPaginationRange = () => {
                    if (filteredTotalPages <= 3) return Array.from({ length: filteredTotalPages }, (_, i) => i + 1);
                    if (currentPage <= 2) return [1, 2, 3];
                    if (currentPage >= filteredTotalPages - 1) return [filteredTotalPages - 2, filteredTotalPages - 1, filteredTotalPages];
                    return [currentPage - 1, currentPage, currentPage + 1];
                  };
                  return getPaginationRange().map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-12 h-12 text-sm m-2 font-medium rounded transition-all duration-300 ${
                        currentPage === pageNumber
                          ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg transform scale-110 border-2 border-indigo-300"
                          : "text-gray-700 bg-white border border-gray-300 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ));
                })()}
                {currentPage < filteredTotalPages - 2 && filteredTotalPages > 3 && (
                  <span className="flex items-center px-2 text-gray-400">...</span>
                )}
              </div>
              <button
                onClick={handleNext}
                disabled={currentPage === filteredTotalPages}
                className="flex items-center justify-center w-12 h-12 border border-gray-300 text-sm font-medium rounded-5 text-gray-700 bg-white hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              
            </div>

            




          </div>

          {/* SIDEBAR */}
          <div className="xl:w-1/3">
            <Asidebar
              featuredPost={featuredPost}
              categories={categories}
              onCategoryClick={(cat) => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              onClearFilter={() => {
                setSelectedCategory(null);
                setCurrentPage(1);
              }}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </main>

       {/* 🔒 INTERNAL LINK STYLE FIX */}
   <style jsx>{`
  a,
  a * {
    text-decoration: none !important;
    color: inherit !important;
  }

  a:hover,
  a:hover * {
    text-decoration: none !important;
  }
`}</style>

    </div>
  );
}
