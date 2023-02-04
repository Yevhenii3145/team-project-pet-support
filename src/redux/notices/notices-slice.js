import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryNotices } from "./notices-operation";

const initialState = {
    items: null,
    loading: false,
    error: null,
}

const noticesSlice = createSlice({
    name: "notices",
    initialState,
    extraReducers: {
        // [fetchPets.pending]: store => {
        //     store.loading = true;
        // },
        // [fetchPets.fulfilled]: (store, action) => {
        //     store.loading = false;
        //     store.items = action.payload;
        // },
        // [fetchPets.rejected]: (store, action) => {
        //     store.loading = false;
        //     store.error = action.payload;
        // },

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
    }
})

export default noticesSlice.reducer;