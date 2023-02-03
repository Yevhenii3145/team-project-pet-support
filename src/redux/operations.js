import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4001/api';

//---for token---//
// const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   };

const registerNewUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', user);
      return response.data;
    } catch (error) {
      console.log(error.message)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  registerNewUser,
};

export default operations;
