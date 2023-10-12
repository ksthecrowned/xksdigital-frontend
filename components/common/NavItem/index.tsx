"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface NavItemProps {
    title: string
    link: string
}

const NavItem: React.FC<NavItemProps> = ({ title, link }) => {
    const [isCurrent, setIsCurrent] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        setIsCurrent(pathname === link)
    }, [pathname, link])

    return (
        <Link className={`font-medium py-3 md:py-6 ${isCurrent ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-gray-500"}`} href={link} aria-current="page">
            {title}
        </Link>
    )
}

export default NavItem
