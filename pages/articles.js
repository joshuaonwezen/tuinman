import ArticleList from "../components/ArticleList";
import styles from '../styles/Home.module.scss'


function Articles({ articles }) {
  console.log(articles)

  return (
    <div className={styles["white-container"]}>
      <ArticleList articles={articles}/>
    </div>
  );
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json()
    
    return {
      props: {
        articles
      },
      revalidate: 60
    }
}  

export default Articles