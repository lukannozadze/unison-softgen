import React from "react";

import EmergencyButton from "@/components/shared/EmergencyButton";
import { Icons } from "@/components/shared/Icons";
import Separator from "@/components/shared/Separator";

import OfferCard from "./OfferCard";

const OFFERS = [
  {
    id: 1,
    text: "ქონების დაზღვევა",
    icon: <Icons.house />,
  },
  {
    id: 2,
    text: "ჯანმრთელობის დაზღვევა",
    icon: <Icons.health />,
  },
  {
    id: 3,
    text: "ავტომობილის დაზღვევა",
    icon: <Icons.car />,
  },
  {
    id: 4,
    text: "პასუხისმგებლობის დაზღვევა",
    icon: <Icons.responsibility />,
  },
  {
    id: 5,
    text: "სამოგზაურო დაზღვევა",
    icon: <Icons.travel />,
  },
  {
    id: 6,
    text: "შეიძინე ონლაინ",
    icon: <Icons.cart />,
  },
];
export default function OfferSection() {
  return (
    <section className="-translate-y-10">
      <div className="flex w-full flex-wrap justify-center gap-3 xl:gap-4">
        {OFFERS.map((offer) => {
          return <OfferCard key={offer.id} text={offer.text} icon={offer.icon} />;
        })}
      </div>
      <div className="flex flex-col items-center xl:hidden">
        <EmergencyButton />
        <Separator />
      </div>
    </section>
  );
}
