import React, { Component } from 'react';
import ProductLink from './ProductLink';
import Buttons from './Buttons';
import '../styles.css';

export default class ProductList extends Component {
    render() {
      let activePage = this.props.products.slice(20, 40);
        let productNodes = activePage.map(p => {
                return (
                    <li key={p['_id']} className="listItem">
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
                <ul className="list">
                    { productNodes }
                </ul>
              <Buttons products={ this.props.products }/>
            </div>
        )
    }
}