import { Icons } from "../shared/Icons";

export default function MobileHeader() {
  return (
    <div className="flex flex-col">
      <div className="h-5 bg-gradient-to-b from-[#006A9F4D] to-[#006A9F00]"></div>
      <div className="flex items-center  px-4 pt-6 pb-5">
        <div className="flex-1 flex justify-center">
          <Icons.logo />
        </div>
        <div className="flex-none -translate-x-8">
          <Icons.burger />
        </div>
      </div>
    </div>
  );
}
