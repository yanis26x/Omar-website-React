import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './Composants/MAIN/Main'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main/>

  </StrictMode>,
)
