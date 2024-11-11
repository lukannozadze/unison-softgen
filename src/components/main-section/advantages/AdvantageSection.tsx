import { Icons } from '@/components/shared/Icons'
import React from 'react'
import AdvantageCard from './AdvantageCard'
import Separator from '@/components/shared/Separator'

const ADVANTAGES  = [
 {
    id:1,
    title:'კმაყოფილი მომხმარებელი',
    value:32067,
    icon:<Icons.customer/>
 },
 {
    id:2,
    title:'ფილიალი საქართველოში',
    value:5,
    icon:<Icons.branch/>
 },
 {
    id:1,
    title:'ანაზღაურებული თანხა',
    value:2800843,
    icon:<Icons.payment/>
 },
 {
    id:1,
    title:'წარმატებული წელი',
    value:12,
    icon:<Icons.calendar/>
 }
]

export default function AdvantageSection() {
  return <section className='w-full flex flex-col justify-center items-center'>
    <h2 className='text-3xl text-[#707070]'>უპირატესობები</h2>
    <div className='flex flex-wrap justify-center gap-3'>
  {ADVANTAGES.map((item)=>{
      return <AdvantageCard key={item.id} title={item.title} value={item.value} icon={item.icon}/>
  })}
    </div>
  
  <Separator/>
</section>
}
