import React, { Component } from 'react';

export default class OutInput extends Component {
	constructor(props){
		super(props);
		this.state = {
			checked: false,
			email: ''
		}
		this.handleCheck = this.handleCheck.bind(this);
		this.addEmail = this.addEmail.bind(this);
	}

  handleCheck() {
    this.setState({
      checked: !this.state.checked
    })
  }

  addEmail(e) {
    this.setState({
    	email: e.target.value
    })
  }

  render() {
    return (
      <tr>
        <td>
        <input type="checkbox"
               checked={this.state.checked}
               onChange={this.handleCheck}
               />
        </td>
        <td><input type="text" onChange={this.addEmail} /></td>
        <td><select className="dropdown">
            <option value="1">First Commit</option>
            <option value="2">100 Commits</option>
            <option value="3">1000 Commits</option>
          </select></td>
      </tr>
    )
  }
};
