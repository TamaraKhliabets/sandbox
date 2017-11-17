import React, { Component } from 'react';
import Search from "./Search";
import style from '../style';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul style={ style.menu }>
                    <li style={ style.block }>
                        <Search  data={ this.props.data }/>
                        {console.log('hi from menu')}
                    </li>
                    {/*<li style={ style.block }>Мой аккаунт</li>*/}
                    {/*<li style={ style.block }>Корзина</li>*/}
                </ul>
            </div>
        )
    }
}