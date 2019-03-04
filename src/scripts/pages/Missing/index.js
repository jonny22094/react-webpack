//@flow
import React, {Component} from 'react'
import {Container} from '@app/components/styles'
import {MissingText} from './styles'

class Missing extends Component<{}> {
  render() {
    return (
      <Container>
        <MissingText>PAGE NOT FOUND</MissingText>
        <MissingText>~ 404 ~</MissingText>
      </Container>
    )
  }
}

export default Missing