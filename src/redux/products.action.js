export const ADD_PRODUCT = 'ADD_PRODUCT'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILED = 'FETCH_PRODUCT_FAILED'

export const addProduct = (newProduct) => {
  console.log('add product', newProduct)
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: newProduct
    })
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:8082/api/products`)
      let products = await response.json()
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: products
      })
    } catch(error) {
      dispatch({
        type: FETCH_PRODUCT_FAILED,
        payload: error
      })
    }
  }
}
