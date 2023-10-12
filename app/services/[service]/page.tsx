/* eslint-disable react/no-unescaped-entities */
import Services from '@components/sections/Services'

interface SingleServiceProps {}

const SingleService: React.FC<SingleServiceProps> = () => {
    return (
        <div className="py-28">
            Page de présentation d'un service
        </div>
    )
}

export const metadata = {
    title: "Nos services",
    description: "XksDigital",
}

export default SingleService