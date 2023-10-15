import React, { ReactNode } from 'react'
import '@styles/globals.css'
import Layout from '@components/Layout/Layout'

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default RootLayout
