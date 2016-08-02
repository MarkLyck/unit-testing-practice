import Backbone from 'backbone'
import store from '../store'

const ShopItem = Backbone.Model.extend({
  defaults: {
    name: '',
    price: 0
  }
})

export default ShopItem
