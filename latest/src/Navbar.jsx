import {Link} from 'react-router-dom';

function Navbar(){
    return<div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    < Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/object">Object</Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default Navbar;