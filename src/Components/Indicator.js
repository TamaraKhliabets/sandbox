import React, { Component } from 'react';
import style from '../style';

export default class Indicator extends Component {
    render() {
        return (
            <li>
                <a
                    style={
                        this.props.index == this.props.activeIndex
                            ? "carousel__indicator carousel__indicator--active"
                            : "carousel__indicator"
                    }
                    onClick={this.props.onClick}
                />
            </li>
        )
    }
}