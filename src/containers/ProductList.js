import React, { Component } from 'react';
import style from '../style';
import ProductLink from '../components/ProductLink';
import { connect } from 'react-redux';

class ProductList extends Component {
  render() {
    const { searchProduct } = this.props;

    let productNodes = searchProduct.map(p => {
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

function mapStateToProps({ searchProduct }) {
  return {
    searchProduct: searchProduct.searchProduct
  }
}

export default connect(mapStateToProps)(ProductList)