import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import store from '../../app/scripts/store';
import CartItem from '../../app/scripts/components/CartItem';


describe('<CartItem /> component', function() {

  let cartItemWithoutProp = shallow(<CartItem/>);
  let cartItem = shallow(<CartItem item={{
    id: 1,
    name: 'Tennis Ball',
    price: 2
  }}/>);

  let testItem = store.shopItems.get('1');

  it('should render an li to the DOM', () => {
    cartItem.setState({item: testItem.toJSON() });
    expect(cartItem.is('li')).to.be.true;
    expect(cartItem.is('div')).to.be.false;
  });

  it('should have a class of "cart-item"', () => {
    expect(cartItem.hasClass('cart-item')).to.be.true;
  });

  it('should not render if not given props', () => {
    expect(cartItemWithoutProp.is('li')).to.be.false;
    expect(cartItemWithoutProp.is('div')).to.be.false;
    expect(cartItemWithoutProp.hasClass('cart-item')).to.be.false;
  });

  it('should have an <h3> with a class of "item-name" in it', () => {
    expect(cartItem.find('.item-name')).to.have.length(1);
    expect(cartItem.find('.item-name').is('h3')).to.be.true
  })

  it('"item-name" should have text in it', () => {
    expect(cartItem.find('.item-name').text()).to.not.equal('');
  })

  it('should have an <h3> with a class of "item-price" in it', () => {
    expect(cartItem.find('.item-price')).to.have.length(1);
    expect(cartItem.find('.item-price').is('h3')).to.be.true
  })

  it('"item-price" should have text in it', () => {
    expect(cartItem.find('.item-price').text()).to.not.equal('');
  })

  it('should have a <button> with a class of "add-to-cart" in it', () => {
    expect(cartItem.find('.remove-item')).to.have.length(1);
    expect(cartItem.find('.remove-item').is('button')).to.be.true
  })

  it('should have an <input> with an id of "quantity-input" in it', () => {
    expect(cartItem.find('#quantity-input')).to.have.length(1);
    expect(cartItem.find('#quantity-input').is('input')).to.be.true
  })
})
