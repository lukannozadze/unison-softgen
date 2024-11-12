import { useEffect, useState } from "react";

const TABLET_BREAKPOINT = 1024;

export function useIsTabletOrMobile() {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsTabletOrMobile(window.innerWidth < TABLET_BREAKPOINT);
    };

    mql.addEventListener("change", onChange);
    setIsTabletOrMobile(window.innerWidth < TABLET_BREAKPOINT);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isTabletOrMobile;
}
