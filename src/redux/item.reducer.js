import { ADD_ITEM, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILED } from './item.actions'

let initialState = []

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload]
    case FETCH_ITEMS_SUCCESS:
      return [...state, ...action.payload]
    case FETCH_ITEMS_FAILED:
      return action.payload
    default:
      return state
  }
}
