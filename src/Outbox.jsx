import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import OutboxInput from './OutboxInput.jsx';
import axios from 'axios';

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
    this.verfiyEmail = this.verfiyEmail.bind(this);
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
      if (!this.refs[temp].state.checked || !this.verfiyEmail(this.refs[temp].state.email)) {
        nextState.rows[i] = { objKey: i, key: i, ref: a => this[temp] = a };
      } else if(this.refs[temp].state.checked && send) {
        axios({
          method: 'post',
          url: '/send',
          data: {
            email: this.refs[temp].state.email,
            merit: this.refs[temp].state.selectedMerit
          }
        });
        console.log("You sent the " + this.refs[temp].state.selectedMerit + " merit to " + this.refs[temp].state.email + "!");
      }
    }
    sessionStorage.setItem('savedState', JSON.stringify(nextState));
    this.setState(nextState);
  }

  verfiyEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
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
            </tbody>
              {Object.keys(this.state.rows).map((item) => {
                let reference = '_' + item;
                return <OutboxInput verify={this.verfiyEmail} objKey={item} key={item} ref={reference} />;
              })}
        </table>
      </div>
    )
  };
};
