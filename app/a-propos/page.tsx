import About from '@components/sections/About'
import OurMission from '@components/sections/OurMission'
import Timeline from '@components/sections/Timeline'
import Team from '@components/sections/Team'
import Story from '@components/sections/Story'

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
    return (
        <div className="py-20 flex flex-col gap-12">
            <About />
            <OurMission />
            <Timeline />
            <Team />
            <Story />
        </div>
    )
}

export const metadata = {
    title: "A propos de nous",
    description: "XksDigital",
}

export default AboutPage