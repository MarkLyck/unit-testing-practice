import React from 'react'
import store from '../store'

import CartItem from './CartItem'

const CartList = React.createClass({
  getInitialState: function() {
    return {cartItems: [], total: 0}
  },
  componentDidMount: function() {
    store.cart.on('change', this.updateCart)
  },
  updateCart: function() {
    this.setState({cartItems: store.cart.get('items'), total: store.cart.get('total')})
  },
  componentWillUnmount: function() {
    store.cart.off('change', this.updateCart)
  },
  render: function() {
    console.log(store.cart);
    let cartItems = this.state.cartItems.map((item,i) => {
      return (<CartItem item={item} key={i}/>)
    })
    return (
      <div className="cart">
        <ul className="cart-list">
          {cartItems}
        </ul>
        <h3 className="total">{this.state.total}</h3>
      </div>
    )
  }
})

export default CartList
