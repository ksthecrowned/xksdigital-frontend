import Link from 'next/link'
import React from 'react'

interface ServicesHeroProps {}

const ServicesHero:React.FC<ServicesHeroProps> = () => {
    return (
        <section>
            <div className="max-w-[85rem] relative pt-6 lg:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-start xl:pr-10">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
                            <span className="text-red-600">Preline UI,</span>
                            crafted with Tailwind CSS
                        </h1>

                        <p className="mt-6 md:text-lg text-gray-600 dark:text-gray-400">
                            Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.
                        </p>
                    </div>

                    <div className="grid gap-3 w-full sm:inline-flex">
                        <Link href="#" className="inline-block w-full md:w-fit text-center rounded bg-red-600 px-12 py-4 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none transform hover:scale-105">
                            Get started
                        </Link>
                    </div>
                </div>

                <div className="w-full h-[20rem] sm:h-[30rem] lg:h-[35rem] overflow-hidden">
                    <div className="grid grid-cols-3 gap-12 w-[60rem] sm:w-[80rem] lg:w-[50rem] h-[55rem] md:h-[90rem] lg:h-[75rem] overflow-hidden origin-[50%_0%]">
                    <div className="grid gap-9 w-full h-[440px] animation-sliding-img-up-1">
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-14.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-14.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                    </div>

                    <div className="grid gap-9 w-full h-[440px] animation-sliding-img-down-1">
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75]" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-11.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-14.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-14.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75]" src="/assets/svg/visuals/hero-card-12.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75]" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-14.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-14.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75]" src="/assets/svg/visuals/hero-card-12.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                    </div>

                    <div className="grid gap-9 w-full h-[440px] animation-sliding-img-up-2">
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75]" src="/assets/svg/visuals/hero-card-15.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-10.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-6.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-5.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75]" src="/assets/svg/visuals/hero-card-15.svg" alt="Image Description" />
                        <img className="w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:hidden" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                        <img className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-gray-900/[.75] dark:block" src="/assets/svg/visuals/hero-card-9.svg" alt="Image Description" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesHero