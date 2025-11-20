"use client";

import React, { useState, useEffect } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { FaPlay, FaLink, FaGithub, FaFileAlt, FaFilePowerpoint, FaEye, FaArrowLeft, FaShareAlt, FaReact, FaNodeJs, FaPython, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaSwift, FaAndroid, FaLinkedin } from "react-icons/fa";
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
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/sos"
          className="inline-flex items-center text-decoration-none bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>
      </div>

      {/* Main Project Details Card */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Project Title */}
          <div className=" px-8 py-6">
            <h1 className="text-7xl md:text-4xl  font-bold text-center text-black">
              {project.title || "Project Title"}
            </h1>
          </div>

          {/* Full Width Project Image */}
          {project.thumbnail && (
            <div className="relative max-w-7xl mx-auto h-96 px-8 py-4">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={450}
               className="w-11/12 h-full object-fit mx-auto"
              />
            </div>
          )}

          {/* Project Content */}
          <div className="px-8 py-6">
            {/* Team Members */}
            {project.teamMembers && project.teamMembers.length > 0 && (
              <div className="mb-8">
                <p className="text-2xl font-bold mb-4 text-gray-800">Team Members</p>
                <div className="flex flex-wrap gap-6">
                  {project.teamMembers.slice(0, 6).map((member, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.fullname}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <FaEye className="text-gray-600 text-xl" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-gray-800">{member.fullname}</h3>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-decoration-none text-blue-600 hover:text-blue-800 text-sm"
                          >
                            <FaLinkedin className="mr-1" /> LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {project.techstack && project.techstack.length > 0 && (
              <div className="mb-8">
                <p className="text-2xl font-bold mb-4 text-gray-800">Tech Stack Used</p>
                <div className="flex flex-wrap gap-3">
                  {project.techstack.map((tech, index) => (
                    <div key={index} className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-shadow">
                      <span className="text-blue-600 text-lg mr-2">{getTechIcon(tech)}</span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About the Project */}
            <div className="mb-8">
              <p className="text-2xl font-bold mb-4 text-gray-800">About the Project</p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.summary || "No description provided."}
              </p>
            </div>

            {/* Project Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-8">
                <p className="text-2xl font-bold mb-4 text-gray-800">Project Features</p>
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed text-lg space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* Project Links */}
            <div className="mb-6">
              <p className="text-2xl font-bold mb-4 text-gray-800">Project Links</p>
              <div className="flex flex-wrap gap-4 ">
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-decoration-none  justify-center bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-600 transition-colors shadow-md hover:shadow-lg font-medium"
                  >
                    <FaPlay className="mr-2" /> Video Demo
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  text-decoration-none justify-center bg-green-500 text-white px-2 py-2 rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg font-medium"
                  >
                    <FaLink className="mr-2" /> Live link
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-decoration-none justify-center bg-gray-800 text-white px-2 py-2 rounded-lg hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg font-medium"
                  >
                    <FaGithub className="mr-2" /> GitHub link
                  </a>
                )}
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center bg-gray-200 rounded text-gray-800 px-2 py-2 rounded-lg hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg font-medium"
                >
                  <FaShareAlt className="mr-2" /> Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-12">
            <p className="text-3xl font-bold mb-6 text-gray-800">More Related Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relProject) => {
                const titleSlug = slugify(relProject.title);
                return (
                 <Link
  href={`/sos/projectsdetails/${titleSlug}`}
  className="no-underline"
  style={{ textDecoration: "none" }}
>
  <div
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full no-underline [&_*]:no-underline"
    style={{ textDecoration: "none" }}
  >

                      {/* Project Thumbnail */}
                      {relProject.thumbnail && (
                        <div className="relative w-full h-48">
                          <Image
                            src={relProject.thumbnail}
                            alt={relProject.title}
                            fill
                            style={{ objectFit: "fit" }}
                            className="w-full"
                          />
                        </div>
                      )}

                      <div className="p-5">
                        <h3 className="text-xl no-underline font-bold mb-3 text-gray-800 line-clamp-2">
                          {relProject.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {relProject.summary}
                        </p>

                        {/* Tech Stack Pills */}
                        {relProject.techstack && relProject.techstack.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {relProject.techstack.slice(0, 3).map((tech, index) => (
                              <span key={index} className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
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

                        {/* Team Members Count */}
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
          </div>
        )}

        {/* Additional Sections */}
        {/* Screenshots Carousel */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="bg-white rounded-xl shadow-xl p-8 mt-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="bg-white rounded-xl shadow-xl p-8 mt-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  <span>{typeof feature === 'string' ? feature : feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learnings */}
        {project.learnings && (
          <div className="bg-white rounded-xl shadow-xl p-8 mt-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Team Reflections & Learnings</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{project.learnings}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;