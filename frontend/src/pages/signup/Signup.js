import React from 'react'
import st from './Signup.module.css'
import logo from "../../assets/images/logo.svg"
import { useState } from 'react'
import {FaFacebook,FaGoogle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { registerUser, validateEmail } from '../../services/authServices'
import { toast } from 'react-toastify';
import {useDispatch} from "react-redux";
import {SET_LOGIN, SET_USER} from "../../redux/auth/authSlice"
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber:""
}
const Signup = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const navigate=useNavigate();
  const onChangeHandler = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData, [name]:value});
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    const {firstName,lastName,email,password, phoneNumber} = formData;
    if(!firstName || !lastName || !email || !password || !phoneNumber){
      return toast.error("All fields are required");
    }
    if(!lastName.match(/^(?! )\w{2,}$/) || !firstName.match(/^(?! )\w{2,}$/)){
      return toast.error("Please give valid name");
    }
    if(!validateEmail(email)){
      return toast.error("Please provide correct email.");
    }
    if(!phoneNumber.match(/^\d{10}$/)){
      return toast.error("Please provide correct number")
    }
    if(password.length<8){
      return toast.error("Passwords length must be up to 8 characters");
    }
    const response = await registerUser(formData);
    if(response.status==='fail'){
      return toast.error(response.message);
    }
    if(response.status==="Success"){
      const token  = response.data[0].token;
      console.log(token)
      localStorage.setItem("token", token);
      dispatch(SET_LOGIN(true))
      dispatch(SET_USER(response.data[0]));
      navigate('/')
    }
    

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
        <form onSubmit={submitHandler}>
        <div className={st.signup_form__line1}>
        <input type="text"  className={st.signup_form__type1} name="firstName" value={formData.firstName} onChange={(e)=>{onChangeHandler(e)}} placeholder='Enter your first name'/>
        <input type="text"  className={st.signup_form__type1} name="lastName"  value={formData.lastName} onChange={(e)=>{onChangeHandler(e)}} placeholder='Enter your last name' />
        </div>
        <div className={st.signup_form__line}>
          <input type='text' className={st.signup_form__type2} name="email" value={formData.email} onChange={(e)=>{onChangeHandler(e)}} placeholder='Enter your email' />
        </div>
        <div className={st.signup_form__line}>
          <input type='password' className={st.signup_form__type2} name="password" value={formData.password} onChange={(e)=>{onChangeHandler(e)}} placeholder='Enter your password' />
        </div>
        <div className={st.signup_form__line}>
          <input type='text' className={st.signup_form__type2} name="phoneNumber" value={formData.phoneNumber} onChange={(e)=>{onChangeHandler(e)}} placeholder='Enter your phone number' />
        </div>
        <div className={st.signup_form__line2}>
          <input type='checkbox' className={st.signup_checkbox}/><span className={st.signup_form__checkbox} >I agree to the <a className='form_green__text'>Terms of Services</a > and <a className='form_green__text'>Privacy Statement</a></span>
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
