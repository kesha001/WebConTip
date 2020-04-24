import React, { Component } from "react";


class SignUpForm extends Component{
    render() {
        return (
            <div>
            <div class="signup_container">
                <h1>You can also Sign Up here</h1>
                <form>
                    <input type="login" placeholder="Username" name="fname"/>
                    <input type="login" placeholder="Email" name="email"/>
                    <input type="password" name="enter" class="password_form" placeholder="Enter Password.."/>
                    <input type="password" name="enter" class="password_form" placeholder="Retype Password.."/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}


export default SignUpForm;
