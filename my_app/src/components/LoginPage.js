import React, { Component } from "react";
import history from './history';

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import LoginHeader from "./LoginHeader";

class LoginPage extends Component{
    render() {
        return (
            <div>
            <LoginHeader/>
            <LoginForm history={this.props.history}/>
            <SignUpForm history={this.props.history}/>
            </div>
        )
    }
}


export default LoginPage;
