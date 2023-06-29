import axios from "axios"
import {toast} from "react-toastify"

import { BACKEND_URL } from "./authServices"

export const getAllUser = async()=>{
    try{
        const response = await axios.get(`${BACKEND_URL}/user/getallusers`);
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
                return toast.info("Something went wrong. Please login again.");
            }
             return response.data;
        }
    }catch(err){
        const message = err.message;
        console.log(message);
    }
}


