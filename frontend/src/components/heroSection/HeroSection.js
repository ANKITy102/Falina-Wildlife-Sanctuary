import React, { useEffect, useRef, useState } from 'react'
import st from "./HeroSection.module.css"
import logo from "../../assets/images/logo.svg"
import {Link} from "react-router-dom"
const image3 = "https://images.unsplash.com/photo-1603483080228-04f2313d9f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80";
const image2 = "https://images.unsplash.com/photo-1571953358806-85dbbe9f6870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
const image1 = "https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=827&q=80";
const HeroSection = () => {
  const [activeImage, setActive] = useState(1);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  
  const imageChanger = (num) =>{
    if(activeImage===num){
      return
    }
    if(num===1){
      
      ref1.current.style.left="0px"
      ref2.current.style.left="100vw"
      ref3.current.style.left="200vw"
    }
    if(num===2){
      
      ref2.current.style.left="0vw"
      ref1.current.style.left="-100vw"
      ref3.current.style.left="100vw"
    }
    if(num===3){
      ref3.current.style.left="0vw"
      ref1.current.style.left="-200vw"
      ref2.current.style.left="-100vw"
    }
    setActive(num)
  }
  useEffect(()=>{
    // console.log("hello")
    ref1.current.style.left="0px"
    ref2.current.style.left="100vw"
    ref3.current.style.left="200vw"
   
  },[])
  return (
    <div className={st.container}>
      <img src={image1} alt="background" ref={ref1} className={`${activeImage===1?st.mainBackground:st.backgroundInactive} ${st.contImage} ${st.img}`} />
      <img src={image2} alt="background" ref={ref2} className={`${activeImage===2?st.mainBackground:st.backgroundInactive} ${st.contImage} ${st.img}`} />
      <img src={image3} alt="background" ref={ref3} className={`${activeImage===3?st.mainBackground:st.backgroundInactive} ${st.contImage} ${st.img}`} />
      <nav className={st.navbar}>
        <div className={st.logo}>
            <img src={logo} alt="logo" />
            
        </div>
        <div className={st.navLinks}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
            </ul>
        </div>
      </nav>
      <div className={st.information}>
            <div className={st.firstHalf}>
              <div className={st.mainHeading}>
                FALINA
              </div>
              <div className={st.subheading}>
              WILDLIFE SANCTUARY
              </div>
              <div className={st.info}>
              There are events in one's life which, no matter how remote, never fade from memory. So we welcome you to start your journey here at the Falina Wildlife Sanctuary.
              </div>
              <div className={st.button}>
                <button>Book Now</button>
              </div>
            </div>
            <div className={st.secondHalf}>
              <div className={st.imageChanger}>
                <button className={`${st.button1} ${activeImage===1? st.active: ""}`} onClick={()=>{imageChanger(1)}}>1</button>
                <div className={st.line}></div>
                <button className={`${st.button1} ${activeImage===2? st.active: ""}`}  onClick={()=>{imageChanger(2)}}>2</button>
                <div className={st.line}></div>
                <button className={`${st.button1} ${activeImage===3? st.active: ""}`}  onClick={()=>{imageChanger(3)}}>3</button>
              </div>
            </div>
      </div>
    </div>
  )
}

export default HeroSection
