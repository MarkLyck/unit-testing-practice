import {expect} from 'chai';

import store from '../../app/scripts/store'
import ShopItems from '../../app/scripts/collections/ShopItems'

describe('ShopItems collection', function() {
  it('should exist', () => {
    expect(ShopItems).to.exist
  });
});
