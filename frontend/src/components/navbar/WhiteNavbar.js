import React from 'react'
import logo from "../../assets/images/balck.png"
import avatar from "../../assets/images/defaultAvatar.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAdmin, selectIsLoggedIn, selectName, selectProfilePic } from '../../redux/auth/authSlice'
import { capitalizeFirstLetter } from '../../services/CapitalizeWord'
const WhiteNavbar = (props) => {
    const isLogin = useSelector( selectIsLoggedIn);
    const name = useSelector(selectName);
    const profilePic = useSelector(selectProfilePic);
    const isAdmin = useSelector(selectAdmin);
    const [showDashboard, setDashboard] = useState(false);
    const showDashboardFun=()=>{
        if(isAdmin){
            setDashboard((prev)=>(!prev));
        }
        else{
            return;
        }
    }
  return (
    <nav className={`flex ${props.transparent?"bg-transparent":"bg-white"}  px-5 justify-between items-center ${props.shadowNav?"shadow__Nav":""} my-3`}>
        <div className="logo">
            <img src={logo} alt="logo" width="122px" style={{
                marginTop:"-30px"
            }} />
        </div>
        <div className="links flex">
            <ul className={`flex gap-24 text-2xl ${props.transparent?"text-white":"text-black"} items-center`}>
                <li><Link className='hover:text-orange-400' style={{
                    textDecoration:"none"
                }}  to="/">Home</Link></li>
                <li><Link className='hover:text-orange-400' style={{
                    textDecoration:"none"
                }}  to="/packages">Packages</Link></li>
                <li><Link className='hover:text-orange-400' style={{
                    textDecoration:"none"
                }}  to="/gallery">Gallery</Link></li>
                <li><Link className='hover:text-orange-400' style={{
                    textDecoration:"none"
                }}  to="/contactus">Contact Us</Link></li>
                <li><Link className='hover:text-orange-400' style={{
                    textDecoration:"none"
                }}  to="/aboutus">About Us</Link></li>
            </ul>
        </div>
        <div className="loginSignup flex items-center">
            {(isLogin?(<div className="flex items-center gap-4 text-[20px] text-black">
                <img src={(profilePic?profilePic:avatar)} alt="avatar" className='hover:cursor-pointer' width="40px" style={{
                    borderRadius:"50%"
                }} onClick={showDashboardFun}/>
                {capitalizeFirstLetter(name)}
                {showDashboard && (<div className='absolute top-[95px] right-4 bg-slate-600 px-3 py-2 rounded-md'>
                <i class="fa-solid fa-caret-up absolute bottom-8 left-[18px] text-slate-600 text-3xl"></i>
                    <Link to="/bookings" className="hover:no-underline hover:text-orange-200">Dashboard</Link>
                </div>)}
            </div>): (<div className={`buttons border-2 ${props.transparent?"border-white text-slate-300":"border-black text-slate-700"} px-3 py-2 `}>
                <Link style={{
                    textDecoration:"none"
                }}  to="/login" className="hover:text-orange-400">login</Link> / <Link style={{
                    textDecoration:"none"
                }}  to="/signup" className="hover:text-orange-400">signup</Link> 
            </div>))}
        </div>
    </nav>
  )
}

export default WhiteNavbar
