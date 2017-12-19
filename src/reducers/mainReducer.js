import { combineReducers } from 'redux';
import products from './productReducer';
import search from './search';
import currentFilter from './currentFilter';


const mainReducer = combineReducers({
  products,
  search,
  currentFilter
});

export default mainReducer;