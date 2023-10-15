import Contact from '@components/sections/Contact'

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
    return (
        <div className="w-full py-20">
            <Contact />
        </div>
    )
}

export const metadata = {
    title: "Page contact",
    description: "XksDigital",
}

export default ContactPage