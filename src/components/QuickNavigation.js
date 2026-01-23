// "use client";
// import { Calculator, GraduationCap, Star, IndianRupee } from "lucide-react";

// export default function QuickNavigation({ openDialog, scrollToSection }) {
//   const btn =
//     "border px-4 py-2 rounded text-sm font-bold flex items-center gap-2   hover:bg-orange-200  transition";

//   const btns = "border px-4 py-2 rounded text-sm font-bold flex items-center gap-2 bg-[#553CDF] text-white hover:bg-[#35258f]  transition";


//   return (
//     <section className="  bg-white py-3">
//       <div className="flex flex-wrap items-center justify-center gap-2 bg-white">
//         <button onClick={() => openDialog("calculator")} className={btns.replace('text-sm', 'text-xs')}>
//           <Calculator className="w-3 h-3" /> Stipend Calculator
//         </button>
//         <button onClick={() => scrollToSection("pricing")} className={btn.replace('text-sm', 'text-xs')}>
//           <IndianRupee className="w-3 h-3" /> Pricing
//         </button>
//         <button onClick={() => scrollToSection("course-flow-section")} className={btn.replace('text-sm', 'text-xs')}>
//           <GraduationCap className="w-3 h-3" /> Course Preview
//         </button>
//         <button onClick={() => scrollToSection("success-stories")} className={btn.replace('text-sm', 'text-xs')}>
//           <Star className="w-3 h-3" /> Success Stories
//         </button>

//         {/* New Section */}
//         <div className="flex items-center gap-2 ml-2 border-l pl-2 border-gray-300">
//           <span className="text-sm font-bold text-gray-800">
//             👉 Start Learning @ ₹150/Day
//           </span>
//           <button
//             onClick={() => openDialog("emi")}
//             className="border  lg:px-3 px-1 py-1.5 rounded text-xs font-bold flex items-center gap-2 bg-[#ff5003] text-white hover:bg-[#e64500] transition animate-pulse"
//           >
//             Get EMI Details
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { Calculator, GraduationCap, Star, IndianRupee } from "lucide-react";

export default function QuickNavigation({ openDialog, scrollToSection }) {
  // Responsive button sizing: small on mobile, standard size on large screens
  const btnBase =
    "border rounded-md font-bold flex items-center justify-center gap-1.5 transition w-full min-h-[40px] px-2 py-1.5 text-[11px] lg:text-sm lg:px-4 lg:py-2 lg:w-auto";

  const btnSecondary = `${btnBase} hover:bg-orange-100 border-gray-200 text-gray-700`;
  const btnPrimary = `${btnBase} bg-[#553CDF] text-white hover:bg-[#35258f] border-[#553CDF]`;

  return (
    <section className="bg-white py-3 px-3">
      {/* Container: Max-width is limited on mobile (max-w-md), but expands on large screens (max-w-7xl) */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 max-w-md lg:max-w-7xl mx-auto">

        {/* Navigation Buttons:
            Mobile: grid-cols-2 (2x2)
            Large Screen: flex (Single Row) 
        */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-2 w-full lg:w-auto">
          <button onClick={() => openDialog("calculator")} className={btnPrimary}>
            <Calculator className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0" />
            <span className="leading-tight">Stipend Calculator</span>
          </button>

          <button onClick={() => scrollToSection("pricing")} className={btnSecondary}>
            <IndianRupee className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0" />
            <span className="leading-tight">Pricing</span>
          </button>

          <button onClick={() => scrollToSection("course-flow-section")} className={btnSecondary}>
            <GraduationCap className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0" />
            <span className="leading-tight">Course Preview</span>
          </button>

          <button onClick={() => scrollToSection("success-stories")} className={btnSecondary}>
            <Star className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0" />
            <span className="leading-tight">Success Stories</span>
          </button>
        </div>

        {/* EMI Section:
            Mobile: Full width with top border
            Large Screen: Inline with a left border divider
        */}
        <div className="flex items-center justify-between lg:justify-start gap-3 w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-4 border-gray-100 mt-1 lg:mt-0">
          <span className="text-[15px] lg:text-md font-bold text-gray-800 whitespace-nowrap">
            👉 Start @ ₹150/Day
          </span>
          <button
            onClick={() => openDialog("emi")}
            className="px-3 py-1.5 rounded text-[10px] lg:text-xs font-extrabold bg-[#ff5003] text-white hover:bg-[#e64500] transition animate-pulse uppercase tracking-wider whitespace-nowrap"
          >
            Get EMI Details
          </button>
        </div>
      </div>
    </section>
  );
}
