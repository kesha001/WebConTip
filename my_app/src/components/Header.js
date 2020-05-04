import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class Header extends Component {
    static get propTypes() {
    return {
        className: PropTypes.any,
    };
}
	navBarFunc() {
		var x = document.getElementById("meny");
		if (x.className === "topnav") {
			x.className += "-responsive";
		} else {
			x.className = "topnav";
		}
	}
	render() {
		return (
			<header id="header" className={this.props.className}>
				<div className="header-inner">
                    <ul id="meny" className="topnav">
                      <h1>ConTip</h1>
                      <li><Link to='/login' onClick={handle=>{localStorage.removeItem('jwt access'); localStorage.removeItem('jwt refresh')}}>Log Out</Link></li>
                      <li><Link to='/watched_movies'>Watched Movies</Link></li>
                      <li><Link to='/search'>Search</Link></li>
                      <li><Link to='/profile'>Profile</Link></li>
                      <li><Link to='/'>Recommendations</Link></li>
						<a href="#" className="icon" onClick={this.navBarFunc}>
							<i className="nav-button fa fa-bars"></i>
                        </a>
                    </ul>
				</div>
			</header>
		);
	}
}

export default Header;
