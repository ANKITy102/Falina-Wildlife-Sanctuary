import React from 'react'
import logo from "../../assets/images/balck.png"
import st from "./DashNavbar.module.css"
import { Link } from 'react-router-dom'
const DashNavbar = () => {
  const submitHandle=(e)=>{
    e.preventDefault();
    console.log("hi")
  }
  return (
    <nav className="flex bg-transparent shadow__Nav px-5 justify-between items-center">
      <div className="logo">
       <Link to="/">
        <img src={logo} alt="Logo" width="122px" style={{
          marginTop:"-30px"
        }} />
        </Link> 
      </div>
      <div className="flex justify-center items-center gap-8">
      <form className={st.searchcontainer} onSubmit={submitHandle}>
    <input type="text" className={st.input} id="search-bar" placeholder="Search  Email or Account..."/>
    <button type="submit"><img className={st.searchicon} src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="search logo"/></button>
  </form>
  <Link to="/dashboard/queries"><i className="fa-regular fa-bell text-[27px]"></i></Link> 
  <Link to="/dashboard/queries"><i class="fa-regular fa-message text-[23px]"></i></Link> 
  
      </div>
    </nav>
  )
}

export default DashNavbar
