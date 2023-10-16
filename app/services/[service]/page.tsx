/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Article from '@components/sections/Article'
import QuoteRequest from '@components/sections/QuoteRequest'
import Services from '@components/sections/Services'
import Team from '@components/sections/Team'

interface SingleServiceProps {}

const SingleService: React.FC<SingleServiceProps> = () => {
    return (
        <div className="w-full">
            <Article />
            <Team />
            <QuoteRequest />
        </div>
    )
}

export const metadata = {
    title: "Nos services",
    description: "XksDigital",
}

export default SingleService