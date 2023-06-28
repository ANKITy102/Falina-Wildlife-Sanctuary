import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import DashNavbar from '../../components/dashNavbar/DashNavbar'
import Loader from "../../components/loader/Loader"
import { getAllQueries, getAllUser } from '../../services/statsServices'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { SET_ALLUSERS, SET_QUERIES } from '../../redux/stats/statsSlice'
import { SET_LOADING, selectAdmin, selectIsLoggedIn, selectLoading } from '../../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAdmin = useSelector(selectAdmin);
  const navigate = useNavigate();
  const isLoading = useSelector(selectLoading);
  const getAllUsers = async () => {
    if (!isLoggedIn || !isAdmin) {
      navigate("/")
    }
    dispatch(SET_LOADING(true));
    const response = await getAllUser();
    if (response == null) {
      dispatch(SET_LOADING(false));

      return toast.error("Server Issue.");
    }
    dispatch(SET_ALLUSERS(response));
    console.log(response)


    //get queries;
    

    dispatch(SET_LOADING(false));
  }
  useEffect(() => {
    getAllUsers();
  }, [])


  return (
    <div className="flex flex-col">
      {isLoading && <Loader />}
      <DashNavbar />
      <main className="flex h-screen">
        <Sidebar />
        {children}
      </main>
    </div>
  )
}

export default Dashboard
