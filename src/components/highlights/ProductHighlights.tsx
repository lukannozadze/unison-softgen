import Image from 'next/image';

export default function ProductHighlights() {
  return (
    <div className="w-full">
      <Image
        alt="Product Image"
        src="/hero-1.png"
        layout="responsive" 
        width={1920} 
        height={626} 
        quality={85} 
        priority
      />
      <div className='h-2 bg-[#EE303C]'></div>
    </div>
  );
}
