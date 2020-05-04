import React, { Component } from "react";
import PropTypes from 'prop-types';


class RecommendationsFilm extends Component{
    static get propTypes() {
    return {
        href: PropTypes.any,
        title: PropTypes.any,
        image: PropTypes.any,
        genre: PropTypes.any,
    };
}
    render() {
        return (
                <article className="container">
                    <a href={this.props.href}><img src={this.props.image} alt="Avatar" className="image"/></a>
                    <div className="middle">
                      <div className="text"><a href=""><div className="">{this.props.title}</div>Genre:<br/> {this.props.genre}</a></div>
                    </div>
                    <div className="disc">{this.props.title}</div>
                </article>
        )
    }
}


export default RecommendationsFilm;
