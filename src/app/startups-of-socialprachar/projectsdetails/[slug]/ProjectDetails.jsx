
"use client";

import React, { useState, useEffect } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { FaPlay, FaLink, FaGithub, FaEye, FaArrowLeft, FaShareAlt, FaReact, FaNodeJs, FaPython, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaSwift, FaAndroid, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import Loading from "@/components/reusedComponents/Loading";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

const ProjectDetails = () => {
  const param = useParams();
  const slug = param.slug;
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTechIcon = (tech) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('react')) return <FaReact />;
    if (lowerTech.includes('node')) return <FaNodeJs />;
    if (lowerTech.includes('python')) return <FaPython />;
    if (lowerTech.includes('database') || lowerTech.includes('mongo') || lowerTech.includes('sql')) return <FaDatabase />;
    if (lowerTech.includes('javascript')) return <FaJsSquare />;
    if (lowerTech.includes('html')) return <FaHtml5 />;
    if (lowerTech.includes('css')) return <FaCss3Alt />;
    if (lowerTech.includes('java')) return <FaJava />;
    if (lowerTech.includes('php')) return <FaPhp />;
    if (lowerTech.includes('swift')) return <FaSwift />;
    if (lowerTech.includes('android')) return <FaAndroid />;
    return <FaJsSquare />;
  };

  const handleShare = async () => {
    const shareData = {
      title: project.title,
      text: `Check out this project: ${project.title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`);
      alert('Link copied to clipboard!');
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (!slug) return;

        const querySnapshot = await getDocs(collection(db, "sosprojects"));
        let foundProject = null;
        let projectId = null;

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const titleSlug = slugify(data.title);
          if (titleSlug === slug) {
            foundProject = data;
            projectId = doc.id;
          }
        });

        if (foundProject) {
          setProject({ ...foundProject, id: projectId });
        } else {
          console.error("No project found with slug:", slug);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  useEffect(() => {
    const fetchRelatedProjects = async () => {
      if (!project) return;

      try {
        const querySnapshot = await getDocs(collection(db, "sosprojects"));
        const projects = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(p => p.id !== project.id)
          .slice(0, 3);
        setRelatedProjects(projects);
      } catch (error) {
        console.error("Error fetching related projects:", error);
      }
    };

    fetchRelatedProjects();
  }, [project]);

  if (loading) return <Loading />;
  if (!project) return <p className="text-center mt-10">No project found</p>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Fixed Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
              <FaArrowLeft className="w-3 h-3" />
            </span>
            <span className="hidden sm:inline">Back to Projects</span>
          </button>

          <button
            onClick={handleShare}
            className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            <span className="hidden sm:inline">Share</span>
            <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
              <FaShareAlt className="w-3 h-3" />
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all hover:shadow-2xl">

          {/* Project Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 p-8 tracking-tight text-center">
            {project.title}
          </h1>

          {/* Project Thumbnail */}
          {project.thumbnail && (
            <div className="relative w-full h-64 md:h-96 bg-gray-200">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="p-6 md:p-12">


            {/* About the Project */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 inline-block">
                About the Project
              </h2>
              <div
                className="
                  article-content w-full
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
                  [&>ol]:my-4 sm:[&>ol]:my-6 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol]:list-outside
                  [&>ol>li]:mb-2 sm:[&>ol>li]:mb-3 [&>ol>li]:pl-1
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
                dangerouslySetInnerHTML={{ __html: project.summary }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Technologies Used */}
              {project.techstack?.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techstack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-50 to-purple-100 border border-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-blue-700 hover:scale-105 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Members */}
              {project.teamMembers?.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">
                    Team Members
                  </h3>
                  <div className="space-y-4">
                    {project.teamMembers.map((m, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                          {m.image ? (
                            <Image
                              src={m.image}
                              alt={m.fullname}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <span className="text-lg font-bold text-gray-400">
                              {m.fullname?.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {m.fullname}
                          </p>
                          {m.linkedin && (
                            <Link
                              href={m.linkedin}
                              target="_blank"
                              className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-0.5"
                            >
                              <FaLinkedin /> LinkedIn Profile
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-8 border-t border-gray-100">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-transform hover:-translate-y-0.5 shadow-md no-underline flex items-center gap-2"
                  style={{ textDecoration: "none" }}
                >
                  Visit Website <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              {project.videoLink && (
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-transform hover:-translate-y-0.5 shadow-md no-underline flex items-center gap-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaPlay className="text-[10px]" /> Watch Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-transform hover:-translate-y-0.5 shadow-md no-underline flex items-center gap-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaGithub /> Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              More Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <Link
                key={p.id}
                href={`/startups-of-socialprachar/projectsdetails/${slugify(
                  p.title
                )}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 no-underline h-full flex flex-col"
                style={{ textDecoration: "none" }}
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                    {p.summary?.replace(/<[^>]*>/g, "")}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {p.techstack?.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-1 bg-gray-50 border border-gray-100 rounded-md text-gray-600 font-medium uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetails;