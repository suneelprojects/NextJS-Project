/** @format */
"use client"
import React, { useState } from "react";
import Image from 'next/image';
import essentialSkills from '../../assets/articleAssets/data analysis essential skills.png';
import datascienceProcess from '../../assets/articleAssets/datascience process.png';
import {
  ChevronDown,
  ChevronUp,
  Brain,
  BarChart3,
  Code,
  Lightbulb,
  Users,
  TrendingUp,
  MapPin,
  Building,
} from "lucide-react";

const ExpandableSection = ({
  title,
  children,
  icon: Icon,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 flex items-center justify-between transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <Icon className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-600" />
        )}
      </button>
      {isOpen && <div className="px-6 py-4 bg-white">{children}</div>}
    </div>
  );
};

const ComparisonCard = ({ title, dsContent, aiContent, bgColor }) => (
  <div
    className={`${bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
  >
    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
      {title}
    </h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white/80 rounded-lg p-4">
        <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
          <BarChart3 className="h-4 w-4 mr-2" />
          Data Science
        </h4>
        <div className="text-sm text-gray-700">{dsContent}</div>
      </div>
      <div className="bg-white/80 rounded-lg p-4">
        <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
          <Brain className="h-4 w-4 mr-2" />
          Artificial Intelligence
        </h4>
        <div className="text-sm text-gray-700">{aiContent}</div>
      </div>
    </div>
  </div>
);

const SkillTag = ({ skill, type }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2 ${
      type === "ds"
        ? "bg-blue-100 text-blue-800"
        : "bg-purple-100 text-purple-800"
    }`}
  >
    {skill}
  </span>
);

