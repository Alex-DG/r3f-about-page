/**
 * App Layouts
 */
import Home from './layouts/Home'
import Gallery from './layouts/Gallery'

/**
 * App Cursor
 */
import Cursor from './components/Cursor'

/**
 * App routes
 */
const Dom = ({ views }) => (
  <div className='dom-content'>
    <Home {...{ views }} />
    <Gallery />
    <Cursor />
  </div>
)

export default Dom
