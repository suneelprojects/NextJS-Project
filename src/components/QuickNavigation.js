"use client";
import { Calculator, GraduationCap, BookOpen, Code, Star, Award, IndianRupee, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function QuickNavigation({ openDialog, scrollToSection }) {
  const scrollContainerRef = useRef(null);
  
  const btn =
    "border px-4 py-2 rounded text-sm font-bold flex items-center gap-2 hover:bg-orange-300 transition whitespace-nowrap";

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="sticky top-[0px] bg-transparent py-3">
      <div className="bg-white">
        {/* Mobile/Tablet view (up to 770px) - Horizontal scroll with arrows */}
        <div className="max-[770px]:flex max-[770px]:items-center max-[770px]:gap-2 hidden">
          <button 
            onClick={() => scroll("left")}
            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <button onClick={() => openDialog("calculator")} className={btn}>
              <Calculator className="w-4 h-4" /> Stipend Calculator
            </button>
            <button onClick={() => scrollToSection("course-flow-section")} className={btn}>
              <GraduationCap className="w-4 h-4" /> Program Overview
            </button>
            <button onClick={() => scrollToSection("what-will-you-learn-section")} className={btn}>
              <BookOpen className="w-4 h-4" /> What will you learn
            </button>
            <button onClick={() => scrollToSection("projects")} className={btn}>
              <Code className="w-4 h-4" /> Projects
            </button>
            <button onClick={() => scrollToSection("success-stories")} className={btn}>
              <Star className="w-4 h-4" /> Success Stories
            </button>
            <button onClick={() => scrollToSection("certifications")} className={btn}>
              <Award className="w-4 h-4" /> Certifications
            </button>
            <button onClick={() => scrollToSection("pricing")} className={btn}>
              <IndianRupee className="w-4 h-4" /> Pricing
            </button>
          </div>
          
          <button 
            onClick={() => scroll("right")}
            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop view (above 770px) - Wrapped layout */}
        <div className="max-[770px]:hidden flex flex-wrap justify-center gap-2">
          <button onClick={() => openDialog("calculator")} className={btn}>
            <Calculator className="w-4 h-4" /> Stipend Calculator
          </button>
          <button onClick={() => scrollToSection("course-flow-section")} className={btn}>
            <GraduationCap className="w-4 h-4" /> Program Overview
          </button>
          <button onClick={() => scrollToSection("what-will-you-learn-section")} className={btn}>
            <BookOpen className="w-4 h-4" /> What will you learn
          </button>
          <button onClick={() => scrollToSection("projects")} className={btn}>
            <Code className="w-4 h-4" /> Projects
          </button>
          <button onClick={() => scrollToSection("success-stories")} className={btn}>
            <Star className="w-4 h-4" /> Success Stories
          </button>
          <button onClick={() => scrollToSection("certifications")} className={btn}>
            <Award className="w-4 h-4" /> Certifications
          </button>
          <button onClick={() => scrollToSection("pricing")} className={btn}>
            <IndianRupee className="w-4 h-4" /> Pricing
          </button>
        </div>
      </div>
    </section>
  );
}