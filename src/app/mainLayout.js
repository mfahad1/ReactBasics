import React from 'react';
import './mainLayout.css';
import SideNavbar from './components/SideNavbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'


class MainLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRoute: 'movies'
    };
  }

  setActiveRoute() {
    
  }

  // render method here...

  render() {
    return (
      <div className="container">    
        <Router>
          <SideNavbar />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>}/>
            <Route path="/my-fav" component={() => <div>Fav</div>} />
            <Route component={() => <div>NotFound</div>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default MainLayout;