import React, { Component } from "react";
import RecommendationFilm from "./RecommendationFilm";
import PropTypes from "prop-types";


class WatchedMoviesBody extends Component{
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
			placeholder: "Loading"
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
		fetch(`http://yyr3ll.pythonanywhere.com/api/v1/app/film/list`, options)
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
            <div className="container_profile main">
            <div className="main_title"><h1>Watched Movies</h1></div>
                <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="Vovk" genre="fantastic"/>
                <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="Vovk" genre="fantastic"/>
                <RecommendationFilm image="https://skyandtelescope.org/wp-content/uploads/Interstellar_spaceman_480px-736x490-c-default.jpg" href="/" title="Vovk" genre="fantastic"/>
            </div>
            </div>
        )
    }
}


export default WatchedMoviesBody;
