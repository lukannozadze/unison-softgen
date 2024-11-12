import { ChevronDown, Phone } from "lucide-react";

const NAVELEMENTS = [
  "მთავარი",
  "ჩვენს შესახებ",
  "სიახლეები",
  "პარტნიორები",
  "კონტაქტი",
];
export default function MainNavigation() {
  return (
    <nav className="flex w-full items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          {NAVELEMENTS.map((item) => (
            <span className="text-xs  text-[#D0D0D0] xl:text-md" key={item}>
              {item}
            </span>
          ))}
        </div>
        <button className="bg-[#EE303C] text-[#D0D0D0] font-bold py-[6px] px-7 rounded-lg">
          SOS
        </button>
      </div>

      <div className="flex items-center gap-3 text-[#D0D0D0] text-xs xl:text-md">
        <div className="flex items-center">
          <span>ქართული</span>
          <ChevronDown />
        </div>
        <div className="flex items-center gap-3 border-b !h-12 border-1 border-[#EE303C]">
          <span>ცხელი ხაზი</span>
          <Phone />
          <span>2 991 991</span>
        </div>
      </div>
    </nav>
  );
}
