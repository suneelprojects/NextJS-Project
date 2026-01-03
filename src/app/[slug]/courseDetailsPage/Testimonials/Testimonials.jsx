'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import blackLine from '@/assets/courses/blackLine.svg';
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData";
import { useParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonialData = [
  {
    name: "Usharani Usharani",
    reviews: 1,
    rating: 5,
    time: "5 weeks ago",
    content: "Social prachar's Data science course was well structured, covering everything from statistics to machine learning. The practical assignments and real time studies gave me a great understanding of industry applications. The course also helped me gain confidence in python programming and data manipulation."
  },
  {
    name: "pavani yadav",
    reviews: 2,
    rating: 5,
    time: "5 weeks ago",
    content: "I highly recommend social prachar data science course to any one looking to break into the filed .the instructor are experts in the field and provide in depth knowledge of machine learning, data analysis and python programming.the course materials were well organised, and the practical projects were valuable"
  },
  {
    name: "Sameer Mujahid Shaik",
    reviews: 2,
    rating: 5,
    time: "2 weeks ago",
    content: "I recently finished Social Prachar's Data Science with AI course, and am very pleased with the experience! Everything from machine learning, statistics, and Python programming to practical AI applications was covered in the well-organized curriculum. The teachers made difficult ideas easy to understand by being well informed, understanding, and always willing to answer questions. The course's practical assignments and hands-on projects were among its best features; they gave me the confidence I needed to tackle real-world data difficulties."
  },
  {
    name: "CHETAN KANDULA",
    reviews: 2,
    rating: 5,
    time: "2 days ago",
    content: "Social Prachar truly changed my life! Their data science program is so well-structured and practical, it felt like every class was bringing me closer to my dream career. The faculty is amazing—so patient, knowledgeable, and always ready to help no matter how basic or complex the doubt. The hands-on projects and real-world case studies made learning exciting and super relevant."
  },
  {
    name: "Triveni K",
    reviews: 1,
    rating: 5,
    time: "5 weeks ago",
    content: "The fullstack course at social prachar was an incredible experience.the content was very detailed,and the instructors made learning fun and engaging.the practical coding assignments were challenging but rewarding,and I now feel fully equipped to handle full stack development projects in the industry"
  },
  {
    name: "Tanuja",
    reviews: 13,
    rating: 5,
    time: "a week ago",
    content: "It was very pleasant experience with Social Prachar as I have taken the Data science course with internship included, instructors/trainers are very experienced and highly motivated they have their own insights to share with us, my instructors was Sai Kamal Sir, He has suggested and advised all the possible ways to keep ourself occupied with ML projects, I did cracked a job related to the same filed before the course completion."
  },
  {
    name: "Vinay Yadav Challa",
    reviews: 3,
    rating: 5,
    time: "6 months ago",
    content: "Only few institutes in hyderabad which are offering job ready programs in Fullstack Java web development. Am happy that I have selected socialprachar, now am in 3rd month of the training program, everything is good till now"
  },
  {
    name: "bhagya lakshmi",
    reviews: 1,
    rating: 5,
    time: "7 months ago",
    content: "One of the finest and best institute in hyderabad, very much satisfied with Fullstack Java classes , they are teaching with realtime projects and it is helping to get better understanding of concepts, I think it will help to get good job in my opinion."
  },
  {
    name: "Sai Venkatesh Betha",
    reviews: 6,
    rating: 5,
    time: "2 months ago",
    content: "SocialPrachar's Data Analytics course offers a solid foundation in essential data skills. The hands-on lessons cover data cleaning, visualization, and reporting, making complex concepts easier to grasp. With supportive instructors, learners feel more confident working with large datasets by the end of the course. Thank you Social Prachar"
  }
];

const Testimonials = () => {
  const [studentsEnrolled, setStudentsEnrolled] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [completionRating, setCompletionRating] = useState(0);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const [card, setCard] = useState(null);
  const statsRef = useRef(null);
  const carouselRef = useRef(null);
  const { slug } = useParams();
  const studentPlacedImages = card?.studentPlacedImages || [];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (slug) {
      const cardDetails = data.find((item) => item.slug === slug);
      setCard(cardDetails);
    }
  }, [slug]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setScreenWidth(window.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animateCount = (setter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(interval);
      } else {
        setter(Math.round(start * 10) / 10);
      }
    }, 50);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCount(setStudentsEnrolled, 17, 1000);
            animateCount(setAverageRating, 4.9, 1000);
            animateCount(setCompletionRating, 86, 1000);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const step = 1.5;
    const interval = 10;

    const scrollInterval = setInterval(() => {
      scrollAmount += step;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      carousel.scrollLeft = scrollAmount;
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [studentPlacedImages]);

  // SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Course",
      "name": card?.courseTitle || "Professional Training Programs",
      "provider": {
        "@type": "Organization",
        "name": "SocialPrachar",
        "url": "https://socialprachar.com"
      }
    },
    "ratingValue": "4.9",
    "reviewCount": "17000",
    "bestRating": "5",
    "worstRating": "1"
  };

  const reviewsSchema = testimonialData.map(t => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": t.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating.toString()
    },
    "reviewBody": t.content,
    "publisher": {
      "@type": "Organization",
      "name": "Google / Student Review"
    }
  }));

  return (
    <div className={`${styles.testimonials} bg-gray-50 py-16 px-4 sm:px-6 lg:px-8`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center mb-12">
          <p className={styles.heading}>TESTIMONIALS</p>
          <h3 className="text-3xl md:text-5xl font-bold text-center mt-8 text-gray-900 leading-tight max-w-4xl">
            <span className="text-orange-600">17,000+ students</span> have already transformed their lives
          </h3>
          <Image
            src={blackLine}
            alt='underline'
            className="w-48 h-auto -mt-2 opacity-50"
            data-aos="fade-right"
          />
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonialData.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <span className="text-xs text-gray-500">• {testimonial.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic flex-grow">
                "{testimonial.content}"
              </p>
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400">{testimonial.reviews} Google reviews</span>
                <div className="flex items-center gap-1 grayscale opacity-50">
                  <span className="text-[10px] font-bold text-gray-400">Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div id="success-stories" className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            <span className="text-orange-600">Numbers </span>that speak for themselves
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16" ref={statsRef}>
            <div className="text-center group p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
              <span className="block text-4xl md:text-5xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {studentsEnrolled.toLocaleString()}K+
              </span>
              <p className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">Students Enrolled</p>
            </div>
            <div className="text-center group p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
              <span className="block text-4xl md:text-5xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {averageRating}/5
              </span>
              <p className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">Average Rating</p>
            </div>
            <div className="hidden md:block text-center group p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
              <span className="block text-4xl md:text-5xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {completionRating}%
              </span>
              <p className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">Placement Rate</p>
            </div>
          </div>

          {/* Placement Carousel */}
          <div className="relative overflow-hidden group">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            <div className={styles.carousel} ref={carouselRef}>
              <div className={styles.carouselImages}>
                {studentPlacedImages.length > 0 ? (
                  studentPlacedImages
                    .concat(studentPlacedImages)
                    .map((student, index) => (
                      <div key={index} className="flex-shrink-0 w-48 h-64 relative rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow ">
                        <Image
                          src={student.image}
                          alt={`Success Story ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ))
                ) : (
                  <div className="w-full text-center py-10 text-gray-400">Loading placement records...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
