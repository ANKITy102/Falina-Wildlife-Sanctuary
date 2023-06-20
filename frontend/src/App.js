import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Mainpage from './pages/main/Mainpage'
<<<<<<< HEAD
import Signup from './pages/signup/Signup'
=======
import Contactus from './pages/ContactUs/ContactUs'
>>>>>>> origin/main
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Signup/>}/>
        <Route path="/home" element={<Mainpage/>}/>
=======
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
>>>>>>> origin/main
      </Routes>
    </BrowserRouter>
  )
}

export default App
