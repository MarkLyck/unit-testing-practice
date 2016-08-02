import React from 'react'
import store from '../store'

const Item = React.createClass({
  addToCart: function() {
    store.cart.addItem(this.props.item.toJSON())
  },
  render: function() {
    if (!this.props.item) {
      return null
    }
    return (
      <li className="item">
        <h3 className="item-name">{this.props.item.get('name')}</h3>
        <h3 className="item-price">{this.props.item.get('price')}</h3>
        <button onClick={this.addToCart} className="add-to-cart">Add to cart</button>
      </li>
    )
  }
})

export default Item
