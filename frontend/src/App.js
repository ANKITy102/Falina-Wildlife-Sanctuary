import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Mainpage from './pages/main/Mainpage'
<<<<<<< HEAD
import Packages from './components/packageshotel/Packages'
=======
import Signup from './pages/signup/Signup'
import Contactus from './pages/ContactUs/ContactUs'
>>>>>>> 68eb7122848038d1e826e5eba35f1b6697a0ac5c
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/home" element={<Mainpage/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
      <Routes>
        <Route path="/packages" element={<Packages/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
