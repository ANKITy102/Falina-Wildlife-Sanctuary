import React from 'react'
import logo from "../../assets/images/logo_footer.png"
import avatar from "../../assets/images/defaultAvatar.png"
import { Link } from 'react-router-dom'
import st from"./Navbar.module.css"
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/authSlice'
const WhiteNavbar = (props) => {
    const isLogin = useSelector( selectIsLoggedIn);

  return (
    <nav className={`flex ${props.transparent?"bg-transparent":"bg-white"}  px-5 justify-between items-center`}>
        <div className="logo">
            <img src={logo} alt="logo" width="100px" />
        </div>
        <div className="links flex">
            <ul className="flex gap-24 text-2xl text-black items-center">
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
                <img src={avatar} alt="avatar" width="40px"/>
                Mayank
            </div>): (<div className="buttons border-2 border-black px-3 py-2 text-slate-700">
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
