import Backbone from 'backbone'
import ShopItem from '../models/ShopItem'
import data from '../data'

const ShopItems = Backbone.Collection.extend({
  model: ShopItem,
  createItems: function() {
    data.forEach(item => {
      this.add(item)
    })
  }
})

export default ShopItems
