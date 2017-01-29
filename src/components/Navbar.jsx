import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return(
      <div>
        <ul className="navbar">
          <li>LOGO</li>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/learn">LEARN</Link></li>
          <li><Link to="/sell">SELL</Link></li>
          <li><Link to="/games">GAMES</Link></li>
          <li><Link to="/store">STORE</Link></li>
          <li><Link to="/help">HELP</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  };
};
