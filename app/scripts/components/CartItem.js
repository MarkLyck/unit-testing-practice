import React from 'react'
import store from '../store'

const CartItem = React.createClass({
  removeItem: function() {
    store.cart.removeItem(this.props.item)
  },
  render: function() {
    if (!this.props.item) {
      return null
    }
    return (
      <li className="cart-item">
        <h3 className="item-name">{this.props.item.name}</h3>
        <h3 className="item-price">{this.props.item.price}</h3>
        <button onClick={this.removeItem} className="remove-item">X</button>
      </li>
    )
  }
})

export default CartItem
