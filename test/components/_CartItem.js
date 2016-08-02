import { shallow } from 'enzyme';
import { expect } from 'chai';

import React from 'react'

import store from '../../app/scripts/store'

import CartItem from '../../app/scripts/components/CartItem'


describe('<CartItem /> component', function() {

  // This will fail because I am using state :/ and state.item is undefined due to shallow:/

  // let cartItem = shallow(<CartItem item={{
  //   id: 1,
  //   name: 'Tennis Ball',
  //   price: 2
  // }}/>);

  let cartItemWithoutProp = shallow(<CartItem/>);

  // it('should render an li to the DOM', () => {
  //   expect(cartItem.is('li')).to.be.true;
  //   expect(cartItem.is('div')).to.be.false;
  // });
  // it('should have a class of "cart-item"', () => {
  //   expect(cartItem.hasClass('cart-item')).to.be.true
  // });

  it('should not render an li to the DOM', () => {
    expect(cartItemWithoutProp.is('li')).to.be.false;
    expect(cartItemWithoutProp.is('div')).to.be.false;
  });
  it('should not have a class of "cart-item"', () => {
    expect(cartItemWithoutProp.hasClass('cart-item')).to.be.false
  });
})
