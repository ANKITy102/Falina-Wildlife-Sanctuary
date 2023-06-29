import axios from "axios"
import {toast} from "react-toastify"

import { BACKEND_URL } from "./authServices"

export const bookTickets = async(formData)=>{
    try {
        const token =localStorage.getItem("token")
            const headers = {
                'Content-Type': 'application/json',
                'token': token
              };
            if(!token){
                return toast.info("Please login");
            }
            const response = await axios.post(`${BACKEND_URL}/package/`,formData, {headers});
            if(!response){
                return toast.error("Something went wrong. Please try again.");
            }
            if(response.data.status==="fail"){
                return toast.error(response.data.message);
            }
            if(response.data.status==="Success"){
                toast.success("Your package booked successfully. Enjoy Trip😀")
            }
            
            return response.data;
        
    } catch (error) {
        return toast.error("Something went wrong.");
    }
   
}






