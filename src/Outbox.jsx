import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import OutboxInput from './OutboxInput.jsx';

export default class Outbox extends Component {
  constructor(props){
    super(props);
    let session = sessionStorage.savedState ? JSON.parse(sessionStorage.savedState) : {
      rows: { 0 : { objKey: 0, key: 0, ref: a => this._0 = a } },
      uniqueID: 1
    };
    this.state = session; 

    this.addRow = this.addRow.bind(this);
    this.deleteOrSend = this.deleteOrSend.bind(this);
  };

  addRow() {
    let nextState = this.state;
    let id = this.state.uniqueID;
    let reference = '_' + (id).toString();
    nextState.rows[id] = { objKey: id, key: id, ref: a => this[reference] = a };
    nextState.uniqueID++;
    sessionStorage.setItem('savedState', JSON.stringify(nextState));
    this.setState(nextState);
  };

  //The delete function and send function use the same logic, so it is called with a boolean to determine whether or not to console log the 'sent' message. 

  deleteOrSend(send) {
    let nextState = { rows: {}, uniqueID: this.state.uniqueID };
    for (var i=0; i<this.state.uniqueID; i++){
      let temp = '_' + i.toString();
      if (!this.refs[temp]) {
        continue;
      }
      if (!this.refs[temp].state.checked) {
        nextState.rows[i] = { objKey: i, key: i, ref: a => this[temp] = a };
      } else if(this.refs[temp].state.checked && send) {
        console.log("You sent the " + this.refs[temp].state.selectedMerit + " merit to " + this.refs[temp].state.email + "!");
      }  	
    }
    sessionStorage.setItem('savedState', JSON.stringify(nextState));
    this.setState(nextState);
  }

  render() {
    return ( 
      <div className="outbox">
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
                let reference = '_' + item;
                return <OutboxInput objKey={item} key={item} ref={reference} />;                
              })}
          </tbody>
        </table>
      </div>
    )
  };
};
