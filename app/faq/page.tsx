import FAQ from '@components/sections/FAQ'
import React from 'react'

interface FAQPageProps {}

const FAQPage:React.FC<FAQPageProps> = () => {
    return (
        <div className="pt-20">
            <FAQ />
        </div>
    )
}

export default FAQPage