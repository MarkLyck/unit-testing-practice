import React from 'react'
import store from '../store'

const CartItem = React.createClass({
  findCorrectItem: function() {
    let itemToSet = store.cart.get('items')
    itemToSet = itemToSet.filter((item) => {
      if (item.id === this.props.item.id) {
        return item
      }
    })
    return itemToSet[0]
  },
  getInitialState: function() {
    return {item: this.findCorrectItem}
  },
  removeItem: function() {
    store.cart.removeItem(this.props.item)
  },
  updateItem: function() {
    console.log('UPDATING ITEM');
    this.setState({item: this.findCorrectItem})
  },
  updateQuantity: function() {
    console.log('UPDATING QUANITITY');
    let storeItems = store.cart.get('items')
    storeItems = storeItems.map((item) => {
      if (item.id === this.props.item.id) {
        item.quantity = this.refs.quantity.value
      }
      return item
    })
    console.log('storeItems: ', storeItems);
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
    if (!this.props.item) {
      return null
    }
    return (
      <li className="cart-item">
        <h3 className="item-name">{this.state.item.name}</h3>
        <h3 className="item-price">{this.state.item.price}</h3>
        <input onKeyUp={this.updateQuantity} type="number" placeholder={this.state.item.quantity} ref="quantity"/>
        <button onClick={this.removeItem} className="remove-item">X</button>
      </li>
    )
  }
})

export default CartItem
