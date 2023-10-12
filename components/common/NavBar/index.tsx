import React from 'react'
import NavItem from '@components/common/NavItem'
import NavItemMegamenu from '@components/common/NavItemMegamenu'

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
        link: "/services"
    },
    {
        title: "Projets",
        link: "/projets"
    },
    {
        title: "Ressources",
        link: "#",
        megamenu: [
            {
                name: "group-1",
                title: "Groupe 1",
                children: [
                    {
                        type: "title-n-icon",
                        icon: "",
                        title: "",
                        description: ""
                    },
                    {
                        type: "title-n-icon",
                        icon: "",
                        title: "",
                        description: ""
                    },
                    {
                        type: "title-n-icon",
                        icon: "",
                        title: "",
                        description: ""
                    },
                    {
                        type: "title-n-icon",
                        icon: "",
                        title: "",
                        description: ""
                    }
                ]
            },
            {
                name: "group-1",
                title: "Groupe 1",
                children: [
                    {
                        type: "title-n-icon",
                        icon: "",
                        title: "",
                        description: ""
                    },
                    {
                        type: "title-n-icon",
                        icon: "",
                        title: "",
                        description: ""
                    },
                    {
                        type: "title-n-icon",
                        icon: "",
                        title: "",
                        description: ""
                    },
                    {
                        type: "title-n-icon",
                        icon: "",
                        title: "",
                        description: ""
                    }
                ]
            }
        ]
    },
    {
        title: "Partenaires",
        link: "#"
    },
    {
        title: "Tarifs",
        link: "/tarifs"
    },
    {
        title: "Blog",
        link: "#"
    },
]

const NavBar: React.FC = () => {
    return (
        <div className="hs-collapse overflow-hidden transition-all duration-300 basis-full grow block">
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                <div className="flex flex-col gap-x-0 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                    {
                        NAVITEMS.map((navItem, index) => {
                            if(navItem.megamenu) {
                                return <NavItemMegamenu 
                                            key={index} 
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

                    <div className="py-3 md:py-0 lg:px-4">
                        <a className="inline-block w-full md:w-fit text-center rounded bg-red-600 px-12 py-4 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none transform hover:scale-105" 
                            href="#"
                        >
                            Contactez-nous
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar