import Image from "next/image";

import ConnectToAgency from "@/components/shared/ConnectToAgency";

export default function Hero() {
  return (
    <>
      <Image
        alt="Product Image"
        src="/hero-1.png"
        layout="responsive"
        width={3840}
        height={1252}
        quality={100}
        priority
        className="relative !h-[266px] w-full xl:!h-[400px]"
      />
      <ConnectToAgency />
      <div className="h-2 bg-[#EE303C]"></div>
    </>
  );
}
