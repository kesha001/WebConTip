import React, { Component } from "react";


class LoginForm extends Component{
    render() {
        return (
            <div>
            <div class="login_container">
                <div class="main_title"><h1>Log in</h1></div>
                    <form>
                      <label for="fname">Login</label>
                      <input type="login" placeholder="Enter Login" name="fname"/>
                      <label for="lname">Password</label>
                      <input type="password" name="enter" class="password_form" placeholder="Enter Password.."/>
                      <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default LoginForm;
