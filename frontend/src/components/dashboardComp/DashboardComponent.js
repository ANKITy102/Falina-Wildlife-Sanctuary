import React from 'react'
import StatsCard from '../statscard/StatsCard'
import TotalBookings from '../../graphs/TotalBookings'
import { useSelector } from 'react-redux'
import { NoofAdmin, noOfBookings, totalRevenue, totalUser } from '../../redux/stats/statsSlice'
import { selectName } from '../../redux/auth/authSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const DashboardComponent = ({children}) => {
  const selectTotalUser = useSelector(totalUser);
  const totalAdmin = useSelector(NoofAdmin);
  const name = useSelector(selectName);
  const totalFare = useSelector(totalRevenue);
  const totalBookings = useSelector(noOfBookings)
  const path = useLocation()
  const navigate = useNavigate();
  const navigationFunc=(urlLink)=>{
    navigate(urlLink)
  }
  return (
    <div className="h-full w-5/6 px-3 py-2 flex flex-col">
      <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-1 ml-1">Hello <span className="text-blue-900 font-bold ">{name}, </span> welcome back!</p>
      <div className="flex gap-10">
        
        <StatsCard title={"Total Bookings"} navig={()=> navigationFunc("/bookings")} stats={totalBookings} active={path.pathname==='/bookings'?true:false}  logo={"fa-solid fa-ticket text-2xl"}/>
        <StatsCard title={"Total Revenue"}  navig={()=> navigationFunc("/revenue")} stats={totalFare} active={path.pathname==='/revenue'?true:false} logo={"fa-solid fa-indian-rupee-sign text-2xl"}/>
        <StatsCard title={"Total Users"}    navig={()=> navigationFunc("/users")} stats={selectTotalUser} active={path.pathname==='/users'?true:false} logo={"fa-solid fa-user-group text-2xl"}/>
        <StatsCard title={"Total Admins"}   navig={()=> navigationFunc("/admin")} stats={totalAdmin} active={path.pathname==='/admin'?true:false} logo={"fa-solid fa-user-tie text-2xl"}/>
      </div>
      </div>
      <div className="graph h-[200px] w-full">
        {children}
      </div>
    </div>
  )
}

export default DashboardComponent
