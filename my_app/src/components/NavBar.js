import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class NavBar extends Component{
    render() {
        return (
            <div><ul className="topnav">
              <h1>ConTip</h1>
              <li><Link to='/login' onClick={handle=>{localStorage.removeItem('jwt access'); localStorage.removeItem('jwt refresh')}}>Log Out</Link></li>
              <li><Link to='/watched_movies'>Watched Movies</Link></li>
              <li><Link to='/search'>Search</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/'>Recommendations</Link></li>
            </ul></div>
        )
    }

}



export default NavBar;
