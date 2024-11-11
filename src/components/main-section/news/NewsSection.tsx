/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import NewsCard from "./NewsCard"
import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Icons } from "@/components/shared/Icons"


const NEWS = [
    {
        id:1,
        image:'/news1.png',
        title:'ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი',
        date:'6 ნოემბერი'
    },
    {
        id:2,
        image:'/news2.png',
        title:'ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან',
        date:'28 ოქტომბერი'
    },
    {
        id:3,
        image:'/news3.png',
        title:'ავტომობილის სალონის მოვლის თანამედროვე ხერხები',
        date:'14 ოქტომბერი'
    }
]

export function NewsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [_current, setCurrent] = useState(0)
  const [_count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="flex flex-col items-center mb-8">
    <h2 className='text-3xl text-[#707070] mb-4 mt-5'>სიახლეები</h2>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
        {NEWS.map((item)=>(
        <CarouselItem className="flex justify-center" key={item.id}>
            <NewsCard key={item.id} imagePath={item.image} title={item.title} date={item.date}/>
        </CarouselItem>
    ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-4 text-center flex gap-2 items-center">
        <span className="text-sm text-[#707070]">ყველა სიახლე</span>
        <span><Icons.rightArrow/></span>
      </div>
    </section>
  )
}
