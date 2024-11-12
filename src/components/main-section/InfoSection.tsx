import React from "react";

import AdvantageSection from "./advantages/AdvantageSection";
import { NewsSection } from "./news/NewsSection";
import OfferSection from "./offers/OfferSection";

export default function InfoSection() {
  return (
    <div
      style={{ backgroundImage: `url('/cover.png')`, backgroundRepeat: "no-repeat" }}
      className="relative"
    >
      <div className="container left-0 top-0 mx-auto">
        <OfferSection />
        <AdvantageSection />
        <NewsSection />
      </div>
    </div>
  );
}
