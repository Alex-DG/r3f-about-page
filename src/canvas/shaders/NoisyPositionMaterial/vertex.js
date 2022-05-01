import { cnoise } from '../utils'

export const vertex = `
  uniform float uTime;

  varying vec2 vUv;

  ${cnoise}

  void main() {
      float noisy = cnoise(normalize(normalMatrix * normal) + uTime) * 2.5;
      
      vec3 newPosition = position + noisy * normal;
      vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);

      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;

      gl_Position = projectedPosition;

      vUv = uv;
  }
`
