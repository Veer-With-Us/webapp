import React, { Component } from 'react';

import Outbox from './Outbox.jsx';

export default class Main extends Component {
	render() {
		return(
      <div className="main-div">
        <h1 className="title">Sigma Outbox</h1>
        <h4><i>By Lucy Wonsower</i></h4>
        <div className="input-form">
        <Outbox/>
        </div>
      </div>
		)
	};
};
