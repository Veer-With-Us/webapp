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
    this.deleteRow = this.deleteRow.bind(this);
  };

  addRow() {
    let nextState = this.state;
    let counter = '_' + (this.state.rows.length).toString();
    nextState.rows.push(<OutInput key={this.state.rows.length} ref={ a => this[counter] = a } />);
    this.setState(nextState);
  };

  deleteRow() {
  	let nextState = [];
  	for (var i=0; i<this.state.rows.length; i++){
      let temp = '_' + i.toString();
      console.log(this[temp].state);
      if (!this[temp].state.checked) {
        nextState.push(this.state.rows[i]);
      }
  	}
  	console.log(nextState)
  	this.setState(nextState);
  }

  render() {
  	return ( 
  		<div className="outbox">
    	  <h3>Outbox</h3>
    	  <div className="buttons">
    	    <button onClick={this.addRow} className="outbox-button">Add Row</button>
    	    <button onClick={this.deleteRow} className="outbox-button">Delete</button>
    	    <button className="outbox-button">Send</button>
    	  </div>
    	  <table>
    	    <tbody>
	          <tr>
	            <th> </th>
	            <th>Email</th>
	            <th>Merit</th>
	          </tr>
	    	    {this.state.rows.map((item) => {
	    	    	console.log(item)
              return item
	    	    })}
	    	  </tbody>
        </table>
      </div>
    )
  };
};
