import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider } from './Providers/ThemeProvider.jsx';

import './Utils/i18n.js'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <React.Suspense fallback={<div className='flex h-screen items-center justify-center text-[var(--text-primary)] text-[30px]' >Loading...</div>}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  </StrictMode>,
)
