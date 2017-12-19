import { createStore, applyMiddleware } from 'redux';
import mainReducer from '../reducers/mainReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
  return createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )
}