import React, { Component } from "react";
import PropTypes from 'prop-types';
class SendButton extends Component {
    static get propTypes() {
    return {
        buttonName: PropTypes.any,
        onClick: PropTypes.func
    };
}
	render() {
		return (
			<button type="submit" value="Submit" className="primary" onClick={this.props.onClick} >{this.props.buttonName}</button>
		);
	}
}

export default SendButton;
