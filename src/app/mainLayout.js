import React from 'react';
import './mainLayout.css';
import SideNavbar from './components/SideNavbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import MovieList from './movies/movie-list';


class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="layout-container">    
        <Router>
          <SideNavbar />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/my-fav" component={MovieList} />
            <Route component={() => <div>NotFound</div>} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default MainLayout;