import {expect} from 'chai'
import Backbone from 'backbone'

import store from '../../app/scripts/store'
import data from '../../app/scripts/data'

import Cart from '../../app/scripts/models/Cart'
import ShopItems from '../../app/scripts/collections/ShopItems'



describe('store', function() {
  it('should exist', () => {
    expect(store).to.exist
  })
  it('should have a cart property', () => {
    expect(store).to.have.property('cart')
  })
  it('should have a shopItems property', () => {
    expect(store).to.have.property('shopItems')
  })
})

describe('store.cart', function() {
  let testItem = store.shopItems.get('1')

  it('should be an instance of Cart', () => {
    expect(store.cart).to.be.instanceOf(Cart)
    expect(store.cart).to.not.be.instanceOf(ShopItems)
  })

  it('should have a default total of 0', () => {
    expect(store.cart.get('total')).to.be.equal(0)
    expect(store.cart.get('total')).to.not.equal(100)
  });
  it('items should be an empty array', () => {
    expect(store.cart.get('items')).to.be.empty
  });
  it('should have an addItem method', () => {
    expect(store.cart.addItem(testItem.toJSON()))
  });
  it('should have 1 item in it', () => {
    expect(store.cart.get('items').length).to.equal(1);
  });
  it('should have an removeItem method', () => {
    expect(store.cart.removeItem(testItem.toJSON()))
  });
  it('should have 0 items in it', () => {
    expect(store.cart.get('items').length).to.equal(0);
  });

  it('should have an updateTotal() method', () => {
    expect(store.cart.updateTotal())
  });

  it('adding an item should change the total to be larger', () => {
    let oldTotal = store.cart.get('total')
    expect(store.cart.addItem(testItem.toJSON()))
    expect(store.cart.get('total')).to.be.above(oldTotal);
  });

  it('removing an item should change the total to be smaller', () => {
    let oldTotal = store.cart.get('total')
    expect(store.cart.removeItem(testItem.toJSON()))
    expect(store.cart.get('total')).to.be.below(oldTotal);
  });

  it('should have a findItem() method', () => {
    expect(store.cart.findItem({id: 1}))
  });

  it('findItem() should return the correct item', () => {
    store.cart.addItem(testItem.toJSON())
    expect(store.cart.findItem(testItem.toJSON())).to.have.property('name')
    expect(store.cart.findItem(testItem.toJSON()).name).to.equal('Tennis Ball')
    expect(store.cart.findItem(testItem.toJSON()).id).to.equal(1)
    expect(store.cart.findItem(testItem.toJSON()).price).to.equal(2)
  });
});

describe('store.shopItems', function() {
  it('should be an instance of ShopItems', () => {
    expect(store.shopItems).to.not.be.instanceOf(Cart)
    expect(store.shopItems).to.be.instanceOf(ShopItems)
  })
  it('should have some data', () => {
    expect(store.shopItems.models).to.have.length.above(0)
  });
  it('should have all the data', () => {
    expect(store.shopItems.models).to.have.lengthOf(data.length)
  });
});
