import Image from 'next/image'
import Link from 'next/link'

const Blog:React.FC = ({ titleClasses }) => {
    return (
        <section className="w-full bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
                <div className={titleClasses}>
                    <h2 className="text-3xl font-bold sm:text-4xl text-gray-700 dark:text-white">Kickstart your marketing</h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                        saepe laborum.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div href="#" className="group relative overflow-hidden h-[400px] rounded-xl border border-red-200 dark:border-gray-800">
                        <Image
                            src="/assets/images/pexels-fauxels-3182743.jpg"
                            className="object-cover transform group-hover:scale-105 transition duration-300"
                            fill
                            alt="Image de présentation de xksdigital"
                        />
                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b to-gray-900/90 from-gray-600/80 transition duration-3000 flex flex-col justify-between p-8 hover:shadow-xl">
                            <Link href="#"  className="">
                                <h3 className="text-gray-200 text-2xl font-medium">Accouting / Dashboard de compte</h3>
                                <p className="text-gray-400 mt-2 text-sm">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                                    aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                                </p>
                            </Link>
                            <Link href="#" className="text-white font-medium">En savoir plus</Link>
                        </div>
                    </div>
                    <div href="#" className="group relative overflow-hidden h-[400px] rounded-xl border border-red-200 dark:border-gray-800">
                        <Image
                            src="/assets/images/pexels-fauxels-3182743.jpg"
                            className="object-cover transform group-hover:scale-105 transition duration-300"
                            fill
                            alt="Image de présentation de xksdigital"
                        />
                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b to-gray-900/90 from-gray-600/80 transition duration-3000 flex flex-col justify-between p-8 hover:shadow-xl">
                            <Link href="#"  className="">
                                <h3 className="text-gray-200 text-2xl font-medium">Accouting / Dashboard de compte</h3>
                                <p className="text-gray-400 mt-2 text-sm">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                                    aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                                </p>
                            </Link>
                            <Link href="#" className="text-white font-medium">En savoir plus</Link>
                        </div>
                    </div>
                    <div href="#" className="group relative overflow-hidden h-[400px] rounded-xl border border-red-200 dark:border-gray-800">
                        <Image
                            src="/assets/images/pexels-fauxels-3182743.jpg"
                            className="object-cover transform group-hover:scale-105 transition duration-300"
                            fill
                            alt="Image de présentation de xksdigital"
                        />
                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b to-gray-900/90 from-gray-600/80 transition duration-3000 flex flex-col justify-between p-8 hover:shadow-xl">
                            <Link href="#"  className="">
                                <h3 className="text-gray-200 text-2xl font-medium">Accouting / Dashboard de compte</h3>
                                <p className="text-gray-400 mt-2 text-sm">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                                    aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                                </p>
                            </Link>
                            <Link href="#" className="text-white font-medium">En savoir plus</Link>
                        </div>
                    </div>
                    <div href="#" className="group relative overflow-hidden h-[400px] rounded-xl border border-red-200 dark:border-gray-800">
                        <Image
                            src="/assets/images/pexels-fauxels-3182743.jpg"
                            className="object-cover transform group-hover:scale-105 transition duration-300"
                            fill
                            alt="Image de présentation de xksdigital"
                        />
                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b to-gray-900/90 from-gray-600/80 transition duration-3000 flex flex-col justify-between p-8 hover:shadow-xl">
                            <Link href="#"  className="">
                                <h3 className="text-gray-200 text-2xl font-medium">Accouting / Dashboard de compte</h3>
                                <p className="text-gray-400 mt-2 text-sm">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                                    aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                                </p>
                            </Link>
                            <Link href="#" className="text-white font-medium">En savoir plus</Link>
                        </div>
                    </div>
                    <div href="#" className="group relative overflow-hidden h-[400px] rounded-xl border border-red-200 dark:border-gray-800">
                        <Image
                            src="/assets/images/pexels-fauxels-3182743.jpg"
                            className="object-cover transform group-hover:scale-105 transition duration-300"
                            fill
                            alt="Image de présentation de xksdigital"
                        />
                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b to-gray-900/90 from-gray-600/80 transition duration-3000 flex flex-col justify-between p-8 hover:shadow-xl">
                            <Link href="#"  className="">
                                <h3 className="text-gray-200 text-2xl font-medium">Accouting / Dashboard de compte</h3>
                                <p className="text-gray-400 mt-2 text-sm">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                                    aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                                </p>
                            </Link>
                            <Link href="#" className="text-white font-medium">En savoir plus</Link>
                        </div>
                    </div>
                    <div href="#" className="group relative overflow-hidden h-[400px] rounded-xl border border-red-200 dark:border-gray-800">
                        <Image
                            src="/assets/images/pexels-fauxels-3182743.jpg"
                            className="object-cover transform group-hover:scale-105 transition duration-300"
                            fill
                            alt="Image de présentation de xksdigital"
                        />
                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b to-gray-900/90 from-gray-600/80 transition duration-3000 flex flex-col justify-between p-8 hover:shadow-xl">
                            <Link href="#"  className="">
                                <h3 className="text-gray-200 text-2xl font-medium">Accouting / Dashboard de compte</h3>
                                <p className="text-gray-400 mt-2 text-sm">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                                    aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                                </p>
                            </Link>
                            <Link href="#" className="text-white font-medium">En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog