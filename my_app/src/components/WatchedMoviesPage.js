import React, { Component } from "react";
import NavBar from "./NavBar";
import WatchedMoviesBody from "./WatchedMoviesBody";
import Footer from "./Footer";
class WatchedMoviesPage extends Component{
    render() {
        return (
            <div>
                <NavBar/>
                <WatchedMoviesBody/>
                <Footer/>
            </div>
        )
    }
}


export default WatchedMoviesPage;
