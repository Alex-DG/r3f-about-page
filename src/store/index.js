import create from 'zustand'

const defaultRefs = {
  main: null,
  loading: null,
  body: null,
  face: null,
  gallery: null,
  background: null,
}

const defaultTextures = { projects: null }
const defaultModels = {
  mask: null,
  face: null,
  body: null,
}

const useStore = create((set) => ({
  textures: defaultTextures,
  setTexture: (value, key) => set((state) => (state.textures[key] = value)),

  models: defaultModels,
  setModel: (value, key) => set((state) => (state.models[key] = value)),

  galleryActive: false,
  setAppReady: (value) => set((state) => (state.appReady = value)),

  appReady: false,
  setGalleryActive: (value) => set((state) => (state.galleryActive = value)),

  refs: defaultRefs,
  addRef: (key, value) => set((state) => (state.refs[key] = value)),
  deleteRef: (key) => set((state) => () => delete state.refs[key]),
  clearRefs: () => set((state) => () => (state.refs = defaultRefs)),
}))

export default useStore
