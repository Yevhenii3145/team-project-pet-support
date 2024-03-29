import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryNotices, deleteNotice, searchNotice, getAllFavorites, getSearch } from "./notices-operation";
import { Report } from 'notiflix/build/notiflix-report-aio';
import operations from 'redux/operations';

const initialState = {
    items: [],
    loading: false,
    error: null,
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
            store.items = [];
        },
        [fetchCategoryNotices.fulfilled]: (store, action) => {
            store.loading = false;
            store.error = null;
            store.items = action.payload.data;
        },
        [fetchCategoryNotices.rejected]: (store, action) => {
            store.loading = false;
            store.error = action.payload;
        },

        [getAllFavorites.pending]: (state, action) => {
            state.loading = true;
          },
        [getAllFavorites.fulfilled]: (state, action) => {
            state.loading = false;
            state.favoriteNotices = action.payload;
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
            store.error = null;
            store.items = store.items.filter(item => item._id !== action.payload);
        },
        [deleteNotice.rejected]: (store, action) => {
            store.loading = false;
            store.error = action.payload;
        },

        [searchNotice.pending]: (state, action) => {
            state.loading = true;
            state.notice = null;
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

        [getSearch.pending]: (store, action) => {
            store.loading = true;
        },
        [getSearch.fulfilled]: (store, action) => {
          console.log("action.payload", action.payload)
          store.loading = false;
          store.items = action.payload;
          },
        [getSearch.rejected]: (store, action) => {
            store.loading = false;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
        },

        [operations.addNotice.pending]: store => {
            store.loading = true;
        },
        [operations.addNotice.fulfilled]: (store, action) => {
          store.loading = false;
          store.items.unshift(action.payload);
          Report.success(
            'Success',
            `${action.payload.name} added successfully.`,
            'Okay',
          );
        },
        [operations.addNotice.rejected]: (store, action) => {
          store.loading = false;
          store.error = action.payload;
          Report.warning(
            'Warning',
            `Something went wrong.`,
            'Okay'
          );
        },
    }
})

export default noticesSlice.reducer;
