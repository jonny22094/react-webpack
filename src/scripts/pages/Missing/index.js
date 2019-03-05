//@flow
import React from 'react'
import {Container} from '@app/components/styles'
import {MissingText} from './styles'

const Missing = () => {
  return (
    <Container>
      <MissingText>PAGE NOT FOUND</MissingText>
      <MissingText>~ 404 ~</MissingText>
    </Container>
  )
}

export default Missing