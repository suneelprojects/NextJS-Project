"use client";

import React, { useState, useEffect } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { FaPlay, FaLink, FaGithub, FaEye, FaArrowLeft, FaShareAlt, FaReact, FaNodeJs, FaPython, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaSwift, FaAndroid, FaLinkedin } from "react-icons/fa";
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
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <div className="bg-white  shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/startups-of-socialprachar"
            className="inline-flex items-center text-decoration-none text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-7xl md:text-6xl font-bold text-gray-900 mb-8 leading-relaxed">
            {project.title || "Project Title"}
          </h1>

          {/* Project Image */}
          {project.thumbnail && (
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden mb-12">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}

          {/* Quick Info Bar */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {project.videoLink && (
              <a
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-decoration-none bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-small"
              >
                <FaPlay className="mr-2" /> Watch Demo
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-decoration-none bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <FaLink className="mr-2" /> Live Project
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-decoration-none bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                <FaGithub className="mr-2" /> View Code
              </a>
            )}
            <button
              onClick={handleShare}
              className="inline-flex items-center bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              <FaShareAlt className="mr-2" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* About Section */}
        <section>
          <p className="text-3xl font-bold text-gray-900 mb-6">About this Project</p>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: project.summary || "No description provided." }} />
          </div>
        </section>

        {/* Tech Stack */}
        {project.techstack && project.techstack.length > 0 && (
          <section>
            <p className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</p>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex flex-wrap gap-3">
                {project.techstack.map((tech, index) => (
                  <div key={index} className="inline-flex items-center bg-gray-50 border border-gray-200 text-gray-800 px-5 py-3 rounded-lg font-medium hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <span className="text-blue-600 text-lg mr-2">{getTechIcon(tech)}</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Features */}
        {project.highlights && project.highlights.length > 0 && (
          <section>
            <p className="text-3xl font-bold text-gray-900 mb-6">Key Features</p>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg flex-1">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Team Members */}
        {project.teamMembers && project.teamMembers.length > 0 && (
          <section>
            <p className="text-3xl font-bold text-gray-900 mb-6">Meet the Team</p>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.teamMembers.slice(0, 6).map((member, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.fullname}
                          width={56}
                          height={56}
                          className="rounded-full object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-xl font-bold text-gray-600">{member.fullname?.charAt(0)}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{member.fullname}</h3>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-decoration-none text-blue-600 hover:text-blue-700 text-sm mt-1"
                        >
                          <FaLinkedin className="mr-1" /> LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section>
            <p className="text-3xl font-bold text-gray-900 mb-6">Screenshots</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="relative h-72 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 hover:shadow-lg transition-shadow">
                  <Image
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Additional Features */}
        {project.features && project.features.length > 0 && (
          <section>
            <p className="text-3xl font-bold text-gray-900 mb-6">All Features</p>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 text-xl mt-0.5">✓</span>
                    <span>{typeof feature === 'string' ? feature : feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Learnings */}
        {project.learnings && (
          <section>
            <p className="text-3xl font-bold text-gray-900 mb-6">Team Reflections</p>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed">{project.learnings}</p>
            </div>
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section>
            <p className="text-3xl font-bold text-gray-900 mb-6">More Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relProject) => {
                const titleSlug = slugify(relProject.title);
                return (
                  <Link
                    key={relProject.id}
                    href={`/sos/projectsdetails/${titleSlug}`}
                    className="no-underline group"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all h-full">
                      {relProject.thumbnail && (
                        <div className="relative w-full h-56 bg-gray-100">
                          <Image
                            src={relProject.thumbnail}
                            alt={relProject.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl no-underline font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {relProject.title}
                        </h3>
                        <div className="text-gray-600 text-sm mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: relProject.summary || '' }} />
                        
                        {relProject.techstack && relProject.techstack.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {relProject.techstack.slice(0, 3).map((tech, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                                {tech}
                              </span>
                            ))}
                            {relProject.techstack.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                                +{relProject.techstack.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {relProject.teamMembers && relProject.teamMembers.length > 0 && (
                          <div className="flex items-center text-gray-500 text-sm">
                            <FaEye className="mr-2" />
                            <span>{relProject.teamMembers.length} Team Members</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;