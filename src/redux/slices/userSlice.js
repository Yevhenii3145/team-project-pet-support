import { createSlice } from "@reduxjs/toolkit";
import operationsPets from "redux/operations/userPetsApi";
import { Report } from 'notiflix/build/notiflix-report-aio';

const initialState = {
    error: null,
    loading: false,
    pets: [],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [operationsPets.addPet.pending] (state) {
            state.loading = true;
          },
        [operationsPets.addPet.fulfilled] (state, action) {
            state.loading = false;
            state.pets.push(action.payload);
            Report.success(
                'Success',
                `${action.payload.name} added successfully.`,
                'Okay',
                );
          },
        [operationsPets.addPet.rejected] (state) {
            state.loading = false;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
        },
        [operationsPets.getUserPet.pending] (state) {
           state.loading = false;
        },
        [operationsPets.getUserPet.fulfilled] (state, {payload}) {
            state.loading = false;
          state.pets = payload;
        },
        [operationsPets.getUserPet.rejected] (state, {payload}) {
            state.loading = false;
            state.error = payload;
        },

        [operationsPets.deletePet.pending] (state) {
            state.loading = true;
        },
        [operationsPets.deletePet.fulfilled] (state, action) {
          state.loading = false;
          state.pets = state.pets.filter(pet => pet._id !== action.payload);
        },
        [operationsPets.deletePet.rejected] (state, {payload}) {
            state.loading = false;
            state.error = payload;
      },
        
        [operationsPets.updatePet.pending] (state) {
          state.loading = true;
    
          },
        [operationsPets.updatePet.fulfilled] (state, action) {
          state.loading = false;
          console.log('fulfilled')
          state.pets = action.payload;
          // state.pets = state.pets.filter(pet => pet._id !== action.payload);
          // const index = state.pets.findIndex((pet) => pet._id === action.payload._id);
          // state.pets[index] = action.payload;
           console.log('state.pets', state.pets)
        },
        [operationsPets.updatePet.rejected] (state) {
            state.loading = false;
        },
    },
})


export const userReducer = userSlice.reducer;