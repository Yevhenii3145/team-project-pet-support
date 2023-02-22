import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryNotices, deleteNotice, searchNotice, getAllFavorites, getSearch } from "../operations/noticesOperation";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addNotice } from "../operations/noticesOperation";

const initialState = {
    items: [],
    loading: false,
    error: null,
    notice: null,
    favoriteNotices: null
}

const noticesSlice = createSlice({
    name: "notices",
    initialState,
    extraReducers: {
        [fetchCategoryNotices.pending] (state) {
            state.loading = true;
            state.items = [];
        },
        [fetchCategoryNotices.fulfilled] (state, action) {
            state.loading = false;
            state.error = null;
            state.items = action.payload.data;
        },
        [fetchCategoryNotices.rejected] (state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        [getAllFavorites.pending] (state) {
            state.loading = true;
          },
        [getAllFavorites.fulfilled] (state, action) {
            state.loading = false;
            state.favoriteNotices = action.payload;
          },
        [getAllFavorites.rejected] (state, action) {
            state.loading = false;
            state.error = action.payload;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
          },

        [deleteNotice.pending] (state) {
            state.loading = true;
        },
        [deleteNotice.fulfilled] (state, action) {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(item => item._id !== action.payload);
        },
        [deleteNotice.rejected] (state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        [searchNotice.pending] (state) {
            state.loading = true;
            state.notice = null;
          },
        [searchNotice.fulfilled] (state, action) {
            state.loading = false;
            state.notice = action.payload;
          },
        [searchNotice.rejected] (state, action) {
            state.loading = false;
            state.error = action.payload;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
        },

        [getSearch.pending] (state, action) {
            state.loading = true;
        },
        [getSearch.fulfilled] (state, action) {
          state.loading = false;
          state.items = action.payload;
          },
        [getSearch.rejected] (state, action) {
            state.loading = false;
            state.error = action.payload;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
        },

        [addNotice.pending] (state) {
            state.loading = true;
        },
        [addNotice.fulfilled] (state, action) {
          state.loading = false;
          state.items.unshift(action.payload);
          Report.success(
            'Success',
            `${action.payload.name} added successfully.`,
            'Okay',
          );
        },
        [addNotice.rejected] (state, action) {
          state.loading = false;
          state.error = action.payload;
          Report.warning(
            'Warning',
            `Something went wrong.`,
            'Okay'
          );
        },
    }
})

export default noticesSlice.reducer;
