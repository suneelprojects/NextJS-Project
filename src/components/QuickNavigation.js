  "use client";
  import { Calculator, GraduationCap, BookOpen, Code, Star, Award, IndianRupee } from "lucide-react";

  export default function QuickNavigation({ openDialog, scrollToSection }) {
    const btn =
      "border px-4 py-2 rounded text-sm font-bold flex items-center gap-2   hover:bg-orange-200  transition";

    const btns = "border px-4 py-2 rounded text-sm font-bold flex items-center gap-2 bg-[#553CDF] text-white hover:bg-[#35258f]  transition";


    return (
      <section className="  bg-white py-3">
        <div className="flex flex-wrap justify-center gap-2  bg-white">
          <button onClick={() => openDialog("calculator")} className={btns}>
            <Calculator className="w-4 h-4" /> Stipend Calculator
          </button>
          <button onClick={() => scrollToSection("pricing")} className={btn}>
            <IndianRupee className="w-4 h-4" /> Pricing
          </button>
          <button onClick={() => scrollToSection("course-flow-section")} className={btn}>
            <GraduationCap className="w-4 h-4" /> Course Preview
          </button>
          {/* <button onClick={() => scrollToSection("what-will-you-learn-section")} className={btn}>
            <BookOpen className="w-4 h-4" /> What will you learn
          </button> */}
          <button onClick={() => scrollToSection("projects")} className={btns}>
            <Code className="w-4 h-4" /> Projects
          </button>
          <button onClick={() => scrollToSection("success-stories")} className={btn}>
            <Star className="w-4 h-4" /> Success Stories
          </button>
          <button onClick={() => scrollToSection("certifications")} className={btn}>
            <Award className="w-4 h-4" /> Certs
          </button>
          
        </div>
      </section>
    );
  }
