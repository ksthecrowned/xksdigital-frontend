"use client"

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"
import Image from 'next/image'

type Testimonial = {
    rate: string
    name: string
    image: string
    content: string
}

const testimonials: Testimonial[] = [
    {
        rate: "5",
        name: "John Doe",
        image: "/assets/images/Picture of the author.avif",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia"
    },
    {
        rate: "5",
        name: "Paul Starr",
        image: "/assets/images/Picture of the author.avif",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia"
    },
    {
        rate: "5",
        name: "Paul Starr",
        image: "/assets/images/Picture of the author.avif",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia"
    },
    {
        rate: "5",
        name: "Paul Starr",
        image: "/assets/images/Picture of the author.avif",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia"
    }
]  

const Testimonial:React.FC = () => {
    const [firstSlide, setFirstSlide] = useState(0)

    const prevSlide = () => {
        
    }

    const nextSlide = () => {
       
    }
    return (
        <section className="w-full bg-gray-50 dark:bg-gray-900">
            <div className="max-w-[85rem] w-full mx-auto px-4 py-12 md:px-6 lg:px-8 lg:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                    <div className="max-w-xl text-center sm:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
                            Don't just take our word for it...
                        </h2>

                        <p className="mt-4 text-gray-700 dark:text-white">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                            veritatis illo placeat harum porro optio fugit a culpa sunt id!
                        </p>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button
                                aria-label="Previous slide"
                                onClick={prevSlide}
                                className="rounded-full border border-red-600 p-3 text-red-600 transition hover:bg-red-600 hover:text-white"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 rtl:rotate-180"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                                </svg>
                            </button>

                            <button
                                aria-label="Next slide"
                                onClick={nextSlide}
                                className="rounded-full border border-red-600 p-3 text-red-600 transition hover:bg-red-600 hover:text-white"
                            >
                                <svg
                                className="h-5 w-5 rtl:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-0">
                            {testimonials.slice(firstSlide, firstSlide + 2).map((testimonial, index) => {
                                return (
                                    <blockquote key={index} className={`rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10 `}>
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={testimonial.image}
                                                className="h-14 w-14 rounded-full object-cover"
                                                width={500}
                                                height={500}
                                                alt="Picture of the author"
                                            />

                                            <div>
                                                <div className="flex justify-center gap-0.5 text-red-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">{testimonial.content}</p>
                                    </blockquote>
                                )
                            })}
                        </div>
                     </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <button
                        aria-label="Previous slide"
                        onClick={prevSlide}
                        className="rounded-full border border-red-600 p-4 text-red-600 transition hover:bg-red-600 hover:text-white"
                    >
                        <svg
                            className="h-5 w-5 -rotate-180 transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>

                    <button
                        aria-label="Next slide"
                        onClick={nextSlide}
                        className="rounded-full border border-red-600 p-4 text-red-600 transition hover:bg-red-600 hover:text-white"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial