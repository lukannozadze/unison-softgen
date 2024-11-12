import { ReactNode } from "react";
type Props = {
    value:string
    icon:ReactNode
}
export default function OfferCard({value,icon}:Props) {
  return (
    <div className="bg-white rounded-xl f z-100 py-6 shadow-md min-w-[165px] flex justify-center items-center text-[#707070]">
        <div className="flex flex-col gap-2 justify-center items-center max-w-36 text-center">
       <span>{icon}</span>
       <span>{value}</span>
        </div>
    </div>
  )
}
