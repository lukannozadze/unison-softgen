import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 1024;

export function useIsTabletOrMobile() {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
        setIsTabletOrMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener("change", onChange);
    setIsTabletOrMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isTabletOrMobile;
}
