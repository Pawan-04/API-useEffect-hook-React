import React from 'react'

import {NavLink,Routes, Route} from 'react-router-dom'
import About from "./components/About"
import Home from "./components/Home"
import Show from "./components/Show"
import Service from "./components/Service"
function App() {



  return (
    <div >
     <div className="flex items-center justify-center gap-5 text-xl py-5 bg-black text-white mb-10"> 
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/show">Show</NavLink>
      <NavLink to="/service">Service</NavLink>
      </div>

    <Routes>
      <Route  path="/" element={<Home className/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/show" element={<Show/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>

      
    </div>
  )
}

export default App
