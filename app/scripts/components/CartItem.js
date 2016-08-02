import React from 'react'
import store from '../store'

const CartItem = React.createClass({
  render: function() {
    if (!this.props.item) {
      return null
    }
    return (
      <li className="cart-item">
        <h3 className="item-name">{this.props.item.name}</h3>
        <h3 className="item-price">{this.props.item.price}</h3>
      </li>
    )
  }
})

export default CartItem
