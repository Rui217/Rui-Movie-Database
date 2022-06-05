import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageSingleMovie from '../pages/PageSingleMovie';

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
          <main>
            <Switch>
              <Route path="/rui-movie/" exact><PageHome sort='popular' /></Route>
              <Route path="/rui-movie/sort/popular"><PageHome sort='popular' /></Route>
              <Route path="/rui-movie/sort/top-rated"><PageHome sort='top_rated' /></Route>
              <Route path="/rui-movie/sort/now-playing"><PageHome sort='now_playing' /></Route>
              <Route path="/rui-movie/sort/upcoming"><PageHome sort='upcoming' /></Route>
              <Route path="/rui-movie/about"><PageAbout /></Route>
              <Route path="/rui-movie/favs"><PageFavs /></Route>
              <Route path="/rui-movie/movie/:id"><PageSingleMovie /></Route>
            </Switch>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
