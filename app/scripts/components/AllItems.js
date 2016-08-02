import React from 'react'

import store from '../store'

import Item from './Item'

const AllItems = React.createClass({
  render: function() {
    let allItems = store.shopItems.map((item, i) => {
      return (<Item item={item} key={i} addToCart={AllItems.addToCart} />)
    })
    return (
      <ul className="all-items">
        {allItems}
      </ul>
    )
  }
})

export default AllItems
