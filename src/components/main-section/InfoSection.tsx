import React from 'react'
import OfferSection from './offers/OfferSection'

export default function InfoSection() {
  return (
    <div  style={{ backgroundImage: `url(${'/cover.png'})` }}  className='w-full h-screen relative' >
      <div className='absolute top-0 left-0'>

       <OfferSection/>
      </div>
    </div>
  )
}
