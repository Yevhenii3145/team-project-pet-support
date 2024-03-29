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
    token: null,
    avatar: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        
        [fetchUserData.fulfilled]: (state, {payload}) => {
            state.items = payload;
        },
        [fetchUserData.rejected]: (state, {payload}) => {
            state.error = payload;
        },

        [operations.addPet.pending]: (state, action) => {
            state.loading = true;
          },
        [operations.addPet.fulfilled]: (state, action) => {
            state.loading = false;
            state.pets.push(action.payload);
            Report.success(
                'Success',
                `${action.payload.name} added successfully.`,
                'Okay',
                );
          },
        [operations.addPet.rejected]: (state, action) => {
            state.loading = false;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
        },
        [operations.getUserPet.pending]: (state) => {
           state.loading = false;
        },
        [operations.getUserPet.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.pets = payload;
        
        },
        [operations.getUserPet.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },

        [operations.deletePet.pending]: (state) => {
            state.loading = false;
        },
        [operations.deletePet.fulfilled]: (state, action) => {
            state.loading = false;
            state.pets = state.pets.filter(pet => pet._id !== action.payload);
                Report.warning(
                'Are you sure you want to delete your pet?!'
            );
        },
        [operations.deletePet.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        
        [operations.updateUserAvatar.pending]: (state) => {
            state.loading = false;
        },
        [operations.updateUserAvatar.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.avatar = payload.avatarURL;
            
        },
        [operations.updateUserAvatar.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
    },
    reducers: {
        setUserAvatarAction (store, action) {
            store.avatar = action.payload;
        },
    }
})

export const {
    setUserAvatarAction,
} = userSlice.actions;

export const userReducer = userSlice.reducer;