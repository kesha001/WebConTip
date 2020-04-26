import React, { Component } from "react";

import NavBar from "./NavBar";
import RecommendationBody from "./RecommendationBody";
import Footer from "./Footer";


class RecommendationsPage extends Component{
    render() {
        return (
            <div>
                <NavBar/>
                <div className="main">
                    <RecommendationBody/>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default RecommendationsPage;