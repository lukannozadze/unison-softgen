import { ReactNode } from "react";

type Props = {
  title: string;
  icon: ReactNode;
};
export default function AdvantageCard({ title, icon }: Props) {
  return (
    <div className="mt-7">
      <div className="flex max-w-36 flex-col items-center justify-center gap-2 text-center">
        <span>{icon}</span>
        <span className="text-sm text-[#707070]">{title}</span>
      </div>
    </div>
  );
}
