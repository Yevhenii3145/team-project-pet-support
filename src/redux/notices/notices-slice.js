import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryNotices, addNoticeToFavorite, deleteNotice } from "./notices-operation";

const initialState = {
    items: null,
    loading: false,
    error: null,
    isNotisFavorite: false
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
            store.items = action.payload;
        },
        [fetchCategoryNotices.rejected]: (store, action) => {
            store.loading = false;
            store.error = action.payload;
        },

        [addNoticeToFavorite.pending]: store => {
            store.loading = true;
        },
        [addNoticeToFavorite.fulfilled]: (store) => {
            store.loading = false;
            store.isNotisFavorite === false ? store.isNotisFavorite = true : store.isNotisFavorite = false;
        },
        [addNoticeToFavorite.rejected]: (store, action) => {
            store.loading = false;
            store.error = action.payload;
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
    }
})

export default noticesSlice.reducer;