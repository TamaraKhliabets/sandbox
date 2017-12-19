import React, { Component } from 'react';
// import ProductList from "./ProductList";
// import CurrentFilterList from '../containers/CurrentFilterList';
// import Filters from "./Filters";
import { connect } from 'react-redux';
import { findProduct } from "../actions/productActions";

class Search extends Component {
    constructor(props) {
        super(props);
        this.searchProduct = this.searchProduct.bind(this)
    }

  searchProduct() {
        this.props.onFindProduct(this.searchInput.value)
    }

    render() {
        return (
            <div>
              {/*<Filters/>*/}
                <input
                  className="block"
                  type='text'
                  placeholder='Поиск'
                  ref={(input) => { this.searchInput = input }}
                  onChange={ this.searchProduct }/>
              {/*<ProductList products={ this.props.products } />*/}
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
        products: state.products.filter(p => p.name.toLowerCase().includes(state.search))
    }
}

function mapDispatchToProps(dispatch) {
  return {
    onFindProduct: product => dispatch(findProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)