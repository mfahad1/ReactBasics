import React from 'react';
import './mainLayout.css';
import SideNavbar from './components/SideNavbar';
import { HashRouter, Switch, Route } from 'react-router-dom'
import MovieList from './movies/movie-list';
import FavouriteMovieList from './favouriteMovies/favourite-list';


class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="layout-container">
        <HashRouter>
          <SideNavbar />
          <Switch>
            <Route exact path="/" component={() => <MovieList setMyFavirouteMovies={this.setMyFavirouteMovies}/>} />
            <Route path="/my-fav" component={FavouriteMovieList} />
            <Route component={() => <div>NotFound</div>} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
export default MainLayout;