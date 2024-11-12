'use client'
import { Icons } from "@/components/shared/Icons";
import Separator from "@/components/shared/Separator";

import { useIsTabletOrMobile } from "@/hooks/useIsTabletOrMobile";
import AdvantageCard from "@/components/main-section/advantages/AdvantageCard";
import AdvantageSectionMobile from "@/components/main-section/advantages/AdvantagesSectionMobile";

const ADVANTAGES = [
  {
    id: 1,
    title: "მომხმარებლის კმაყოფილების 96%-იანი დონე",
    icon: <Icons.customer />,
  },
  {
    id: 2,
    title: "მაღალრეიტინგული გადამზღვევი კომპანიები",
    icon: <Icons.stars />,
  },
  {
    id: 3,
    title: "თანამედროვე ელექტრონული სერვისები",
    icon: <Icons.touch />,
  },
  {
    id: 4,
    title: "ზარალის დარეგულირების უმოკლესი ვადები",
    icon: <Icons.clock />,
  },
  {
   id: 5,
   title: "კორპორატიული კლიენტების ფართო სპექტრი",
   icon: <Icons.customers />,
 },
 {
   id: 6,
   title: "გუნდის პროფესიონალიზმი და მრავალწლიანი გამოცდილებაი",
   icon: <Icons.sparkle />,
 },
];

export default function AdvantageSection() {
   const isTabletOrMobile = useIsTabletOrMobile();
   if (isTabletOrMobile) return <AdvantageSectionMobile/>;
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h2 className="text-3xl text-[#707070] xl:mt-6 xl:mb-4">უპირატესობები</h2>
      <div className="flex flex-wrap justify-center gap-3 xl:gap-6">
        {ADVANTAGES.map((item) => {
          return (
            <AdvantageCard key={item.id} title={item.title} icon={item.icon} />
          ); 
        })}
      </div>
     <div className="xl:hidden">
      <Separator />
     </div>
    </section>
  );
}
