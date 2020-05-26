import React, { Component } from "react";
import Footer from "./Footer";
import ProfileBody from "./ProfileBody";
import Header from './Header';
import PropTypes from 'prop-types';


class ProfilePage extends Component{
    static get propTypes() {
    return {
        history: PropTypes.any,
    };
}
    render() {
        return (
            <div className="main">
            <Header/>
            <ProfileBody history={this.props.history}/>
            <Footer/>
            </div>
        )
    }
}


export default ProfilePage;
