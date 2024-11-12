import React from "react";

import EmergencyButton from "@/components/shared/EmergencyButton";
import { Icons } from "@/components/shared/Icons";
import Separator from "@/components/shared/Separator";

import OfferCard from "./OfferCard";

const OFFERS = [
  {
    id: 1,
    value: "ქონების დაზღვევა",
    icon: <Icons.house />,
  },
  {
    id: 2,
    value: "ჯანმრთელობის დაზღვევა",
    icon: <Icons.health />,
  },
  {
    id: 3,
    value: "ავტომობილის დაზღვევა",
    icon: <Icons.car />,
  },
  {
    id: 4,
    value: "პასუხისმგებლობის დაზღვევა",
    icon: <Icons.responsibility />,
  },
  {
    id: 5,
    value: "სამოგზაურო დაზღვევა",
    icon: <Icons.travel />,
  },
  {
    id: 6,
    value: "შეიძინე ონლაინ",
    icon: <Icons.cart />,
  },
];
export default function OfferSection() {
  return (
    <section className="mx-auto max-w-3xl -translate-y-10">
      <div className="flex w-full flex-wrap justify-center gap-3">
        {OFFERS.map((offer) => {
          return <OfferCard key={offer.id} value={offer.value} icon={offer.icon} />;
        })}
      </div>
      <div className="flex flex-col items-center">
        <EmergencyButton />
        <Separator />
      </div>
    </section>
  );
}
