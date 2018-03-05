import React, { Component } from 'react'
import { Container, Row, Input, Button } from 'react-materialize'
import { connect } from 'react-redux'
import { addItem } from '../redux/actions/items'
import { bindActionCreators } from 'redux'


class AddItem extends Component {
  constructor() {
    super()
    this.state = {
      productId: 1,
      quantity: 0
    }
  }

handleClick = () => {
  this.props.addItem(this.state)
}

  render () {
    console.log('props in additem', this.props)
    let listOfProducts = this.props.products.map(product => {
      return (
        <option key={product.id} value={product.id}>{product.name}</option>
      )
    })
    return (
      <Container>
      <Row>
        <h2>Add Item</h2>
        <Input
          s={12}
          label="Quantity"
          onChange={(e) => this.setState({ quantity: e.target.value})}
        />
        <Input
          s={12}
          type='select'
          label="Choose a product"
          onChange={(e) => this.setState({ productId: e.target.value})}
        >
          {listOfProducts}
        </Input>
        <Button
          waves='light'
          onClick={this.handleClick}
        >Submit</Button>
      </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addItem
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
