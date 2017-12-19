import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default class ProductLink extends Component {
    render() {
        return (
          <div>
              <Link to={`/products/${this.props.uniqueID}`} className="linkProduct">
                <div className="imageContainer">
                  <img src={ this.props.picture.split(',')[0] } alt={''} className="image"/>
                </div>
                <div className="name">{ this.props.name }</div><br/>
                <div className="price">{ this.props.price } { this.props.currencyId }</div>
              </Link>
          </div>
        )
    }
}