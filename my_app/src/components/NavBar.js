import React, { Component } from "react";

class NavBar extends Component{
    render() {
        return (
            <div><ul className="topnav">
              <h1>ConTip</h1>
              <li><a href="/login">Log in</a></li>
              <li><a href="/watched_movies">Watched Movies</a></li>
              <li><a href="/search">Search</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/">Recommendations</a></li>
            </ul></div>
        )
    }

}



export default NavBar;
