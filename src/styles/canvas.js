import { css } from 'styled-components'

export const StyledCanvas = css`
  .webgl {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .detached {
    position: absolute !important;
    z-index: 6 !important;
    height: 100%;
    width: 100%;
  }
  .canvas {
    pointer-events: none;
    position: fixed !important;
    top: 0px;
    left: 0px;
    width: 100vw !important;
    height: 100vh !important;
    background: transparent !important;
    z-index: 1;
  }
  .canvas-background {
    pointer-events: none;

    position: fixed !important;
    top: 0px;
    left: 0px;

    width: 100vw !important;
    height: 100vh !important;

    z-index: 1 !important;

    background: transparent !important;
  }
`
