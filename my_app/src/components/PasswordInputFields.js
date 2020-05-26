import React, { Component } from "react";


class PasswordInputField extends Component {
    render() {
        return (
            <input type="password" className="password_form"  name={ this.props.name } id={ this.props.id } value={ this.props.value } onChange={ this.props.onChange } placeholder={ this.props.placeholder } />
        );
    }
}

export default PasswordInputField;
