import React, { Component } from "react";
import RecommendationFilm from "./RecommendationFilm";


class WatchedMoviesBody extends Component{
    render() {
        return (
            <div>
            <div className="container_profile main">
            <div className="main_title"><h1>Watched Movies</h1></div>
                <div className="column">
                <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="Vovk" genre="fantastic"/>
                <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="Vovk" genre="fantastic"/>
                <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="Vovk" genre="fantastic"/>
                </div>
            </div>
            </div>
        )
    }
}


export default WatchedMoviesBody;
