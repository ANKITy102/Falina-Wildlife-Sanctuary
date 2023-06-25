import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import DashNavbar from '../../components/dashNavbar/DashNavbar'

const Dashboard = ({children}) => {
  return (
    <div className="flex flex-col">
      <DashNavbar/>
      <main className="flex h-screen">
      <Sidebar/>
      {children}
      </main>
    </div>
  )
}

export default Dashboard
