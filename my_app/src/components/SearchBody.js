import React, { Component } from "react";
import PropTypes from 'prop-types';


class SearchBody extends Component{
    static get propTypes() {
    return {
        history: PropTypes.any,
        push: PropTypes.func
    };
}
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading",
            filterOptions: [],
            sortingOptions: [],
            signalFilterOff: false,
            signalSortingOff: false,
            writableAsc: true,
            writableDesc: true,
        };
    }

    componentDidMount() {
		const access_token = localStorage.getItem('jwt access');
        const options = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `JWT ${access_token}`
            }
        }
        fetch("http://yyr3ll.pythonanywhere.com/api/v1/app/genre/list/", options)
            .then(response => {
                if (response.status > 400) {
                    this.props.history.push("/login");
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

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
