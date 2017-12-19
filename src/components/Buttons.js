import React, { Component } from 'react';

export default class Buttons extends Component {
  render() {
    let a = [];
    for( let i=1; i < this.props.products.length/20; i++ ) {
      a.push(i)
    }

    let buttons = a.map(e => {
      return (
        <button>{e}</button>
      )
    });

    return (
      <ul>
        {buttons}
      </ul>
    )
  }
}