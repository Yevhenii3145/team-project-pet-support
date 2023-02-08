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
    token: null,
    isLogin: false,
    loading: false,
    userId: localStorage.getItem('userId'),
  },
  extraReducers: {
    [operations.registerNewUser.pending](state, action) {
      state.loading = true;
    },
    [operations.registerNewUser.fulfilled](state, action) {
      state.user = action.payload;
      state.loading = false;
      Report.info(
        'SUCCESS!',
        `${action.payload.name}, you have successfully registered, the verification has been sent to your mail.`,
        'Okay'
      );
    },
    [operations.registerNewUser.rejected](state, action) {
      state.loading = false;
      Report.warning(
        'Warning',
        `Something went wrong or user with this name already exists!`,
        'Okay'
      );
    },
    [operations.login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [operations.login.fulfilled]: (store, { payload }) => {
      console.log('payload', payload);
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
      store.userId = payload.userId;
      localStorage.setItem('userId', payload.userId);
    },
    [operations.login.rejected]: (store, { payload }) => {
      console.log('payload', payload);
      alert('Логин или пароль не верный, попробуйте снова.');
      store.loading = false;
      store.error = payload;
    },
    [operations.logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [operations.logout.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
      localStorage.removeItem('userId');
    },
    [operations.logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [operations.current.pending]: store => {
      store.isLoadingUser = true;
      store.error = null;
    },
    [operations.current.fulfilled]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.user = payload;
      store.isLogin = true;
    },
    [operations.current.rejected]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.error = payload;
    },
    [operations.updateUser.pending]: (store, action) => {
      store.loading = true;
    },
    [operations.updateUser.fulfilled]: (store, action) => {
      store.loading = false;
      for (const key in action.payload){
        switch (key) {
          case 'name':
            store.user.name = action.payload.name;
            break;
  
          case 'birthday':
            store.user.birthday = action.payload.birthday;
            break;
          case 'email':
            store.user.email = action.payload.email;
            break;
  
          case 'phone':
            store.user.phone = action.payload.phone;
            console.log(store.user.phone)
            break;
  
          case 'city':
            store.user.city = action.payload.city;
            break;
          default:
            return;
        }
      }
    },
    [operations.updateUser.rejected]: (store, action) => {
      store.loading = false;
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
