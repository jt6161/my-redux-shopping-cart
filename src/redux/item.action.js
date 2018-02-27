export const ADD_ITEM = 'ADD_ITEM'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILED = 'FETCH_ITEMS_FAILED'

export const addItem = (newItem) => {
  console.log('add item action', newItem)
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      payload: newItem
    })
  }
}

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:8082/api/items`)
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
