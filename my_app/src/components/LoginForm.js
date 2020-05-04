import React, { Component } from "react";
import history from './history';


class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let options = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:8000/api/v1/auth/login/', options)
            .then(res => {
                if (res.status != 200){
                    alert("wrong credentials");
                    return false;
                }
                return res.json();


            })
            .then(data => {
                if(data){
                    localStorage.setItem('jwt access', data.access);
                    localStorage.setItem('jwt refresh', data.refresh);
                    this.props.history.push("/profile/");

                }
            });



    }

    render() {
        return (
            <div>
            <div className="login_container">
                <div className="main_title"><h1>Log in</h1></div>
                    <form method="post" onSubmit={this.handleSubmit}>
                      <label htmlFor="username" >Login</label>
                      <input type="login"  value={this.state.username} onChange={this.handleUsernameChange} placeholder="Enter Login" name="username"/>
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" className="password_form" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Enter Password.."/>
                      <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default LoginForm;
