import React, { Component } from "react";
import Header from './Header';
import PropTypes from "prop-types";

import Footer from "./Footer";
import MovieList from "./MovieList";

class RecommendationsPage extends Component{
    static get propTypes() {
    return {
        history: PropTypes.any,
    };
}
    render() {
        return (
            <div className="main">
                <Header/>
                <div >
                <div className="main_title"><h1>Your recommendations for today</h1></div>
                    <MovieList history={this.props.history}/>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default RecommendationsPage;
