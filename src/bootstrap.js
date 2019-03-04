//@flow
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@app/app'

const root = document.getElementById('app')

if (root !== null) {
  ReactDOM.render(<App/>, root)
} else {
  throw new Error('Missing root element')
}

