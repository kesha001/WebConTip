import React, { Component, ListItem } from "react";

import InfoText from "./InfoText";
import Checkbox from "./Checkbox";
import history from './history';


class ProfileBody extends Component{

    constructor(props) {
            super(props);
            this.state = {
                email: '',
                password: '',
                confirmPassword: '',
                data: [],
                loaded: false,
                placeholder: "Loading"
            };
        }

        handleEmailChange = event => {
            this.setState({
                email: event.target.value
            })
        }
        handlePasswordChange = event => {
            this.setState({
                password: event.target.value
            })
        }
        handleConfirmPasswordChange = event => {
            this.setState({
                confirmPassword: event.target.value
            })
        }
        handleGenreSubmit = event => {
            alert("Genre change submitted!");
            event.preventDefault();
        }
        handleEmailSubmit = event => {
            alert("Email change submitted!");
            event.preventDefault();
            this.setState({
                email: event.target.value
            })
        }
        handlePasswordSubmit = event => {
            if (this.state.password == this.state.confirmPassword) {
                alert("Password change submitted!");
                event.preventDefault();
            }
            else {
                alert("Passwords do not match!");
                event.preventDefault();
            }
        }
        handleDeleteProfile = event => {
            alert("Profile deletion request submitted!");
        }

        componentDidMount() {
    		const token = localStorage.getItem('jwt access');
            const options = {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
    				'Content-Type': 'application/json',
    				'Authorization': `JWT ${token}`
                }
            }
            fetch("http://localhost:8000/api/v1/app/genre/list/", options)
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
            <div className="main_title"><h1>My Profile</h1></div>
                <h1 className="profile_titles">Profile Info</h1>
                <p className="profile_info"></p><InfoText/>
                
            </div>
            </div>
        )
    }
}


export default ProfileBody;
