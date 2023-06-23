import React, { useEffect, useRef, useState } from "react";
import st from "./HeroSection.module.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import image2 from "../../assets/images/MPimg1.jpg"
import image1 from "../../assets/images/MPimg2.jpg"
import image3 from "../../assets/images/MPimg3.jpg"
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectName } from "../../redux/auth/authSlice";

const HeroSection = () => {
  const [activeImage, setActive] = useState(1);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isLoggedIn = useSelector(selectIsLoggedIn)
  // const isLoggedIn = true;
  const userName = useSelector(selectName);
  const imageChanger = (num) => {
    if (activeImage === num) {
      return;
    }
    if (num === 1) {
      ref1.current.style.left = "0px";
      ref2.current.style.left = "100vw";
      ref3.current.style.left = "200vw";
    }
    if (num === 2) {
      ref2.current.style.left = "0vw";
      ref1.current.style.left = "-100vw";
      ref3.current.style.left = "100vw";
    }
    if (num === 3) {
      ref3.current.style.left = "0vw";
      ref1.current.style.left = "-200vw";
      ref2.current.style.left = "-100vw";
    }
    setActive(num);
  };
  useEffect(() => {
    // console.log("hello")
    ref1.current.style.left = "0px";
    ref2.current.style.left = "100vw";
    ref3.current.style.left = "200vw";
  }, []);
  return (
    <div className={`${st.container}`}>
      <img
        src={image1}
        ref={ref1}
        className={`${
          activeImage === 1 ? st.mainBackground : st.backgroundInactive
        } ${st.contImage} ${st.img}`}
        alt="tiger in forest"
      />
      <img
        src={image2}
        alt="background"
        ref={ref2}
        className={`${
          activeImage === 2 ? st.mainBackground : st.backgroundInactive
        } ${st.contImage} ${st.img}`}
      />
      <img
        src={image3}
        alt="background"
        ref={ref3}
        className={`${
          activeImage === 3 ? st.mainBackground : st.backgroundInactive
        } ${st.contImage} ${st.img}`}
      />
        <div className={st.logo}>
          <img src={logo} alt="logo" />
        </div>
      <nav className={st.navbar}>
        <div className={st.navLinks}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className={st.authButtonli}>
             {isLoggedIn?(<div className={st.userName}><span className={st.hi}>Hi,</span> {userName}</div>):(<> <Link to="/login" className={`${st.signUPLink}`} style={{
                color:"#205fec",
                fontSize:"25px",
                fontWeight:"600"
              }}>Login</Link>
              <Link to="/signup" className={`${st.loginLink}`} style={{
                color:"orangered",
                fontSize:"25px",
                fontWeight:"600"
              }}>Sign Up</Link>
              </>)}
            </li>
          </ul>
        </div>
      </nav>
      <div className={st.information}>
        <div className={st.firstHalf}>
          <div className={st.mainHeading}>FALINA</div>
          <div className={st.subheading}>WILDLIFE SANCTUARY</div>
          <div className={st.info}>
            There are events in one's life which, no matter how remote, never
            fade from memory. So we welcome you to start your journey here at
            the Falina Wildlife Sanctuary.
          </div>
          <div className={st.button}>
            <button>Book Now</button>
          </div>
        </div>
        <div className={st.secondHalf}>
          <div className={st.imageChanger}>
            <button
              className={`${st.button1}    ${
                activeImage === 1 ? st.active : "text-white font-light"
              }`}
              onClick={() => {
                imageChanger(1);
              }}
            >
              1
            </button>
            <div className={st.line}></div>
            <button
              className={`${st.button1}  ${
                activeImage === 2 ? st.active : "text-white"
              } font-light`}
              onClick={() => {
                imageChanger(2);
              }}
            >
              2
            </button>
            <div className={st.line}></div>
            <button
              className={`${st.button1}  ${
                activeImage === 3 ? st.active : "text-white"
              } font-light`}
              onClick={() => {
                imageChanger(3);
              }}
            >
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
