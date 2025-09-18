/** @format */

"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Target,
  Users,
  FileText,
  Mail,
  MapPin,
  TrendingUp,
  Eye,
  DollarSign,
  Heart,
  BookOpen,
  Star,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import strategyPyramid from "../../assets/articleAssets/strategy pyramid.png";
import DMtrends from '../../assets/articleAssets/Digital Marketing Trends in Hyderabad.png';

const TypesofDM = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const marketingTypes = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      icon: <Search className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      features: [
        {
          icon: <Eye className="w-5 h-5" />,
          text: "Improves website visibility on Google",
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Essential for long-term traffic",
        },
      ],
      description:
        "Optimize your website to rank higher in search results and attract organic traffic over time.",
    },
    {
      id: 2,
      title: "Pay-Per-Click (PPC) Advertising",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      features: [
        {
          icon: <DollarSign className="w-5 h-5" />,
          text: "Google Ads & Meta Ads allow targeted advertising",
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Measurable results and instant traffic",
        },
      ],
      description:
        "Get immediate visibility with targeted ads that you only pay for when someone clicks.",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30",
      features: [
        {
          icon: <Heart className="w-5 h-5" />,
          text: "Build a community and showcase products",
        },
        {
          icon: <Target className="w-5 h-5" />,
          text: "Run promotions and engage customers",
        },
      ],
      description:
        "Connect with your audience on platforms they use daily and build lasting relationships.",
    },
    {
      id: 4,
      title: "Content Marketing",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      features: [
        {
          icon: <BookOpen className="w-5 h-5" />,
          text: "Blogs, videos, and infographics educate customers",
        },
        {
          icon: <Heart className="w-5 h-5" />,
          text: "Improve trust and establish authority",
        },
      ],
      description:
        "Create valuable content that educates your audience and positions you as an industry expert.",
    },
    {
      id: 5,
      title: "Email Marketing",
      icon: <Mail className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      features: [
        {
          icon: <DollarSign className="w-5 h-5" />,
          text: "Low-cost method to nurture customers",
        },
        {
          icon: <Target className="w-5 h-5" />,
          text: "Send personalized offers and updates",
        },
      ],
      description:
        "Maintain direct communication with customers and drive repeat business with targeted campaigns.",
    },
    {
      id: 6,
      title: "Local SEO Optimization",
      icon: <MapPin className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30",
      features: [
        {
          icon: <MapPin className="w-5 h-5" />,
          text: "Google Business Profile optimization",
        },
        {
          icon: <Star className="w-5 h-5" />,
          text: "Reviews boost local visibility",
        },
      ],
      description:
        "Dominate local search results and attract customers in your immediate area.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          data-animate
          id="header"
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible.header
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Types of
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Digital Marketing
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-300">
              for Small Business
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the essential digital marketing strategies that can
            transform your small business and help you compete in today's
            digital landscape.
          </p>
        </div>

        {/* Left Side - Image */}
        <div
          data-animate
          id="pyramid-image"
          className={`transform transition-all duration-1000 ${
            isVisible["pyramid-image"]
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <Image
            src={strategyPyramid}
            alt="Digital Marketing Strategy Pyramid"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            unoptimized
          />
        </div>

        <div className="py-10 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Tech-Savvy Population
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Young audience ideal for digital-first marketing strategies
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                High Internet Penetration
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Customers prefer online search before making purchases
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Strong Local Search
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Booming searches for "restaurants near me" and local services
              </p>
            </div>
          </div>
        </div>

        {/* Layout: Image + Cards */}
        <div className="grid gap-6 items-start">
          {/* Right Side - Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingTypes.map((type, index) => (
              <div
                key={type.id}
                data-animate
                id={`card-${type.id}`}
                className={`group relative bg-gradient-to-br ${
                  type.bgGradient
                } backdrop-blur-md rounded-3xl p-8 border ${
                  type.borderColor
                } hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  isVisible[`card-${type.id}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveCard(type.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <div className="text-white">{type.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {type.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-6 h-6 text-gray-400 transform transition-all duration-300 ${
                        activeCard === type.id ? "rotate-90 text-white" : ""
                      }`}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {type.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                    {type.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3 group/feature"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center transform group-hover/feature:scale-110 transition-transform duration-300`}
                        >
                          <div className="text-white">{feature.icon}</div>
                        </div>
                        <span className="text-gray-200 group-hover/feature:text-white transition-colors duration-300 flex-1">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Indicator */}
                  <div
                    className={`mt-6 pt-4 border-t border-white/10 transform transition-all duration-300 ${
                      activeCard === type.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        Learn more about this strategy
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${type.gradient} flex items-center justify-center animate-pulse`}
                      >
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
<div>
        <div className="min-h-scree">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Left Side - Image */}
  <div
    data-animate
    id="pyramid-image"
    className={`transform transition-all duration-1000 ${
      isVisible["pyramid-image"]
        ? "translate-x-0 opacity-100"
        : "-translate-x-10 opacity-0"
    }`}
  >
    <Image
      src={DMtrends}
      alt="Digital Marketing Strategy Pyramid"
      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
      unoptimized
    />
  </div>

  {/* Right Side - Content */}
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
      A local business in Hyderabad that invests in SEO and ads will
      <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {" "}
        outrank offline-only competitors.
      </span>
    </h3>

    <div className="flex items-center mb-6">
      <MessageCircle className="h-8 w-8 text-blue-500 mr-3" />
      <h3 className="text-2xl font-bold text-gray-800">
        AEO Optimization: Answering Common Questions
      </h3>
    </div>

    <div className="space-y-6">
      <div className="border-l-4 border-blue-500 pl-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-2">
          Q1: How does digital marketing help small businesses?
        </h4>
        <p className="text-gray-600">
          Digital marketing helps small businesses increase visibility, attract
          targeted customers, reduce advertising costs, and track ROI
          effectively.
        </p>
      </div>

      <div className="border-l-4 border-green-500 pl-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-2">
          Q2: Is digital marketing affordable for small businesses?
        </h4>
        <p className="text-gray-600">
          Yes. Even with a budget as low as ₹5,000 per month, small businesses
          can run targeted ads and optimize their online presence.
        </p>
      </div>

      <div className="border-l-4 border-purple-500 pl-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-2">
          Q3: What are the benefits of digital marketing for small businesses?
        </h4>
        <p className="text-gray-600">
          The main benefits are higher visibility, cost-effectiveness,
          measurable results, improved customer engagement, and better local
          reach.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-2">
          Q4: Why is Hyderabad a good place for small business digital
          marketing?
        </h4>
        <p className="text-gray-600">
          Hyderabad has a large, digitally active population, strong startup
          culture, and a competitive marketplace where online presence is
          critical for growth.
        </p>
      </div>
    </div>
  </div>
</div>

            {/* GEO Optimization Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">
                  GEO Optimization: Hyderabad-Focused Strategy
                </h2>
              </div>

              <p className="text-gray-700 mb-6">
                If you are a small business in Hyderabad, here's how you can
                start:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Search className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="font-medium text-gray-700">
                      Claim & optimize your Google Business Profile.
                    </span>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Target className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium text-gray-700">
                      Run geo-targeted ads (Ex: show ads only within 10 km of
                      Banjara Hills).
                    </span>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="font-medium text-gray-700">
                      Collect local reviews to build credibility.
                    </span>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="font-medium text-gray-700">
                      Use keywords like "Best [your service] in Hyderabad."
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Example:</h3>
                <p className="text-gray-600">
                  A dental clinic in Kukatpally can rank for "best dentist in
                  Hyderabad" through SEO and reviews.
                </p>
              </div>
            </div>

            {/* Future of Digital Marketing Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Future of Digital Marketing for Small Businesses
              </h2>

              <p className="text-gray-700 mb-6">
                With AI-driven ads, smart chatbots, and voice search, the future
                is exciting. Small businesses that adapt early will dominate
                their niches.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    AI tools will automate ad targeting.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Local voice searches ("best biryani near me") will increase.
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Video content will dominate engagement.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Conclusion</h2>

              <p className="text-blue-100 mb-6">
                Small businesses need digital marketing now more than ever. It
                is affordable, scalable, measurable, and effective. Whether
                you're in Hyderabad or beyond, digital marketing ensures that
                your business is not just surviving but thriving in today's
                competitive landscape.
              </p>

              <p className="text-blue-100 font-semibold">
                If you are a small business owner in Hyderabad, start with SEO,
                Google Ads, and local digital marketing today—because your
                customers are already searching for you online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TypesofDM;
