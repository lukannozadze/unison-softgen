import ProductHighlights from '@/components/highlights/ProductHighlights'
import InfoSection from '@/components/main-section/InfoSection'
import React from 'react'

export default function Home() {
  return (
    <div className='h-full'>
      <ProductHighlights/>
      <InfoSection/>
    </div>
    
  )
}
