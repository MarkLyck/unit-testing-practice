import { shallow } from 'enzyme';
import { expect } from 'chai';

import React from 'react'

import Item from '../../app/scripts/components/Item'
import ShopItem from '../../app/scripts/models/ShopItem'


describe('<Item /> component', function() {
  let itemData = new ShopItem({
    id: 1,
    name: 'Tennis Ball',
    price: 2
  })

  function addToCart(item) {
    console.log('test', item);
  }

  let item = shallow(<Item item={itemData} addToCart={addToCart}/>);
  // let item = shallow(<Item item={{
  //   id: 1,
  //   name: 'Tennis Ball',
  //   price: 2
  // }}/>);

  let itemWithoutProps = shallow(<Item/>);

  it('should render an li to the DOM', () => {
    expect(item.is('li')).to.be.true;
    expect(item.is('div')).to.be.false;
  });
  it('should have a class of "item"', () => {
    expect(item.hasClass('item')).to.be.true
  });

  it('should not render an li to the DOM', () => {
    expect(itemWithoutProps.is('li')).to.be.false;
    expect(itemWithoutProps.is('div')).to.be.false;
  });
  it('should not have a class of "item"', () => {
    expect(itemWithoutProps.hasClass('cart-item')).to.be.false
  });
})
