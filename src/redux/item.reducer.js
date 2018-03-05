import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILED } from './item.action'


export default (state = [], action) => {
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
