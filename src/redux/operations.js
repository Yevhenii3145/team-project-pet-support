import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4001/api';
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGNmZWRiMWE2Y2I0ZjlkNTJlOTYwZSIsImlhdCI6MTY3NTUzMjE0NCwiZXhwIjoxNjc1NjE0OTQ0fQ.TCE19oHh_jueRFQFEjnQp7ydbK-1FbsYf46jW8PcW74`;
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
  'auth/user',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/auth/user', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post('/users/login', data);
      return result.data;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.post('/users/logout');
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await axios.get('/users/current', auth.token);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

const addPet = createAsyncThunk('user/addPet', async (dataPet, thunkAPI) => {
  try {
    const response = await axios.post('/users/addPet', dataPet);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = {
  registerNewUser,
  login,
  logout,
  current,
  addPet,
};

export default operations;
