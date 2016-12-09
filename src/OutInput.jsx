import React, { Component } from 'react';

export default class OutInput extends Component {
  render(){
    return (
      <div>
        <form>
        <input type="checkbox" />
        <input type="text" />
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        </form>
      </div>
    )
  }
};
