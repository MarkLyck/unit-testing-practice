import {expect} from 'chai'
import store from '../../app/scripts/store'
import data from '../../app/scripts/data'

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
  it('should have a default total of 0', () => {
    expect(store.cart.get('total')).to.be.equal(0)
  });
  it('items should be an empty array', () => {
    expect(store.cart.get('items')).to.be.empty
  });
  let testItem = store.shopItems.get('1')
  it('should have an addItem method', () => {
    expect(store.cart.addItem(testItem))
  });
  it('should have 1 item in it', () => {
    expect(store.cart.get('items').length).to.equal(1);
  });
  it('should have an removeItem method', () => {
    expect(store.cart.removeItem(testItem))
  });
  it('should have 0 items in it', () => {
    expect(store.cart.get('items').length).to.equal(0);
  });

  it('should have an updateTotal() method', () => {
    expect(store.cart.updateTotal())
  });
  it('updateTotal() should change the total', () => {
    console.log('total: ', store.cart.get('total'));
    let oldTotal = store.cart.get('total')
    store.cart.addItem(testItem)
    console.log('total: ', store.cart.get('total'));
    expect(store.cart.get('total')).to.be.above(0);
  });

  it('should have a findItem() method', () => {
    expect(store.cart.findItem({id: 1}))
  });
});

describe('store.shopItems', function() {
  it('should have some data', () => {
    expect(store.shopItems.models).to.have.length.above(0)
  });
  it('should have all the data', () => {
    expect(store.shopItems.models).to.have.lengthOf(data.length)
  });
});
