import { createStore, combineReducers, applyMiddleware } from 'redux'
import itemReducer from './item.reducer'
import thunk from 'redux-thunk'
import productsReducer from './products.reducer'

const rootReducer = combineReducers({
  items: itemReducer,
  products: productsReducer
})

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}
