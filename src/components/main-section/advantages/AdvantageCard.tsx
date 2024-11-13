import { ReactNode } from "react";

type Props = {
  title: string;
  icon: ReactNode;
};
export default function AdvantageCard({ title, icon }: Props) {
  return (
    <div className="mt-7 flex max-w-36 flex-col items-center justify-center gap-2 text-center">
      {icon}
      <span className="text-sm text-[#707070]">{title}</span>
    </div>
  );
}
