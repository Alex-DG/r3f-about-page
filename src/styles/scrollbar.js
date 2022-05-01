import { css } from 'styled-components'

export const StyledScroll = css`
  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #202020;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: #505050;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
