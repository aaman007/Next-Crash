import ArticleList from "../components/ArticleList";
import {server} from '../config/index';
import Meta from "../components/Meta";

export default function Home({ articles }) {
    return (
        <div>
            <Meta title={"Home"} />
            <h1> Home Page </h1>
            <ArticleList articles={articles} />
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();

    return {
        props: {
            articles
        }
    }
}

/**
    export const getStaticProps = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const articles = await res.json();

        return {
            props: {
                articles
            }
        }
    }
 **/
