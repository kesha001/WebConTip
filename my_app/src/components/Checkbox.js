import React, { Component } from "react";
import { render } from "react-dom";

class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.state = { checked: this.props.checked == "true" }
		this.handleCheck = this.handleCheck.bind(this);
	}
	handleCheck(e) {
		this.setState({
			checked: e.target.checked
		})
	}
	render() {
		return (
		<div className="custom-sq" style={{ display: "inline-block"}}>
				<input id={this.props.name} type="checkbox" name={this.props.name} checked={this.state.checked} onChange={this.handleCheck} />
				<label  for={this.props.name}>{this.props.text}</label>
			</div>
		);
	}
}

export default Checkbox;
