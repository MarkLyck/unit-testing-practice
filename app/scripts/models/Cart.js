import Backbone from 'backbone'
import _ from 'underscore'

const Cart = Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem: function(item) {
    let cartItems = this.get('items')
    item.quantity = 1
    cartItems.push(item)
    this.set('items', cartItems)

    this.updateTotal()
  },
  removeItem: function(item) {
    let cartItems = this.get('items')
    cartItems = cartItems.filter((loopItem) => {
      if (loopItem.id !== item.id) {
        return loopItem
      }
    })
    this.set('items', cartItems)

    this.updateTotal()
  },
  updateTotal: function() {
    let newTotal = 0
    let cartItems = this.get('items')
    cartItems.forEach(item => {
      newTotal += (item.price * item.quantity)
    })
    this.set('total', newTotal)
    this.trigger('change')
  },
  findItem(itemToFind) {
    let items = this.get('items')
    items = items.filter((item) => {
      if (item.id === itemToFind.id) {
        return item
      }
    })
    return items[0]
  }
})

export default Cart
