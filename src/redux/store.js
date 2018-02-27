import { createStore, combineReducers, applyMiddleware } from 'redux'
import itemReducer from './item.reducer'
import thunk from 'redux-thunk'
import productReducer from './products.reducer'

const rootReducer = combineReducers({
  items: itemReducer,
  products: productReducer
})

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}
