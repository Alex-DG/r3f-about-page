import { ShaderMaterial } from 'three'
import { extend } from '@react-three/fiber'

import { vertex } from './vertex'
import { fragment } from './fragment'

class NoisyPositionMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 1.0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    })
  }

  get time() {
    return this.uniforms.uTime.value
  }

  set time(value) {
    this.uniforms.uTime.value = value
  }
}

extend({ NoisyPositionMaterial })
