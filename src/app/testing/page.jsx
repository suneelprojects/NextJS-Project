"use client";
import { useState } from "react";
import QuickNavigation from "@/components/QuickNavigation";
import LeadFormDialog from "@/components/LeadFormDialog";
import coursole from "@/app/[slug]/courseDetailsPage/Carousel/page";

export default function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");

  const openDialog = (type) => {
    setDialogType(type);
    setDialogOpen(true);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className=" bg-gray-50">
      <QuickNavigation openDialog={openDialog} scrollToSection={scrollToSection} />

     

      <LeadFormDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        dialogType={dialogType}
      />

      <coursole/>


    </section>

    

  );
}
