import React, { Component } from 'react';
import '../styles.css';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul className="menu">
                    {/*<li style={ style.block }>*/}
                        {/*<Search />*/}
                    {/*</li>*/}
                    <li className="block">Мой аккаунт</li>
                    <li className="block">Корзина</li>
                </ul>
            </div>
        )
    }
}