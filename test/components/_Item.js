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

  let item = shallow(<Item item={itemData}/>);

  let itemWithoutProps = shallow(<Item/>);

  it('should render an li to the DOM', () => {
    expect(item.is('li')).to.be.true;
    expect(item.is('div')).to.be.false;
  });
  it('should have a class of "item"', () => {
    expect(item.hasClass('item')).to.be.true
  });

  it('should not render if not given props', () => {
    expect(itemWithoutProps.is('li')).to.be.false;
    expect(itemWithoutProps.is('div')).to.be.false;
    expect(itemWithoutProps.hasClass('cart-item')).to.be.false
  });

  it('should have an <h3> with a class of "item-name" in it', () => {
    expect(item.find('.item-name')).to.have.length(1);
    expect(item.find('.item-name').is('h3')).to.be.true
  })

  it('"item-name" should have text in it', () => {
    expect(item.find('.item-name').text()).to.not.equal('');
  })

  it('should have an <h3> with a class of "item-price" in it', () => {
    expect(item.find('.item-price')).to.have.length(1);
    expect(item.find('.item-price').is('h3')).to.be.true
  })

  it('"item-price" should have text in it', () => {
    expect(item.find('.item-price').text()).to.not.equal('');
  })

  it('should have a <button> with a class of "add-to-cart" in it', () => {
    expect(item.find('.add-to-cart')).to.have.length(1);
    expect(item.find('.add-to-cart').is('button')).to.be.true
  })

})
