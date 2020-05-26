import React, { Component, ListItem } from "react";


import history from './history';

import Checkbox from "./Checkbox";
import PasswordInputField from "./PasswordInputFields";
import SendButton from "./SendButton";
import InfoText from "./InfoText";
import WelcomeText from "./WelcomeText";

class ProfileBody extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            deletePassword: '',
            data: [],
            loaded: false,
            placeholder: "Loading",
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

        handleCurrentPasswordChange = event => {
            this.setState({
                currentPassword: event.target.value
            })
        }

        handleDeletePasswordChange = event => {
            this.setState({
                deletePassword: event.target.value
            })
        }

        handleGenreSubmit = event => {
            alert("Genre change submitted!");
            event.preventDefault();
        }


        handleEmailSubmit = (event, addToast) => {
            event.preventDefault();
            // Update user email
    		const access_token = localStorage.getItem('jwt access');
            let options = {
                method: "PATCH",
                body: JSON.stringify({ email: this.state.email }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
    				'Authorization': `JWT ${ access_token }`
                }
            }
            fetch(`http://localhost:8000/api/v1/account/users/me/`, options)
                .then(res => {
                    console.log(res);
                    if (res.status != 200){
                        addToast("Something went wrong", { appearance: 'error', autoDismiss: true, });
                    }
                    else {
                        this.props.history.push("/profile/");
                        addToast("Email changed successfully!", { appearance: 'success', autoDismiss: true, });
                    }
                    return res.json();
                });
            }


        handlePasswordSubmit = (event, addToast) => {
            if (this.state.password == this.state.confirmPassword) {
                event.preventDefault();
                // Update user password
                const access_token = localStorage.getItem('jwt access');
                let options = {
                    method: "POST",
                    body: JSON.stringify({ new_password: this.state.password, re_new_password: this.state.confirmPassword, current_password: this.state.currentPassword }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${ access_token }`
                    }
                }
                fetch(`http://localhost:8000/api/v1/account/users/set_password/`, options)
                    .then(res => {
                        console.log(res);
                        if (res.status != 204){
                            addToast("Something went wrong", { appearance: 'error', autoDismiss: true, });
                        }
                        else {
                            this.props.history.push("/login/");
                        }
                        return res.json();
                    });
            }
            else {
                event.preventDefault();
                addToast("Passwords do not match!", { appearance: 'error', autoDismiss: true, });
            }
        }


    handleDeleteProfile = (event, addToast) => {
        event.preventDefault();
        addToast("Profile deletion request submitted!", { appearance: 'info', autoDismiss: true, });
        // Delete user
        const access_token = localStorage.getItem('jwt access');
        let options = {
            method: "DELETE",
            body: JSON.stringify({ current_password: this.state.deletePassword }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${ access_token }`
            }
        }
        fetch(`http://localhost:8000/api/v1/account/users/me/`, options)
            .then(res => {
                console.log(res);
                if (res.status != 204){
                    addToast("Something went wrong", { appearance: 'error', autoDismiss: true, });
                }
                else {
                    this.props.history.push("/login/");
                }
                return res.json();
            });
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
                <h1 className="profile_titles"><br/><br/>Change Profile Info <br/><br/></h1>
                <h2 className="profile_titles">Change Email<br/><br/></h2>
                <form>
                    <input
                        type="change"
                        name="profile_email"
                        id="profile_email"
                        value={ this.state.email }
                        onChange={ this.handleEmailChange }
                        placeholder="New Email" />
                    <input
                        type="password"
                        className="password_form"
                        name="#" id="#"
                        placeholder="Enter Password To Confirm" />
                    <SendButton buttonName="Change!" onSubmit={ this.handleEmailSubmit } toastMessage="Email changed successfully" />
                </form>
                <h2 className="profile_titles">Change Password<br/></h2>
                <form>
                <PasswordInputField
                    name="profile_current_password"
                    id="profile_current_password"
                    value={this.state.currentPassword}
                    onChange={this.handleCurrentPasswordChange}
                     placeholder="Current Password" />
                <PasswordInputField
                    name="profile_password" id="profile_password"
                    value={ this.state.password }
                    onChange={ this.handlePasswordChange }
                    placeholder="New Password" />
                <PasswordInputField
                    name="profile_confirm_password"
                    id="profile_confirm_password"
                    value={ this.state.confirmPassword }
                    onChange={ this.handleConfirmPasswordChange }
                    placeholder="Confirm New Password" />
                    <SendButton buttonName="Change!" onSubmit={ this.handlePasswordSubmit } toastMessage="Password changed successfully" />
                </form>
                <h3>Wanna Leave Us? Ah, We Will Miss You!</h3>
                        <form method="post" action="#">
                            <PasswordInputField
                                name="profile_delete_password"
                                id="profile_delete_password"
                                value={ this.state.deletePassword }
                                onChange={ this.handleDeletePasswordChange }
                                placeholder="Password" />
                        <br />
                            <SendButton id="DeleteProfileButton" buttonName="Delete" onSubmit={ this.handleDeleteProfile } />
                        </form>
            </div>
            </div>
        )
    }
}


export default ProfileBody;
