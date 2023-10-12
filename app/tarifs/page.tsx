import Pricing from '@components/sections/Pricing'

interface PricingPageProps {}

const PricingPage: React.FC<PricingPageProps> = () => {
    return (
        <div className="py-12">
            <Pricing />
        </div>
    )
}

export const metadata = {
    title: "Nos Pricing",
    description: "XksDigital",
}

export default PricingPage