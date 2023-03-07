import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './noticesAPI';
import axios from 'axios';
import { setAuthHeader } from "redux/operations/userOperations";


const {REACT_APP_BASE_URL} = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;

export const fetchCategoryNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (value, thunkAPI) => {
    try {
      const data = await api.getCategoryNotices(value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addNoticeToFavorite = createAsyncThunk(
  'notices/favoriteNotice',
  async (noticeId, thunkAPI) => {
    try {
      await api.addNoticeToFavorite(noticeId);
      return noticeId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (noticeId, thunkAPI) => {
    try {
      await api.deleteNotice(noticeId);
      return noticeId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchNotice = createAsyncThunk(
  'notices/searchOne',
  async (noticeId, thunkAPI) => {
    try {
      const response = await api.searchNotice(noticeId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllFavorites = createAsyncThunk(
  'notices/getFavorite',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get(`/notices/favorite`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearch = createAsyncThunk(
  'notices/search',
  async (search, thunkAPI) => {
    try {
      const response = await api.getSearch(search);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
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