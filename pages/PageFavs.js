import { useRef } from 'react';
import Movies from '../components/Movies';

function PageFavs() {

    const favMovieData = useRef([]);

    function favourites() {
        // check if localStorage is empty
        if (localStorage.length === 0) {
            return <p>Sorry, you do not have any favourite movies. You can go to the Home page to select your favourite movies.</p>;
        }
        
        // get all items from localStorage as an array of movie objects
        let tempMovieData = [];
        for (let i = 0; i < localStorage.length; i++) {
            tempMovieData.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        favMovieData.current = [...tempMovieData];

        // display movies
        return <Movies movieData={favMovieData.current} />;
    }

    return (
        <section className="favs-page">
            <h2>My Favourites</h2>
            {favourites()}
        </section>
    )
}

export default PageFavs;
