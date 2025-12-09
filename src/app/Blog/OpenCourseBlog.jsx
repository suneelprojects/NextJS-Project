"use client"
import React, { useEffect, useState } from 'react';
import { CalendarDays, Clock, ArrowLeft, Share2, BookOpen, User } from 'lucide-react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';

const lowlight = createLowlight();

const OpenCourseBlog = ({ blog }) => {
  const [blogData] = useState(blog);
  const [readingProgress, setReadingProgress] = useState(0);
  const [editor, setEditor] = useState(null);

  // Set up Tiptap editor if content is Tiptap JSON
  useEffect(() => {
    if (blog?.content && typeof blog.content === 'object') {
      setEditor(
        useEditor({
          editable: false,
          extensions: [
            StarterKit,
            Image,
            Highlight,
            Link,
            Underline,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            CodeBlockLowlight.configure({ lowlight }),
          ],
          content: blog.content,
        })
      );
    }
  }, [blog]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogData.title,
          text: blogData.excerpt || 'Check out this article',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.log('Failed to copy:', error);
        alert('Failed to copy link to clipboard.');
      }
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  // Fallback if blog is not provided (shouldn't happen with SSR, but safety check)
  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={handleBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <button 
            onClick={handleShare}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share
          </button>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-full sm:max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-white rounded-2xl shadow-lg">
        {/* Article Header */} 
        <header className="mb-8 sm:mb-12 text-center px-2 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {blogData.title}
          </h1>
          {/* Meta Information */} 
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">
            <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
              <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-500" />
              {blogData.date}
            </div>
            <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-500" />
              {blogData.readTime}
            </div>
            {blogData.category && (
              <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-500" />
                {blogData.category}
              </div>
            )}
            {blogData.author && (
              <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-orange-500" />
                {blogData.author}
              </div>
            )}
          </div>
          {/* Excerpt */}
          {blogData.excerpt && (
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-full sm:max-w-3xl mx-auto px-2 sm:px-0">
              {blogData.excerpt}
            </p>
          )}
        </header>
        {/* Featured Image */}
        {blogData.imageUrl && (
          <div className="mb-8 sm:mb-12 px-2 sm:px-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={blogData.imageUrl}
                alt={blogData.title || "Article image"}
                className="w-full h-full sm:h-64 md:h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        )}
        {/* Article Content */}
        <div className="max-w-none px-2 sm:px-0">
          {blogData.content && typeof blogData.content === 'object' && editor ? (
            <EditorContent editor={editor} />
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: blogData.content }}
              className="
                article-content
                text-gray-700 leading-relaxed text-base sm:text-lg
                [&>h1]:text-2xl sm:[&>h1]:text-3xl md:[&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-4 sm:[&>h1]:mb-6 [&>h1]:mt-8 sm:[&>h1]:mt-12
                [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-3 sm:[&>h2]:mb-4 [&>h2]:mt-6 sm:[&>h2]:mt-10
                [&>h3]:text-lg sm:[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mb-2 sm:[&>h3]:mb-3 [&>h3]:mt-4 sm:[&>h3]:mt-8
                [&>h4]:text-base sm:[&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-gray-900 [&>h4]:mb-1 sm:[&>h4]:mb-2 [&>h4]:mt-3 sm:[&>h4]:mt-6
                [&>h5]:text-sm sm:[&>h5]:text-base [&>h5]:font-semibold [&>h5]:text-gray-900 [&>h5]:mb-1 sm:[&>h5]:mb-2 [&>h5]:mt-2 sm:[&>h5]:mt-4
                [&>h6]:text-xs sm:[&>h6]:text-sm [&>h6]:font-semibold [&>h6]:text-gray-900 [&>h6]:mb-1 sm:[&>h6]:mb-2 [&>h6]:mt-2 sm:[&>h6]:mt-4
                [&>p]:mb-4 sm:[&>p]:mb-6 [&>p]:leading-relaxed
                [&>a]:text-blue-600 [&>a]:no-underline hover:[&>a]:underline hover:[&>a]:text-blue-700
                [&>strong]:text-gray-900 [&>strong]:font-semibold
                [&>em]:italic [&>em]:text-gray-600
                [&>ul]:my-4 sm:[&>ul]:my-6 [&>ul]:pl-0 [&>ul]:list-none
                [&>ul>li]:mb-2 sm:[&>ul>li]:mb-3 [&>ul>li]:pl-6 [&>ul>li]:relative
                [&>ul>li]:before:content-['\2022'] [&>ul>li]:before:absolute 
                [&>ul>li]:before:left-0 [&>ul>li]:before:text-black
                [&>ul>li]:before:font-bold [&>ul>li]:before:text-lg
                [&>ol]:my-4 sm:[&>ol]:my-6 [&>ol]:pl-0 [&>ol]:list-decimal [&>ol]:list-inside
                [&>ol>li]:mb-2 sm:[&>ol>li]:mb-3 [&>ol>li]:pl-2
                [&>ol>li]:marker:text-black [&>ol>li]:marker:font-semibold
                [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 
                [&>blockquote]:bg-blue-50 [&>blockquote]:py-3 [&>blockquote]:px-4 
                [&>blockquote]:my-6 [&>blockquote]:rounded-r-lg [&>blockquote]:italic
                [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded 
                [&>code]:text-sm [&>code]:font-mono [&>code]:text-gray-800
                [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-3 
                [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-4
                [&>pre>code]:bg-transparent [&>pre>code]:p-0
                [&>img]:rounded-lg [&>img]:shadow-lg [&>img]:my-6 [&>img]:w-full
                [&>hr]:my-6 [&>hr]:border-gray-300
                [&>table]:w-full [&>table]:border-collapse [&>table]:my-4
                [&>table>thead>tr>th]:bg-gray-100 [&>table>thead>tr>th]:p-2 
                [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-semibold
                [&>table>tbody>tr>td]:p-2 [&>table>tbody>tr>td]:border-t 
                [&>table>tbody>tr>td]:border-gray-200
              "
            />
          )}
        </div>
        {/* Article Footer */}
        <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-500 px-2 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-sm sm:text-md text-gray-500">
              Published on {blogData.date}
            </div>
            <button
              onClick={handleShare}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-5 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Share this article
            </button>
          </div>
        </footer>
      </article>
      {/* Floating Action Button for Mobile */} 
      <div className="fixed bottom-6 right-6 sm:hidden">
        <button 
          onClick={handleShare}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Share2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default OpenCourseBlog;