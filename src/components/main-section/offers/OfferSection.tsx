import { Icons } from '@/components/shared/Icons'
import React from 'react'
import OfferCard from './OfferCard'
import EmergencyButton from '@/components/shared/EmergencyButton'
import Separator from '@/components/shared/Separator'

const OFFERS = [
    {
        id:1,
        value:'ქონების დაზღვევა',
        icon:<Icons.house/>
    },
    {
        id:2,
        value:'ჯანმრთელობის დაზღვევა',
        icon:<Icons.health/>
    },
    {
        id:3,
        value:'ავტომობილის დაზღვევა',
        icon:<Icons.car/>
    },
    {
        id:4,
        value:'პასუხისმგებლობის დაზღვევა',
        icon:<Icons.responsibility/>
    },
    {
        id:5,
        value:'სამოგზაურო დაზღვევა',
        icon:<Icons.travel/>
    },
    {
        id:6,
        value:'შეიძინე ონლაინ',
        icon:<Icons.cart/>
    }
]
export default function OfferSection() {
  return <section className='w-full flex justify-center flex-wrap gap-3 -translate-y-8'>
    {OFFERS.map((offer)=>{
        return <OfferCard key={offer.id} value={offer.value} icon={offer.icon}/>
    })}
    <EmergencyButton/>
    <Separator/>
  </section>
}
