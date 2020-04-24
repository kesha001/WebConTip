import React, { Component } from "react";


class SearchBody extends Component{
    render() {
        return (
            <div>
            <div className="main search_container">
                <div className="main_title"><h1>Search page</h1></div>
                <form>
                    <input type="search" name="search" placeholder="Movie name.."/>
                    <button type="search">Search</button>
                </form>
            </div>
            </div>
        )
    }
}


export default SearchBody;
