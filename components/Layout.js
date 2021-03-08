import styles from '../styles/Layout.module.css'
import Navbar from "./Navbar";
import Header from "./Header";
import Meta from "./Meta";

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    { props.children }
                </main>
            </div>
        </>
    )
}

export default Layout;