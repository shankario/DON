import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
        <nav className= "navbar">
            <h2>Blog post</h2>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/create">new blog </Link>
                <Link to="/About">About-us</Link>
            </div>
        </nav>
    );
}
export default Navbar;