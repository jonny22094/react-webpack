//@flow
import React, {Component} from 'react'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from '@app/components/globalStyles'
import {Container, Image} from '@app/components/styles'
import {theme} from '@app/config'
import Logo from '@app/images/logo.png'

class App extends Component<{}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyles/>
          <Image src={Logo} width={'150px'}/>
          <p>Hello world!</p>
        </Container>
      </ThemeProvider>
    )
  }
}

export default App