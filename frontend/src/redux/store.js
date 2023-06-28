import {configureStore} from "@reduxjs/toolkit";

import authReducer from "../redux/auth/authSlice"
import statsReducer from "./stats/statsSlice"
export const store = configureStore({
    reducer:{
        auth: authReducer,
        stats: statsReducer
    }
})