import Services from '@components/sections/Services'
import Contact from '@components/sections/Contact'
import ServicesHero from '@components/sections/ServicesHero'
import QuoteRequest from '@components/sections/QuoteRequest'

interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
    return (
        <div className="py-28">
            <ServicesHero />
            <Services titleClasses="" />
            <Contact />
            <QuoteRequest />
        </div>
    )
}

export const metadata = {
    title: "Nos services",
    description: "XksDigital",
}

export default ServicesPage