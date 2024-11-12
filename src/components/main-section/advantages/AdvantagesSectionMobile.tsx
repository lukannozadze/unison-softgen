import React from "react";

import AdvantageCardMobile from "@/components/main-section/advantages/AdvantageCardMobile";
import { Icons } from "@/components/shared/Icons";
import Separator from "@/components/shared/Separator";

const ADVANTAGES = [
  {
    id: 1,
    title: "კმაყოფილი მომხმარებელი",
    value: 32067,
    icon: <Icons.customer />,
  },
  {
    id: 2,
    title: "ფილიალი საქართველოში",
    value: 5,
    icon: <Icons.branch />,
  },
  {
    id: 3,
    title: "ანაზღაურებული თანხა",
    value: 2800843,
    icon: <Icons.payment />,
  },
  {
    id: 4,
    title: "წარმატებული წელი",
    value: 12,
    icon: <Icons.calendar />,
  },
];

export default function AdvantageSectionMobile() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h2 className="text-3xl text-[#707070]">უპირატესობები</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {ADVANTAGES.map((item) => {
          return (
            <AdvantageCardMobile
              key={item.id}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          );
        })}
      </div>

      <Separator />
    </section>
  );
}
