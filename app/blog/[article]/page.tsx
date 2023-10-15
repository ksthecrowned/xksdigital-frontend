import Article from '@components/sections/Article'

interface ArticlePageProps {}

const ArticlePage: React.FC<ArticlePageProps> = () => {
    return (
        <div className="py-12">
            <Article />
        </div>
    )
}

export const metadata = {
    title: "Nos Article",
    description: "XksDigital",
}

export default ArticlePage