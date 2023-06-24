import React from 'react'
import logo from "../../assets/images/logo_footer.png"
import avatar from "../../assets/images/defaultAvatar.png"
import { Link } from 'react-router-dom'
import st from"./Navbar.module.css"
const Navbar = () => {
    const isLogin = true;
  return (
    <nav className="flex  bg-black px-5 justify-between items-center">
        <div className="logo">
            <img src={logo} alt="logo" width="100px" />
        </div>
        <div className="links flex">
            <ul className="flex gap-24 text-2xl text-slate-400 items-center">
                <li><Link className='hover:text-orange-300' style={{
                    textDecoration:"none"
                }}  to="/">Home</Link></li>
                <li><Link className='hover:text-orange-300' style={{
                    textDecoration:"none"
                }}  to="/packages">Packages</Link></li>
                <li><Link className='hover:text-orange-300' style={{
                    textDecoration:"none"
                }}  to="/gallery">Gallery</Link></li>
                <li><Link className='hover:text-orange-300' style={{
                    textDecoration:"none"
                }}  to="/contactus">Contact Us</Link></li>
                <li><Link className='hover:text-orange-300' style={{
                    textDecoration:"none"
                }}  to="/aboutus">About Us</Link></li>
            </ul>
        </div>
        <div className="loginSignup flex items-center">
            {(isLogin?(<div className="flex items-center gap-4 text-1xl text-white">
                <img src={avatar} alt="avatar" width="40px"/>
                Mayank
            </div>): (<div className="buttons border-2 border-white px-3 py-2 text-white">
                <Link style={{
                    textDecoration:"none"
                }}  to="/login" className="hover:text-orange-300">login</Link> / <Link style={{
                    textDecoration:"none"
                }}  to="/signup" className="hover:text-orange-300">signup</Link> 
            </div>))}
        </div>
    </nav>
  )
}

export default Navbar
