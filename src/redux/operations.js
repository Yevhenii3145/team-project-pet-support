import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4001/api-docs';

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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserData = createAsyncThunk(
    "auth/user",
    async(user, thunkAPI) => {
        try {
            const response = await axios.post("/auth/user", user);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const operations = {
  registerNewUser,
};

export default operations;
