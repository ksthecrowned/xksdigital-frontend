"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Slide {
    image: string
    title: string
}

interface SliderProps {
    slides: Slide[]
    autoPlayDelay: number
}

const Slider: React.FC<SliderProps> = ({ slides, autoPlayDelay }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % slides.length)
        }, autoPlayDelay)

        return () => {
        clearInterval(interval)
        }
    }, [currentSlide, slides, autoPlayDelay])

    return (
        <div className="relative">
        {slides.map((slide, index) => (
            <div
            key={index}
            className={`slider-slide absolute w-full h-[700px] ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
            >
            <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto object-cover"
                fill
            />
            </div>
        ))}
        </div>
    )
}

export default Slider
