import Image from 'next/image'

const Team = () => {
    return (
        <section className="w-full bg-gray-50 dark:bg-gray-900">
            <div className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-16 max-w-[85rem] w-full mx-auto">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl text-gray-700 dark:text-white">Kickstart your marketing</h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                        saepe laborum.
                    </p>
                </div>
                <div className="grid gap-10 grid-cols-2 lg:grid-cols-4 mt-12">
                <div className="flex flex-col items-center">
                    <Image
                        className="object-cover rounded-full border border-gray-800 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
                        src="/assets/images/placeholder-user.png"
                        alt="Person"
                        width="170" height="170"
                    />
                    <div className="flex flex-col items-center mt-4">
                        <p className="text-xl text-gray-700 dark:text-gray-500 font-bold">Oliver Aguilerra</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Product Manager</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="object-cover rounded-full border border-gray-800 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
                        src="/assets/images/placeholder-user.png"
                        alt="Person"
                        width="170" height="170"
                    />
                    <div className="flex flex-col items-center mt-4">
                        <p className="text-xl text-gray-700 dark:text-gray-500 font-bold">Marta Clermont</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Design Team Lead</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="object-cover rounded-full border border-gray-800 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
                        src="/assets/images/placeholder-user.png"
                        alt="Person"
                        width="170" height="170"
                    />
                    <div className="flex flex-col items-center mt-4">
                        <p className="text-xl text-gray-700 dark:text-gray-500 font-bold">Anthony Geek</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">CTO, Lorem Inc.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="object-cover rounded-full border border-gray-800 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
                        src="/assets/images/placeholder-user.png"
                        alt="Person"
                        width="170" height="170"
                    />
                    <div className="flex flex-col items-center mt-4">
                        <p className="text-xl text-gray-700 dark:text-gray-500 font-bold">Alice Melbourne</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Human Resources</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="object-cover rounded-full border border-gray-800 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
                        src="/assets/images/placeholder-user.png"
                        alt="Person"
                        width="170" height="170"
                    />
                    <div className="flex flex-col items-center mt-4">
                        <p className="text-xl text-gray-700 dark:text-gray-500 font-bold">Martin Garix</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Bad boy</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="object-cover rounded-full border border-gray-800 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
                        src="/assets/images/placeholder-user.png"
                        alt="Person"
                        width="170" height="170"
                    />
                    <div className="flex flex-col items-center mt-4">
                        <p className="text-xl text-gray-700 dark:text-gray-500 font-bold">Andrew Larkin</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Backend Developer</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="object-cover rounded-full border border-gray-800 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
                        src="/assets/images/placeholder-user.png"
                        alt="Person"
                        width="170" height="170"
                    />
                    <div className="flex flex-col items-center mt-4">
                        <p className="text-xl text-gray-700 dark:text-gray-500 font-bold">Sophie Denmo</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Designer UI/UX</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image
                        className="object-cover rounded-full border border-gray-800 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
                        src="/assets/images/placeholder-user.png"
                        alt="Person"
                        width="170" height="170"
                    />
                    <div className="flex flex-col items-center mt-4">
                        <p className="text-xl text-gray-700 dark:text-gray-500 font-bold">Benedict Caro</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">Frontend Developer</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Team