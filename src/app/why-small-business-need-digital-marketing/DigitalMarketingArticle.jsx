/** @format */
"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Target, TrendingUp, Users, BarChart3, Globe, Heart, Zap, Search, DollarSign, MessageSquare, Repeat } from 'lucide-react';
import Image from 'next/image';
import prosAndcons from '../../assets/articleAssets/Digital Marketing_ Pros & Cons.png';

const DigitalMarketingPage  = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customers Are Online",
      description: "90%+ of customers search online before buying. If your business isn't visible digitally, you are invisible to potential customers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost-Effective Marketing",
      description: "Running Google Ads or local SEO in Hyderabad is far cheaper than newspaper ads, billboards, or TV promotions. Start with minimal budgets.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Builds Brand Awareness",
      description: "Digital platforms allow you to collect reviews, showcase customer stories, and build credibility with consistent online presence.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Marketing",
      description: "Target specific demographics, interests, and geographies. A fitness studio in Banjara Hills can target young professionals within 10 km.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Measure who clicked your ad, how many converted, and which campaigns work best. Optimize spend and maximize ROI.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Higher Visibility in Local Search",
      description: "Appear in 'near me' searches through local SEO to attract walk-in customers."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Compete with Larger Brands",
      description: "With SEO and targeted ads, appear alongside bigger competitors in search results."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Stronger Customer Engagement",
      description: "Social media provides direct customer feedback, offers, and brand storytelling."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lead Generation & Conversions",
      description: "PPC campaigns, email funnels, and retargeting turn visitors into paying customers."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale campaigns up or down based on budget and business seasonality."
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Personalization",
      description: "Send personalized emails or WhatsApp updates to increase loyalty and repeat sales."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Hero Section */}
      <section
        id="intro"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.intro
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Digital Marketing for
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Small Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unlike traditional marketing, digital marketing allows{" "}
              <strong className="text-white">affordable</strong>,{" "}
              <strong className="text-white">measurable</strong>, and{" "}
              <strong className="text-white">highly targeted</strong> campaigns.
            </p>

            {/* Hero Image */}
            <div className="flex justify-center mb-10">
              <Image
                src={prosAndcons}
                alt="Digital Marketing Illustration"
                className="w-full max-w-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">
                  Real Example
                </h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                Instead of printing 5,000 flyers, a small bakery in{" "}
                <strong className="text-cyan-400">Hyderabad</strong> can run a
                Facebook ad targeting people within a{" "}
                <strong className="text-purple-400">5 km radius</strong>, aged{" "}
                <strong className="text-green-400">18-40</strong>, who love
                desserts. The ROI is higher, and the results are trackable.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* Why Small Businesses Need Digital Marketing */}
      <section id="reasons" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.reasons
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Do Small Businesses Need
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Digital Marketing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are the top reasons that make digital marketing essential for
              your business growth:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:bg-white/10 ${
                  isVisible.reasons
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{reason.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.benefits
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key Benefits of
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Digital Marketing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's dive deeper into how digital marketing can transform your
              small business:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 ${
                  isVisible.benefits
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
