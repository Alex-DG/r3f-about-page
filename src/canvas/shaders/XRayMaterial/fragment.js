export const fragment = `
      uniform vec3 uGlowColor;
      uniform float uOpacity;
      varying float vIntensity;
      void main()
      {
          vec3 glow = uGlowColor * vIntensity;
          gl_FragColor = vec4( glow, uOpacity );
      }
`
