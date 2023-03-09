import { createSlice } from '@reduxjs/toolkit';
import operations from '../operations/userOperations';
import { Report } from 'notiflix/build/notiflix-report-aio';

const searchParams = new URLSearchParams(document.location.search);
const usertoken = searchParams.get('usertoken'); 


export const authSlice = createSlice({
  name: 'auth',
    initialState: {
      
      user: {
        name: "",
        email: "",
        phone: "",
        city: "",
        userId: "",
        avatar: null,
      },
      token: usertoken ? usertoken : "",
      isLogin: usertoken ? true : false,
      loading: false,
    },
    
    extraReducers: {
      [operations.registerNewUser.pending](state) {
        state.loading = true;
      },
      [operations.registerNewUser.fulfilled](state, action) {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.city = action.payload.city;
        state.loading = false;
        Report.info(
          'SUCCESS!',
          `${action.payload.name}, you have successfully registered, the verification has been sent to your mail.`,
          'Okay'
        );
      },
      [operations.registerNewUser.rejected](state) {
        state.loading = false;
        Report.warning(
          'Warning',
          `Something went wrong or user with this name already exists!`,
          'Okay'
        );
      },

      [operations.login.pending](state, { payload }) {
        state.loading = true;
        state.error = payload;
      },
      [operations.login.fulfilled] (state, { payload }) {
        state.loading = false;
        state.user.email = payload.email;
        state.user.userId = payload.userId;
        state.token = payload.token;
        state.isLogin = true;
      },
      [operations.login.rejected] (state, { payload }) {
        state.loading = false;
        state.error = payload;
        Report.warning('Warning', `${state.error.message}`, 'Okay');
      },

      [operations.authVerify.pending] (state, { payload }) {
        state.loading = true;
        state.error = payload;
      },
      [operations.authVerify.fulfilled] (state, {payload}) {
        state.loading = false;
        Report.info(
          'SUCCESS!',
          `You have successfully registered, the verification has been sent to your mail.`,
          'Okay'
        );
      },
      [operations.authVerify.rejected] (state, { payload }) {
        state.loading = false;
        state.error = payload;
        Report.warning('Warning', `${state.error.message}`, 'Okay');
      },

      [operations.resetUserPassword.pending] (state, { payload }) {
        state.loading = true;
      },
      [operations.resetUserPassword.fulfilled] (state, {payload}) {
        state.loading = false;
        Report.info(
          'SUCCESS!',
          `Please check your mail.`,
          'Okay'
        );
      },
      [operations.resetUserPassword.rejected] (state, { payload }) {
        state.loading = false;
        Report.warning('Warning', `${payload.message} this email.`, 'Okay');
      },

      [operations.logout.pending] (state, {payload}) {
        state.loading = true;
        state.error = payload;
      },
      [operations.logout.fulfilled] (state) {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
        // const usertoken = localStorage.getItem('token');
        // if (usertoken) localStorage.removeItem('token');
        // localStorage.removeItem('userId');
      },
      [operations.logout.rejected] (state, { payload }) {
        state.loading = false;
        state.error = payload;
      },

      [operations.current.pending] (state, {payload}) {
        state.loading = true;
        state.error = payload;
        state.isLogin = false;
      },
      [operations.current.fulfilled] (state, { payload }) {
        state.loading = false;
        state.user.avatar = payload.avatarURL;
        state.user.city = payload.city;
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.phone = payload.phone;
        state.user.userId = payload.userId;
        state.isLogin = true;
      },
      [operations.current.rejected] (state, { payload }) {
        state.loading = false;
        state.error = payload;
        state.isLogin = false;
      },

      [operations.updateUser.pending] (state, action) {
        //state.loading = true;
      },
      [operations.updateUser.fulfilled] (state, action) {
        //state.loading = false;
        for (const key in action.payload) {
          switch (key) {
            case 'name':
              state.user.name = action.payload.name;
              break;
  
            case 'birthday':
              state.user.birthday = action.payload.birthday;
              break;
            case 'email':
              state.user.email = action.payload.email;
              break;
  
            case 'phone':
              state.user.phone = action.payload.phone;
              break;
  
            case 'city':
              state.user.city = action.payload.city;
              break;
            default:
              return;
          }
        }
      },
      [operations.updateUser.rejected] (state) {
        //state.loading = false;
        Report.warning(
          'Warning',
          `Something went wrong or user with this name already exists!`,
          'Okay'
        );
      },

      [operations.updateUserAvatar.pending] (state) {
        state.loading = true;
      },
      [operations.updateUserAvatar.fulfilled] (state, { payload }) {
          state.loading = false;
          state.user.avatar = payload.avatarURL;
      },
      [operations.updateUserAvatar.rejected]: (state, {payload}) => {
          state.loading = false;
          state.error = payload;
      },

      [operations.deleteAccount.pending] (state) {
        state.loading = true;
      },
      [operations.deleteAccount.fulfilled] (state, { payload }) {
          state.loading = false;
        state.user = payload;
                Report.info(
          'SUCCESS!',
          `Your account deleted .`,
          'Okay'
        );
      },
      [operations.deleteAccount.rejected]: (state, {payload}) => {
          state.loading = false;
          state.error = payload;
      },
    },
})

  export const authReducer = authSlice.reducer;