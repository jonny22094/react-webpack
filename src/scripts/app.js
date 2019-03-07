//@flow
import React, {Component} from 'react'
import Routes from '@app/routes'
import {Provider} from 'react-redux'
import {Store} from '@app/store'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from '@app/components/globalStyles'
import {theme} from '@app/config'

class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyles />
            <Routes />
          </React.Fragment>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App