import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "../redux/operations";
import operations from './operations';
import { Report } from 'notiflix/build/notiflix-report-aio';


const initialState = {
    items: {},
    error: null,
    loading: false,
    userId: "",
    pets: [],
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

        [operations.addPet.pending]: (state, action) => {
            state.loading = true;
          },
          [operations.addPet.fulfilled]: (state, action) => {
            state.loading = false;
            state.pets.push(action.payload);
          },
          [operations.addPet.rejected]: (state, action) => {
            state.loading = false;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
          },
      
    }
})

export const userReducer = userSlice.reducer;