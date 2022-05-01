import { css } from 'styled-components'

import SpaceGrotesk from '../assets/fonts/SpaceGrotesk/SpaceGrotesk-Light.ttf'
import Movement from '../assets/fonts/Movement/Movement-DirectThin.woff'
import Bigilla from '../assets/fonts/Bigilla/Bigilla.otf'
import BigillaBold from '../assets/fonts/Bigilla/Bigilla-Bold.otf'

export const StyledFont = css`
  @font-face {
    font-family: 'Space Grotesk Light';
    font-display: auto;
    src: url(${SpaceGrotesk}) format('truetype');
  }

  @font-face {
    font-family: 'Movement DirectThin';
    font-display: auto;
    src: url(${Movement}) format('woff');
  }

  @font-face {
    font-family: 'Bigilla Bold';
    font-display: auto;
    src: url(${BigillaBold}) format('opentype');
  }

  @font-face {
    font-family: 'Bigilla';
    font-display: auto;
    src: url(${Bigilla}) format('opentype');
  }
`
