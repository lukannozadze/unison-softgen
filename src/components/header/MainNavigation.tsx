import { ChevronDown, Phone } from "lucide-react";

const NAVELEMENTS = ["მთავარი", "ჩვენს შესახებ", "სიახლეები", "პარტნიორები", "კონტაქტი"];

export default function MainNavigation() {
  return (
    <nav className="flex w-full items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          {NAVELEMENTS.map((item) => (
            <span
              className="xl:text-md cursor-pointer text-xs text-[#D0D0D0] hover:text-[#006A9F] duration-500"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <button className="rounded-lg bg-[#EE303C] px-7 py-[6px] font-bold text-[#D0D0D0]">
          SOS
        </button>
      </div>

      <div className="xl:text-md flex items-center gap-3 text-xs text-[#D0D0D0]">
        <div className="flex items-center group hover:text-[#006A9F] duration-500">
          <span className="group-hover:text-inherit cursor-pointer">ქართული</span>
          <ChevronDown className="group-hover:text-inherit" />
        </div>
        <div className="group flex h-12 cursor-pointer items-center gap-3 border-b border-[#EE303C] hover:text-[#006A9F] duration-500">
          <span className="group-hover:text-inherit">ცხელი ხაზი</span>
          <Phone className="group-hover:text-inherit" />
          <span className="group-hover:text-inherit">2 991 991</span>
        </div>
      </div>
    </nav>
  );
}
