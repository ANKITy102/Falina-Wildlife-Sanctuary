import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    user:{
        name:"",
        lname:"",
        email:"",
        phone:"",
        profilePic:"",
    },
    isAdmin:false,
    userID:"",
    isLoading:false
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
            state.user.name = profile.firstName;
            state.user.lname= profile.lastName;
            state.user.email = profile.email;
            state.user.phone = profile?.phoneNumber;
            state.user.profilePic = profile?.profilePicture;
            state.isAdmin = profile?.admin;
        },
        SET_LOADING(state,action){
            state.isLoading = action.payload
        }
    }
})

export const {SET_LOGIN, SET_USER, SET_LOADING} = authSlice.actions;
export const selectIsLoggedIn = (state)=> state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectName = (state) => state.auth.user.name;
export const selectFullName = (state)=>{
    let full = state.auth.user.name + " " + state.auth.user.lname;
    return full
}
export const selectProfilePic = (state)=>state.auth.user.profilePic;
export const selectLoading = (state) => state.auth.isLoading;
export const selectAdmin = (state)=>state.auth.isAdmin
export const selectEmail = (state)=> state.auth.user.email;
export default authSlice.reducer