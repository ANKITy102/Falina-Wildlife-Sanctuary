import React from 'react'
import sg from './login.module.css'
import {useState} from 'react'
import st from '../signup/Signup.module.css'
import Google from '../../services/google';
import logo from "../../assets/images/logo.svg"
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate();
  const initialState = {
    email: "",
    password: "",
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    navigate('/')
  }
  const [formData, setFormData] = useState(initialState);
  const onChangeHandler = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData, [name]:value});
  }
  return (
    <div className={sg.background}>
      <div className={sg.container}>
        <div className={st.signup_logo}>
          <img className={st.signup_logo__img} src={logo} alt="logo" />
        </div>
        <div className={st.signup_heading}>LOGIN</div>
        <div className={st.signup_login}>
          <Google className={st.signup_login__buttons1} />
        </div>
        <hr className={st.signup_line}/>
        <form onSubmit={submitHandler}>
          <div className={sg.container1}>
        <div className={st.signup_form__line}>
          <input type='email' className={st.signup_form__type2} name="email" value={formData.email} onChange={(e)=>{onChangeHandler(e)}} placeholder='Enter your email' />
        </div>
        </div>
        <div className={sg.container1}>
        <div className={st.signup_form__line}>
          <input type='password' className={st.signup_form__type2} name="password" value={formData.password} onChange={(e)=>{onChangeHandler(e)}} placeholder='Enter your password' />
        </div>
        </div>
        <div className={sg.btn}>
        <div className={st.signup_form__signup}>
          <button type="submit" className={st.signup_button}>Login</button>
        </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login
