/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { FaPagelines } from 'react-icons/fa'

const About:React.FC = () => {
    return (
        <section className="w-full bg-gray-50 dark:bg-gray-900 pb-8">
            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="relative h-[500px]">
                    <Image
                        src="/assets/images/pexels-fauxels-3182743.jpg"
                        className="object-cover"
                        fill
                        alt="Image de présentation de xksdigital"
                    />
                </div>
                
                <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="max-w-xl text-center sm:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
                            Don't just take our word for it...
                        </h2>

                        <p className="mt-4 text-gray-700 dark:text-white">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                            veritatis illo placeat harum porro optio fugit a culpa sunt id!
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                            <div className="flex gap-x-5">
                                <FaPagelines className="text-red-500 text-4xl" />
                                <div className="grow">
                                    <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                        Creative minds
                                    </h3>
                                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                                        We choose our teams carefully. Our people are the secret to great work.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-5">
                                <FaPagelines className="text-red-500 text-4xl" />
                                <div className="grow">
                                    <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                        Simple and affordable
                                    </h3>
                                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                                        rom boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-5">
                                <FaPagelines className="text-red-500 text-4xl" />
                                <div className="grow">
                                    <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                        Industry-leading documentation
                                    </h3>
                                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                                        Our documentation and extensive Client libraries contain everything a business needs to build a custom integration.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-x-5">
                                <FaPagelines className="text-red-500 text-4xl" />
                                <div className="grow">
                                    <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                                        Designing for people
                                    </h3>
                                    <p className="mt-1 text-gray-700 dark:text-gray-300">
                                        We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About