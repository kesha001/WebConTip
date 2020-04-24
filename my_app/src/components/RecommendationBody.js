import React, { Component } from "react";
import RecommendationFilm from "./RecommendationFilm";

class RecommendationsBody extends Component{
    render() {
        return (
            <div>
                <div className="main_title"><h1>Your recommendations for today</h1></div>
                <div className="row">
                    <div className="column">
                          <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="Vovk" genre="fantastic"/>
                          <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="vovk" genre="fantastic"/>
                    </div>
                    <div className="column">
                         <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="vovk" genre="fantastic"/>
                         <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="vovk" genre="fantastic"/>
                    </div>
                </div>
            </div>

        )
    }
}



export default RecommendationsBody;
