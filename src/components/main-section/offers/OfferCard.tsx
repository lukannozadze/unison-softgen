import { ReactNode } from "react";

type Props = {
  text: string;
  icon: ReactNode;
};
export default function OfferCard({ text, icon }: Props) {
  return (
    <div className="z-100 flex min-w-[165px] cursor-pointer items-center justify-center rounded-xl bg-white py-6 text-[#707070] shadow-md">
      <div className="flex max-w-36 flex-col items-center justify-center gap-2 text-center">
        {icon}
        <span>{text}</span>
      </div>
    </div>
  );
}
