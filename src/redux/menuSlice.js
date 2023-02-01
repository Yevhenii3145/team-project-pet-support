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
    
        [operations.login.fulfilled]: (store, { payload }) => {
            console.log('payload', payload)
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [operations.login.rejected]: (store, { payload }) => {
            console.log('payload', payload)
            alert('Логин или пароль не верный, попробуйте снова.')
            store.loading = false;
            store.error = payload;
        },
        [operations.logout.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [operations.logout.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = {};
            store.token = "";
            store.isLogin = false;
        },
        [operations.logout.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [operations.current.pending]: (store) => {
            store.isLoadingUser = true;
            store.error = null;
        },
        [operations.current.fulfilled]: (store, {payload}) => {
            store.isLoadingUser = false;
            store.user = payload;
            store.isLogin = true;
        },
        [operations.current.rejected]: (store, {payload}) => {
            store.isLoadingUser = false;
            store.error = payload;
        },
  },
});

export const { setMenuActive } = menuSlice.actions;
export const authReducer = authSlice.reducer;
