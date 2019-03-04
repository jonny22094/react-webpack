//@flow
import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${_ => _.theme.colors.background};

    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
`