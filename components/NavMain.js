import { NavLink } from 'react-router-dom';

function NavMain() {
    return (
        <nav className="nav-main">
            <ul>
                <li>
                    <NavLink to="/rui-movie/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/rui-movie/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/rui-movie/favs">Favs</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavMain;


