"use client";
import { useState, useEffect } from "react";
import { Monitor, Users, BookOpenText, Github, ExternalLink, FileText, Briefcase, Heart, Award, Sparkles, Rocket, TrendingUp } from "lucide-react";
import img from '@/assets/image.avif'
import Image from "next/image";
import styles from '@/app/sos/sos.module.css';
import PlacedStudents from '@/components/Homepage/PlacedStudents/PlacedStudents';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from "next/link";
import { slugify } from '@/utils/slugify';
import LeadFormDialog from '@/components/Forms/Homeform';

export default function SOSGallery() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 6;
  const [openForm, setOpenForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Filter projects based on search query
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const visibleProjects = filteredProjects.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'sosprojects'));
        const projectsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            slug: slugify(data.title),
            title: data.title,
            subtitle: data.category,
            shortDesc: data.summary,
            tags: data.techstack,
            teamMembers: data.teamMembers,
            image: data.thumbnail,
            github: data.githubLink,
            live: data.liveLink
          };
        });
        setProjects(projectsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <div className="min-h-screen font-san bg-gradient-to-b from-slate-100 to-white">
        {/* Hero Section - Enhanced with better gradients and animations */}
        <div className="relative min-h-[650px] overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-500 to-orange-400">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-20 opacity-20 transform rotate-12 animate-bounce" style={{ animationDuration: '3s' }}>
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div className="absolute top-5 right-40 opacity-15 animate-pulse" style={{ animationDuration: '4s' }}>
              <Rocket className="w-16 h-16 text-white" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-20 text-4xl font-bold text-white animate-pulse">{'{ }'}</div>
            <div className="absolute top-20 right-20 opacity-15 text-3xl font-bold text-white animate-bounce" style={{ animationDuration: '2.5s' }}>{'</>'}</div>
            <div className="absolute bottom-10 right-20 opacity-15">
              <TrendingUp className="w-14 h-14 text-white animate-pulse" />
            </div>
          </div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content - Enhanced typography with responsive design */}
              <div className="text-white space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div className="inline-block animate-fadeInUp">
                  <span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm font-semibold border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    🚀 Where Ideas Become Reality
                  </span>
                </div>

                <h1 className={`${styles.heading} animate-fadeInUp mb-2 `} style={{ animationDelay: '0.2s' }}>
                  Build Launch Inspire <br />
                  <span className={styles.subheading}>— Startups of Socialprachar</span>
                </h1>

                <p className="text-md sm:text-xl text-gray-100 font-light leading-relaxed  animate-fadeInUp max-w-lg" style={{ animationDelay: '0.4s' }}>
                  SOS features the stories and solutions of our students. Each project blends technology and creativity to tackle today's challenges. Explore, get inspired, and find your path alongside the makers of tomorrow.
                </p>

                <div className="space-y-3 text-base sm:text-lg animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <p className="font-medium text-xl sm:text-md text-gray-900 flex items-center gap-2">
                    <span className="text-2xl sm:text-2xl animate-pulse">✨</span>
                    At Socialprachar, you don't need a legacy—you build one here.
                  </p>
                  <p className=" text-md font-light text-white/80 leading-relaxed">
                    With the right platform, guidance, and practical experience, our students transform ideas into solutions.
                  </p>
                </div>

                {/* Enhanced Responsive Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                  <button
                    onClick={() => setOpenForm(true)}
                    className={`${styles.button1} w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 hover:scale-105 transition-all duration-300`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Join Our Program
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </span>
                  </button>

                  <button
                    className={`${styles.button1} w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 hover:scale-105 transition-all duration-300`}
                    onClick={() => document.getElementById('sos').scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Explore SOS Projects
                      <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Image - Enhanced with modern effects and responsiveness */}
              <div className="relative group order-1 lg:order-2 animate-fadeInRight">
                {/* Enhanced gradient background effect */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Main image container */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-2xl group-hover:shadow-3xl border border-white/20">
                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Innovative students collaborating on tech projects at SocialPrachar"
                    className={`${styles.heroimage} object-cover w-full h-full transition-transform duration-700 group-hover:scale-110`}
                  />

                  {/* Floating elements for visual interest */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <Award className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

       
      {/* Impact Section with Dark Background */}
      <section className="relative bg-slate-900 text-white py-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=800&fit=crop&q=80" 
            alt="Team working together"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/40"></div>
        
        {/* Content */}
        <div className="relative z-10">
        <div className="text-center mb-8">
          <p className="text-3xl md:text-4xl font-bold mb-4">
        Real Projects. Real Impact. <br></br> <span className="text-orange-400">Made by Students at SocialPrachar.</span>
          </p>
          <p className="text-lg text-slate-300 px-4 max-w-3xl mx-auto font-semibold">
           See how learners turned curiosity into code and skills into careers — learning beyond theory at SocialPrachar.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 px-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-white/20">
            <span className="text-green-500 font-bold">✓ </span>  &nbsp; We didn’t chase degrees. We chased skills.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-white/20">
            <span className="text-green-500 font-bold">✓ </span>  &nbsp; Started with basics. Ended with breakthroughs.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-white/20">
            <span className="text-green-500 font-bold">✓ </span>  &nbsp; Challenges came. We coded through them.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-white/20">
            <span className="text-green-500 font-bold">✓ </span>  &nbsp; We learned. We built. We launched.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-white/20">
            <span className="text-green-500 font-bold">✓ </span>  &nbsp; From self-doubt to self-driven.
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-white/20">
           <span className="text-green-500 font-bold">✓ </span> &nbsp; What began as learning became a movement.
          </div>
        </div>

        <div className="text-center">
          <button className={styles.button5} onClick={() => document.getElementById('sos').scrollIntoView({ behavior: 'smooth' })}>
            Discover projects
          </button>
        </div>
        </div>
      </section>

        {/* Project Cards Section - Enhanced */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">

            <p className=" p-2 text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent">
              Projects That Speak Louder<br />
              Beyond Certificates — Into Creation
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At SocialPrachar, we believe real skills are built through action — not told. These projects are the direct result of hands-on learning and real-world problem solving by our students.
            </p>
          </div>

          <div id="sos" className="mb-12">
            {/* Search Bar - Enhanced */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-6">
              <div className="flex items-center gap-3">
                {/* <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div> */}
                <h3 className="text-2xl font-bold text-slate-800">All Innovations</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  {filteredProjects.length} Projects
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <div className="flex w-full sm:w-96">
                  <input
                    type="text"
                    placeholder="Search projects by title or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-6 py-3 border-2 border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg hover:shadow-md transition-shadow"
                  />
                  {/* <button
                    onClick={() => setCurrentPage(0)}
                    className="px-6 py-3 bg-gradient-to-r rounded from-blue-500 to-purple-500 text-white font-semibold rounded-r-full hover:shadow-lg transition-all whitespace-nowrap"
                  >
                    Search
                  </button> */}
                </div>
              </div>
            </div>

            {/* Project Grid - Enhanced cards */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-slate-100 hover:border-blue-300 transform hover:-translate-y-2"
                    style={{ animationDelay: `${idx * 200}ms` }}
                  >
                    {/* Image with overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-xs font-bold shadow-lg">
                        Featured
                      </span>
                    </div> */}
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-1">
                        <h4 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {project.title}
                        </h4>
                        <p className="text-blue-600 text-sm font-semibold mb-1 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          {project.subtitle}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="bg-gradient-to-r from-blue-50 to-purple-100 border border-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-blue-700 hover:scale-105 transition-transform">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="bg-slate-100 rounded-full px-3 py-1 text-xs font-semibold text-slate-600">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                          {(() => {
                            const words = (project.shortDesc || '').split(/\s+/).filter(Boolean);
                            return words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '');
                          })()}
                        </p>
                      </div>

                      {/* Team Members */}
                      <div className="flex items-center gap-3 text-xs text-slate-500 border-t border-slate-100 pt-4 mb-2">
                        {/* <Users className="w-4 h-4 text-slate-400" /> */}
                        <div className="flex items-center -space-x-2">
                          {project.teamMembers && project.teamMembers.slice(0, 4).map((member, idx) => (
                            <img
                              key={idx}
                              src={member.image || 'https://via.placeholder.com/32'}
                              alt={member.fullname}
                              className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm hover:scale-110 hover:z-10 transition-transform"
                              title={member.fullname}
                            />
                          ))}
                          {project.teamMembers && project.teamMembers.length > 4 && (
                            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 text-black flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
                              +{project.teamMembers.length - 4}
                            </span>
                          )}
                        </div>
                        <span className="text-slate-600 font-medium truncate">
                          {project.teamMembers?.[0]?.fullname}

                          {project.teamMembers?.[1] && `, ${project.teamMembers[1].fullname}`}

                          {project.teamMembers?.length > 2 &&
                            ` +${project.teamMembers.length - 2}`}
                        </span>

                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        <Link
                          href={`/sos/projectsdetails/${project.slug}`}
                          className="group/btn flex items-center text-decoration-none justify-center gap-2 w-full px-4 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination - Enhanced */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-16">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="px-6 py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md font-medium">
                Previous
              </button>
              {[...Array(totalPages).keys()].map(p => (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`w-12 h-12 rounded-xl font-bold transition-all ${p === currentPage
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110'
                      : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50 hover:border-blue-300 shadow-sm hover:shadow-md'
                    }`}>
                  {p + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="px-6 py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md font-medium">
                Next
              </button>
            </div>
          )}
        </section>
      </div>

      <PlacedStudents />

      {/* Footer CTA Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-pink-500 py-5  overflow-hidden">
        {/* Animated background elements */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div> */}

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold uppercase tracking-wider border border-white/30">
              Start Your Journey Today
            </span>
          </div> */}
          <p className="text-4xl md:text-5xl text-white font-bold mb-3 leading-tight">
            Master Real-World Skills from Proven Experts
          </p>
          <p className="text-md text-black/95 font-medium  leading-relaxed">
            Gain insights from professionals who've turned knowledge into results. Discover practical strategies, proven methods, and real-world problem-solving techniques that drive success.
          </p>
          <div className="flex flex-wrap justify-center  gap-6">
            <button onClick={() => setOpenForm(true)} className={`${styles.button3}  text-lg`}>
              <span className="flex items-center gap-2">
                
                Join Our Program
                
              </span>
            </button>
            <Link href="/courses" className={`${styles.button4}  text-lg flex items-center gap-2`}>
            
              Explore Our Courses
              
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Form Modal */}
      {openForm && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-500 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg relative shadow-2xl transform animate-slideUp">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-all"
            >
              ✕
            </button>
            <LeadFormDialog sheetName="Leads" />
          </div>
        </div>
      )}

      <style jsx>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(20px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
      .animate-slideUp {
        animation: slideUp 0.4s ease-out;
      }
    `}</style>
    </>
  );
}