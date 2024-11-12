"use client";
import { useIsTabletOrMobile } from "@/hooks/useIsTabletOrMobile";
import MobileHeader from "./MobileHeader";
import MainNavigation from "./MainNavigation";
import HeaderDashboard from "./HeaderDashboard";

export default function Header() {
  const isTabletOrMobile = useIsTabletOrMobile();
  if (isTabletOrMobile)
    return (
      <header>
        <MobileHeader />
      </header>
    );
  return (
    <header className="w-full">
      <div className="bg-black">
      <div className="container h-12 mx-auto flex items-center xl:px-20">
        <MainNavigation />
      </div>
        <HeaderDashboard/>
    </div>
    </header>
  );
}
