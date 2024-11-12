import React from "react";

import Hero from "@/components/highlights/Hero";
import InfoSection from "@/components/main-section/InfoSection";

export default function Home() {
  return (
    <section className="w-full">
      <Hero />
      <InfoSection />
    </section>
  );
}
