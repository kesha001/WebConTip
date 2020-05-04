import React, { Component } from "react";
import WatchedMoviesBody from "./WatchedMoviesBody";
import Footer from "./Footer";
import Header from './Header';
import PropTypes from "prop-types";


class WatchedMoviesPage extends Component{
    static get propTypes() {
    return {
        history: PropTypes.any,
    };
}
    render() {
        return (
            <div>
                <Header/>
                <WatchedMoviesBody history={this.props.history}/>
                <Footer/>
            </div>
        )
    }
}


export default WatchedMoviesPage;
