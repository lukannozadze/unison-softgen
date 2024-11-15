import React from "react";

import { Icons } from "@/components/shared/Icons";

export default function ConnectToAgency() {
  return (
    <div className="absolute right-0 top-32 hidden h-28 w-32 flex-col gap-1 rounded-bl-xl rounded-tl-xl bg-[#EE303C] p-3 text-xs font-bold text-white lg:flex">
      <Icons.connectAgency />
      <span>აგენტთან დაკავშირება</span>
    </div>
  );
}
