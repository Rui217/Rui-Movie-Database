import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function MovieCard({ movieObj }) {

    const [heart, setHeart] = useState(null);

    // update heart icon display
    function heartIcon(movieId) {
        if (localStorage.getItem(movieId)) {
            setHeart("♥");
        } else {
            setHeart("♡");
        }
    }

    // add/remove movie from favourites
    function toggleFavourites(movieObj) {
        if (localStorage.getItem(movieObj.id)) {
            localStorage.removeItem(movieObj.id);
        } else {
            localStorage.setItem(movieObj.id, JSON.stringify(movieObj));
        }
        heartIcon(movieObj.id);
    }

    // returns a string of length at most maxLength + 3
    function movieDescription(overview) {
        const maxLength = 300;
        if (overview.length < maxLength) {
            return overview;
        } else {
            return overview.substring(0, maxLength) + "...";
        }
    }

    useEffect(() => {
        heartIcon(movieObj.id);
    });

    return (
        <div className="movie-card">
            <div className="movie-hover">
                <div className="movie-poster">
                    {movieObj.poster_path === null ? 
                        <img src={noPoster} alt="No poster" /> : 
                        <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                    }
                </div>
                <div className="movie-description">
                    <p>{movieDescription(movieObj.overview)}</p>
                </div>
            </div>
            <div className="movie-info">
                <Link to={`/rui-movie/movie/${movieObj.id}`} className="title-link">
                    <h3>{movieObj.title}</h3>
                </Link>
                <div className="date-and-rating">
                    <p className="release-date">{movieObj.release_date}</p>
                    <p className="rating">{movieObj.vote_average * 10}%</p>
                </div>
                <div className="info-and-heart">
                    <Link to={`/rui-movie/movie/${movieObj.id}`} className="more-info">
                        More Info
                    </Link>
                    <button onClick={() => toggleFavourites(movieObj)} key={movieObj.id}>
                        <p>{heart}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
