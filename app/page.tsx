import About from '@components/sections/About'
import Header from '@components/common/Header'
import Hero from '@components/sections/Hero'
import Services from '@components/sections/Services'
import Testimonial from '@components/sections/Testimonial'
import Team from '@components/sections/Team'
import Projects from '@components/sections/Projects'
import Contact from '@components/sections/Contact'
import Partners from '@components/sections/Partners'
import VideoHero from '@components/sections/VideoHero'
import Marketing from '@components/sections/Marketing'

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    return (
        <>
            <VideoHero />
            <Marketing />
            <About />
            <Services titleClasses="mx-auto max-w-lg text-center" />
            <Projects titleClasses="mx-auto max-w-lg text-center" />
            <Testimonial />
            <Partners />
            <Contact />
        </>
    )
}

export const metadata = {
    title: "Page d'accueil",
    description: "XksDigital page d'accueil",
}

export default HomePage