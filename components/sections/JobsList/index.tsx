import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface JobsListProps {}

const JobsList:React.FC<JobsListProps> = () => {
    return (
        <div className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                <Link className="group rounded-xl overflow-hidden" href="#">
                <div className="sm:flex">
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                        <Image
                            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                            alt="Image Description" 
                            fill
                        />
                    </div>

                    <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                        Studio by Preline
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
                    </p>
                    <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                        Read more
                        <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </p>
                    </div>
                </div>
                </Link>

                <Link className="group rounded-xl overflow-hidden" href="#">
                <div className="sm:flex">
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                        <Image
                            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                            alt="Image Description" 
                            fill
                        />
                    </div>

                    <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                        Onsite
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
                    </p>
                    <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                        Read more
                        <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </p>
                    </div>
                </div>
                </Link>

                <Link className="group rounded-xl overflow-hidden" href="#">
                <div className="sm:flex">
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                        <Image
                            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                            alt="Image Description" 
                            fill
                        />
                    </div>

                    <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                        The complete guide to OKRs
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        How to make objectives and key results work for your company
                    </p>
                    <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                        Read more
                        <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </p>
                    </div>
                </div>
                </Link>

                <Link className="group rounded-xl overflow-hidden" href="#">
                <div className="sm:flex">
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                        <Image
                            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" 
                            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                            alt="Image Description" 
                            fill
                        />
                    </div>

                    <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                        People program models
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Six approaches to bringing your People strategy to life
                    </p>
                    <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                        Read more
                        <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default JobsList