//@flow
import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import {ThemeProvider} from 'styled-components'
import {Store} from '@app/types'
import {theme} from '@app/config'
import {GlobalStyles} from '@app/components/globalStyles'
import {Container, Image} from '@app/components/styles'
import Logo from '@app/images/logo.png'

const store = Store.create()

class App extends Component<{}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Container>
            <GlobalStyles/>
            <Image src={Logo} width={'150px'}/>
            <p>Hello world!</p>
          </Container>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App