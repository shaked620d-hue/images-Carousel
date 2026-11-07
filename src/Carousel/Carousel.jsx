import React from 'react'
import CarouselItem from './CarouselItem'

export default function Carousel( { images, intervalSeconds = 3}) {
  return (
    <div className='carousel' >
      {
        images.map((imgSrc, index) =>(
            <CarouselItem
            key={index}
            src = {imgSrc}
            alt = {`תמונה ${index+1}`}
            />
        ))
      }
    </div>
  )
}
