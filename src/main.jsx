import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseApi from '@context/UseApi'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseApi>
      <App />
    </UseApi>
  </StrictMode>,
)
