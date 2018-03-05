import { createStore, combineReducers, applyMiddleware } from 'redux'
<<<<<<< HEAD
import items from './reducer/items'
import products from './reducer/products'
=======
import itemReducer from './item.reducer'
import productsReducer from './products.reducer'
>>>>>>> 4729afaca9044551b711950713ac9c937907f70b
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ items, products })

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}
