import { lazy, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MoviesShows from './Pages/Movies&Shows/index';
import Support from './Pages/Support/index';
import Subscriptions from './Pages/Subscriptions/index';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies&Shows" element={<MoviesShows />} />
        <Route path="/Support" element={<Support />} />
        <Route path="Subscriptions" element={<Subscriptions />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}



export default App
