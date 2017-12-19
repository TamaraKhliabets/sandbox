import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadProducts } from "./actions/productActions";

const store = configureStore();

store.dispatch(loadProducts());


render(
  <BrowserRouter>
    <Provider store={ store }>
      <App/>
    </Provider>
  </BrowserRouter>
,document.getElementById('root'));