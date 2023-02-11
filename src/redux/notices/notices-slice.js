import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryNotices, addNoticeToFavorite, deleteNotice, searchNotice, getAllFavorites } from "./notices-operation";
import { Report } from 'notiflix/build/notiflix-report-aio';

const initialState = {
    items: [],
    loading: false,
    error: null,
    isNotisFavorite: false,
    noticeId: "",
    notice: null,
    favoriteNotices: null
}

const noticesSlice = createSlice({
    name: "notices",
    initialState,
    extraReducers: {
        [fetchCategoryNotices.pending]: store => {
            store.loading = true;
        },
        [fetchCategoryNotices.fulfilled]: (store, action) => {
            store.loading = false;
            store.items = action.payload.data;
        },
        [fetchCategoryNotices.rejected]: (store, action) => {
            store.loading = false;
            store.error = action.payload;
        },

        [addNoticeToFavorite.pending]: store => {
            store.loading = true;
        },
        [addNoticeToFavorite.fulfilled]: (store, action) => {
            store.loading = false;
            store.isNotisFavorite = store.items.some(item => item._id === action.payload)
            
        },
        [addNoticeToFavorite.rejected]: (store, action) => {
            store.loading = false;
            store.error = action.payload;
        },
        [getAllFavorites.pending]: (state, action) => {
            state.loading = true;
            state.favoriteNotices = null;
          },
        [getAllFavorites.fulfilled]: (state, action) => {
            state.loading = false;
            state.favoriteNotices = action.payload;
            console.log(action.payload)
          },
        [getAllFavorites.rejected]: (state, action) => {
            state.loading = false;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
          },
        [deleteNotice.pending]: store => {
            store.loading = true;
        },
        [deleteNotice.fulfilled]: (store, action) => {
            store.loading = false;
            store.items = store.items.filter(item => item._id !== action.payload);
        },
        [deleteNotice.rejected]: (store, action) => {
            store.loading = false;
            store.error = action.payload;
        },
        [searchNotice.pending]: (state, action) => {
            state.loading = true;
          },
        [searchNotice.fulfilled]: (state, action) => {
            state.loading = false;
            state.notice = action.payload;
          },
        [searchNotice.rejected]: (state, action) => {
            state.loading = false;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
          },
    }
})

export default noticesSlice.reducer;