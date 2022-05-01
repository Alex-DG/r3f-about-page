import { ShaderMaterial, Texture, Vector2 } from 'three'
import { extend } from '@react-three/fiber'

import { vertex } from './vertex'
import { fragment } from './fragment'

class ImageMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0.0 },
        uTexture: { value: new Texture() },
        uDistanceFromCenter: { value: 0.0 },
        uBendFactor: { value: 0.03 },
        uFrequency: { value: new Vector2(3, 1.5) },
      },
      transparent: true,
      vertexShader: vertex,
      depthWrite: true,
      fragmentShader: fragment,
    })
  }

  get time() {
    return this.uniforms.uTime.value
  }

  set time(value) {
    this.uniforms.uTime.value = value
  }

  get texture() {
    return this.uniforms.uTexture.value
  }

  set texture(value) {
    this.uniforms.uTexture.value = value
  }
}

extend({ ImageMaterial })
