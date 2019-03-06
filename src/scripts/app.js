//@flow
import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import {Store} from '@app/types'
import Routes from '@app/routes'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from '@app/components/globalStyles'
import {theme} from '@app/config'

const store = Store.create()

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App