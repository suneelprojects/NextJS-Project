"use client";
import { Calculator, GraduationCap, Star, IndianRupee } from "lucide-react";

export default function QuickNavigation({ openDialog, scrollToSection }) {
  const btn =
    "border px-4 py-2 rounded text-sm font-bold flex items-center gap-2   hover:bg-orange-200  transition";

  const btns = "border px-4 py-2 rounded text-sm font-bold flex items-center gap-2 bg-[#553CDF] text-white hover:bg-[#35258f]  transition";


  return (
    <section className="  bg-white py-3">
      <div className="flex flex-wrap items-center justify-center gap-2 bg-white">
        <button onClick={() => openDialog("calculator")} className={btns.replace('text-sm', 'text-xs')}>
          <Calculator className="w-3 h-3" /> Stipend Calculator
        </button>
        <button onClick={() => scrollToSection("pricing")} className={btn.replace('text-sm', 'text-xs')}>
          <IndianRupee className="w-3 h-3" /> Pricing
        </button>
        <button onClick={() => scrollToSection("course-flow-section")} className={btn.replace('text-sm', 'text-xs')}>
          <GraduationCap className="w-3 h-3" /> Course Preview
        </button>
        <button onClick={() => scrollToSection("success-stories")} className={btn.replace('text-sm', 'text-xs')}>
          <Star className="w-3 h-3" /> Success Stories
        </button>

        {/* New Section */}
        <div className="flex items-center gap-2 ml-2 border-l pl-2 border-gray-300">
          <span className="text-sm font-bold text-gray-800">
            👉 Start Learning @ ₹150/Day
          </span>
          <button
            onClick={() => openDialog("emi")}
            className="border  lg:px-3 px-1 py-1.5 rounded text-xs font-bold flex items-center gap-2 bg-[#ff5003] text-white hover:bg-[#e64500] transition animate-pulse"
          >
            (Get EMI Details)
          </button>
        </div>
      </div>
    </section>
  );
}
