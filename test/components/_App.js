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

  it('should render children when passed in', () => {
   const app = shallow(
     <app>
       <div className="unique" />
     </app>
   );
   expect(app.contains(<div className="unique" />)).to.be.true;
 });
})
