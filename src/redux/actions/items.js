export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILED = 'FETCH_ITEMS_FAILED'

export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const ADD_ITEM_FAILED = 'ADD_ITEM_FAILED'

const BASE_URL = `http://localhost:8082/api`

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${BASE_URL}/items`)
      let items = await response.json()
      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        payload: items
      })
    } catch(error) {
      dispatch({
        type: FETCH_ITEMS_FAILED,
        payload: error
      })
    }
  }
}

export const addItem = newItem => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/items`, {
        method: 'post',
        body: JSON.stringify(newItem),
        headers: {
          'content-type': 'application/json'
        },
      })
      let addedItem = await response.json()
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: addedItem
      })
    } catch(error) {
      dispatch({
        type: ADD_ITEM_FAILED,
        payload: error
      })
    }
  }
}
