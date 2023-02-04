import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const {REACT_APP_BASE_URL} = process.env;
// axios.defaults.baseURL = REACT_APP_BASE_URL;

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

const login = createAsyncThunk(
    "auth/login",
    async(data, { rejectWithValue }) => {
        try {
            const result = await axios.post('/users/login', data);
            return result.data;
        } catch({response}) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
)

const logout = createAsyncThunk(
    "auth/logout",
    async(_, { rejectWithValue }) => {
        try {
            const result = await axios.post('/users/logout');
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)

const current = createAsyncThunk(
    "auth/current",
    async(_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const result = await axios.get('/users/current', auth.token);
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)

const operations = {
  registerNewUser,
  login,
  logout,
  current
};

export default operations;
