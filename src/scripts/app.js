//@flow
import React, {Component} from 'react'
import {GlobalStyles} from '@app/components/globalStyles'
import {Container, Image} from '@app/components/styles'
import Logo from '@app/images/logo.png'

class App extends Component<{}> {
  render() {
    return (
      <Container>
        <GlobalStyles/>
        <Image src={Logo} width={'150px'}/>
        <p>Hello world!</p>
      </Container>
    )
  }
}

export default App