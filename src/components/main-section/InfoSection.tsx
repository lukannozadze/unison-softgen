import React from 'react';
import OfferSection from './offers/OfferSection';
import AdvantageSection from './advantages/AdvantageSection';
import { NewsSection } from './news/NewsSection';

export default function InfoSection() {
  return (
    <div
      style={{ backgroundImage: `url('/cover.png')`, backgroundRepeat: 'no-repeat' }}
      className="relative"
    >
      <div className="top-0 left-0 mx-auto container">
        <OfferSection />
        <AdvantageSection />
        <NewsSection />
      </div>
    </div>
  );
}
