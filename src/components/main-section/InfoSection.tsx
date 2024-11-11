import React from 'react'
import OfferSection from './offers/OfferSection'
import AdvantageSection from './advantages/AdvantageSection'

export default function InfoSection() {
  return (
    <div  style={{ backgroundImage: `url(${'/cover.png'})`,backgroundRepeat:'no-repeat'}}  className='w-full h-screen relative' >
      <div className='absolute top-0 left-0'>

       <OfferSection/>
       <AdvantageSection/>
      </div>
    </div>
  )
}
