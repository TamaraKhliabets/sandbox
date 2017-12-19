import React, { Component } from 'react';
import ProductList from './ProductList';
// import MainRoutes from "./MainRoutes";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { products: this.props.products };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    let searchQuery = e.target.value.toLowerCase();
    let displayedProduct = this.props.products.filter(function(i) {
      let searchValue = i.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    let newData = displayedProduct.slice(0, 20);

    this.setState({ data: newData });
  }

  render() {
    return (
      <div>
        <input
          className="block"
          type='text'
          placeholder='Поиск'
          onChange={ this.handleSearch }/>
          {/*<MainRoutes data={ this.state.data }/>?\*/}
          <ProductList products={ this.state.products }/>
      </div>
    )
  }
}