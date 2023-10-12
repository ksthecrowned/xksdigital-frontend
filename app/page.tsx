import About from '@components/sections/About'
import Header from '@components/common/Header'
import Hero from '@components/sections/Hero'
import Services from '@components/sections/Services'
import Testimonial from '@components/sections/Testimonial'
import Team from '@components/sections/Team'
import Projects from '@components/sections/Projects'
import Contact from '@components/sections/Contact'

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    return (
        <>
            <Hero />
            <div className="py-10">
                <About />
            </div>
            <Services />
            <Projects />
            <Testimonial />
            <Team />
            <Contact />
        </>
    )
}

export const metadata = {
    title: "Page d'accueil",
    description: "XksDigital page d'accueil",
}

export default HomePage