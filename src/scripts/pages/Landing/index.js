//@flow
import React, {Component} from 'react'
import {Container, Image} from '@app/components/styles'
import Logo from '@app/images/logo.png'

class Landing extends Component<{}> {
  render() {
    return (
      <Container>
        <Image src={Logo} width={'150px'}/>
        <p>Hello world!</p>
      </Container>
    )
  }
}

export default Landing