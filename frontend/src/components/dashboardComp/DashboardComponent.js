import React from 'react'
import StatsCard from '../statscard/StatsCard'

const DashboardComponent = () => {
  return (
    <div className="h-full w-5/6 px-3 py-2 flex flex-col">
      <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-1 ml-1">Hello <span className="text-blue-900 font-bold ">Athisham, </span> welcome back!</p>
      <div className="flex gap-10">
        <StatsCard title={"Total Bookings"} stats={"45,039"} active={true}  logo={"fa-solid fa-ticket text-2xl"}/>
        <StatsCard title={"Total Revenue"}  stats={"3,230,349"} active={false} logo={"fa-solid fa-indian-rupee-sign text-2xl"}/>
        <StatsCard title={"Total Users"}    stats={"3,990"} active={false} logo={"fa-solid fa-user-group text-2xl"}/>
        <StatsCard title={"Total Admins"}   stats={"9"} active={false} logo={"fa-solid fa-user-tie text-2xl"}/>
      </div>
      </div>
    </div>
  )
}

export default DashboardComponent
