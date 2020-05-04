import React, { Component } from "react";
import PropTypes from 'prop-types';

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import LoginHeader from "./LoginHeader";

class LoginPage extends Component{
    static get propTypes() {
    return {
        history: PropTypes.any,
    };
}
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
