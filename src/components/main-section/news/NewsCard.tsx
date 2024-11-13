import Image from "next/image";

type Props = {
  imagePath: string;
  title: string;
  date: string;
};
export default function NewsCard({ imagePath, title, date }: Props) {
  return (
    <div className="flex w-[227px] flex-col rounded-b-xl  xl:w-[321px] bg-white">
      <Image
        className="w-full rounded-t-xl"
        src={imagePath}
        alt={title}
        width={227}
        height={166}
        quality={85}
      />
      <div className="p-4">
        <h3 className="xl:text-md mb-4 text-sm font-bold text-[#707070]">{title}</h3>
        <span className="xl:text-md text-xs text-[#D0D0D0]">{date}</span>
      </div>
    </div>
  );
}
