"use client";

import { useIsTabletOrMobile } from "@/hooks/useIsTabletOrMobile";

import HeaderDashboard from "./HeaderDashboard";
import MainNavigation from "./MainNavigation";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const isTabletOrMobile = useIsTabletOrMobile();
  if (isTabletOrMobile)
    return (
      <header>
        <MobileHeader />
      </header>
    );
  return (
    <header className="w-full bg-black">
      <div className="container mx-auto flex h-12 items-center xl:px-20">
        <MainNavigation />
      </div>
      <HeaderDashboard />
    </header>
  );
}
