import React from 'react'
import logo from "../../assets/images/balck.png"
import avatar from "../../assets/images/defaultAvatar.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn, selectName, selectProfilePic } from '../../redux/auth/authSlice'
import { capitalizeFirstLetter } from '../../services/CapitalizeWord'
const WhiteNavbar = (props) => {
    const isLogin = useSelector( selectIsLoggedIn);
    const name = useSelector(selectName);
    const profilePic = useSelector(selectProfilePic);
  return (
    <nav className={`flex ${props.transparent?"bg-transparent":"bg-white"}  px-5 justify-between items-center ${props.shadowNav?"shadow__Nav":""}`}>
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
            {(isLogin?(<div className="flex items-center gap-4 text-1xl text-slate-600">
            <img src={(profilePic?profilePic:avatar)} alt="avatar" className='hover:cursor-pointer' width="40px" style={{
                    borderRadius:"50%",
                }} />
                {capitalizeFirstLetter(name)}
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
