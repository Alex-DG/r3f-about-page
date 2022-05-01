import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles'
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
)
