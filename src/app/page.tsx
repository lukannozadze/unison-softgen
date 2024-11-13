import React from "react";

import Hero from "@/components/hero/Hero";
import InfoSection from "@/components/main-section/InfoSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <InfoSection />
    </div>
  );
}
