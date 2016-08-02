import { shallow } from 'enzyme';
import { expect } from 'chai';

import React from 'react'

import AllItems from '../../app/scripts/components/AllItems'
import data from '../../app/scripts/data'


describe('<AllItems /> component', function() {
  let allItems = shallow(<AllItems/>);

  it('should render a <ul> to the DOM', () => {
    expect(allItems.is('ul')).to.be.true;
    expect(allItems.is('div')).to.be.false;
  });
  it('should have a class of "all-items"', () => {
    expect(allItems.hasClass('all-items')).to.be.true;
  });
  it('should have 1 child for each data item', () => {
    expect(allItems.children().length).to.equal(data.length)
  })
})
