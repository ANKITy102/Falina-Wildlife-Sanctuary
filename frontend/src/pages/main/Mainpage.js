import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Footer from '../../components/footer/Footer'
import Aboutus from '../../components/mainpageAboutus/Aboutus'
import {BsChevronDown} from "react-icons/bs"
import st from "./Mainpage.module.css"
const Mainpage = () => {
  return (
    <div>
      <HeroSection/>
      <div className={st.explore}>
        <div className={st.roundedButton}>
          <div>Explore</div>
          <div className={st.exploreIcon}><BsChevronDown/></div>
          
        </div>

      </div>
      <Aboutus/>
      <Footer/>
    </div>
  )
}

export default Mainpage
