import React, {Component} from 'react';
import FilterLink from '../containers/FilterLink';
import * as types from '../constants/actionsType';
import '../styles.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="catalog">
                <div className="catalogName">Каталог</div>
                <ul className="catalogItem">
                    <li>
                        <FilterLink filter={ types.SHOW_ALL }>Все предложения</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter={ types.SHOW_BIKES }>Велосипеды</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter={ types.SHOW_ACCESSORIES }>Аксессуары</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter={ types.SHOW_SPARE_PARTS }>Запчасти</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter={ types.SHOW_CLOTHES }>Одежда</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter={ types.SHOW_PROTECTION }>Защита</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter={ types.SHOW_ROLLERS }>Ролики</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter={ types.SHOW_SCOOTERS }>Самокаты</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter={ types.SHOW_SKATEBOARDS }>Скейтборды и пенни борды</FilterLink>
                    </li>
                    <li>
                        <FilterLink filter={ types.SHOW_ELECTRIC_TRANSPORT }>Электрический транспорт</FilterLink>
                    </li>
                </ul>
            </div>
        )
    }
}