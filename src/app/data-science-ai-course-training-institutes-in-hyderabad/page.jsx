'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Image1 from '@/assets/articleAssets/ds-1.png';
import Image2 from '@/assets/articleAssets/ds-2.png';
import Image3 from '@/assets/articleAssets/ds-3.png';
import hero from '@/assets/articleAssets/hero2.png';
import DataAnalyticsForm from '@/app/best-data-analytics-hyderabad/DataAnalyticsForm';



// Lucide React Icons
import {
  FileText,
  FlaskConical,
  Brain,
  Sparkles,
  Cloud,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Users,
  Rocket,
} from 'lucide-react';



// Reusable Section Wrapper
function AnimatedSection({ children, className = '', id }) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

// Helper component for curriculum and feature cards
function IconCard({ icon: Icon, title, description, isDarkBackground = false }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md text-left flex items-start gap-4 ${isDarkBackground ? 'bg-white text-[#333333]' : 'bg-white'}`}
    >
      <div className={`bg-[#3D604C] p-3 rounded-full flex items-center justify-center shrink-0`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#3D604C] mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

// Helper component for circular stats in the footer section
function CircularStat({ percentage, title, subtitle }) {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  // Determine the fill percentage based on the string value
  let fillPercentage = 0;
  if (percentage.includes('%')) {
    fillPercentage = parseFloat(percentage.replace('%', ''));
  } else if (percentage === '24/7') {
    fillPercentage = 100; // Visually full for "24/7" support
  }

  const strokeDashoffset = circumference - (fillPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-32 h-32 flex items-center justify-center mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-gray-600 opacity-30" // Background stroke
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="64"
            cy="64"
          />
          <circle
            className="text-[#3D604C]" // Foreground stroke
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="64"
            cy="64"
          />
        </svg>
        <span className="absolute text-3xl font-bold text-black">{percentage}</span>
      </div>
      <h3 className="text-xl font-semibold text-black mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </div>
  );
}

export default function Page() {
  const [heading, setHeading] = useState('');

  const closePopup = () => setHeading('');

  return (
    <div className="font-sans text-[#333333] antialiased bg-[#FCF9F3]">
      {/* Hero Section */}
     <header
  className="relative flex items-center justify-center text-center py-28 md:py-36 overflow-hidden bg-[#FCF9F3]"
>
  {/* Blurred & darkened background image */}
  <div
    className="absolute inset-0 bg-cover bg-center filter brightness-60 blur-sm"
    style={{ backgroundImage: `url(${hero.src})` }}
  ></div>
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-white">
    <p
      className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#456754] font-bold leading-tight mb-6"
    >
      Data Science & Artificial Intelligence Course in Hyderabad
    </p>

    <p
      className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-8 max-w-2xl"
    >
      Learn from industry experts. Build real projects. Get placed with top companies.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        className="bg-[#3D604C] text-white px-8 py-3 rounded text-base font-semibold shadow hover:bg-[#2f4a3d] transition-all duration-300"
        
        
        onClick={() => setHeading('Book Free Demo')}
      >
        Book Free Demo
      </button>

      <button
        className="bg-white text-[#3D604C] border border-[#3D604C] px-8 py-3 rounded text-base font-semibold shadow hover:bg-gray-100 transition-all duration-300"
        
        
        onClick={() => setHeading('Join Next Batch')}
      >
        Join Next Batch
      </button>
    </div>
  </div>
</header>  


      {/* Why Learn Data Science Section */}
      <AnimatedSection className="bg-[#FCF9F3] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D604C] mb-12">
            Why Learn Data Science & AI in 2025?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div  className="p-6">
              <p className="font-serif text-4xl md:text-5xl font-bold text-[#3D604C] mb-2">200K+</p>
              <p className="text-xl font-semibold">Job Openings</p>
              <p className="text-gray-600">AI & Data professionals in India</p>
            </div>
            <div  className="p-6">
              <p className="font-serif text-4xl md:text-5xl font-bold text-[#3D604C] mb-2">₹6-10L</p>
              <p className="text-xl font-semibold">Fresher Salary</p>
              <p className="text-gray-600">Average annual package</p>
            </div>
            <div  className="p-6">
              <p className="font-serif text-4xl md:text-5xl font-bold text-[#3D604C] mb-2">₹15-25L</p>
              <p className="text-xl font-semibold">Experienced Salary</p>
              <p className="text-gray-600">Average annual package</p>
            </div>
            <div  className="p-6">
              <p className="font-serif text-4xl md:text-5xl font-bold text-[#3D604C] mb-2">16K+</p>
              <p className="text-xl font-semibold">Students Trained</p>
              <p className="text-gray-600">Trusted by learners nationwide</p>
            </div>
          </div>

          <p  className="font-serif text-5xl font-bold text-[#3D604C] mb-8">
            500+
          </p>
          <p  className="text-2xl font-semibold mb-4">
            Hiring Partners
          </p>
          <p  className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to hire you
          </p>

          <p  className="text-lg text-gray-700 mt-12 max-w-4xl mx-auto leading-relaxed">
            The demand for AI and Data science professionals is skyrocketing across industries. From healthcare to finance, e-commerce to manufacturing, every sector needs skilled data scientists to drive innovation and growth. This is your opportunity to enter one of the most lucrative and future-proof career paths available today.
          </p>
        </div>
      </AnimatedSection>

      {/* Program Overview Section */}
      <AnimatedSection className="bg-[#FCF9F3] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D604C] mb-20">
            Program Overview
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            <div  className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3D604C] mb-3">Duration</h3>
              <p className="text-lg font-medium mb-2">6 Months Total</p>
              <p className="text-gray-700">4 months intensive training followed by 2 months hands-on internship experience</p>
            </div>
            <div  className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3D604C] mb-3">Learning Mode</h3>
              <p className="text-lg font-medium mb-2">Flexible Options</p>
              <p className="text-gray-700">Choose from classroom training, online live sessions, or self-paced learning based on your schedule</p>
            </div>
            <div  className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3D604C] mb-3">Eligibility</h3>
              <p className="text-lg font-medium mb-2">Open to All</p>
              <p className="text-gray-700">Graduates from any stream and final-year students can enroll</p>
            </div>
          </div>
          <p  className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive program is designed to take you from beginner to job-ready professional in just six months. Whether you're a fresh graduate or looking to switch careers, this course provides the perfect blend of theoretical knowledge and practical application. The structured curriculum ensures you master every aspect of Data Science and AI systematically.
          </p>
        </div>
      </AnimatedSection>

      {/* Complete Curriculum Section */}
      <AnimatedSection className="bg-[#FCF9F3] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D604C] mb-16">
            Complete Curriculum
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <IconCard icon={FileText} title="Data Analytics" description="Master Excel, SQL, Power BI, and Tableau for powerful data visualization and analysis" />
            <IconCard icon={FlaskConical} title="Data Science" description="Learn Python programming, Statistics, and Machine Learning algorithms" />
            <IconCard icon={Brain} title="Artificial Intelligence" description="Deep Learning, Natural Language Processing, and Computer Vision techniques" />
            <IconCard icon={Sparkles} title="Generative AI" description="RAG systems, Transformers, and cutting-edge GenAI applications" />
            <IconCard icon={Cloud} title="Cloud & MLOps" description="AWS deployment and MLOps practices for production-ready models" />
          </div>
          <p  className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our curriculum is carefully crafted to cover the entire spectrum of Data Science and AI technologies. You'll start with foundational analytics tools and progressively advance to cutting-edge AI techniques. Each module builds upon the previous one, ensuring a smooth learning curve while preparing you for real-world challenges in the industry.
          </p>
        </div>
      </AnimatedSection>

      {/* Data Analytics Mastery Section */}
      <AnimatedSection className="bg-[#FCF9F3]">
        <div className="max-w-6xl mx-auto px-6">
          <p  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D604C] mb-12 text-center">
            Data Analytics Mastery
          </p>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div  className="md:w-1/2">
              <Image src={Image1} alt="Data Analytics" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
            <div  className="md:w-1/2 text-left">
              <div  className="mb-8">
                <h3 className="text-2xl font-semibold text-[#3D604C] mb-4">Core Tools</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700" style={{ listStyleType: 'disc' }}>
                  <li>Advanced Excel functions and pivot tables</li>
                  <li>SQL queries and database management</li>
                  <li>Data cleaning and preprocessing techniques</li>
                  <li>Statistical analysis fundamentals</li>
                </ul>
              </div>
              <div  className="mb-8">
                <h3 className="text-2xl font-semibold text-[#3D604C] mb-4">Visualization</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700" style={{ listStyleType: 'disc' }}>
                  <li>Power BI dashboard creation</li>
                  <li>Tableau interactive reports</li>
                  <li>Business intelligence best practices</li>
                  <li>Data storytelling techniques</li>
                </ul>
              </div>
              <p  className="text-lg text-gray-700 leading-relaxed">
                Data Analytics forms the foundation of your journey into Data Science. You'll learn to extract meaningful insights from raw data using industry-standard tools. These skills are immediately applicable and highly valued by employers across all sectors.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Python & Machine Learning Section */}
      <AnimatedSection className="bg-[#FCF9F3]">
        <div className="max-w-6xl mx-auto px-6">
          <p  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D604C] mb-12 text-center">
            Python & Machine Learning
          </p>
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div  className="md:w-1/2 text-left">
              <div  className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-[#3D604C]">01</span>
                  <h3 className="text-2xl font-semibold text-[#3D604C]">Python Programming</h3>
                </div>
                <p className="text-gray-700 pl-11">Master Python syntax, data structures, and libraries like NumPy, Pandas, and Matplotlib</p>
              </div>
              <div  className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-[#3D604C]">02</span>
                  <h3 className="text-2xl font-semibold text-[#3D604C]">Statistical Foundation</h3>
                </div>
                <p className="text-gray-700 pl-11">Learn probability, hypothesis testing, and statistical modeling for data-driven decisions</p>
              </div>
              <div  className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-[#3D604C]">03</span>
                  <h3 className="text-2xl font-semibold text-[#3D604C]">Machine Learning</h3>
                </div>
                <p className="text-gray-700 pl-11">Implement supervised and unsupervised learning algorithms using Scikit-learn</p>
              </div>
              <div  className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-bold text-[#3D604C]">04</span>
                  <h3 className="text-2xl font-semibold text-[#3D604C]">Model Optimization</h3>
                </div>
                <p className="text-gray-700 pl-11">Feature engineering, hyperparameter tuning, and model evaluation techniques</p>
              </div>
              <p  className="text-lg text-gray-700 leading-relaxed mt-8">
                Python is the lingua franca of Data Science and AI. Our comprehensive Python training covers everything from basics to advanced machine learning implementations. You'll work on real datasets, build predictive models, and optimize them for maximum accuracy and performance.
              </p>
            </div>
            <div  className="md:w-1/2">
              <Image src={Image2} alt="Python & Machine Learning" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Advanced AI Technologies Section */}
      <AnimatedSection className="bg-[#FCF9F3] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D604C] mb-12">
            Advanced AI Technologies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            <div  className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3D604C] mb-3">Deep Learning</h3>
              <p className="text-gray-700">Neural networks, CNNs, RNNs, and advanced architectures using TensorFlow and PyTorch</p>
            </div>
            <div  className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3D604C] mb-3">Natural Language Processing</h3>
              <p className="text-gray-700">Text processing, sentiment analysis, chatbots, and language models for GenAI applications</p>
            </div>
            <div  className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3D604C] mb-3">Computer Vision</h3>
              <p className="text-gray-700">Image classification, object detection, facial recognition, and visual AI systems</p>
            </div>
          </div>
          <p  className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Dive deep into the most exciting areas of Artificial Intelligence. You'll learn to build neural networks that can recognize images, understand human language, and make intelligent decisions. These cutting-edge skills position you at the forefront of AI innovation and open doors to the most sought-after roles in the industry.
          </p>
        </div>
      </AnimatedSection>

      {/* Unique Program Features Section */}
      <AnimatedSection className="bg-[#1A345E] text-center text-white">
        <div className="max-w-6xl mx-auto px-6">
          <p  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Unique Program Features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IconCard icon={GraduationCap} title="Learn Till You Get Placed" description="Unlimited access to course materials and mentorship until you secure your dream job. We're committed to your success." isDarkBackground />
            <IconCard icon={BookOpen} title="Access to 12+ Courses" description="One-time fee gives you lifetime access to our entire course library, including advanced specializations." isDarkBackground />
            <IconCard icon={Lightbulb} title="Paid Internship" description="Earn ₹9,000–₹45,000 stipend during your 2-month internship while gaining real industry experience." isDarkBackground />
            <IconCard icon={Users} title="IIT/IIM Alumni Mentorship" description="Learn from the best minds in the industry with personalized guidance from top-tier institution alumni." isDarkBackground />
            <IconCard icon={Rocket} title="Real AI Projects" description="Build production-grade AI applications that showcase your skills to potential employers." isDarkBackground />
          </div>
        </div>
      </AnimatedSection>

      {/* Cloud Deployment & MLOps Section */}
      <AnimatedSection className="bg-[#FCF9F3]">
        <div className="max-w-6xl mx-auto px-6">
          <p  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D604C] mb-12 text-center">
            Cloud Deployment & MLOps
          </p>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div  className="md:w-1/2 text-left">
              <p  className="text-lg text-gray-700 leading-relaxed mb-6">
                Learning to build models is just the beginning. The real value comes from deploying them in production environments where they can solve real business problems. Our Cloud and MLOps module teaches you how to take your AI models from development to deployment.
              </p>
              <p  className="text-lg text-gray-700 leading-relaxed mb-6">
                You'll master AWS services for machine learning, learn containerization with Docker, implement CI/CD pipelines, and understand model monitoring and maintenance. These skills are crucial for becoming a complete AI professional who can deliver end-to-end solutions.
              </p>
              <ul  className="list-disc pl-5 space-y-2 text-gray-700">
                <li >AWS SageMaker and EC2 for ML deployment</li>
                <li >Docker and Kubernetes for containerization</li>
                <li >MLflow for experiment tracking</li>
                <li >Model versioning and monitoring</li>
                <li >Automated retraining pipelines</li>
              </ul>
            </div>
            <div  className="md:w-1/2">
              <Image src={Image3} alt="Cloud & MLOps" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Start Your AI Career Today Section (Footer-like) */}
      <AnimatedSection className="bg-[#1A345E] text-white text-center">
        <div className="max-w-6xl mx-auto p-6 bg-white text-black">
          <h2  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Start Your AI Career Today
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ">
            <CircularStat percentage="95%" title="Success Stories" subtitle="Our students get placed in top companies" />
            <CircularStat percentage="100%" title="Hands-on Learning" subtitle="Every concept backed by practical projects" />
            <CircularStat percentage="24/7" title="Support Available" subtitle="Round-the-clock doubt resolution and guidance" />
          </div>

          <p  className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Join thousands of successful alumni who have transformed their careers with SocialPrachar. Our proven methodology, expert mentorship, and industry connections ensure you're not just learning Data Science and AI—you're building a thriving career in one of the most exciting fields of the 21st century.
          </p>
          <p  className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">





            Don't wait for the perfect moment. The demand for AI professionals is growing exponentially, and companies are actively seeking skilled talent. Take the first step towards your dream career today.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              className="bg-[#3D604C] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#304d3e] transition-colors duration-300"
              
              
              onClick={() => setHeading('Book Free Demo Class')}
            >
              Book Free Demo Class
            </button>
            <button
              className="bg-white text-[#3D604C] px-8 py-3 rounded-lg text-lg font-semibold shadow-lg border-2 border-[#3D604C] hover:bg-gray-100 transition-colors duration-300"
              
              
              onClick={() => setHeading('Talk to Career Counselor')}
            >
              Talk to Career Counselor
            </button>
          </div>
        </div>
      </AnimatedSection>
      {heading && <DataAnalyticsForm isPopup={true} heading={heading} onClose={closePopup} />}
    </div>
  );
}
