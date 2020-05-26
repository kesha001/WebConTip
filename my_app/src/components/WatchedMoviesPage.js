import React, { Component } from "react";
import Header from "./Header";
import WatchedMoviesBody from "./WatchedMoviesBody";
import Footer from "./Footer";


class WatchedMoviesPage extends Component {
    render() {
        return (
            <div id="wrapper">
                <Header />
                <WatchedMoviesBody history={this.props.history} />
                <Footer />
            </div>
        );
    }
}

export default WatchedMoviesPage;
