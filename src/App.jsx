import { lazy, useEffect } from 'react'
import './App.css'
import './index.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const MoviesShows = lazy(() => import('./Pages/Movies&Shows'));
const Support = lazy(() => import('./Pages/Support'));
const Subscriptions = lazy(() => import('./Pages/Subscriptions'));




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies&Shows" element={<MoviesShows />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Subscriptions" element={<Subscriptions />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App
