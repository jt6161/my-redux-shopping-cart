import { createStore, combineReducers, applyMiddleware } from 'redux'
import items from './reducer/items'
import products from './reducer/products'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ items, products })

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}
