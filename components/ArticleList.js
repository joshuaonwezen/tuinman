import Link from 'next/link'
import ArticleItem from '../components/ArticleItem'
import styles from '../styles/Home.module.scss'

const ArticleList = ({articles}) => {
    return (
        <div>
            {articles.map((article) => (
                <ArticleItem article={article}/>
            ))}
        </div>
    )
}

export default ArticleList