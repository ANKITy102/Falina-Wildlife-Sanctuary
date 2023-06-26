import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    AllUsers:[]
}

const statsSlice = createSlice({
    name:"stats",
    initialState,
    reducers:{
        SET_ALLUSERS(state,action){
            state.AllUsers= (action.payload);
        }
    }
})

export const selectStats = (state)=> state.stats;
export const selectAllUser = (state)=>state.stats.AllUsers;
export const totalUser = (state)=>state.stats.AllUsers.length;
export const selectUserFreq = (state)=>{
    const elements = state.stats.AllUsers;
    const myMap = new Map();
    for (const element of elements) {
        const count = myMap.get(element.date) || 0;
        myMap.set(element.date, count + 1);
      }
    return myMap;
}
export const {SET_ALLUSERS} = statsSlice.actions;
export default statsSlice.reducer;