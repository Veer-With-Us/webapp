import React, { Component } from 'react';

import OutInput from './OutInput.jsx';

export default class Outbox extends Component {
  constructor(props){
    super(props);
    this.state = {};

    this.addLine = this.addLine.bind(this);
  };

  addLine() {

  };

  render() {
  	return ( 
  		<div className="outbox">
    	  <h3>Outbox</h3>
    	  <button className="outbox-button">Add</button>
    	  <OutInput />
      </div>
    )
  };
};
