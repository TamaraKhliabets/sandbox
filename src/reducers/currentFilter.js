import * as types from '../constants/actionsType';
import initialState from "./initialState";

export default function currentFilter( state = initialState.filter, action ) {
  switch ( action.type ) {
    case types.SET_FILTER:
      return action.filter;
    default:
      return state
  }
}