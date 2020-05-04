import React, { Component } from "react";
import MovieList from "./MovieList";
import PropTypes from 'prop-types';

class RecommendationsBody extends Component{
    static get propTypes() {
    return {
        history: PropTypes.any,
    };
}
    render() {
        return (
            <div>
                <div className="main_title"><h1>Your recommendations for today</h1></div>
                    <MovieList history={this.props.history}/>
            </div>

        )
    }
}



export default RecommendationsBody;