export default function DataScience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Data Science vs Artificial Intelligence
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Understanding the key differences between Data Science and AI is
            crucial for professionals and businesses in Hyderabad's thriving
            tech ecosystem, from HITEC City to Madhapur startups.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Building className="h-4 w-4" />
              <span>HITEC City</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Madhapur Startups</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Growing Demand</span>
            </div>
          </div>
        </div>

        {/* Quick Overview Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="h-10 w-10" />
              <h2 className="text-2xl font-bold">Data Science</h2>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              The field of extracting insights and knowledge from structured and
              unstructured data using mathematics, statistics, programming, and
              domain expertise.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-10 w-10" />
              <h2 className="text-2xl font-bold">Artificial Intelligence</h2>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed">
              The development of computer systems that can perform tasks
              typically requiring human intelligence, including learning,
              reasoning, and decision-making.
            </p>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="space-y-8 mb-16">
          <ComparisonCard
            title="Core Focus & Purpose"
            bgColor="bg-gradient-to-r from-emerald-100 to-teal-100"
            dsContent={
              <div>
                <p className="mb-2">• Extract actionable insights from data</p>
                <p className="mb-2">• Solve specific business problems</p>
                <p className="mb-2">• Make data-driven decisions</p>
                <p>• Predict future trends and patterns</p>
              </div>
            }
            aiContent={
              <div>
                <p className="mb-2">• Create intelligent systems</p>
                <p className="mb-2">• Automate complex tasks</p>
                <p className="mb-2">• Simulate human reasoning</p>
                <p>• Enable machines to learn and adapt</p>
              </div>
            }
          />

          <ComparisonCard
            title="Key Methods & Approaches"
            bgColor="bg-gradient-to-r from-orange-100 to-red-100"
            dsContent={
              <div>
                <p className="mb-2">• Statistical analysis and modeling</p>
                <p className="mb-2">• Data mining and visualization</p>
                <p className="mb-2">• Hypothesis testing</p>
                <p>• Predictive analytics</p>
              </div>
            }
            aiContent={
              <div>
                <p className="mb-2">• Machine learning algorithms</p>
                <p className="mb-2">• Neural networks and deep learning</p>
                <p className="mb-2">• Natural language processing</p>
                <p>• Computer vision and robotics</p>
              </div>
            }
          />

          <ComparisonCard
            title="Tools & Technologies"
            bgColor="bg-gradient-to-r from-indigo-100 to-blue-100"
            dsContent={
              <div>
                <p className="mb-2">• Python, R, SQL</p>
                <p className="mb-2">• Pandas, NumPy, Matplotlib</p>
                <p className="mb-2">• Tableau, Power BI</p>
                <p>• Jupyter Notebooks, Excel</p>
              </div>
            }
            aiContent={
              <div>
                <p className="mb-2">• Python, PyTorch, TensorFlow</p>
                <p className="mb-2">• Scikit-learn, Keras</p>
                <p className="mb-2">• OpenAI APIs, Hugging Face</p>
                <p>• CUDA, cloud AI services</p>
              </div>
            }
          />
        </div>

        <section
          id="overview"
          className="grid md:grid-cols-2 gap-8 items-center mb-12"
        >
          <div>
            <p className="text-sm font-semibold uppercase text-indigo-600">
              Quick guide • Hyderabad friendly
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
              Data Science and AI — similar friends, different jobs
            </h2>
            <p className="mt-4 text-slate-700">
              Both fields turn data into value, but with different goals and
              toolkits. This page explains the difference, use-cases, popular
              tools, and career paths — with concrete examples from Hyderabad's
              tech scene.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.5 16.5A7.5 7.5 0 1012 4.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Audience</p>
                <p className="text-xs text-slate-500">
                  Students • Professionals • Business owners in Hyderabad
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="p-4 bg-white rounded-lg border">
                <p className="text-xs text-slate-500">Key difference</p>
                <p className="mt-1 font-semibold">
                  Data Science extracts insights. AI builds systems that act on
                  data (and often learn).
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <p className="text-xs text-slate-500">
                  Where you'll find them in Hyderabad
                </p>
                <p className="mt-1 font-semibold">
                  HITEC City (IT services), Madhapur (startups), Banjara Hills
                  (healthcare analytics).
                </p>
              </div>
            </div>
          </div>
        </section>
         <div>
              <Image
               src={essentialSkills}
               alt="Essential Skills"
               className="rounded-2xl shadow-xl max-h-[700px] object-fit"
               unoptimized
              />
            </div>

        {/* What is Data Science? */}
        <section id="what-is-ds" className="mb-12">
          <h3 className="text-2xl font-bold">What is Data Science?</h3>
          <p className="mt-3 text-slate-700">
            Data Science is the field of extracting insights and knowledge from
            structured and unstructured data. It blends mathematics, statistics,
            programming, and domain knowledge to answer questions across
            descriptive, diagnostic, predictive, and prescriptive analytics.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl shadow-sm border">
              <h4 className="font-semibold">Core components</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>• Mathematics & Statistics (analysis)</li>
                <li>• Programming (Python, R, SQL)</li>
                <li>• Business Domain Knowledge</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm border">
              <h4 className="font-semibold">Questions Data Science answers</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>• What happened? (Descriptive analytics)</li>
                <li>• Why did it happen? (Diagnostic analytics)</li>
                <li>• What will happen next? (Predictive analytics)</li>
                <li>• What should we do? (Prescriptive analytics)</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm border">
              <h4 className="font-semibold">Hyderabad example</h4>
              <p className="mt-3 text-sm text-slate-600">
                E-commerce companies in Hyderabad use Data Science to analyze
                customer buying behavior. Hospitals in Banjara Hills leverage
                Data Science for patient data analytics to improve outcomes and
                resource planning.
              </p>
            </div>
          </div>
        </section>

        {/* Expandable Sections */}
        <div className="space-y-6 mb-16">
          <ExpandableSection
            title="Career Opportunities in Hyderabad"
            icon={Users}
            defaultOpen={true}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">
                  Data Science Roles
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Data Scientist</li>
                  <li>• Data Analyst</li>
                  <li>• Business Intelligence Analyst</li>
                  <li>• Data Engineer</li>
                  <li>• Quantitative Analyst</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Average salary: ₹8-25 LPA in Hyderabad
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-purple-700 mb-3">AI Roles</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• AI/ML Engineer</li>
                  <li>• Research Scientist</li>
                  <li>• Computer Vision Engineer</li>
                  <li>• NLP Engineer</li>
                  <li>• Robotics Engineer</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Average salary: ₹12-35 LPA in Hyderabad
                </p>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection title="Industry Applications" icon={Building}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">
                  Data Science Applications
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Market research and customer segmentation</li>
                  <li>• Financial risk assessment</li>
                  <li>• Supply chain optimization</li>
                  <li>• Healthcare analytics</li>
                  <li>• Sports analytics</li>
                </ul>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection title="Getting Started" icon={Lightbulb}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">
                  Data Science Path
                </h4>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>Learn Python and statistics basics</li>
                  <li>Master SQL and data manipulation</li>
                  <li>Practice with real datasets</li>
                  <li>Build a portfolio of projects</li>
                  <li>Gain domain expertise</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-purple-700 mb-3">AI Path</h4>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>Strong foundation in mathematics</li>
                  <li>Learn machine learning concepts</li>
                  <li>Understand neural networks</li>
                  <li>Practice with AI frameworks</li>
                  <li>Specialize in specific AI domains</li>
                </ol>
              </div>
            </div>
          </ExpandableSection>
        </div>

         <div>
              <Image
               src={datascienceProcess}
               alt="Essential Skills"
               className="rounded-2xl shadow-xl max-h-[700px] object-fit"
               unoptimized
              />
            </div>
      </div>
    </div>
  );
}
