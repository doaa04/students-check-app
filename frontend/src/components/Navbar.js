import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Students</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;