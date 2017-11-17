import React, { Component } from 'react';
import style from '../style';
import ProductLink from './ProductLink';

export default class ProductList extends Component {
    render() {
        let productNodes = this.props.data.map(p => {
                return (
                    <li key={p['_id']} style={ style.listItem }>
                        <ProductLink
                            key={ p['_id'] }
                            picture={ p.picture }
                            name={ p.name }
                            price={ p.price }
                            currencyId={ p.currencyId }
                            uniqueID={ p['_id'] }/>
                    </li>
                )
        });

        return (
            <div>
                <ul style={ style.list }>
                    { productNodes }
                </ul>
            </div>
        )
    }
}