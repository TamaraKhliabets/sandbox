import React, { Component } from 'react';
import style from '../style';

export default class About extends Component {
    render() {
        return (
            <div style={ style.title }>
                <h1>Вместо ног</h1>
                <div style={ style.quote }>«Купите себе велосипед. Не пожалеете, если останетесь живы».<br/>
                    <div style={ style.author } >Марк Твен</div>
                </div>
            </div>
        )
    }
}