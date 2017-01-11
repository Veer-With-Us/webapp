import React, { Component } from 'react';

export default class EmailError extends Component {
  constructor(props){
    super(props);

    this.verfiyEmail = this.verfiyEmail.bind(this);
  }

  verfiyEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render(){
    let warning = false;
    if (this.props.checked){
      if (!this.verfiyEmail(this.props.email)){
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
