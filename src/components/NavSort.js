import { NavLink } from 'react-router-dom';

function NavSort() {
    return (
        <nav className="nav-sort">
            <ul>
                <li>
                    <NavLink to="/rui-movie/sort/popular">Popular</NavLink>
                </li>
                <li>
                    <NavLink to="/rui-movie/sort/top-rated">Top Rated</NavLink>
                </li>
                <li>
                    <NavLink to="/rui-movie/sort/now-playing">Now Playing</NavLink>
                </li>
                <li>
                    <NavLink to="/rui-movie/sort/upcoming">Upcoming</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavSort;
