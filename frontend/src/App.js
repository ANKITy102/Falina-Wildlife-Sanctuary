import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Mainpage from './pages/main/Mainpage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
