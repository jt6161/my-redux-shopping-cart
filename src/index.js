import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchItems } from './redux/item.action'
import { fetchProducts } from './redux/products.action'

let newStore = store()

newStore.dispatch(fetchItems())
newStore.dispatch(fetchProducts())

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
