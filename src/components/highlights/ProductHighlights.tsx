import Image from "next/image";

export default function ProductHighlights() {
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
        className="!h-[266px] w-full block"
      />

      <div className="h-2 bg-[#EE303C]"></div>
    </>
  );
}
