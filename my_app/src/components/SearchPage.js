import React, { Component } from "react";
import SearchBody from "./SearchBody";
import Footer from "./Footer";
import Header from './Header';
import PropTypes from "prop-types";

class SearchPage extends Component{
    static get propTypes() {
    return {
        history: PropTypes.any,
    };
}
    render() {
        return (
            <div>
                <Header/>
                <SearchBody history={this.props.history}/>
                <Footer/>
            </div>
        )
    }
}


export default SearchPage;
