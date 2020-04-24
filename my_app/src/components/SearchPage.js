import React, { Component } from "react";
import NavBar from "./NavBar";
import SearchBody from "./SearchBody";
import Footer from "./Footer";
class SearchPage extends Component{
    render() {
        return (
            <div>
                <NavBar/>
                <SearchBody/>
                <Footer/>
            </div>
        )
    }
}


export default SearchPage;
