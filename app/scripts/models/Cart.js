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
    console.log('PASSED ITEM: ', item);
    let cartItems = this.get('items')
    console.log('cartItems: ', cartItems);
    cartItems = cartItems.filter((loopItem) => {
      if (loopItem.id !== item.id) {
        return loopItem
      }
    })
    this.set('items', cartItems)

    this.updateTotal()
  },
  updateTotal: function() {
    console.log('UPDATING TOTAL');
    let newTotal = 0
    let cartItems = this.get('items')
    cartItems.forEach(item => {
      newTotal += (item.price * item.quantity)
    })
    this.set('total', newTotal)
    this.trigger('change')
  }
})

export default Cart
