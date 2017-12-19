import React, { Component } from 'react';
import '../styles.css';

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    if (this.props.active) {
      return <div>{ this.props.children }</div>
    }

    return (
      <a className="link" href="" onClick={ this.handleClick }>{ this.props.children }</a>
    )
  }
}