import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/api/noticesAPI";

export const fetchCategoryNotices = createAsyncThunk(
    "notices/fetchNotices",
    async (categoryName, thunkAPI) => {
        try {
            const data = await api.getCategoryNotices(categoryName);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const addNoticeToFavorite = createAsyncThunk(
    "notices/favoriteNotice",
    async (noticeId, thunkAPI) => {
        try {
            await api.addNoticeToFavorite(noticeId);
            return noticeId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteNotice = createAsyncThunk(
    "notices/deleteNotice",
    async (noticeId, thunkAPI) => {
        try {
            await api.deleteNotice(noticeId);
            return noticeId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)