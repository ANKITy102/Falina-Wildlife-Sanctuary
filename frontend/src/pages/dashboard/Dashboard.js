import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import DashNavbar from '../../components/dashNavbar/DashNavbar'
import Loader from "../../components/loader/Loader"
import { getAllUser } from '../../services/statsServices'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { SET_ALLUSERS } from '../../redux/stats/statsSlice'

const Dashboard = ({children}) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const getAllUsers= async()=>{
    setLoading(true);
      const response =await getAllUser();
      if(response==null){
        setLoading(false);
       return toast.error("Server Issue.");
      }
      dispatch(SET_ALLUSERS(response));
      console.log(response)
      setLoading(false);
  }
  useEffect(()=>{
    getAllUsers();
  },[])


  return (
    <div className="flex flex-col">
      {isLoading && <Loader/>}
      <DashNavbar/>
      <main className="flex h-screen">
      <Sidebar/>
      {children}
      </main>
    </div>
  )
}

export default Dashboard
