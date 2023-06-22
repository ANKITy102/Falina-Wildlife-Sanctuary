import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainpage from './pages/main/Mainpage'
import Packages from './pages/packageshotel/Packages'
import Signup from './pages/signup/Signup'
import Contactus from './pages/ContactUs/ContactUs'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { getUserInfo } from './services/authServices'
import { useDispatch } from 'react-redux'
import { SET_LOGIN, SET_USER } from './redux/auth/authSlice'
import AboutUs from './pages/AboutUs/AboutUs'
// import axios from "axios";
const App = () => {
  const dispatch =useDispatch();
  const getUser = async()=>{
    try{

      const data= await getUserInfo();
      console.log(data)
      if(!data || !data.status){
       return;
      }
       if(data.status==="Success"){
           dispatch(SET_LOGIN(true));
           dispatch(SET_USER(data.data[0]));
       }
      

    }catch(err){
      toast.error("Something went wrong");
    }
  }
  useEffect(()=>{
      getUser()
  },[])
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/packages" element={<Packages />} />
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
