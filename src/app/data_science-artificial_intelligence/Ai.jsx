   /** @format */
"use client"
import React from "react";
import Image from 'next/image';
import AIcomponents from '../../assets/articleAssets/ai components.png';
import AIvsDS from '../../assets/articleAssets/ai vs ds.png';
import applicationsOfAI from '../../assets/articleAssets/applications of ai & ds.png';
import skills from '../../assets/articleAssets/skills.png';
import AIcareeropp from '../../assets/articleAssets/ai career opportunities.png';


// Single-file React component styled with Tailwind CSS
// Usage: import DataScienceVsAIPage from './DataScience_vs_AI_Page.jsx'
// This component is a static informational page comparing Data Science and AI,
// with Hyderabad-specific examples and useful sections for students, professionals, and business owners.
const Ai = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}

        {/* What is AI? */}
        <section id="what-is-ai" className="mb-12">
          <h3 className="text-2xl font-bold">
            What is Artificial Intelligence (AI)?
          </h3>
          <p className="mt-3 text-slate-700">
            AI is the branch of computer science that creates systems that
            perform tasks that normally require human intelligence — such as
            perception, reasoning, planning, and language understanding. Machine
            Learning (ML) is a subset of AI focused on algorithms that improve
            with data.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl shadow-sm border">
              <h4 className="font-semibold">Common AI approaches</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>
                  • Machine Learning (supervised, unsupervised, reinforcement)
                </li>
                <li>• Deep Learning (neural networks)</li>
                <li>• Rule-based systems, NLP, computer vision</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm border">
              <h4 className="font-semibold">Hyderabad example</h4>
              <p className="mt-3 text-sm text-slate-600">
                Startups in Madhapur build AI chatbots and recommendation
                engines. Large IT firms in HITEC City deploy AI for automating
                document processing and predictive maintenance for enterprise
                customers.
              </p>
            </div>
          </div>
        </section>

        {/* Tools & Stack */}
        <section id="tools" className="mb-12">
          <h3 className="text-2xl font-bold">Popular tools & technologies</h3>
          <p className="mt-3 text-slate-700">
            While there is overlap, Data Science and AI often favor different
            tools depending on the task.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl shadow-sm border">
              <h4 className="font-semibold">Data Science</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>• Python (Pandas, NumPy), R</li>
                <li>• SQL, Excel</li>
                <li>
                  • Visualization (Matplotlib, Seaborn, Power BI, Tableau)
                </li>
                <li>• Statistical modeling and A/B testing</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-xl shadow-sm border">
              <h4 className="font-semibold">AI / Machine Learning</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>• ML frameworks: scikit-learn, TensorFlow, PyTorch</li>
                <li>• MLOps: MLflow, Kubeflow</li>
                <li>• NLP: Hugging Face Transformers</li>
                <li>• Deployment: Docker, cloud services (AWS, GCP, Azure)</li>
              </ul>
            </div>
          </div>
        </section>

        <Image
          src={AIcomponents}
          alt="AI components"
          className="rounded-2xl shadow-xl max-h-[800px] object-contain"
          unoptimized
        />

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                Data Science <span className="text-blue-600">vs</span> AI
              </h1>
              <h2 className="text-2xl font-semibold text-blue-600 mb-8">
                Uncovering the Core Differences
              </h2>
            </div>

            {/* Main Description */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The main difference between AI and Data Science lies in their
                objectives:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Data Science
                  </h3>
                  <p className="text-gray-700">
                    is about analyzing and interpreting data.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-700 mb-2">AI</h3>
                  <p className="text-gray-700">
                    is about using data to create intelligent systems that can
                    make decisions.
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-4">In other words:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-700 mb-2">
                    Data Science
                  </h3>
                  <p className="text-gray-700">extracts knowledge.</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-700 mb-2">AI</h3>
                  <p className="text-gray-700">applies knowledge.</p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-6 border-b">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Data Science vs AI – Key Comparison Table
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Aspect
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">
                        Data Science
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-purple-700 uppercase tracking-wider">
                        Artificial Intelligence
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Goal
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Extract insights from data
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Build intelligent systems
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Methods
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Statistics, data mining, visualization
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Machine learning, deep learning
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Data Dependency
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Relies heavily on large datasets
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Learns from data but aims to mimic intelligence
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Output
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Reports, predictions, dashboards
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Automated decisions, smart actions
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Tools
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Python, R, SQL, Tableau
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        TensorFlow, PyTorch, Keras
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Applications
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Business analytics, healthcare, finance
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Self-driving cars, chatbots, robotics
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={AIvsDS}
          alt="AI vs Data Science Illustration"
          // className="rounded-3xl w-full max-w-5xl mx-auto object-fit"
          className="rounded-2xl w-full shadow-xl max-h-[1100px] object-fit"
          unoptimized
        />

        <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            How Data Science and AI Work Together
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Although they are different, Data Science and AI complement each
            other.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700">
                Data Science provides clean, structured data.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-700">
                AI consumes that data to make predictions or decisions.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Example in Hyderabad's Healthcare Sector:
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                • Data Science analyzes patient history to identify disease
                patterns.
              </p>
              <p className="text-gray-700">
                • AI then predicts future illness risks and recommends
                treatments.
              </p>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Applications of Data Science vs AI
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Science Applications */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-6">
                Applications of Data Science:
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">
                    • Customer segmentation in retail
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">• Fraud detection in banking</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">
                    • Market trend analysis in Hyderabad startups
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">
                    • Predictive maintenance in manufacturing
                  </p>
                </div>
              </div>
            </div>
            {/* AI Applications */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-6">
                Applications of AI:
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">
                    • Virtual assistants like Alexa & Siri
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">
                    • Self-driving cars (R&D in Hyderabad)
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">• Automated medical diagnosis</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">
                    • AI-driven recruitment tools for HR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={applicationsOfAI}
          alt="AI vs Data Science Illustration"
          // className="rounded-3xl w-full max-w-5xl mx-auto object-fit"
          className="rounded-2xl w-full shadow-xl max-h-[1100px] object-fit"
         unoptimized
        />

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Data Science vs AI in Careers
              </h1>
            </div>

            {/* Data Science Career Path */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-8">
                Data Science Career Path
              </h2>

              {/* Roles Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Roles:
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 font-medium">Data Analyst</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 font-medium">Data Scientist</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 font-medium">
                      Business Intelligence Engineer
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Skills Needed:
                </h3>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                    <p className="text-green-700 font-medium">Statistics</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                    <p className="text-green-700 font-medium">Python</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                    <p className="text-green-700 font-medium">R</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                    <p className="text-green-700 font-medium">SQL</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                    <p className="text-green-700 font-medium">
                      Data Visualization
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Skills */}
              <div className="mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-orange-700 font-medium">
                      Market Trend Analysis
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-orange-700 font-medium">
                      Predictive Maintenance
                    </p>
                  </div>
                </div>
              </div>

              {/* Industries Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Industries Hiring in Hyderabad:
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                    <p className="text-purple-700 font-medium">IT services</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                    <p className="text-purple-700 font-medium">Healthcare</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                    <p className="text-purple-700 font-medium">Edtech</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                    <p className="text-purple-700 font-medium">Retail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={skills}
          alt="AI vs Data Science Illustration"
          className="rounded-3xl w-full max-w-xl mx-auto max-h-[500px] object-cover"
          // className="rounded-2xl w-full shadow-xl max-h-[1100px] object-fit"
           unoptimized
        />

        <div className="bg-white rounded-xl shadow-lg p-8 mt-5">
          <h2 className="text-2xl font-semibold text-purple-700 mb-8">
            AI Career Path
          </h2>

          {/* Roles Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Roles:</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-gray-700 font-medium">AI Engineer</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-gray-700 font-medium">ML Engineer</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-gray-700 font-medium">NLP Specialist</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-gray-700 font-medium">Robotics Engineer</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Skills Needed:
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg text-center border border-indigo-200">
                <p className="text-indigo-700 font-medium">Machine Learning</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg text-center border border-indigo-200">
                <p className="text-indigo-700 font-medium">Deep Learning</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg text-center border border-indigo-200">
                <p className="text-indigo-700 font-medium">TensorFlow</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg text-center border border-indigo-200">
                <p className="text-indigo-700 font-medium">PyTorch</p>
              </div>
            </div>
          </div>

          {/* Industries Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Industries Hiring in Hyderabad:
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-red-50 p-4 rounded-lg text-center border border-red-200">
                <p className="text-red-700 font-medium">Fintech</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center border border-red-200">
                <p className="text-red-700 font-medium">AI startups</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center border border-red-200">
                <p className="text-red-700 font-medium">Automotive</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center border border-red-200">
                <p className="text-red-700 font-medium">Security tech</p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={AIcareeropp}
          alt="AI vs Data Science Illustration"
          className="rounded-3xl w-full max-w-xl mx-auto max-h-[500px] object-cover mt-5"
          // className="rounded-2xl w-full shadow-xl max-h-[1100px] object-fit"
           unoptimized
        />
      </main>
    </div>
  );
};

export default Ai;
