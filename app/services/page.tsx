import Services from '@components/sections/Services'
import Contact from '@components/sections/Contact'

interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
    return (
        <div className="py-28">
            <Services />
            <Contact />
        </div>
    )
}

export const metadata = {
    title: "Nos services",
    description: "XksDigital",
}

export default ServicesPage