import React from 'react'
import store from '../store'

const Item = React.createClass({
  addToCart: function() {
    let item = this.props.item.toJSON()
    store.cart.addItem(item)
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
