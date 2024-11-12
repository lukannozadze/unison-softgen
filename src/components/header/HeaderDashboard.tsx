import React from "react";
import { Icons } from "../shared/Icons";

export default function HeaderDashboard() {
  return (
    <div className="w-full py-8 bg-[#006A9F] text-white text-xs xl:text-md">
      <div className="container mx-auto flex justify-between xl:px-20">
        <div className="flex items-center gap-3 max-w-[500px]">
          <Icons.logoWhite />
          <span>ფიზიკური პირებისთვის</span>
          <span>იურიდიული პირებისთვის</span>
          <span>სავალდებულო დაზღვევა</span>
        </div>
        <div className="flex items-center gap-2">
          <Icons.person />
          <span>ჩემი კაბინეტი</span>
        </div>
      </div>
    </div>
  );
}
