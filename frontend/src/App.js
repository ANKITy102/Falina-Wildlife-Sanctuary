import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Mainpage from './pages/main/Mainpage'
import Signup from './pages/signup/Signup'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/home" element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
