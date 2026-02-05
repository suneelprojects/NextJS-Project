"use client";

// MINIMAL CLIENT COMPONENT - Only handles pagination & filter state
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import BlogList from "./BlogList.server";

// Lazy load Sidebar - Heavy component with animations
const Asidebar = dynamic(() => import("./Asidebar"), {
  ssr: false,
  loading: () => (
    <div className="xl:w-1/3">
      <div className="bg-white p-8 rounded-2xl shadow-lg animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="space-y-3">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  ),
});

export default function BlogClient({
  blogs,
  featuredPost,
  categories
}) {
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

  // Filter blogs based on selected category
  const filteredPosts = selectedCategory
    ? blogs.filter((post) => {
      if (Array.isArray(post.category)) {
        return post.category.includes(selectedCategory);
      }
      return post.category === selectedCategory;
    })
    : blogs;

  const filteredTotalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleNext = () =>
    currentPage < filteredTotalPages &&
    setCurrentPage((p) => p + 1);
  const handlePrevious = () =>
    currentPage > 1 && setCurrentPage((p) => p - 1);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  return (
    <>
      {/* BLOG LIST + SIDEBAR */}
      <div className="flex flex-col xl:flex-row gap-12">
        {/* BLOG LIST - Server rendered */}
        <BlogList
          blogs={filteredPosts}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          selectedCategory={selectedCategory}
        />

        {/* SIDEBAR - Lazy loaded */}
        <div className="xl:w-1/3">
          <Asidebar
            featuredPost={featuredPost}
            categories={categories}
            onCategoryClick={handleCategoryClick}
            onClearFilter={handleClearFilter}
            selectedCategory={selectedCategory}
            totalCount={blogs.length + (featuredPost ? 1 : 0)}
          />
        </div>
      </div>

      {/* PAGINATION - Client only */}
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
                className={`w-12 h-12 text-sm m-2 font-medium rounded transition-all duration-300 ${currentPage === pageNumber
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
    </>
  );
}

