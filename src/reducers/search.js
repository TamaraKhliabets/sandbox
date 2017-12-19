import * as types from '../constants/actionsType';
import initialState from './initialState';

export default function search( state = initialState.value, action ) {
  if(action.type === types.FIND_PRODUCT) {
      return action.value.toLowerCase()
  }
  return state
}