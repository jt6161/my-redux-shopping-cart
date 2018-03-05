import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILED,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILED
} from '../actions/items'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return [...action.payload]
    case FETCH_ITEMS_FAILED:
      return action.payload // this is the error
    case ADD_ITEM_SUCCESS:
      return [...state, action.payload]
    case ADD_ITEM_FAILED:
      return action.payload // this is the error
    default:
      return state
  }
}
