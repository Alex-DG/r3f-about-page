import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    '**/*.gltf',
    '**/*.glb',
    '**/*.fbx',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.svg',
    '**/*.woff',
    '**/*.ttf',
    '**/*.otf',
    '**/*.ico',
    '**/*.json',
  ],
})
