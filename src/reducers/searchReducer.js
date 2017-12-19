import * as types from '../constants/actionsType';
import initialState from "./initialState";

export default function currentFilter( state = initialState.filter, action ) {
  switch ( action.type ) {
    case types.SEARCH_PRODUCT: {
      const { value } = action;
      const searchProduct = state.products.filter(prod => prod.includes(value));
      return {
        ...state,
        value,
        searchProduct
      }
    }
    default:
      return state
  }
}