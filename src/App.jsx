import React from 'react'

import {NavLink,Routes, Route} from 'react-router-dom'
import About from "./components/About"
import Home from "./components/Home"
import Show from "./components/Show"
function App() {



  return (
    <div >
     <div className="flex items-center justify-center gap-5 text-xl"> 
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/show">Show</NavLink>
      </div>

    <Routes>
      <Route  path="/" element={<Home className/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/show" element={<Show/>}/>
    </Routes>

      
    </div>
  )
}

export default App
