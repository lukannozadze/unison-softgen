import React from "react";

import { Icons } from "../shared/Icons";

export default function HeaderDashboard() {
  return (
    <div className="xl:text-md w-full bg-[#006A9F] py-8 text-xs text-white">
      <div className="container mx-auto flex justify-between xl:px-20">
        <div className="flex max-w-[500px] items-center gap-3">
          <Icons.logoWhite />
          <span className="cursor-pointer">ფიზიკური პირებისთვის</span>
          <span className="cursor-pointer">იურიდიული პირებისთვის</span>
          <span className="cursor-pointer">სავალდებულო დაზღვევა</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Icons.person />
          <span>ჩემი კაბინეტი</span>
        </div>
      </div>
    </div>
  );
}
