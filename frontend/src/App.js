import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Mainpage from './pages/main/Mainpage'
import Contactus from './pages/ContactUs/ContactUs'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
