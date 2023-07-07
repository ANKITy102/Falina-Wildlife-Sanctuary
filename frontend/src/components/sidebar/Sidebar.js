import React from 'react'
import {Link, useLocation} from "react-router-dom"
import avatar from "../../assets/images/defaultAvatar.png"
import { useSelector } from 'react-redux';
import { selectName, selectProfilePic, selectUser } from '../../redux/auth/authSlice';
const Sidebar = () => {
  const para = useLocation();
  const {name, lname ,email} = useSelector(selectUser);
  const profilePic = useSelector(selectProfilePic)
  return (
    <div className="h-full w-1/6 bg-sky-800 pb-14 flex flex-col justify-between">
        <ul className="flex flex-col gap-4 font-normal text-white py-3 w-full">
            <li className="flex items-center justify-center text-[20px] w-full"><Link to="/bookings" className={`w-full ${para.pathname==="/dashboard"?"border-white border-y-2 bg-blue-900 hover:no-underline ":""} px-8 flex gap-4 justify-between items-center h-10  hover:no-underline hover:text-red-400     `} ><i class="fa-solid fa-chart-line"></i><div className="w-full text-left"> Dashboard </div></Link></li>
            <li className="flex items-center justify-center text-[20px] w-full"><Link to="/users" className=    {`w-full ${para.pathname==="/users"?"   border-white border-y-2 bg-blue-900 hover:no-underline ":""}px-8 flex gap-4 justify-between items-center h-10      hover:no-underline  hover:text-red-400`}><i class="fa-solid fa-users"></i> <div className="w-full text-left"> Users     </div></Link></li>
            <li className="flex items-center justify-center text-[20px] w-full"><Link to="/settings" className= {`w-full ${para.pathname==="/settings"?"border-white border-y-2 bg-blue-900 hover:no-underline ":""}px-8 flex gap-4 justify-between items-center h-10   hover:no-underline  hover:text-red-400   `}><i class="fa-solid fa-sliders"></i> <div className="w-full text-left"> Settings   </div> </Link></li>
        </ul>
        <div className=" text-white flex flex-col justify-center items-center">
            <div><img src={profilePic?profilePic:avatar} alt="avatar" width="55px" className="rounded-full"/></div>
            <div className="text-[17px]">{name} {lname}</div>
            <div className="text-sm text-slate-400">{email}</div>
        </div>
    </div>
  )
}

export default Sidebar
