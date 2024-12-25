import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa6";
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.icon}><FaGithubAlt /></span>
                <h1>GitHub Finder</h1>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
            </nav>
        </header>
    );
}

export default Header