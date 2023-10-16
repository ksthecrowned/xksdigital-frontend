import React from 'react'
import Image from 'next/image'

interface MarketingProps {}

const Marketing:React.FC<MarketingProps> = () => {
    return (
        <section className="w-full bg-gray-50 dark:bg-gray-900">
            <div className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-x gap-x-4 dark:divide-gray-400">
                    <div className="flex space-x-4 pl-4">
                        <div className="w-44 h-16 relative">
                            <Image 
                                alt="Web devices"
                                className="object-contain"
                                fill
                                src="/assets/illustrations/Web_devices.png"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-medium dark:text-gray-100 text-xl">300+ Components exemples</h3>
                            <p className="dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora assumenda ea exercitationem quo fugiat fugit possimus
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-4 pl-4">
                        <div className="w-44 h-16 relative">
                            <Image 
                                alt="Web devices"
                                className="object-contain"
                                fill
                                src="/assets/illustrations/Web_devices.png"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-medium dark:text-gray-100 text-xl">300+ Components exemples</h3>
                            <p className="dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora assumenda ea exercitationem quo fugiat fugit possimus
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-4 pl-4">
                        <div className="w-44 h-16 relative">
                            <Image 
                                alt="Web devices"
                                className="object-contain"
                                fill
                                src="/assets/illustrations/Web_devices.png"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-medium dark:text-gray-100 text-xl">300+ Components exemples</h3>
                            <p className="dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora assumenda ea exercitationem quo fugiat fugit possimus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marketing