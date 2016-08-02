import React from 'react'

import CartList from './CartList'
import AllItems from './AllItems'

const App = React.createClass({
  render: function() {
    return (
      <div>
        App
        <AllItems/>
        <CartList/>
      </div>
    )
  }
})

export default App
