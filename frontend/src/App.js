import React  from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainpage from './pages/main/Mainpage'
import Packages from './pages/packageshotel/Packages'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Contactus from './pages/ContactUs/ContactUs'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
// import { getUserInfo } from './services/authServices'
// import { useDispatch } from 'react-redux'
// import { SET_LOGIN, SET_USER } from './redux/auth/authSlice'
import AboutUs from './pages/AboutUs/AboutUs'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardComponent from './components/dashboardComp/DashboardComponent'
import Users from './components/users/Users'
import TotalBookings from './graphs/TotalBookings'
import Gallery from "./pages/Gallery/Gallery"
import UserQueries from './components/userQueries/UserQueries'
import Payment from './pages/Payment/paymnet'
import TotalRevenue from './graphs/TotalRevenue'
import Settings from './components/settingsPage/Settings'
import TableAdmin from './components/tableAdmin/TableAdmin'
// import axios from "axios";
const App = () => {
  
  // const dispatch = useDispatch();
  // const getUser = async () => {
  //   try {

  //     const data = await getUserInfo();
  //     console.log(data)
  //     if (!data || !data.status) {
  //       return;
  //     }
  //     if (data.status === "Success") {
  //       dispatch(SET_LOGIN(true));
  //       dispatch(SET_USER(data.data[0]));
  //     }


  //   } catch (err) {
  //     toast.error("Something went wrong");
  //   }
  // }
  // useEffect(() => {
  //   getUser()
  //   // eslint-disable-next-line
  // }, [])
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/packages" element={<Packages />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/bookings" element={
         <Dashboard>
          <DashboardComponent>
            <TotalBookings/>
          </DashboardComponent>
         </Dashboard>
        }/>
        <Route path="/users" element={
         <Dashboard>
           <DashboardComponent>
            <Users/>
          </DashboardComponent>
         </Dashboard>
        }/>
        <Route path="/revenue" element={
         <Dashboard>
           <DashboardComponent>
            <TotalRevenue/>
          </DashboardComponent>
         </Dashboard>
        }/>
        <Route path="/admin" element={
         <Dashboard>
           <DashboardComponent>
            <TableAdmin/>
          </DashboardComponent>
         </Dashboard>
        }/>
        <Route path="/settings" element={
         <Dashboard>
            <Settings/>
         </Dashboard>
        }/>
        <Route path="/dashboard/queries" element={
         <Dashboard>
          <UserQueries/>
         </Dashboard>
        }/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
