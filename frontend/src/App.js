import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Mainpage from './pages/main/Mainpage'
import Packages from './components/packageshotel/Packages'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
      </Routes>
      <Routes>
        <Route path="/packages" element={<Packages/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
