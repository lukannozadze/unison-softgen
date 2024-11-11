import Image from 'next/image'
type Props = {
    imagePath:string,
    title:string,
    date:string
}
export default function NewsCard({imagePath,title,date}:Props) {
  return (
    <div className='flex flex-col shadow-md w-[227px] rounded-b-xl'>
        <Image className='rounded-t-xl' src={imagePath} alt={title} width={227} height={166} quality={85}/>
        <div className='p-4'>
        <h3 className='mb-4 text-sm text-[#707070] font-bold'>{title}</h3>
        <span className='text-xs text-[#D0D0D0]'>{date}</span>
        </div>
    </div>
  )
}
