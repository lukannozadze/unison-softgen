import React from "react";

import ProductHighlights from "@/components/highlights/ProductHighlights";
import InfoSection from "@/components/main-section/InfoSection";

export default function Home() {
  return (
    <section className="w-full">
      <ProductHighlights />
      <InfoSection />
    </section>
  );
}
