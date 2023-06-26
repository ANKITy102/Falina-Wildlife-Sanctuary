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