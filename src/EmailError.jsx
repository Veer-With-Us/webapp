import React, { Component } from 'react';

export default class EmailError extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let warning = false;
    if (this.props.checked){
      if (!this.props.verify(this.props.email)){
        warning = true;
      } else {
        warning = false;
      }
    }
    return (
      <div>
        {warning ? "Enter a valid email to send this merit!" : false }
      </div>
    )
  }
};
