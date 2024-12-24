import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa6";

const Header = () => {
    return (
        <header>
            <div>
                <FaGithubAlt />
                <h1>GitHub Finder</h1>
            </div>

            <nav>
                <Link to="/">Home</Link> | <Link to="/search">Search</Link>
            </nav>
        </header>
    );
}

export default Header