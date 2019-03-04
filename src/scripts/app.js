//@flow
import React, {Component} from 'react'
import Routes from '@app/routes'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from '@app/components/globalStyles'
import {theme} from '@app/config'

class App extends Component<{}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <Routes />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App