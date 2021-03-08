import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { server } from "../../../config";

const Article = ({ article }) => {
    return (
        <div>
            <Head>
                <title> Article Details </title>
            </Head>
            <h1> {article.title} </h1>
            <p> {article.body} </p>
            <br />
            <Link href={'/'}> Go Back </Link>
        </div>
    )
};

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}));

    return {
        paths,
        fallback: false
    }
}

/**
 * Option 1:
    export const getServerSideProps = async (context) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
        const article = await res.json();
        return {
            props: {
                article
            }
        }
    }
 **/

/**
 * Option 2
    export const getStaticProps = async (context) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
        const article = await res.json();
        return {
            props: {
                article
            }
        }
    }

    export const getStaticPaths = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const articles = await res.json();

        const ids = articles.map(article => article.id);
        const paths = ids.map(id => ({params: {id: id.toString()}}));

        console.log(ids)
        console.log(paths)

        return {
            paths,
            fallback: false
        }
    }
 **/

export default Article;