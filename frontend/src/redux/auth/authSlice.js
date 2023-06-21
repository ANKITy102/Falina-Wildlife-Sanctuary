import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    user:{
        name:"",
        email:"",
        phone:"",
    },
    userID:""
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        SET_LOGIN(state,action){
            state.isLoggedIn = action.payload
        },
        SET_USER(state,action){
            const profile = action.payload;
            state.user.name = profile.name;
            state.user.email = profile.email;
            state.user.phone = profile.phone;
        }
    }
})

export const {SET_LOGIN, SET_USER} = authSlice.actions;
export const selectIsLoggedIn = (state)=> state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer