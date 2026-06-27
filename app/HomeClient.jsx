"use client";

import { useState } from "react";
import Home_banner from "./_component/Home_banner";
import Listing from "./_component/_homePages/Listing";
import WhileYouAreHere from "./_component/_homePages/WhileYouAreHere";
import LatestNews from "./_component/_homePages/LatestNews";
import ContactSection from "./_component/_contact/_contactUs/ContactSection";
import Testimonials from "./_component/_homePages/Testimonials";
import HowItWorks from "./_component/_homePages/HowItWorks";
import ServicesSection from "./_component/_homePages/ServicesSection";

export default function HomeClient() {
  const [filters, setFilters] = useState(null);

  return (
    <div>
      <Home_banner onSearch={setFilters} />
      <Listing filters={filters} />
      <WhileYouAreHere />
      <HowItWorks />
      <Testimonials />
      <ServicesSection />
      {/* <LatestNews /> */}
      <ContactSection />
    </div>
  );
}