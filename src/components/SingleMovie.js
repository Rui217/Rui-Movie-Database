import { useEffect, useState } from 'react';
import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie({ movieObj }) {

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

    useEffect(() => {
        heartIcon(movieObj.id);
    });

    return (
        <div className="single-movie">
            <div className="single-movie-backdrop"
            style={{
                backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`
            }}></div>
            <div className="single-movie-content">
                <div className="single-movie-poster">
                {movieObj.poster_path === null ? 
                    <img src={noPoster} alt="No poster" /> : 
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }
                </div>
                <div className="single-movie-info">
                    <h2>{movieObj.title}</h2>
                    <div className="single-movie-info-bits">
                        <p>{movieObj.release_date}</p>
                        <div className="single-movie-info-icons">
                            <button onClick={() => toggleFavourites(movieObj)} key={movieObj.id}>
                                <p>{heart}</p>
                            </button>
                            <p className="rating">{movieObj.vote_average * 10}%</p>
                        </div>
                    </div>
                    <p>{movieObj.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;
