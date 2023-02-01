import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';
import { Report } from 'notiflix/build/notiflix-report-aio';

let initialState = {
  menuActive: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuActive: (state, action) => {
      state.menuActive = action.payload;
    },
  },
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
  },
  extraReducers: {
    [operations.registerNewUser.fulfilled](state, action) {
      state.user = action.payload.user;
      Report.info(
        'SUCCESS!',
        `${action.payload.user.name}, you have successfully registered, the verification has been sent to your mail.`,
        'Okay'
      );
    },
    [operations.registerNewUser.rejected](state) {
      Report.warning(
        'Warning',
        `Something went wrong or user with this name already exists!`,
        'Okay'
      );
    },
  },
});

export const { setMenuActive } = menuSlice.actions;
export const authReducer = authSlice.reducer;
