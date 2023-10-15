import Link from 'next/link'
import NavItem from '@components/common/NavItem'
import NavItemMegamenu from '@components/common/NavItemMegamenu'
import DarkModeToggle from '@components/common/DarkModeToggle'

const NAVITEMS = [
    {
        title: "Accueil",
        link: "/"
    },
    {
        title: "A propos",
        link: "/a-propos"
    },
    {
        title: "Services",
        link: "/services",
        megamenu: [
            {
                title: "Support Docs",
                description: "Explore advice and explanations for all of Preline features.",
                link: "#",
                image: '/assets/images/pexels-fauxels-3182743.jpg'
            },
            {
                title: "Support Docs",
                description: "Explore advice and explanations for all of Preline features.",
                link: "#",
                image: '/assets/images/pexels-fauxels-3182743.jpg'
            },
            {
                title: "Support Docs",
                description: "Explore advice and explanations for all of Preline features.",
                link: "#",
                image: '/assets/images/pexels-fauxels-3182743.jpg'
            },
            {
                title: "Support Docs",
                description: "Explore advice and explanations for all of Preline features.",
                link: "#",
                image: '/assets/images/pexels-fauxels-3182743.jpg'
            },
            {
                title: "Support Docs",
                description: "Explore advice and explanations for all of Preline features.",
                link: "#",
                image: '/assets/images/pexels-fauxels-3182743.jpg'
            },
            {
                title: "Support Docs",
                description: "Explore advice and explanations for all of Preline features.",
                link: "#",
                image: '/assets/images/pexels-fauxels-3182743.jpg'
            },
            {
                title: "Support Docs",
                description: "Explore advice and explanations for all of Preline features.",
                link: "#",
                image: '/assets/images/pexels-fauxels-3182743.jpg'
            },
            {
                title: "Support Docs",
                description: "Explore advice and explanations for all of Preline features.",
                link: "#",
                image: '/assets/images/pexels-fauxels-3182743.jpg'
            },
        ]
    },
    {
        title: "Projets",
        link: "/projets"
    },
    {
        title: "Tarifs",
        link: "/tarifs"
    },
    {
        title: "Blog",
        link: "/blog"
    },
]

const NavBar: React.FC = () => {
    return (
        <div className="hs-collapse overflow-hidden transition-all duration-300 basis-full grow block">
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-hide">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col gap-x-0 divide-y divide-dashed md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid divide-gray-700">
                        {
                            NAVITEMS.map((navItem, index) => {
                                if(navItem.megamenu) {
                                    return <NavItemMegamenu 
                                                key={index}
                                                title={navItem.title} 
                                                link={navItem.link} 
                                                megamenu={navItem.megamenu} 
                                            />
                                }
                                return (
                                    <NavItem 
                                        key={index} 
                                        title={navItem.title} 
                                        link={navItem.link} 
                                    />
                                )
                            })
                        }
                    </div>

                    <div className="py-3 md:py-0 lg:px-4 flex items-center gap-x-4">
                        <Link className="inline-block w-full md:w-fit text-center rounded bg-red-600 px-12 py-4 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none transform hover:scale-105" 
                            href="/contact"
                        >
                            Contactez-nous
                        </Link>
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar