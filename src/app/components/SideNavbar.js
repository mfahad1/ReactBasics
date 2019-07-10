import React from 'react';
import {  NavLink } from 'react-router-dom'


const SideNavbar = (selected) => {

  return (
   
    <div className="sidenav">
      <NavLink exact={true} activeClassName='is-active' to='/'>Movies</NavLink>
      <NavLink activeClassName='is-active' to='/my-fav'>My Favorite</NavLink>
    </div>

  );
}

export default SideNavbar;


// // <div className="sidenav">
// <a exact={true} activeClassName='is-active' to='/'>Movies</a>
// <a   activeClassName='is-active' to='/my-fav'>My Favorite</a>
// </div>