import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILED } from './products.reducer'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return [...action.payload]
    case FETCH_PRODUCT_FAILED:
      return action.payload
    default:
      return state
  }
}
