'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import blackLine from '@/assets/courses/blackLine.svg';
import { data } from "@/app/courses/mainCoursePage/cardsSection/CardData";
import { useParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
    const [studentsEnrolled, setStudentsEnrolled] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [completionRating, setCompletionRating] = useState(0);
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1024
    );
    const [hasAnimated, setHasAnimated] = useState(false);
    const [card, setCard] = useState(null);
    const [testimonialImage, setTestimonialImage] = useState('');
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
        if (!card) return;

        const updateTestimonialImage = () => {
            if (screenWidth < 768) {
                setTestimonialImage(card?.TestmonialsCommentsImage2 || '');
            } else {
                setTestimonialImage(card?.TestmonialsCommentsImage1 || '');
            }
        };

        updateTestimonialImage();

        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setScreenWidth(window.innerWidth);
                updateTestimonialImage();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth, card]);

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
                      console.log("Stats visible?", entry.isIntersecting);

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

    return (
      <div className={styles.testimonials}>
        <p className={styles.heading}>TESTIMONIALS</p>

        {/* Section 1 */}
        <div className={`${styles.section} col-md-8`}>
          <h3 className={styles.subHeading}>
            <span className={styles.highlatedWord}>17,000+ students</span> have
            already transformed their lives
          </h3>

          <Image
            src={blackLine}
            alt="Decorative Line"
            className={styles.line}
            data-aos="fade-right"
            data-aos-duration="1500"
          />

          {testimonialImage ? (
            <Image
              src={testimonialImage}
              alt="Student Testimonials"
              className={styles.image}
              width={800}
              height={500}
              layout="responsive"
              objectFit="cover"
            />
          ) : (
            <p>No image available for this card.</p>
          )}
        </div>

        {/* Section 2 */}
        <div className={styles.section}>
          <h3 className={`${styles.subHeading1} fw-bold`}>
            <span style={{ color: "#ff5003" }}>Numbers </span>that speak for
            themselves
          </h3>
          <div className={styles.statsContainer} ref={statsRef}>
            <div className={styles.stat}>
              <span className={styles.statValue}>
                {studentsEnrolled.toLocaleString()}K
              </span>
              <p className={styles.statLabel}>Students Enrolled</p>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{averageRating}/5</span>
              <p className={styles.statLabel}>Average Rating</p>
            </div>
            {screenWidth > 790 && (
              <div className={styles.stat}>
                <span className={styles.statValue}>{completionRating}%</span>
                <p className={styles.statLabel}>Completion Rating</p>
              </div>
            )}
          </div>

          {/* Carousel */}
          <div className={styles.carousel} ref={carouselRef}>
            <div className={styles.carouselImages}>
              {studentPlacedImages.length > 0 ? (
                studentPlacedImages
                  .concat(studentPlacedImages)
                  .map((student, index) => (
                    <div key={index} className={styles.carouselImage}>
                      <Image src={student.image} alt={`Student ${index + 1}`} />
                    </div>
                  ))
              ) : (
                <p>No placement images available for this course.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonials;
