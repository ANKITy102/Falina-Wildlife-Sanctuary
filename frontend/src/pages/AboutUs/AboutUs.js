import React, { useEffect } from 'react'
import sp from './AboutUs.module.css'
import st from '../packageshotel/Packages.module.css'
import {Link, useLocation} from 'react-router-dom';
import logo from "../../assets/images/logo.svg";
import WhiteNavbar from '../../components/navbar/WhiteNavbar';
import Footer from "../../components/footer/Footer";

const AboutUs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={sp.container}>
        <WhiteNavbar/>
      <div className={sp.banner}><h1>ABOUT US</h1></div>
      <div className={sp.text1}>
        <h1>Our Vision</h1>
      </div>
      <div className={sp.text2}><div className={sp.para}>We as a team are very responsible and clear with our vision. Our mission, purpose, goals and values involved the creation of our vision. We want to deliver exceptional experience to the customers who visit our website and they must feel like home.</div><div className={sp.imagecontainer}><img id={sp.img1} src={logo} alt="logo"/><img id={sp.img2} src={logo} alt="logo"/></div></div>
      <div className={sp.text3}>
        <h6>Meet our team of creators,designers and newbie developers</h6>
      </div>
      <div className={sp.text4}>Our Team consists of six skilled undergraduates who are quite ambitious and want to make their  ways into the field of Web Development. The team is quite enthusiast and are always ready for any sort of work that has been assigned to them. We have always been working together throughout this project and have never  failed to inovate and develop new things. Through this website we wanted to show our skills and creativity.</div>
      <div className={sp.photos}><div className={sp.p1}></div><div className={sp.p1}></div><div className={sp.p1}></div></div>
      <div className={sp.text5}><div className={sp.desc}>Aviral Hatwal</div><div className={sp.desc}>Ankit Yadav</div><div className={sp.desc}>Sarthak</div></div>
      <div className={sp.photos}><div className={sp.p1}></div><div className={sp.p1}></div><div className={sp.p1}></div></div>
      <div className={sp.text5}><div className={sp.desc}>Neelesh</div><div className={sp.desc}>Mayank</div><div className={sp.desc}>Dheeraj</div></div>
      <hr className={sp.line}/>
      <Footer/>
    </div>
  )
}

export default AboutUs
