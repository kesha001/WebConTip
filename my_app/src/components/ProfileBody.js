import React, { Component } from "react";



class ProfileBody extends Component{
    render() {
        return (
            <div>
            <div className="container_profile main">
            <div className="main_title"><h1>My Profile</h1></div>
                <h1 className="profile_titles">Profile Info</h1>
                <p className="profile_info"><br/>Username: my_username<br/><br/><br/>Email: my_email@email.org<br/><br/><br/>Full name: Firstname Lastname</p>
                <h1 className="profile_titles"><br/><br/>Change Profile Info <br/><br/></h1>
                <h2 className="profile_titles">Change Email<br/><br/></h2>
                <form>
                    <input type="change" name="change" placeholder="New Email.."/>
                    <button type="change">Change</button>
                </form>
                <h2 class="profile_titles">Change Password<br/></h2>
                <form>
                    <input type="password" name="change" className="password_form" placeholder="New Password.."/>
                    <input type="password" name="change" className="password_form" placeholder="Retype new password.."/>
                    <button type="change">Change</button>
                </form>
            </div>
            </div>
        )
    }
}


export default ProfileBody;
