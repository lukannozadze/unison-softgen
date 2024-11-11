import { Icons } from '@/components/shared/Icons'
import React from 'react'
import OfferCard from './OfferCard'

const OFFERS = [
    {
        value:'ქონების დაზღვევა',
        icon:<Icons.house/>
    },
    {
        value:'ჯანმრთელობის დაზღვევა',
        icon:<Icons.health/>
    },
    {
        value:'ავტომობილის დაზღვევა',
        icon:<Icons.car/>
    },
    {
        value:'პასუხისმგებლობის დაზღვევა',
        icon:<Icons.responsibility/>
    },
    {
        value:'სამოგზაურო დაზღვევა',
        icon:<Icons.travel/>
    },
    {
        value:'შეიძინე ონლაინ',
        icon:<Icons.cart/>
    }
]
export default function OfferSection() {
  return <section className='w-full flex justify-center flex-wrap gap-3 -translate-y-8'>
    {OFFERS.map((offer)=>{
        return <OfferCard key={offer.value} value={offer.value} icon={offer.icon}/>
    })}
  </section>
}
