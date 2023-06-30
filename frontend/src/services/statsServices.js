import axios from "axios"
import {toast} from "react-toastify"

import { BACKEND_URL } from "./authServices"

export const getAllUser = async()=>{
    try{
        const response = await axios.get(`${BACKEND_URL}/user/getallusers`);
        if(response.data.status==="fail"){
            toast.error(response.data.message);
        }
        return response.data;
    }catch(err){
        const message = err.message;
        toast.error(message);
    }
}

export const getAllQueries = async()=>{
    try{
        
        const token =localStorage.getItem("token")
        if(!token){
            return toast("Please login.");
        }
        const headers = {
            'Content-Type': 'application/json',
            'token': token
          };
        if(token!==null && token!==undefined){
            console.log(token)
            const response =await  axios.get(`${BACKEND_URL}/contact/getqueries`, {headers})
            // console.log(response)
            if(!response || response.data.status==="fail"){
                return toast.error(response.data.message)
            }
             return response.data;
        }
    }catch(err){
        const message = err.message;
        toast.error(message);
    }
}

export const getAlltickets = async()=>{
    try{
        
        const token =localStorage.getItem("token")
        if(!token){
            return toast("Please login.");
        }
        const headers = {
            'Content-Type': 'application/json',
            'token': token
          };
        if(token!==null && token!==undefined){
            console.log(token)
            const response =await  axios.get(`${BACKEND_URL}/package/getalltickets`, {headers})
            // console.log(response)
            if(!response ){
                return toast.error("Something went wrong. Refresh the page");
            }
                if( response.data.status==="fail"){
                return toast.info(response.data.message)
            }
            return response.data;
        }
    }catch(err){
        const message = err.message;
        toast.error("Something went wrong. Refresh the page.");
        console.log(message);
    }
}

