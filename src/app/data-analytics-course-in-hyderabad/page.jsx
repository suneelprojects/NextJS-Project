'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Briefcase,
    CalendarDays,
    Award,
    ClipboardList,
    User,
    Lightbulb,
    Info,
    Phone,
    MapPin,
    MessageCircle,
    LineChart,
    Gauge,
    Laptop,
    BarChart,
    Palette,
    CheckCircle,
    File,
} from 'lucide-react';
import Image from 'next/image';
import img1 from "@/assets/articleAssets/artical-img-1.png";
import img2 from "@/assets/articleAssets/artical-img-2.png";
import img3 from "@/assets/articleAssets/artical-img-3.png";
import img4 from  "@/assets/articleAssets/artical-img-4.png";
import img5 from  "@/assets/articleAssets/artical-img-5.png";
import SignInForm from '@/components/Forms/coursesForm';




const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    viewport: { once: true, amount: 0.3 },
};

const buttonVariants = {
    hover: { scale: 1.02, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)' },
    tap: { scale: 0.98 },
};


export default function Page() {
    const primaryColor = '#ef4444';
    const secondaryColor = '#fef3c7';
    const accentColor = '#fecaca';
    const backgroundColor = '#fffbeb';

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    
      const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
      };


    

    return (
        <div className="min-h-screen font-sans" >
            {/* Hero Section */}
            <section className="py-16 md:py-24 px-4 relative overflow-hidden" >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className=" rounded-2xl  p-8 md:p-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Best Data Analytics Course in Hyderabad with 100% Placement Support
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 mb-8">
                            Transform your career with India&apos;s most comprehensive job-ready Data Analytics programme. Master in-demand
                            tools, work on real projects, and land your dream role with guaranteed placement support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/data-analytics-course-training-hyderabad">
                            <motion.button
                                className="px-8 py-3 rounded text-white font-semibold shadow-lg"
                                style={{ backgroundColor: primaryColor }}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Enroll Now – Limited Seats
                            </motion.button>
                            </Link>
                            <motion.button
                             onClick={togglePopup}
                                className="px-8 py-3 rounded font-semibold border-2 bg-white"
                                style={{ borderColor: primaryColor, color: primaryColor }}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Download Free Curriculum
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Launch Career Section */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Launch Your Data Analytics Career in Hyderabad
                            </p>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Searching for the <span className="font-bold text-xl" style={{ color: primaryColor }}>best Data Analytics course in Hyderabad</span> to kickstart your career
                                in tech? At <span className="font-bold text-xl">SocialPrachar</span>, we     a comprehensive job-ready Data Analytics
                                programme designed for graduates and working professionals.
                            </p>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Our curriculum goes beyond theory. You&apos;ll learn from seasoned industry mentors
                                with years of hands-on experience, work on authentic business projects that
                                mirror real-world challenges, and develop the technical confidence needed to
                                excel in interviews.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our proven track record: students have successfully secured positions as <span className="font-bold">Data Analysts, Business Analysts, and BI
                                    Developers</span> with an impressive <span className="font-bold">95% placement success rate</span>.
                            </p>
                        </motion.div>
                        <motion.div className="flex flex-col gap-6" variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                            <Image
                                src={img1}
                                alt="Students learning"
                                className="rounded-xl  w-full"
                            />
                            <div className="flex items-start p-6 rounded-xl bg-red-50 border-2 border-red-200">
                                <File className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                                <p className="text-base text-gray-800">
                                    <span className="font-bold">16,000+ learners</span> have already transformed their careers with SocialPrachar. Join Hyderabad's most trusted Data Analytics training institute today.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            {/* Why Choose Section */}
            <section className="py-20 md:py-24 px-4 bg-[#fff7f4]">
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <motion.p
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 "
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        Why Choose Our Data Analytics Programme
                    </motion.p>

                    <motion.p
                        className="text-base text-gray-700 mb-14  mx-auto "
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        We've designed every aspect of our course to ensure you're not just learning —
                        you're building a career. Here's what sets <span className="font-semibold">SocialPrachar</span> apart from other training institutes in Hyderabad:
                    </motion.p>

                    {/* 🔹 Top 3 Cards - With Icons */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {[
                            {
                                icon: Briefcase,
                                title: "100% Placement Support",
                                desc: "Comprehensive career guidance, job referrals to partner companies, and dedicated placement assistance until you land your ideal role."
                            },
                            {
                                icon: CalendarDays,
                                title: "6-Month Complete Programme",
                                desc: "4 months of intensive training followed by 2 months of paid internship with real projects at Vajra.ai."
                            },
                            {
                                icon: Award,
                                title: "Master Industry Tools",
                                desc: "Gain expertise in Excel, SQL, Power BI, Tableau, and Python — the exact tools used by top companies."
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col px-8 py-3 rounded bg-[#ffe5db] border border-[#f4b8a8] shadow-md hover:shadow-lg transition-all duration-300"
                                variants={fadeInUp}
                            >
                                <div className="p-2 bg-rounded-full bg-[#ffcdc0] rounded-xl mb-6 w-fit">
                                    {React.createElement(item.icon, { className: "h-8 w-8 text-[#e64545]" })}
                                </div>
                                <p className="text-xl font-bold text-gray-900 mb-3">{item.title}</p>
                                <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* 🔹 Bottom 4 Cards - 2x2 Grid, No Icons */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {[
                            {
                                title: "Real-World Case Studies",
                                desc: "Work on authentic projects from banking, retail, and e-commerce domains. Build a portfolio that impresses recruiters."
                            },
                            {
                                title: "Interview Preparation",
                                desc: "Professional resume building, comprehensive mock interviews, and one-on-one feedback from industry experts."
                            },
                            {
                                title: "Affordable Investment",
                                desc: "Competitive fees with scholarships available up to 100% for deserving candidates. Don't let finances hold back your dreams."
                            },
                            {
                                title: "Flexible Learning Options",
                                desc: "Choose from classroom sessions at our KPHB campus, live online training, or self-paced learning through our mobile app."
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col p-8 rounded-xl bg-white border-2  border-[#ffcdc0] shadow-md hover:shadow-lg transition-all duration-300"
                                variants={fadeInUp}
                            >
                                <p className="text-xl font-bold text-gray-900 mb-3">{item.title}</p>
                                <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>



            {/* Accessible Institute Section */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Hyderabad&apos;s Most Accessible Data Analytics Institute
                                </p>
                            </div>

                            <h4 className="text-xl font-bold text-gray-800 mb-6">Your Search Ends Here</h4>
                            <p className="text-base text-gray-700 mb-4 leading-relaxed">
                                Searching for the <span className="font-bold" style={{ color: primaryColor }}>best Data Analytics institute near me</span> or
                                <span className="font-bold" style={{ color: primaryColor }}> affordable training in Kukatpally, Ameerpet, or Madhapur</span>?
                                Your search ends at SocialPrachar.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { num: '1', title: 'Convenient KPHB Location', desc: 'Easily accessible from Kukatpally, Ameerpet, Madhapur.' },
                                    { num: '2', title: 'Live Online Classes', desc: 'Join from anywhere with interactive sessions.' },
                                    { num: '3', title: 'Flexible Batch Timings', desc: 'Weekend and weekday batches for working professionals.' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-red-100 text-black rounded-full font-bold mr-4">
                                            {item.num}
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900">{item.title}:</span>
                                            <span className="text-gray-700"> {item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                            <Image
                                src={img2}
                                alt="Institute building"
                                className="rounded-xl shadow-lg w-full"
                            />
                        </motion.div>

                    </div>
                    <p className="m-5">Become a certified Data Analyst in just six months and open doors to exciting career opportunities across India's thriving tech ecosystem. Don't let location be a barrier — we've made world-class Data Analytics training accessible to everyone in Hyderabad and beyond.</p>
                </div>
            </section>

            {/* Course Structure Section */}
            <section className="py-16 md:py-20 px-4" style={{ backgroundColor: secondaryColor }}>
                <div className="max-w-6xl mx-auto">
                    <motion.p
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 "
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        Comprehensive Course Structure & Highlights
                    </motion.p>
                    <motion.p
                        className="text-base text-gray-700 mb-10   mx-auto"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        Our meticulously crafted curriculum covers everything you need to become a job-ready Data Analyst. Here's a detailed overview of what you'll receive:
                    </motion.p>

                    <motion.div
                        className="bg-white rounded shadow-xl p-8 mb-12 "
                        // style={{ borderColor: primaryColor }}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <div className="grid gap-4 text-gray-800">
                            {[
                                { label: 'Duration', value: '6 Months (4 Months Training + 2 Months Paid Internship)' },
                                { label: 'Learning Modes', value: 'Classroom (KPHB) / Live Online / Self-paced App' },
                                { label: 'Core Tools', value: 'Excel, SQL, Power BI, Python, Tableau' },
                                { label: 'Internship Partner', value: 'Vajra.ai — Live projects with industry mentorship' },
                                { label: 'Certifications', value: 'IBM Data Analytics, Microsoft Power BI, Google Data Analytics' },
                                { label: 'Placement Support', value: 'Unlimited mock interviews, resume reviews, 100+ partner referrals' },
                            ].map((item, idx) => (
                                <div key={idx} className="grid md:grid-cols-[200px_1fr] gap-2 pb-3 border-b  border-gray-100 last:border-0">
                                    <div className="font-bold text-gray-900">{item.label}</div>
                                    <div className="text-gray-700">{item.value}</div>
                                </div>
                            ))}
                            <div className="grid md:grid-cols-[200px_1fr] gap-2 pt-2">
                                <div className="font-bold text-gray-900">Course Investment</div>
                                <div>
                                    <span className="line-through text-gray-500">₹25,000</span>
                                    <span className="ml-3 font-bold text-2xl" style={{ color: primaryColor }}>₹18,000 Special Offer</span>
                                    {/* <span className="ml-2 text-sm text-gray-600">Special Offer</span> */}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="
    relative flex flex-col md:flex-row items-center justify-center 
    md:space-x-12 space-y-12 md:space-y-0 mb-12
  "
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {/* Connecting Line */}
                        <div
                            className="
      absolute bg-red-200
      md:w-[80%] md:h-[2px] md:top-1/2 md:left-1/2 md:-translate-x-1/2
      w-[2px] h-[80%] left-1/2 top-1/2 -translate-y-1/2 md:translate-y-0
    "
                        ></div>

                        {[
                            { num: '1', title: 'Month 1-2: Foundations', desc: 'Master Excel, SQL fundamentals, and data cleaning techniques' },
                            { num: '2', title: 'Month 3-4: Advanced Skills', desc: 'Learn Power BI, Tableau, Python, and statistical analysis' },
                            { num: '3', title: 'Month 5-6: Real Experience', desc: 'Paid internship with Vajra.ai working on live business projects' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="
        relative z-10 flex flex-col items-center text-center 
        bg-white rounded-xl p-6 shadow-md max-w-xs w-full
      "
                                variants={fadeInUp}
                            >
                                {/* Circle */}
                                <div className="h-12 w-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full font-bold text-xl mb-4 border-2 border-red-200">
                                    {item.num}
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>


                    <motion.div
                        className="flex items-start p-4 rounded-xl bg-red-50 border-2 border-red-200"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <File className="h-4 w-4 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <p className="text-base text-gray-800">
                            <span className="font-bold">Bonus:</span> Lifetime access to course materials, recorded sessions, and our exclusive alumni network for continuous learning and career support
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Career Opportunities Section */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.p
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        Your Future Career Opportunities
                    </motion.p>
                    <motion.p
                        className="text-base text-gray-700 mb-12 text-center max-w-4xl mx-auto"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        Upon completion, you&apos;ll be qualified for high-demand positions. Our graduates work at TCS, Infosys, Deloitte, Accenture, and innovative start-ups.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <Image
                            src={img3}
                            alt="Career opportunities"
                            className="rounded-xl shadow-lg"
                            
                        />
                        <motion.div
                            className="space-y-6"
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.1 }}
                        >
                            {[
                                { icon: LineChart, title: 'Data Analyst', salary: '₹4.5-7 LPA', desc: 'Analyse business data to drive decisions.' },
                                { icon: Gauge, title: 'Business Intelligence Analyst', salary: '₹5-8 LPA', desc: 'Transform data into actionable insights.' },
                                { icon: Laptop, title: 'Power BI Developer', salary: '₹4-7 LPA', desc: 'Create interactive dashboards and reports.' },
                            ].map((item, idx) => (
                                <motion.div key={idx} className="flex items-start" variants={fadeInUp}>
                                    <div className="p-3 bg-red-100 rounded-lg mr-4 flex-shrink-0">
                                        {React.createElement(item.icon, { className: 'h-6 w-6 text-red-600' })}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-sm font-semibold mb-1" style={{ color: primaryColor }}>Average salary: {item.salary}</p>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {[
                            { title: 'Reporting Analyst', desc: 'Design reporting systems tracking KPIs. Work with stakeholders. Salary: ₹3.5-6 LPA.' },
                            { title: 'Data Visualisation Specialist', desc: 'Create compelling visual stories from complex datasets. Salary: ₹4-7 LPA.' },
                        ].map((item, idx) => (
                            <motion.div key={idx} className="p-6 bg-white rounded-xl shadow-sm   border-2 border-[#ffcdc0]" variants={fadeInUp}>
                                {/* <div className="p-3 bg-red-100 rounded-lg w-fit mb-4">
                                    {React.createElement(item.icon, { className: 'h-6 w-6 text-red-600' })}
                                </div> */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {[
                            { stat: '95%', title: 'Placement Success', desc: 'Students secure jobs within 3 months' },
                            { stat: '₹5.2L', title: 'Average Salary', desc: 'Competitive packages across IT roles' },
                            { stat: '100+', title: 'Hiring Partners', desc: 'Direct connections to top companies' },
                        ].map((item, idx) => (
                            <motion.div key={idx} className="flex flex-col items-center" variants={fadeInUp}>
                                <p className="text-5xl font-bold mb-2" style={{ color: primaryColor }}>{item.stat}</p>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Start Journey Section */}
            <section className="py-16 md:py-20 px-4" style={{ backgroundColor: accentColor }}>
                <div className="max-w-6xl mx-auto">
                    <motion.p
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 "
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        Start Your Data Analytics Journey Today
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <Image
                            src={img4}
                            alt="Join us"
                            className="rounded-xl shadow-lg"
                           
                        />
                        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                            <p className="text-2xl font-bold text-gray-900 mb-4">Limited Seats – Act Now</p>
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Our next batch begins on <span className="font-bold" style={{ color: primaryColor }}>27th October</span> with limited seats to maintain
                                personalized attention. Don&apos;t miss this opportunity.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Ready to enroll, review our curriculum, or explore scholarships? We&apos;re here to help you take the next step.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {[
                            { icon: Phone, title: 'Call Us', detail: '+91 8019479419', desc: 'Speak with career counsellors' },
                            { icon: MapPin, title: 'Visit Campus', detail: 'KPHB, Hyderabad', desc: 'Tour facilities, meet trainers' },
                            { icon: MessageCircle, title: 'WhatsApp', detail: 'Instant Response', desc: 'Quick answers to queries' },
                        ].map((item, idx) => (
                            <motion.div key={idx} className="p-6 bg-white rounded-xl text-center shadow-sm" variants={fadeInUp}>
                                {React.createElement(item.icon, { className: 'h-8 w-8 text-red-600 mx-auto mb-3' })}
                                <h4 className="text-lg font-semibold text-gray-900 mb-1">  {item.title}</h4>
                                <p className="text-base font-bold text-gray-800 mb-1">{item.detail}</p>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap  gap-4 mb-10"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <Link href="/data-analytics-course-training-hyderabad">
                        <motion.button
                            className="px-8 py-3 rounded text-white font-semibold shadow-lg"
                            style={{ backgroundColor: primaryColor }}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Enroll in October Batch
                        </motion.button>
                        </Link>

                        <motion.button
                        onClick={togglePopup}
                            className="px-8 py-3 rounded font-semibold border-2 bg-white"
                            style={{ borderColor: primaryColor, color: primaryColor }}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Download Free Curriculum
                        </motion.button>
                        <Link href="/scholarship-test">
                        <motion.button
                            className="px-8 py-3 rounded font-semibold border-2 bg-white"
                            style={{ borderColor: primaryColor, color: primaryColor }}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Apply for 100% Scholarship
                        </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="flex items-start p-6 rounded-xl bg-red-50 border-2 border-red-200"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <File className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                        <p className="text-base text-gray-800">
                            <span className="font-bold">Special Offer:</span> Enroll before 20th October for
                            <span className="font-bold" style={{ color: primaryColor }}> ₹15,000 discount</span> plus free Excel Mastery workshop (₹5,000 value).Transform your career with India's most comprehensive Data Analytics programme.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions (FAQ)
                    </motion.h2>
                    <motion.p
                        className="text-base text-gray-700 mb-12 text-center max-w-4xl mx-auto"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        Common questions about our Data Analytics course, from structure to career opportunities.
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.05 }}
                    >
                        {[
                            { q: 'How long is the course?', a: '6 months: 4 months training + 2 months paid internship. Choose classroom, online, or app-based learning.' },
                            { q: 'Who is eligible?', a: 'Both graduates and working professionals. No prior technical background required.' },
                            { q: 'What tools are covered?', a: 'Advanced Excel, SQL, Power BI, Python (Pandas, NumPy, Matplotlib), and Tableau.' },
                            { q: 'What placement support?', a: 'Unlimited mock interviews, resume reviews, direct referrals to 100+ partner companies.' },
                            { q: 'What is the course fee?', a: 'Special offer: ₹18,000 (originally ₹25,000). Enrol before Oct 20th for extra ₹15,000 discount.' },
                            { q: 'Flexible batch timings?', a: 'Yes, weekend and weekday batches for working professionals and students.' },
                            { q: 'What certifications?', a: 'IBM Data Analytics, Microsoft Power BI, and Google Data Analytics Professional Certificate.' },
                            { q: 'Tell me about internship?', a: '2-month paid internship with Vajra.ai on live projects, mentored by industry professionals.' },
                            { q: 'Career opportunities?', a: 'Data Analyst, BI Analyst, Power BI Developer, Reporting Analyst. Avg salary: ₹5.2 LPA.' },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow-sm border-l-[8px] border-[2px] border-[#ffcdc0] h-full"
                                variants={fadeInUp}
                            >
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </motion.div>
                        ))}
                    </motion.div>



                </div>
                <Image
                    src={img5}
                    alt="Classroom scene"
                    className="
    w-full              /* ensures full width responsiveness */
    max-w-sm            /* default max width for small screens *
    sm:max-w-md         /* slightly larger on small devices */
    md:max-w-2xl        /* medium screens */
    lg:max-w-4xl        /* large screens */
    rounded-lg 
     
    mx-auto 
    mt-12
  "
                
                />
            </section>
            {isPopupVisible && (
                    <SignInForm
                      onClose={togglePopup}
                      courseID={9}
                      actionType="Button:Download Curriculum"
                      slug="data-analytics-course-training-hyderabad"
                    />
                  )}
        </div>
    );
}