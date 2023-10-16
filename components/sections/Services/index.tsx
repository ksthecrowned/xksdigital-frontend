import Link from 'next/link'
import { FaPagelines } from 'react-icons/fa'

type Service = {
    icon: string
    title: string
    description: string
    link: string
}

const services: Service[] = [
    {
        icon: "",
        title: "Digital campaigns",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
        link: "#",
    },
    {
        icon: "",
        title: "Digital campaigns",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
        link: "#",
    },
    {
        icon: "",
        title: "Digital campaigns",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
        link: "#",
    },
    {
        icon: "",
        title: "Digital campaigns",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
        link: "#",
    },
    {
        icon: "",
        title: "Digital campaigns",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
        link: "#",
    },
    {
        icon: "",
        title: "Digital campaigns",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
        link: "#",
    },
]  

interface ServicesProps {
    titleClasses: string;
}
  
const Services: React.FC<ServicesProps> = ({ titleClasses }) => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 text-white w-full">
            <div
                className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
            >
                <div className={titleClasses}>
                    <h2 className="text-3xl font-bold sm:text-4xl text-gray-700 dark:text-white">Kickstart your marketing</h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                        saepe laborum.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map((service, index) => {
                            return (
                                <Link  
                                    key={index}
                                    className="block rounded-xl border border-gray-800 py-12 px-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
                                    href={service.link}
                                >
                                    <FaPagelines className="text-red-500 text-4xl" />

                                    <h2 className="mt-4 text-xl font-bold text-gray-700 dark:text-white">{service.title}</h2>

                                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{service.description}</p>
                                </Link>
                            )    
                        })
                    }
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="#"
                        className="inline-block rounded bg-red-600 px-12 py-4 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none transform hover:scale-105"
                    >
                        Get Started Today
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Services