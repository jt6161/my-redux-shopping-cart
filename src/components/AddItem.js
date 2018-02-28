import React, { Component } from 'react'
import { addItem } from '../redux/item.action'
import { Row, Input, Button } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddItem extends Component {
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

  render () {
    return (
      <div className='container'>
      <Row>
        <h2>Add Item</h2>
        <Input
          s={6}
          label="Quantity"
          onChange={() => this.setState({ quantity: e.target.value})}
        />
        <Input
          s={6}
          type='select'
          label="Materialize Select"
          defaultValue='2'
          onChange={() => this.setState({ productId: e.target.value})}
        >
          {listOfProducts}
        </Input>
        <Button
          waves='light'
          onClick={this.handleSubmit}
        >Submit</Button>
      </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => {
  return {
    addItem: bindActionCreators(additem, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
