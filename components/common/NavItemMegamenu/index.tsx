"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useMediaQuery } from 'react-responsive'

interface MegamenuItem {
    title: string
    description: string
    link: string
    image: string
}

interface NavItemMegamenu {
    title: string
    link: string
    megamenu: MegamenuItem[]
}
const NavItemMegamenu: React.FC<NavItemMegamenu> = ({ title, link, megamenu }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isCurrent, setIsCurrent] = useState(false)
    const pathname = usePathname()
    const isMobile = useMediaQuery({ maxWidth: 640 })

    useEffect(() => {
        setIsCurrent(pathname === link)
    }, [pathname, link])
    return (
        <div className="" 
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
            onClick={() => isMobile && setDropdownOpen(!dropdownOpen)}
        >
            <div className={`flex items-center font-medium py-3 ${isCurrent ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-gray-500 cursor-pointer"}`}>
                <Link href={link}>
                    {title}
                </Link>
                <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
            </div>

            {
                dropdownOpen && (
                    <div className="md:absolute w-full z-10 top-20 left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg p-2 md:p-8 dark:bg-gray-200 dark:md:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5 bounce-short">
                        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {
                                megamenu.map((megamenuItem, index) => {
                                    return (
                                        <Link 
                                            key={index} 
                                            className="border border-transparent hover:border-red-600 flex gap-x-3 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" 
                                            href={megamenuItem.link}
                                        >
                                            <div className="relative w-20">
                                                <Image
                                                    src={megamenuItem.image}
                                                    className="object-cover"
                                                    fill
                                                    alt={megamenuItem.title}
                                                />
                                            </div>
                                            <div className="grow">
                                                <p className="font-medium text-gray-800 dark:md:text-gray-200">{megamenuItem.title}</p>
                                                <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">{megamenuItem.description}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default NavItemMegamenu