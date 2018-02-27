import { ADD_PRODUCT, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILED } from './products.reducer'

let initialState = []

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload]
    case FETCH_PRODUCT_SUCCESS:
      return [...state, ...action.payload]
    case FETCH_PRODUCT_FAILED:
      return action.payload
    default:
      return state
  }
}
