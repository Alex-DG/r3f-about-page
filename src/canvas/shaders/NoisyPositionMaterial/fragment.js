export const fragment = `
    uniform float uOpacity;
    varying vec2 vUv;

    void main() {
        gl_FragColor = vec4 (vUv, .65, uOpacity);
    }
`
