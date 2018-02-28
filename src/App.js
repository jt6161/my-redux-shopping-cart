import React, { Component } from 'react'
import './App.css';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
        <AddItem />
        <CartItems />
        <CartFooter />
      </div>
    );
  }
}

export default App;
