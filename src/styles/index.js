import { createGlobalStyle } from 'styled-components'
import { StyledCanvas } from './canvas'
import { StyledFont } from './fonts'
import { StyledScroll } from './scrollbar'

const GlobalStyle = createGlobalStyle`
  ${StyledFont}
  ${StyledScroll}
  ${StyledCanvas}

  * {
    margin: 0;
    padding: 0%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Arial, Helvetica, Arial, sans-serif;
    color: #fff;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    cursor: none;
  }
  body {
    background: rgb(27, 27, 31);
    background-image: linear-gradient(to right, #434343 0%, #000 90%);
    overflow-x: hidden !important;
  }

  /* Disable section */
  div {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .disabled-scrolling {
    height: 100%;
    overflow: hidden;
  }
  .dom-content {
    opacity: 0;
  }
`

export default GlobalStyle
