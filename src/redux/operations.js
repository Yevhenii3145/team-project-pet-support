import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { create } from 'yup/lib/Reference';
import * as api from '../shared/api/userApi';

const { REACT_APP_BASE_URL } = process.env;
console.log(REACT_APP_BASE_URL);
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;

axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGNmZWRiMWE2Y2I0ZjlkNTJlOTYwZSIsImlhdCI6MTY3NTUzMjE0NCwiZXhwIjoxNjc1NjE0OTQ0fQ.TCE19oHh_jueRFQFEjnQp7ydbK-1FbsYf46jW8PcW74`;

export const setAuthHeader = token => {
  if (token) {
    return (axios.defaults.headers.common.authorization = `Bearer ${token} `);
  }
  axios.defaults.headers.common.authorization = '';
};

const registerNewUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', user);
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  'auth/update',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/auth/update', data);
      console.log('response', response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/auth/login', user);
    return response.data;
  } catch ({ response }) {
    const error = {
      status: response.status,
      message: response.data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

const authVerify = createAsyncThunk('auth/verify', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/auth/verify', user);
    return response.data;
  } catch ({ response }) {
    const error = {
      status: response.status,
      message: response.data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.post('/auth/logout');
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

const current = createAsyncThunk('users/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  console.log(persistedToken);
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('/users/current');
    return response.data;
  } catch ({ response }) {
    setAuthHeader();
    const error = {
      status: response.status,
      message: response.data.message,
    };
    return thunkAPI.rejectWithValue(error);
  }
});

const addPet = createAsyncThunk('user/addPet', async (dataPet, thunkAPI) => {
  try {
    const response = await axios.post('/users/addPet', dataPet);
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const addNotice = createAsyncThunk(
  'notices/notice',
  async (dataNotice, thunkAPI) => {
    try {
      const response = await axios.post('/notices/notice', dataNotice);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateUserAvatar = createAsyncThunk(
  'auth/update/avatar',
  async (file, { thunkAPI }) => {
    const formData = new FormData();
    formData.append('avatarURL', file);

    try {
      const response = await axios.patch(`auth/update/avatar`, formData);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getUserPet = createAsyncThunk('users/pets', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/users/pets');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deletePet = createAsyncThunk(
  'users/{petId}',
  async (petId, thunkAPI) => {
    try {
      await api.deleteUserPet(petId);
      return petId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const updateUser = createAsyncThunk('user/update', async (data, thunkAPI) => {
  try {
    const response = await axios.patch(
      `/auth/update?${Object.keys(data)}=${Object.values(data)}`
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = {
  registerNewUser,
  login,
  authVerify,
  logout,
  current,
  addPet,
  addNotice,
  getUserPet,
  deletePet,
  updateUser,
  updateUserAvatar,
};

export default operations;
