import { shallow } from 'enzyme';
import { expect } from 'chai';

import React from 'react'

import store from '../../app/scripts/store'
import App from '../../app/scripts/components/App'
import CartList from '../../app/scripts/components/CartList'


describe('<CartList /> component', function() {
  let cartList = shallow(<App/>);

  it('should render a div to the DOM', () => {
    expect(cartList.is('div')).to.be.true;
    expect(cartList.is('input')).to.be.false;
  });
})
