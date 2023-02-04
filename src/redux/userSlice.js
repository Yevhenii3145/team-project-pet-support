import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "../redux/operations";


const initialState = {
    items: {},
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        
        [fetchUserData.fulfilled]: (store, {payload}) => {
            store.items = payload;
        },
        [fetchUserData.rejected]: (store, {payload}) => {
            store.error = payload;
        },
      
    }
})

export const userReducer = userSlice.reducer;