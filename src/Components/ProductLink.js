import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../style';

export default class ProductLink extends Component {
    render() {
        return (
            <Link to={`/products/${this.props.uniqueID}`} style={ style.link }>
                <div style={ style.imageContainer }><img src={ this.props.picture.split(',')[0] } alt={''} style={ style.image }/></div>
                <div style={ style.name }>{ this.props.name }</div><br/>
                <div style={ style.price }>{ this.props.price } { this.props.currencyId }</div>
            </Link>
        )
    }
}