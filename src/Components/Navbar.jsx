
import './Navbar.css';

function Navbar() {
    return (
        <header className="Header">
            <a href="/">
                <h1>Logo</h1>
            </a>

            <nav className="Navbar">
                <ul className = "Menu">
                    <li><a href="/">Characters</a></li>
                    <li><a href="/">Comics</a></li>
                    <li><a href="/">Creators</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Series</a></li>
                    <li>
                        <input type="search" />
                    </li>
                </ul>

            </nav>
        </header>
    );
}


export default Navbar;