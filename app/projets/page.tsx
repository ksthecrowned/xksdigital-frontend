import Projects from '@components/sections/Projects'
import Contact from '@components/sections/Contact'

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
    return (
        <div className="w-full py-12">
            <Projects />
            <Contact />
        </div>
    )
}

export const metadata = {
    title: "Nos Projets",
    description: "XksDigital",
}

export default ProjectsPage