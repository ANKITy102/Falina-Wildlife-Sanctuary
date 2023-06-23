import React from 'react'
import sp from './AboutUs.module.css'
import st from '../packageshotel/Packages.module.css'
import {Link} from 'react-router-dom';
import logo from "../../assets/images/logo.svg";

const AboutUs = () => {
  return (
    <div className={sp.container}>
        <nav className={st.navbar}>
        <div className={st.navLinks1}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </div>
              <div className={st.logo}>
                  <img src={logo} alt="logo" />
                  
              </div>
        <div className={st.navLinks2}>
            <ul>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
            </ul>
        </div>
      </nav>

      <div className={sp.banner}><h1>ABOUT US</h1></div>
      <div className={sp.text1}>
        <h1>Our Vision</h1>
      </div>
      <div className={sp.text2}><div className={sp.para}>We as a team are very responsible and clear with our vision. Our mission, purpose, goals and values involved the creation of our vision. We want to deliver exceptional experience to the customers who visit our website and they must feel like home.</div><div className={sp.imagecontainer}><img id={sp.img1} src={logo} alt="logo"/><img id={sp.img2} src={logo} alt="logo"/></div></div>
    </div>
  )
}

export default AboutUs
