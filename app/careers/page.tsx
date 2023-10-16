import JobsList from '@components/sections/JobsList'
import Offers from '@components/sections/Offers'
import React from 'react'

interface CareersProps {}

const Careers:React.FC<CareersProps> = () => {
    return (
        <div className="w-full">
            <Offers />
            <JobsList />
        </div>
    )
}

export default Careers