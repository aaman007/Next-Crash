import styles from '../styles/Header.module.css';

const Header = (props) => {
    return (
        <div>
            <h1 className={styles.title}>
                 <span> NextJS </span> News
            </h1>
            <p className={styles.description}> Welcome to NextJS world </p>
        </div>
    )
}

export default Header;