import tmdbLogo from '../images/tmdb-logo.svg';

function PageAbout() {
    return (
        <section className="about-page">
            <h2>About</h2>
            <p>Welcome! At Rui Movie, you can check out a catalogue of movies and find out basic information about them. If you find one you like, you can click the heart icon and it will appear on the Favourites page. </p>
            <p>Happy browsing!</p>
            <div className="logo-and-text">
                <img src={tmdbLogo} alt="TMDB logo" />
                <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            </div>
        </section>
    )
}

export default PageAbout;
