import React, { Component } from 'react';

export default class OutInput extends Component {
	constructor(props){
		super(props);
    console.log(this.props.objKey)
		this.state = {
			checked: false,
			email: '',
			selectedMerit: 'First Commit'
		}
		this.handleCheck = this.handleCheck.bind(this);
		this.addEmail = this.addEmail.bind(this);
		this.addMerit = this.addMerit.bind(this);
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

  addMerit(e) {
  	this.setState({
  		selectedMerit: e.target.value
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
        <td><input type="text" value={this.state.email} onChange={this.addEmail} /></td>
        <td><select onChange={this.addMerit} className="dropdown">
              <option value="First Commit">First Commit</option>
              <option value="100 Commits">100 Commits</option>
              <option value="1000 Commits">1000 Commits</option>
            </select></td>
      </tr>
    )
  }
};
