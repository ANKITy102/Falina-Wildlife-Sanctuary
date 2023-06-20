import React from 'react'
import st from './Signup.module.css'
import logo from "../../assets/images/logo.svg"
import { useState } from 'react'
import {
  FaFacebook,
  FaGoogle
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [fname,setfname]=useState('')
  const [lname,setlname]=useState('')
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  const [no,setno]=useState('')
  const navigate=useNavigate();
  const submit=(e)=>{
    e.preventDefault();
    console.log(fname);
    navigate('/home')
  }
  return (
    <div className={st.signup_background}>
      <div className={st.signup_logo}>
            <img className={st.signup_logo__img} src={logo} alt="logo" />
      </div>
      <div className={st.signup_heading}>Create Account</div>
      <div className={st.signup_login}>
        <button className={st.signup_login__buttons1} ><FaGoogle id={st.google_icon} size={20}/>Sign up with Google</button>
        <button className={st.signup_login__buttons2}><FaFacebook id={st.facebook_icon} size={20}/>Sign up with Facebook</button>
      </div>
      <hr className={st.signup_line}/>
      <div className={st.signup_form}>
        <form onSubmit={submit}>
        <div className={st.signup_form__line1}>
        <input type="text" pattern="^[a-zA-Z]{2,}" className={st.signup_form__type1} value={fname} onChange={(e) => setfname(e.target.value)} placeholder='Enter your first name' required/>
        <input type="text" pattern="^[a-zA-Z]{2,}" className={st.signup_form__type1}  value={lname} onChange={(e) => setlname(e.target.value)} placeholder='Enter your last name' required/>
        </div>
        <div className={st.signup_form__line}>
          <input type='email' className={st.signup_form__type2} value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter your email' required/>
        </div>
        <div className={st.signup_form__line}>
          <input type='password' className={st.signup_form__type2} value={pass} onChange={(e) => setpass(e.target.value)} placeholder='Enter your password' required/>
        </div>
        <div className={st.signup_form__line}>
          <input type='tel' pattern="[0-9]{10}" className={st.signup_form__type2} value={no} onChange={(e) => setno(e.target.value)} placeholder='Enter your phone number' required/>
        </div>
        <div className={st.signup_form__line2}>
          <input type='checkbox' className={st.signup_checkbox} required/><span className={st.signup_form__checkbox} >I agree to the <a className='form_green__text'>Terms of Services</a > and <a className='form_green__text'>Privacy Statement</a></span>
        </div>
        <div className={st.signup_form__line2}>
          <input type='checkbox'  className={st.signup_checkbox} /><span className={st.signup_form__checkbox}>Send me updates via email</span>
        </div>
        <div className={st.signup_form__signup}>
          <button type="submit" className={st.signup_button}>Sign Up</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
