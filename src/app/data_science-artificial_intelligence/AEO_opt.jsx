"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Brain, BarChart3, MapPin, TrendingUp, Users, Building2 } from 'lucide-react';


const AEO_opt = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      q: "Which is better– Data Science or AI?",
      a: "Neither is better; it depends on your career goals. Data Science focuses on data analysis, while AI builds systems that make intelligent decisions."
    },
    {
      q: "Is AI part of Data Science?",
      a: "AI is a subfield that overlaps with Data Science but is not the same. Data Science prepares and interprets data, while AI uses data to act intelligently."
    },
    {
      q: "What is the difference between AI and Data Science careers?",
      a: "Data Science careers focus on analysis and insights, while AI careers focus on building intelligent solutions like chatbots, automation, and robotics."
    },
    {
      q: "Which has more scope in Hyderabad– Data Science or AI?",
      a: "Both have huge demand in Hyderabad. Data Science is strong in IT, healthcare, and retail, while AI is booming in startups, fintech, and automation."
    }
  ];

  const hyderabadFeatures = [
    { icon: Building2, text: "AI research labs in HITEC City and Gachibowli" },
    { icon: Users, text: "Data Science institutes offering training in Madhapur, Ameerpet" },
    { icon: TrendingUp, text: "Startups using AI for fintech, edtech, and healthcare" },
    { icon: MapPin, text: "Government AI policies supporting smart city projects" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AEO Optimization</h1>
                <p className="text-gray-600">Deep Learning Advanced Neural Networks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Common Questions Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 mr-3 text-blue-600" />
            Common Questions
          </h2>
          <div className="space-y-4">
            {questions.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <span className="font-medium text-gray-900">{item.q}</span>
                  {activeQuestion === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {activeQuestion === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Hyderabad Hub Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <MapPin className="h-6 w-6 mr-3 text-indigo-600" />
            Data Science and AI in Hyderabad
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Hyderabad has become India's AI and Data Science hub, with:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {hyderabadFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <feature.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <p className="text-gray-700 flex-1">{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold text-green-800">For students in Hyderabad:</span> Learning both Data Science and AI can unlock career opportunities across industries.
            </p>
          </div>
        </section>

        {/* Future Outlook Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-3 text-purple-600" />
            Future of Data Science and AI
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Data Science Future</h3>
              <p className="text-gray-700">More automation in data cleaning, advanced analytics for businesses.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">AI Future</h3>
              <p className="text-gray-700">Growth of generative AI, autonomous systems, and ethical AI.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Hyderabad Outlook</h3>
              <p className="text-gray-700">A thriving ecosystem of startups, IT giants, and institutes driving growth in both fields.</p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-200">
              Data Science vs AI is not about choosing one over the other. Instead, they are complementary technologies:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur">
                <div className="flex items-center mb-2">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-400" />
                  <h3 className="font-semibold">Data Science</h3>
                </div>
                <p className="text-gray-300">Extracts and interprets insights.</p>
              </div>
              <div className="p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur">
                <div className="flex items-center mb-2">
                  <Brain className="h-5 w-5 mr-2 text-purple-400" />
                  <h3 className="font-semibold">AI</h3>
                </div>
                <p className="text-gray-300">Uses those insights to act intelligently.</p>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
              <p className="text-white font-medium">
                For professionals and businesses in Hyderabad, adopting both fields can lead to competitive advantage, innovation, and growth.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AEO_opt;