import React, { Component } from 'react'
<<<<<<< HEAD
import { Container, Row, Input, Button } from 'react-materialize'
=======
import { addItem } from '../redux/item.action'
import { Row, Input, Button } from 'react-materialize'
>>>>>>> 4729afaca9044551b711950713ac9c937907f70b
import { connect } from 'react-redux'
import { addItem } from '../redux/actions/items'
import { bindActionCreators } from 'redux'

class AddItem extends Component {
<<<<<<< HEAD
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
=======
 constructor() {
   super()
   this.state ={
     productId: 1,
     quantity: 0
   }
 }

  handleSubmit = () => {
    this.props.addItem({
      id: this.props.newId,
      name: this.state.newName
    })
  }
>>>>>>> 4729afaca9044551b711950713ac9c937907f70b

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
          onChange={() => this.setState({ quantity: e.target.value})}
        />
        <Input
          s={12}
          type='select'
<<<<<<< HEAD
          label="Choose a product"
          onChange={(e) => this.setState({ productId: e.target.value})}
=======
          label="Materialize Select"
          defaultValue='2'
          onChange={() => this.setState({ productId: e.target.value})}
>>>>>>> 4729afaca9044551b711950713ac9c937907f70b
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

<<<<<<< HEAD
const mapDispatchToProps = dispatch => bindActionCreators({
  addItem
}, dispatch)

=======
const mapDispatchToProps = dispatch => {
  return {
    addItem: bindActionCreators(additem, dispatch)
  }
}
>>>>>>> 4729afaca9044551b711950713ac9c937907f70b


export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
