import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'


const CartItems = (props)=> {
  if(props.products[1]) {
    let populatedItems = props.items.map(item => {
      item.product = props.products.filter(product => item.product_id === product.id)[0]
      return item
    })
    console.log('pop', populatedItems)
  }
  let bigList = props.items.map(item => <CartItem key={item.id} item={item} />)
  return (
    <div className="container">
      <h1>Items</h1>
      <div className="collection">
        <div className="collection-item row grey lighten-3">
          <div className="col s8">Product</div>
          <div className="col s2">Price</div>
          <div className="col s2">Quantity</div>
        </div>
          {bigList}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  items: state.items
})

export default connect(mapStateToProps, null)(CartItems)
