import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/api/noticesAPI';
import axios from 'axios';


const {REACT_APP_BASE_URL} = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;

export const fetchCategoryNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (categoryName, thunkAPI) => {
    try {
      const data = await api.getCategoryNotices(categoryName);
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

// export const getNoticesFavorite = createAsyncThunk(
//   'notices/fetchFavoriteNotices',
//   async (_, thunkAPI) => {
//     try {
//       const data = await api.getNoticesFavorite();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

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
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllFavorites = createAsyncThunk(
  'notices/getFavorite',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/favorite`);
      console.log('response.data favorite', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);