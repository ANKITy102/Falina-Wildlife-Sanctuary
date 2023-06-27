import React from 'react';

import { GoogleLogin } from '@react-oauth/google';
import { googleLogin } from './authServices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_LOADING, SET_LOGIN, SET_USER } from '../redux/auth/authSlice';

const Google = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginUserByGoogle =async (token) =>{
      
      const response =   await  googleLogin(token);
      dispatch( SET_LOADING(false))
        if(response && response.data && response.status==="Success"){
          const token  = response.data[0].token;
          console.log(token)
          localStorage.setItem("token", token);
          dispatch(SET_LOGIN(true));
          dispatch(SET_USER(response.data[0]));
          navigate("/")
        }
    }
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
              dispatch(SET_LOADING(true))
              loginUserByGoogle(credentialResponse.credential);
            }}
            onError={() => {
              console.log('Login Failed');
              dispatch(SET_LOADING(false))
            }}
            useOneTap
          />
    )
}

export default Google;