import React, { Component } from 'react';

import Outbox from './Outbox.jsx';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
      resp: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	};

	render() {
		return(
      <div className="main-div">
        <h1 className="title">Sigma</h1>
        <div className="input-form">
        <Outbox/>
        </div>
      </div>
		)
	};
};
