/** @format */
"use client"
import { useState } from "react";
import Image from 'next/image';
import DM_benifits from '../../assets/articleAssets/digitalMarketing_benifits.png';
import {
  Search,
  Users,
  Target,
  TrendingUp,
  Mail,
  Share2,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function DigitalMarketingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const platforms = [
    { name: "Search Engines", icon: Search, desc: "Google, Bing optimization" },
    {
      name: "Social Media",
      icon: Share2,
      desc: "Instagram, Facebook, LinkedIn",
    },
    {
      name: "Email Marketing",
      icon: Mail,
      desc: "Direct customer communication",
    },
    { name: "Online Ads", icon: Target, desc: "Google Ads, Meta Ads" },
    { name: "SEO", icon: TrendingUp, desc: "Search Engine Optimization" },
  ];

  const benefits = [
    "Increased online visibility and brand awareness",
    "Cost-effective compared to traditional marketing",
    "Targeted reach to specific demographics",
    "Real-time analytics and performance tracking",
    "Better customer engagement and relationships",
    "Level playing field with larger competitors",
  ];

  const hyderabadStats = [
    { label: "Tech Startups", value: "2000+", icon: Globe },
    { label: "Digital Users", value: "8M+", icon: Users },
    { label: "Growth Rate", value: "25%", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                Essential for Modern Business
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Why Small Businesses Need
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Digital Marketing
                </span>
                <br />
                More Than Ever
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                In today's hyperconnected world, small businesses cannot afford
                to ignore digital marketing. Customers no longer rely solely on
                word-of-mouth or traditional ads. They search online, check
                reviews, follow social media, and make buying decisions based on
                digital presence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-4">
                  {hyderabadStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-bounce"></div>
      </section>

      {/* Location Context */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for Hyderabad Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you are a boutique shop in Hyderabad, a café in Jubilee
              Hills, or a tech startup in Madhapur, digital marketing is the key
              to visibility, growth, and survival.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Boutique Shops
              </h3>
              <p className="text-gray-600">
                Reach local customers and showcase your unique products online
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cafés & Restaurants
              </h3>
              <p className="text-gray-600">
                Build a loyal customer base through social media and reviews
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tech Startups
              </h3>
              <p className="text-gray-600">
                Scale rapidly with targeted digital marketing strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Digital Marketing Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is Digital Marketing for Small Business?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Digital marketing for small business is the process of using
              online platforms and tools to reach, engage, and convert your
              target audience into loyal customers.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {platform.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <Image
              src={DM_benifits}
              alt="Digital Marketing"
              className="rounded-2xl shadow-xl max-h-[700px] object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Benefits of Digital Marketing
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose Digital Marketing?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>24/7 Customer Reach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Measurable Results</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Global Market Access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Cost-Effective Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
