"use client"
import Head from "next/head"
import { useRouter } from "next/navigation"
import Footer from "../common/Footer/Footer"
import Header from '@components/common/Header'

const Layout = (props: any) => {
    const { children, ...customMeta } = props
    const router = useRouter()

    const meta = {
        title: "XKSDIGITAL",
        description: `Découvrez la puissance de la transformation digitale avec Xksdigital : Création d'applications innovantes, design web de classe mondiale et stratégies numériques percutantes. Notre équipe de visionnaires numériques réalise vos rêves en lignes de code et en pixels. Votre succès en ligne commence ici. Contactez-nous pour une expérience digitale exceptionnelle.`,
        image: "/assets/images/xksdigital-logo.png",
        type: "website",
        ...customMeta,
    }

    return (
        <html lang="fr">
            <body className="min-w-[350px] overflow-x-hidden bg-gray-50 dark:bg-gray-900">
                <Head>
                    <title>{meta.title}</title>
                    <meta name="robots" content="follow, index" />
                    <link href="/assets/images/xksdigital-logo.png" rel="shortcut icon" />
                    <meta content={meta.description} name="description" />
                    <meta
                        property="og:url"
                        content={`https://xksdigital-frontend.vercel.app`}
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:image" content={meta.image} />
                </Head>

                <Header />

                <main id="main" className="min-h-screen flex flex-col items-center">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    )
}

export default Layout