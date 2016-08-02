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
});

describe('store.shopItems', function() {
  it('should have some data', () => {
    expect(store.shopItems.models).to.have.length.above(0)
  });
  it('should have all the data', () => {
    expect(store.shopItems.models).to.have.lengthOf(data.length)
  });
});
