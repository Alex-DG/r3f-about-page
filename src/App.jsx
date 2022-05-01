import { useProgress } from '@react-three/drei'
import useRefs from 'react-use-refs'

import Canvas from './canvas'
import Dom from './dom'
import Head from './dom/components/Head'

import Loading from './dom/components/Loading'

const App = () => {
  const [mainRef, view1, view2] = useRefs()
  const views = { view1, view2 }

  const { progress } = useProgress()

  return (
    <>
      <Head />
      <main ref={mainRef} className='disabled-scrolling'>
        <Loading {...{ progress }} />
        <Dom {...{ views }} />
        <Canvas {...{ mainRef, views }} />
      </main>
    </>
  )
}

export default App
