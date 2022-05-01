import { forwardRef } from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background: #fff;

  ${(props) => props.skew && 'transform: skew(0, -1deg)'};
  ${(props) =>
    props.glow && 'box-shadow: 0 1px 12px 1px rgba(255, 255, 255, 0.432);'};
`

const Divider = forwardRef((props, ref) => (
  <Bar {...{ ref, ...props }} className='divider'></Bar>
))

export default Divider
