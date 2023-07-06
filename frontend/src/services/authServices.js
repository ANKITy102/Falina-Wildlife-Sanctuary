import axios from 'axios'
import {toast } from "react-toastify"

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const validateEmail = (email) =>{
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//Register User
export const registerUser =async (formData) =>{
    // console.log(BACKEND_URL)
    console.log("formdata---");
    console.log(formData)
console.log("-----")
    try{
        const response = await axios.post(`${BACKEND_URL}/user/signup`, formData);
        if(response.data.status==="Success"){
            toast.success("Registerd Successfully");
        }
        return response.data;
        
    }
    catch(err){
        const message = err.message;
        toast.error(message);
    }
}

export const loginUser = async(formData)=>{
    try{
        const response = await axios.post(`${BACKEND_URL}/user/login`, formData);
        if(response.data.status==="Success"){
            toast.success("Logged in Successfully");
        }
        return response.data
    }catch(err){
        const message = err.message;
        toast.error(message);
    }
}

export const getUserInfo = async()=>{
    try{
        
        const token =localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            'token': token
          };
          
        if(!token){
            return toast("Please login");
        }
        if(token!==null && token!==undefined){
            console.log(token)
            const response =await  axios.get(`${BACKEND_URL}/user/getuser`, {headers})
            // console.log(response)
            if(!response || response.data.status==="fail"){
                return toast.info("Please Login");
            }
             return response.data;
        }
    }catch(err){
        const message = err.message;
        console.log(message);
    }
}

export const googleLogin = async (token)=>{
    try{
        console.log("till here")
        console.log(token)
        if(!token){
           return toast.info("Something went wrong");
        }
        const headers = {
            'Content-Type': 'application/json',
            'idTokenString': token
        };
        
        const response =await axios.get(`${BACKEND_URL}/user/google-login`, {headers});
        if(!response || response.data.status==="fail"){
            return toast.error(response.data.message)
        }
        return response.data;
    }catch(err){
        const message = err.message;
        toast.error(message);
    }
}

export const saveQuery = async(formData)=>{
    try{
        const response = await axios.post(`${BACKEND_URL}/contact/`, formData);
        if(response.data.status==="Success"){
            toast.success("Your message has been sent.");
        }
        return response.data
    }catch(err){
        const message = err.message;
        toast.error(message);
    }
}
