//@flow
import React, {Component} from 'react'
import {GlobalStyles} from '@app/components/globalStyles'

class App extends Component<{}> {
  render() {
    return (
      <div>
        <GlobalStyles/>
        Hello world!
      </div>
    )
  }
}

export default App