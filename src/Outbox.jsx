import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import OutInput from './OutInput.jsx';

export default class Outbox extends Component {
  constructor(props){
    super(props);
    this.state = {
    	rows: { 0 : <OutInput key='0' ref={ a => this._0 = a }/> },
    	uniqueID: 1
    };

    this.addRow = this.addRow.bind(this);
    this.deleteOrSend = this.deleteOrSend.bind(this);
  };

  addRow() {
    let nextState = this.state;
    let id = this.state.uniqueID;
    let counter = '_' + (id).toString();
    nextState.rows[id] = <OutInput key={this.state.uniqueID} ref={ a => this[counter] = a } />;
    this.state.uniqueID++;
    this.setState(nextState);
  };

  deleteOrSend(send) {
  	let nextState = { rows: {} };
  	for (var i=0; i<this.state.uniqueID; i++){
      let temp = '_' + i.toString();
      if (!this[temp]) {
      	continue;
      }
	    if (!this[temp].state.checked) {
	    	console.log("inside add to undelete", this.state.rows[i])
	      nextState.rows[i] = this.state.rows[i];
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
	          {Object.keys(this.state.rows).map((key) => {
    					return this.state.rows[key];
						})}
	    	  </tbody>
        </table>
      </div>
    )
  };
};
