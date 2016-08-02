import Cart from './models/Cart'
import ShopItems from './collections/ShopItems'

let store = {
  cart: new Cart(),
  shopItems: new ShopItems()
}

store.shopItems.createItems()

export default store
