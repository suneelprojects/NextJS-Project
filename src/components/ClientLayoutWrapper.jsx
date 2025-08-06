"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { DateProvider } from "@/components/Forms/DateContext";
import Loading from "@/components/reusedComponents/Loading";
import QuickHelpButton from "@/components/QuickHelpButton/QuickHelpButton";
import { Suspense } from "react";
import PopupForm from "./PopupOfferCard/PopupOfferCard";
import ScrollToTop from "@/components/reusedComponents/ScrollToTop";
import FooterBtn from "@/components/FooterBtn/FooterBtn";


const excludedPaths = ["/login", "/admin"];

const Popup = ({ setShowPopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-overlay">
        <PopupForm onClose={() => setShowPopup(false)} />
      </div>
    </div>
  );
};



export default function ClientLayoutWrapper({ children }) {
  // const [showPopup, setShowPopup] = useState(false);
  // const pathname = usePathname();

  // useEffect(() => {
  //   if (!excludedPaths.includes(pathname)) {
  //     const timer = setTimeout(() => setShowPopup(true), 2000);
  //     return () => clearTimeout(timer);
  //   } else {
  //     setShowPopup(false);
  //   }
  // }, [pathname]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Navbar />
        <QuickHelpButton />
        {/* Popup disabled globally */}
        {/* {!excludedPaths.some((path) => pathname?.startsWith(path)) &&
          showPopup && <Popup setShowPopup={setShowPopup} />} */}
        <DateProvider>{children}</DateProvider>
        <Footer />
        <FooterBtn />
      </Suspense>
    </>
  );
}
