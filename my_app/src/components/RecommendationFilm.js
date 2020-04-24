import React, { Component } from "react";


class RecommendationsFilm extends Component{
    render() {
        return (
            <div>
                <div className="container">
                    <a href={this.props.href}><img src={this.props.image} alt="Avatar" className="image"/></a>
                    <div className="middle">
                      <div className="text"><a href=""><div className="film_inside_name">{this.props.title}</div>Genre:<br/> {this.props.genre}</a></div>
                    </div>
                    <div className="disc">{this.props.title}</div>
                </div>`
            </div>
        )
    }
}


export default RecommendationsFilm;
