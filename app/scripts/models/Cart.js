import Backbone from 'backbone'
import _ from 'underscore'

const Cart = Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem: function(item) {
    let cartItems = this.get('items')
    cartItems.push(item)
    this.set('items', cartItems)

    let total = this.get('total')
    total += item.price
    this.set('total', total)

    this.trigger('change')
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

    let total = this.get('total')
    total -= item.price
    this.set('total', total)

    this.trigger('change')
  }
})

export default Cart
