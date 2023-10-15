import Blog from '@components/sections/Blog'

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
    return (
        <div className="w-full py-12">
            <Blog />
        </div>
    )
}

export const metadata = {
    title: "Notre Blog",
    description: "XksDigital",
}

export default BlogPage