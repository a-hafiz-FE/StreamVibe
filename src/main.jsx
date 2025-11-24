import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import './Utils/i18n.js'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </StrictMode>,
)
