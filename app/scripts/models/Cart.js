import Backbone from 'backbone'

const Cart = Backbone.Model.extend({
  defaults: {
    items: [],
    total: 0
  },
  addItem: function(item) {
    let cartItems = this.get('items')
    cartItems.push(item)
    this.set('items', cartItems)
    this.trigger('change')
  },
  removeItem: function(item) {
    // let cartItems = this.get('items')
    // cartItems.push(item)
    // this.set('items', cartItems)
    this.trigger('change')
  }
})

export default Cart
