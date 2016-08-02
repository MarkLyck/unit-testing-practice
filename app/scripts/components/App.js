import React from 'react'

import CartList from './CartList'
import AllItems from './AllItems'

const App = React.createClass({
  render: function() {
    return (
      <div>
        <AllItems/>
        <CartList/>
        {this.props.children}
      </div>
    )
  }
})

export default App
