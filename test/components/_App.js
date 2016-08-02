import { shallow } from 'enzyme';
import { expect } from 'chai';

import React from 'react'

import App from '../../app/scripts/components/App'


describe('<App /> component', function() {
  let app = shallow(<App/>);

  it('should render a div to the DOM', () => {
    expect(app.is('div')).to.be.true;
    expect(app.is('input')).to.be.false;
  });
})
