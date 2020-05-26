import React, { Component } from "react";
import history from './history';


class SignUpForm extends Component{
    constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      re_password: '',
    }
  }
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
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
      re_password: event.target.value
    })
  }
  handleBirthDateChange = event => {
    this.setState({
      birthDate: event.target.value
    })
  }
  handleSubmit = event => {
    if (this.state.password == this.state.re_password) {
      event.preventDefault();
      // Authenticate User
      let options = {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      }
      fetch('http://localhost:8000/api/v1/account/users/', options)
          .then(res => {
              if (res.status != 201){
                  alert("Something went wrong");
              }
              else {
                  alert('Success! Authenticate me!');
                  this.props.history.push("/login/");
              }
              return res.json();
          });
    }
    else {
      alert('Error: Passwords do not match.');
      event.preventDefault();
    }


  }
    render() {
        return (
            <div>
            <div className="signup_container">
                <h1>You can also Sign Up here</h1>
                <form method="post"  onSubmit={this.handleSubmit}>
                    <input type="login" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Username" name="fname"/>
                    <input type="login" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" name="email"/>
                    <input type="password" name="enter" value={this.state.password} onChange={this.handlePasswordChange} className="password_form" placeholder="Enter Password.."/>
                    <input type="password" name="enter" className="password_form" value={this.state.re_password} onChange={this.handleConfirmPasswordChange} placeholder="Retype Password.."/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}


export default SignUpForm;
