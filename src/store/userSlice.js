import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    token : "",
    id : "",
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
        },
        setToken : (state , action) => {
            state.token = action.payload;
        } ,
        removeToken : (state) => {
            state.token = "";
        },  
        setId : (state , action) => {
            state.id = action.payload;
        }, 
        removeId : (state ) => {
            state.id = "";
        }
    },
});

// Action creators are generated for each case reducer function
export const { userLoggedIn , setToken , removeToken , setId , removeId } = userSlice.actions;

export default userSlice.reducer;
