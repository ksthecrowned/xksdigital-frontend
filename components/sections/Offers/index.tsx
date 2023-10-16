import Link from 'next/link'
import React from 'react'

interface OffersProps {}

const Offers:React.FC<OffersProps> = () => {
    return (
        <div className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8 py-12">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
                <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Management
                        </h3>
                        <p className="text-sm text-gray-500">
                        4 job positions
                        </p>
                    </div>
                    <div className="pl-3">
                        <svg className="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </Link>

                <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
                <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        App Development
                        </h3>
                        <p className="text-sm text-gray-500">
                        26 job positions
                        </p>
                    </div>
                    <div className="pl-3">
                        <svg className="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </Link>

                <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
                <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Arts & Entertainment
                        </h3>
                        <p className="text-sm text-gray-500">
                        9 job positions
                        </p>
                    </div>
                    <div className="pl-3">
                        <svg className="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </Link>

                <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
                <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Accounting
                        </h3>
                        <p className="text-sm text-gray-500">
                        11 job positions
                        </p>
                    </div>
                    <div className="pl-3">
                        <svg className="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </Link>

                <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
                <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        UI Designer
                        </h3>
                        <p className="text-sm text-gray-500">
                        37 job positions
                        </p>
                    </div>
                    <div className="pl-3">
                        <svg className="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </Link>

                <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
                <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Apps
                        </h3>
                        <p className="text-sm text-gray-500">
                        2 job positions
                        </p>
                    </div>
                    <div className="pl-3">
                        <svg className="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </Link>

                <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
                <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Content Writer
                        </h3>
                        <p className="text-sm text-gray-500">
                        10 job positions
                        </p>
                    </div>
                    <div className="pl-3">
                        <svg className="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </Link>

                <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
                <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                    <div>
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Analytics
                        </h3>
                        <p className="text-sm text-gray-500">
                        14 job positions
                        </p>
                    </div>
                    <div className="pl-3">
                        <svg className="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Offers