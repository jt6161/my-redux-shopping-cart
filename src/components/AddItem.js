import React, { Component } from 'react'
import { addItem } from './redux/item.action'
import { Row, Input, Button } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class AddItem extends Component {
  state = {
    newItem: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
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
          onChange={(e) => this.setState({ quantity: e.target.value})}
        />
        <Input
          s={6}
          type='select'
          label="Materialize Select"
          defaultValue='2'
          onChange={(e) => this.setState({ productId: e.target.value})}
        >

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

function mapDispatchToProps(dispatch) {
  return {
    addItem: bindActionCreators(addItem, dispatch)
  }
}
function mapStateToProps(state) {
  console.log(state.items.length)
  return {
    newId: state.items.length = 1
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
