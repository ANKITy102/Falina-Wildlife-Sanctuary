import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllUsers: [],
    AdminCount: 0,
    isLoading: false,
    queries:[],
    bookings:[],
    totalFare: 0,
    admins:[]
}

const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        SET_ALLUSERS(state, action) {
            state.AllUsers = (action.payload);
            let count = 0;
            let arr = [];
            for (const elem of action.payload) {
                if (elem.admin) {
                    arr.push(elem);
                    count++;
                }
            }
            
            state.AdminCount = count;
            state.admins = arr;
        },
        SET_LOADING(state,action){
            state.isLoading=action.payload;
        },
        SET_QUERIES(state,action){
            state.queries = action.payload;
        },
        SET_BOOKINGS(state,action){
            state.bookings = action.payload;
            const elements = action.payload;
            let sum = 0;
            for(const elem of elements){
                let fa = parseInt(elem.fare);
                sum+= fa;
                // state.bookings = sum;
                // const el
            }
            // console.log
            state.totalFare  = sum;
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
export const totalFare = (state) =>{
    const elements = state.stats.bookings;
    let sum = 0;
    for(const elem of elements){
        sum+= elem.fare;
    }
    // console.log
}
export const selectBookings = (state)=>{
    const elements = state.stats.bookings;
    const myMap = new Map();
    for(const element of elements){
        const count = myMap.get(element.creationDate) || 0;
        myMap.set(element.creationDate, count+1);
    }
    return myMap;
}
export const revenuePerDay = (state)=>{
    const elements = state.stats.bookings;
    const myMap = new Map();
    for(const element of elements){
        let count = myMap.get(element.creationDate) || 0;
        let fare =parseInt( element.fare);
        count+=fare;
        myMap.set(element.creationDate, count);
    }
    return myMap;
}
export const noOfBookings = (state) => state.stats.bookings.length;
export const NoofAdmin = (state) => {
    return state.stats.AdminCount;
}
export const isLoading = (state)=> state.stats.isLoading;
export const selectQueries = (state)=> state.stats.queries;
export const selectAdmins = (state)=> state.stats.admins
export const totalRevenue = (state)=> state.stats.totalFare;
export const { SET_ALLUSERS, SET_QUERIES, SET_LOADING, SET_BOOKINGS } = statsSlice.actions;
export default statsSlice.reducer;