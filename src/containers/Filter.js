import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/actionsType';
import ProductList from "../components/ProductList";
import setFilter from '../actions/productActions';

function getCurrentFilters(products, filter) {
  switch (filter) {

    case types.SHOW_ALL:
      return products;

    case types.SHOW_BIKES:
      let product = products.map(p => {
        return p.categoryId;
      });
      let category = product.filter((e, i, arr) => {
        return arr.indexOf(e) === i
      });
      return products.filter(p => {
        if (p.categoryId === category[29]) {
          return p
        }
      });

    case types.SHOW_ACCESSORIES: {
      let product = products.map(p => {
        return p.categoryId;
      });
      let category = product.filter((e, i, arr) => {
        return arr.indexOf(e) === i
      });
      let indexOfCategory = [ 0, 1, 4, 5, 7, 9, 11, 12, 22, 30, 33, 34, 37 ];
      let accessoryArr = indexOfCategory.map(e => {
        return category[e];
      });
      let filterData = [];
      products.map(p => {
        if(accessoryArr.indexOf(p.categoryId) !== -1) {
          filterData.push(p);
        }
      });
      return filterData
    }

    case types.SHOW_SPARE_PARTS: {
      let product = products.map(p => {
        return p.categoryId;
      });
      let category = product.filter((e, i, arr) => {
        return arr.indexOf(e) === i
      });
      let indexOfCategory = [ 6, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28 ];
      let accessoryArr = indexOfCategory.map(e => {
        return category[e];
      });
      let filterData = [];
      products.map(e => {
        if(accessoryArr.indexOf(e.categoryId) !== -1) {
          filterData.push(e);
        }
      });
      return filterData
    }

    case types.SHOW_CLOTHES: {
      let product = products.map(p => {
        return p.categoryId;
      });
      let category = product.filter((e, i, arr) => {
        return arr.indexOf(e) === i
      });
      return products.filter(e => {
        if (e.categoryId === category[31]) {
          return e
        }
      })
    }

    case types.SHOW_PROTECTION: {
      let product = products.map(p => {
        return p.categoryId;
      });
      let category = product.filter((e, i, arr) => {
        return arr.indexOf(e) === i
      });
      return products.filter(e => {
        if (e.categoryId === category[32] || e.categoryId === category[35]) {
          return e
        }
      })
    }

    case types.SHOW_ROLLERS: {
      let product = products.map(p => {
        return p.categoryId;
      });
      let category = product.filter((e, i, arr) => {
        return arr.indexOf(e) === i
      });
      return products.filter(e => {
        if (e.categoryId === category[31]) {
          return e
        }
      })
    }

    case types.SHOW_SCOOTERS: {
      let product = products.map(p => {
        return p.categoryId;
      });
      let category = product.filter((e, i, arr) => {
        return arr.indexOf(e) === i
      });
      return products.filter(e => {
        if (e.categoryId === category[2]) {
          return e
        }
      })
    }

    case types.SHOW_SKATEBOARDS: {
      let product = products.map(p => {
        return p.categoryId;
      });
      let category = product.filter((e, i, arr) => {
        return arr.indexOf(e) === i
      });
      return products.filter(e => {
        if (e.categoryId === category[3]) {
          return e
        }
      })
    }

    case types.SHOW_ELECTRIC_TRANSPORT: {
      let product = products.map(p => {
        return p.categoryId;
      });
      let category = product.filter((e, i, arr) => {
        return arr.indexOf(e) === i
      });
      return products.filter(e => {
        if (e.categoryId === category[36]) {
          return e
        }
      })
    }
  }
}

function mapStateToProps(state) {
  return {
    products: getCurrentFilters(state.products, state.currentFilter)
  }
}

class CurrentFilterList extends Component {
  render() {
    return (
      <ProductList products={ this.props.products }/>
    )
  }
}

export default connect(mapStateToProps)(CurrentFilterList)