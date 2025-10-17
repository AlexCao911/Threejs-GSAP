import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ResponsiveProvider } from './contexts/ResponsiveContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResponsiveProvider>
      <App />
    </ResponsiveProvider>
  </StrictMode>,
)
