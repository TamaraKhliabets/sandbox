import * as types from '../constants/actionsType';
import productApi from '../api/productApi';

export function setFilter(filter) {
  return { type: types.SET_FILTER, filter }
}

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products }
}

export function findProduct(value) {
  return { type: types.FIND_PRODUCT, value }
}

export function loadProducts() {
  return function (dispatch) {
    productApi.loadProductsFromServer().then(products => {
        dispatch(loadProductsSuccess(products))
      }).catch(err => {
        throw(err)
      })
  }
}