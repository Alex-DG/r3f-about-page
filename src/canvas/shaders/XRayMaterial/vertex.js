import { ShaderChunk } from 'three'

export const vertex = `
  uniform float uPower;
    varying float vIntensity;
    ${ShaderChunk.skinning_pars_vertex}
    void main() {
      vec3 vNormal = normalize(normalMatrix * normal);
      
      mat4 modelViewProjectionMatrix = projectionMatrix * modelViewMatrix;
      ${ShaderChunk.beginnormal_vertex}
      ${ShaderChunk.skinbase_vertex}
      ${ShaderChunk.skinnormal_vertex}
  
      vec3 transformed = vec3(position);
  
      ${ShaderChunk.skinning_vertex}
  
      gl_Position = modelViewProjectionMatrix * vec4(transformed, 1.0);
      vIntensity = pow(1.0 - abs(dot(vNormal, vec3(0, 0, 1))), uPower);
    }
`
