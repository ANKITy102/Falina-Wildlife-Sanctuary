import React, { useEffect, useRef, useState } from "react";
import st from "./HeroSection.module.css";
import image2 from "../../assets/images/MPimg1.jpg"
import image3 from "../../assets/images/MPimg2.jpg"
import image1 from "../../assets/images/MPimg3.jpg"
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectLoading } from "../../redux/auth/authSlice";
import Google from '../../services/google';
import Navbar from "../navbar/Navbar";
import Loader from "../loader/Loader";
import BtnAni from "../button/BtnAni";
const HeroSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const but1 = useRef(null);
  const but2 = useRef(null);
  const but3 = useRef(null);
  const [activeImage, setActive] = useState(1);
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isLoading = useSelector(selectLoading);
  // const isLoading = true;
  // const isLoggedIn = true;
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
    console.log(num);
    setActive(num);
    console.log(activeImage)
   
  };
 
  useEffect(() => {
    // console.log("hello")
    ref1.current.style.left = "0px";
    ref2.current.style.left = "100vw";
    ref3.current.style.left = "200vw";
    const interval = setInterval(() => {
      setActive(prevActive => {
        if (prevActive === 1) {
          ref2.current.style.left = "0vw";
          ref1.current.style.left = "-100vw";
          ref3.current.style.left = "100vw";
          return 2;
        } else if (prevActive === 2) {
          ref3.current.style.left = "0vw";
          ref1.current.style.left = "-200vw";
          ref2.current.style.left = "-100vw";
          return 3;
        } else {
          ref1.current.style.left = "0px";
          ref2.current.style.left = "100vw";
          ref3.current.style.left = "200vw";
          return 1;
        }
      });
  
  }, 6000);

  //Clearing the interval
  return () => clearInterval(interval);
   
  }, []);


  return (

    <div className={`${st.container}`}>
      {isLoading && <Loader/>}
      <Navbar transparent={true}/>
      {!isLoggedIn && (<div className={st.googleLoginButton}><Google/></div>)}
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
 
      
      <div className={st.information}>
        <div className={st.firstHalf}>
          <div className={st.mainHeading}>FALINA</div>
          <div className={st.subheading}>WILDLIFE SANCTUARY</div>
          <div className={st.info}>
            There are events in one's life which, no matter how remote, never
            fade from memory. So we welcome you to start your journey here at
            the Falina Wildlife Sanctuary.
          </div>
          <div className={st.buttonB}>
            {/* <button className={`${st.btn_ani}`}><div className={`${st.btn_ani_value}`}>Book Now</div></button> */}
            <BtnAni value="Book Now" scale="1"/>
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
              ref={but1}
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
              ref={but2}
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
              ref={but3}
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
