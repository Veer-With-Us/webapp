import React, { Component } from 'react';

export default class OutInput extends Component {
  constructor(props){
    super(props);
    let session = sessionStorage[this.props.objKey] ? JSON.parse(sessionStorage[this.props.objKey]) : {
      checked: false,
      email: '',
      selectedMerit: 'First Commit'
    }
    this.state = session;

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
    sessionStorage.setItem(this.props.objKey, JSON.stringify(this.state));
    return (
      <tr>
        <td>
          <input type="checkbox"
                 checked={this.state.checked}
                 onChange={this.handleCheck} />
        </td>
        <td>
          <input type="text" 
                 value={this.state.email} 
                 onChange={this.addEmail} />
        </td>
        <td>
          <select value={this.state.selectedMerit} 
                  onChange={this.addMerit} 
                  className="dropdown">
            <option value="First Commit">First Commit</option>
            <option value="100 Commits">100 Commits</option>
            <option value="1000 Commits">1000 Commits</option>
          </select>
        </td>
      </tr>
    )
  }
};
