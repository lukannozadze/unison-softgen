import { ReactNode } from "react";

type Props = {
  value: number;
  title: string;
  icon: ReactNode;
};
export default function AdvantageCard({ title, value, icon }: Props) {
  return (
    <div className="mt-7">
      <div className="flex max-w-36 flex-col items-center justify-center gap-2 text-center">
        <div className="flex flex-col items-center gap-1 font-semibold">
          <span>{icon}</span>
          <span className="text-2xl text-[#006A9F]">{value}</span>
        </div>
        <span className="text-sm text-[#707070]">{title}</span>
      </div>
    </div>
  );
}
