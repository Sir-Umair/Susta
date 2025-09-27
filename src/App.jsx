import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './component/home'
import About from './component/about'
import Navbar from './component/navbar'
import Projects from './component/projects'
import Contact from './component/contact'


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
