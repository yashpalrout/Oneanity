import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import { Routes, Route } from "react-router-dom";
import About from './Components/About/About';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App