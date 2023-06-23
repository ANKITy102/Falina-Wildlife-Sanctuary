import React from 'react';

import { GoogleLogin } from '@react-oauth/google';
import { googleLogin } from './authServices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_LOGIN, SET_USER } from '../redux/auth/authSlice';

const Google = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginUserByGoogle =async (token) =>{
        const response =   await  googleLogin(token);
        console.log(response);
        if(response && response.data && response.status==="Success"){
          dispatch(SET_LOGIN(true));
          dispatch(SET_USER(response.data[0]));
          navigate("/")
        }
    }
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                
              console.log(credentialResponse.credential)
              loginUserByGoogle(credentialResponse.credential);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
    )
}

export default Google;