import Article from '@components/sections/Article'
import JobMetas from '@components/sections/JobMetas'
import React from 'react'

interface SingleJobProps {}

const SingleJob:React.FC<SingleJobProps> = () => {
    return (
        <div className="pt-16">
            <Article />
            <JobMetas />
        </div>
    )
}

export default SingleJob