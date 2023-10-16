import Contact from '@components/sections/Contact'
import Map from '@components/sections/Map'
import QuoteRequest from '@components/sections/QuoteRequest'

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
    return (
        <div className="w-full py-20">
            <Map />
            <QuoteRequest />
            <Contact />
        </div>
    )
}

export const metadata = {
    title: "Page contact",
    description: "XksDigital",
}

export default ContactPage