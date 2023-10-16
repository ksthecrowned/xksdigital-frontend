import BlogArticle from '@components/sections/BlogArticle'

interface BlogArticlePageProps {}

const BlogArticlePage: React.FC<BlogArticlePageProps> = () => {
    return (
        <div className="py-12">
            <BlogArticle />
        </div>
    )
}

export const metadata = {
    title: "Nos Article",
    description: "XksDigital",
}

export default BlogArticlePage