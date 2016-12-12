import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import OutboxInput from './OutboxInput.jsx';

export default class Outbox extends Component {
  constructor(props){
    super(props);
    let session = JSON.parse(sessionStorage.savedState);
    console.log(session)
    this.state = {
    	rows: session || { 0 : { objKey: 0, key: 0, ref: (a) => this._0 = a } },
    	uniqueID: 1
    };

    this.addRow = this.addRow.bind(this);
    this.deleteOrSend = this.deleteOrSend.bind(this);
    // this.mapSavedRows = this.mapSavedRows.bind(this);
  };

  // mapSavedRows() {
  //   let rows = sessionStorage.savedState;
  //   console.log(rows)
  //   // Object.keys(rows).map((item) => {
  //   //   let number = (rows[item].key).toString();
  //   //   let counter = '_' + (number).toString();
  //   //   console.log(number, counter)
  //   //   // return { number:  <OutInput objKey=number key=counter ref={ a => this[number] = a }/> }
  //   // })
  // };

  addRow() {
    let nextState = this.state;
    let id = this.state.uniqueID;
        console.log("inside addRow", id)
    let counter = '_' + (id).toString();
    nextState.rows[id] = { objKey: id, key: id, ref: a => this[counter] = a };
    this.state.uniqueID++;
    sessionStorage.setItem('savedState', JSON.stringify(nextState.rows));
    console.log(sessionStorage)
    this.setState(nextState);
  };

  //The delete function and send function use the same logic, so it is called with a boolean to determine whether or not to console log the 'sent' message. 

  deleteOrSend(send) {
  	let nextState = { rows: {} };
  	for (var i=0; i<this.state.uniqueID; i++){
      let temp = '_' + i.toString();
      if (!this[temp]) {
      	continue;
      }
	    if (!this[temp].state.checked) {
	      nextState.rows[i] = this.state.rows[i];
	    } else if(this[temp].state.checked && send) {
	    	console.log("You sent the " + this[temp].state.selectedMerit + " merit to " + this[temp].state.email + "!");
	    }  	
	  }
    // sessionStorage.setItem('savedState', JSON.stringify(nextState));
  	this.setState(nextState);
  }

  render() {
  	return ( 
  		<div className="outbox">
    	  <h3>Outbox</h3>
    	  <div>
    	    <button onClick={this.addRow}>Add Row</button>
    	    <button onClick={this.deleteOrSend.bind(this, false)}>Delete</button>
    	    <button onClick={this.deleteOrSend.bind(this, true)}>Send</button>
    	  </div>
    	  <table>
    	    <tbody>
	          <tr>
	            <th> </th>
	            <th>Email</th>
	            <th>Merit</th>
	          </tr>
	            {Object.keys(this.state.rows).map((item) => {
                let num = item.toString();
                let reference = '_' + num;
                return <OutboxInput objKey={num} key={num} ref={reference} />;
              })}
	    	  </tbody>
        </table>
      </div>
    )
  };
};
