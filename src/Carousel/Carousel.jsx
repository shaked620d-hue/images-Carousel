import React, { useState, useEffect } from 'react'
import CarouselItem from './CarouselItem'

export default function Carousel({ images, intervalSeconds = 3 }) {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        console.log("Effect running, selected is:", selected);
        const timer = setInterval(() => {
            setSelected((prevSelected) => (prevSelected + 1) % images.length);
        }, intervalSeconds * 1000);

        return () => {
            console.log("Cleanup running, clearing timer for selected:", selected);
            clearInterval(timer);
        }

    }, [selected, intervalSeconds, images.length])


    function move(direction) {
        setSelected((prevSelected) => {
            let newIndex = prevSelected + direction
            if (newIndex >= images.length) {
                return 0;
            }
            if (newIndex < 0)
                return images.length - 1
            return newIndex

        });
    }

    return (
        <div className='carousel' >
            {
                images.map((imgSrc, index) => (
                    index == selected && (
                        <CarouselItem
                            key={index}
                            src={imgSrc}
                            alt={`תמונה ${index + 1}`}
                        />)
                ))
            }
            <div className='carousel-dots'>
                {
                    images.map((_, index) => (

                        <button
                            key={index}
                            className={index === selected ? 'carousel-dot active' : 'carousel-dot'}
                            onClick={() => setSelected(index)}
                        >{index+1}</button>
                    ))

                }
            </div>

            <button className='carousel-arrow prev' onClick={() => move(-1)}>הקודם</button>
            <button className='carousel-arrow next' onClick={() => move(1)}>הבא</button>

        </div>
    )
}
