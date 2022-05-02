import { ShaderMaterial, ShaderChunk, Color, AdditiveBlending } from 'three'

import { vertex } from './vertex'
import { fragment } from './fragment'

const XRayMaterial = new ShaderMaterial({
  wireframe: true,
  uniforms: {
    uPower: { value: 3 },
    uOpacity: { value: 0.0 },
    uGlowColor: { value: new Color(0x84ccff) },
  },
  vertexShader: vertex,
  fragmentShader: fragment,
  blending: AdditiveBlending,
  transparent: true,
  depthWrite: false,
})

export default XRayMaterial
