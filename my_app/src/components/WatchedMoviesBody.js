import React, { Component } from "react";
import Movie from "./Movie";


class WatchedMoviesBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
        // for (var i = 0; i <= 100; i++) {
        //     this.setState(prevState => ({
        //         movie_ratings: { ...prevState.movie_ratings, [i]: "" }
        //     }));
        // }
    }

    get_films = async (film_ids, options) => {

        /*
            Functions that makes get requests simultaneously and returns films data
        */

        let fetches = [];
        let jsones = [];

        let responses;
        let data;

        // GETTING RESPONSES
        for (const id of film_ids.watched_list) {
            fetches.push(fetch(`http://localhost:8000/api/v1/app/film/detail/${id}/`, options));
            console.log(id);
        }

        try {
            responses = await Promise.all(fetches);
        }
        catch (err) {
            console.log(err);
        };
        console.log(responses);
        //
        for (const response of responses) {
            jsones.push(response.json());
        }
        console.log(jsones);
        try {
            data = await Promise.all(jsones);
        }
        catch (err) {
            console.log(err);
        };

        return data;
    };

    async componentDidMount() {
        const access_token = localStorage.getItem('jwt access');
        const options = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${access_token}`
            }
        }

        // GETTINGS FILM IDS
        const response = await fetch(`http://localhost:8000/api/v1/app/watched/set/`, options);

        // IF 401 THEN LOGIN
        if (response.status === 401) {
            this.props.history.push("/login");
            return this.setState(() => {
                return { placeholder: "Something went wrong!" };
            });
        }

        const film_ids = await response.json();

        let data = await this.get_films(film_ids, options);

        this.setState(() => {
            return {
                data,
                loaded: true
            }
        });
    }

    render() {
        let moviesOnPageAmount = 0;
        let films = <p></p>;
        if (this.state && typeof (this.state.data) != 'undefined' && this.state.data.length > 0) {
            films = this.state.data.map(film => {
                if (moviesOnPageAmount < 12) {
                    moviesOnPageAmount++;
                    return (
                        <Movie film_id={ film.id } tmdb={ film.tmdb } link={ `/film/${film.id}` } title={ film.title } desc='GET DESCRIPTION FROM IMDB' genre={film.genre.map(genre => { return (genre.name + '  ') })} />
                    );
                }
            })
        }
        return (
            <div id="main">
                <div className="inner">
                    <h1>Watched Movies</h1>
                    <div className="watchlist">
                        <div className="watchlist-row">
                            { films }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default WatchedMoviesBody;
