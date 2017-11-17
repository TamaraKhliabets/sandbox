import React, { Component } from 'react';
import style from '../style';

export default class LeftArrow extends Component {
    render() {
        return (
            <a
                href="#"
                style={ style.leftArrow }
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}
            >
                <span className="fa fa-2x fa-angle-left" />
            </a>
        )
    }
}