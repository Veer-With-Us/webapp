import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import OutInput from './OutInput.jsx';

export default class Outbox extends Component {
  constructor(props){
    super(props);
    this.state = {
    	rows: [<OutInput key='0' ref={ a => this._0 = a }/>]
    };

    this.addRow = this.addRow.bind(this);
    this.deleteOrSend = this.deleteOrSend.bind(this);
  };

  addRow() {
    let nextState = this.state;
    let counter = '_' + (this.state.rows.length).toString();
    nextState.rows.push(<OutInput key={this.state.rows.length} ref={ a => this[counter] = a } />);
    this.setState(nextState);
  };

  deleteOrSend(send) {
  	let nextState = { rows: [] };
  	for (var i=0; i<this.state.rows.length; i++){
      let temp = '_' + i.toString();
      if (!this[temp].state.checked) {
        nextState.rows.push(this.state.rows[i]);
      } else if(this[temp].state.checked && send) {
      	console.log("You sent the " + this[temp].state.selectedMerit + " merit to " + this[temp].state.email + "!");
      }
  	}
  	this.setState(nextState);
  }

  render() {
  	return ( 
  		<div className="outbox">
    	  <h3>Outbox</h3>
    	  <div className="buttons">
    	    <button onClick={this.addRow} className="outbox-button">Add Row</button>
    	    <button onClick={this.deleteOrSend.bind(this, false)} className="outbox-button">Delete</button>
    	    <button onClick={this.deleteOrSend.bind(this, true)} className="outbox-button">Send</button>
    	  </div>
    	  <table>
    	    <tbody>
	          <tr>
	            <th> </th>
	            <th>Email</th>
	            <th>Merit</th>
	          </tr>
	    	    {this.state.rows}
	    	  </tbody>
        </table>
      </div>
    )
  };
};
