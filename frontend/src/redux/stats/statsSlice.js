import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllUsers: [],
    AdminCount: 0,
    isLoading: false,
}

const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        SET_ALLUSERS(state, action) {
            state.AllUsers = (action.payload);
            let count = 0;
            for (const elem of action.payload) {
                if (elem.admin) {
                    count++;
                }
            }
            state.AdminCount = count;
        },
        SET_LOADING(state,action){
            state.isLoading=action.payload;
        }

    }
})

export const selectStats = (state) => state.stats;
export const selectAllUser = (state) => state.stats.AllUsers;
export const totalUser = (state) => state.stats.AllUsers.length;
export const selectUserFreq = (state) => {
    const elements = state.stats.AllUsers;
    const myMap = new Map();
    for (const element of elements) {
        const count = myMap.get(element.date) || 0;
        myMap.set(element.date, count + 1);
    }
    return myMap;
}
export const NoofAdmin = (state) => {
    return state.stats.AdminCount;
}
export const isLoading = (state)=> state.stats.isLoading;
export const { SET_ALLUSERS } = statsSlice.actions;
export default statsSlice.reducer;