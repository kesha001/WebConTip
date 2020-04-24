import React, { Component } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProfileBody from "./ProfileBody";


class ProfilePage extends Component{
    render() {
        return (
            <div>
            <NavBar/>
            <ProfileBody/>
            <Footer/>
            </div>
        )
    }
}


export default ProfilePage;
