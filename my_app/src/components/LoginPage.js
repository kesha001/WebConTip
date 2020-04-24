import React, { Component } from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import LoginHeader from "./LoginHeader";

class LoginPage extends Component{
    render() {
        return (
            <div>
            <LoginHeader/>
            <LoginForm/>
            <SignUpForm/>
            </div>
        )
    }
}


export default LoginPage;
