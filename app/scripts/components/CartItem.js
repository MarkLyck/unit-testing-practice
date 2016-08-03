import React from 'react'
import store from '../store'

const CartItem = React.createClass({
  getInitialState: function() {
    let stateItem = store.cart.findItem(this.props.item)
    return {item: stateItem}

  },
  removeItem: function() {
    store.cart.removeItem(this.props.item)
  },
  updateItem: function() {
    let stateItem = store.cart.findItem(this.props.item)
    if (stateItem) {
      this.setState({item: stateItem})
    }
    console.log('State after update: ', this.state.item);
  },
  updateQuantity: function() {
    let storeItems = store.cart.get('items')
    storeItems = storeItems.map((item) => {
      if (item.id === this.props.item.id) {
        item.quantity = this.refs.quantity.value
      }
      return item
    })
    store.cart.set('items', storeItems)
    store.cart.updateTotal()
  },
  componentDidMount: function() {
    store.cart.on('change', this.updateItem)
  },
  componentWillUnmount: function() {
    store.cart.off('change', this.updateItem)
  },
  render: function() {
    if (!this.state.item) {
      return null
    }
    return (
      <li className="cart-item">
        <h3 className="item-name">{this.state.item.name}</h3>
        <h3 className="item-price">{this.state.item.price}</h3>
        <input id="quantity-input" onKeyUp={this.updateQuantity} type="number" placeholder={this.state.item.quantity} ref="quantity"/>
        <button onClick={this.removeItem} className="remove-item">X</button>
      </li>
    )
  }
})

export default CartItem
