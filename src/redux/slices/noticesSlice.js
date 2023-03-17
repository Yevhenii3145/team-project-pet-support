import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryNotices, deleteNotice, searchNotice, getAllFavorites, getSearch, addNoticeToFavorite, deleteFavoriteNotice, editNotice } from "../operations/noticesOperation";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addNotice } from "../operations/noticesOperation";

const initialState = {
    items: [],
    loading: false,
    error: null,
    notice: null,
    favoriteNotices: [],
    totalNotices: 0,
    nameCategory: []
}

const noticesSlice = createSlice({
    name: "notices",
    initialState,
    reducers: {
        setNameCategory: (state, action) => {
          state.nameCategory = action.payload;
        }
    },
    extraReducers: {
        [fetchCategoryNotices.pending] (state) {
            state.loading = true;
            // state.items = [];
        },
        [fetchCategoryNotices.fulfilled] (state, action) {
            state.loading = false;
            state.error = null;
            state.totalNotices = action.payload.data.countNotices;
            if(state.nameCategory[0] === 'own') {
              state.nameCategory[1] === 1 ? state.items = action.payload.data.notices : state.items.push(...action.payload.data.notices)
              return
            } else if(state.nameCategory[0] === 'favorite') {
              console.log();
              state.nameCategory[1] === 1 ? state.items = action.payload.data.notices : state.items.push(...action.payload.data.notices)
              return
            } else if (state.items.length > 0 && state.items[0].category === action.payload.data.notices[0].category) {
              const arrId = state.items.map(item => item._id)
              const result = action.payload.data.notices.filter(item => !arrId.includes(item._id))
              state.items.push(...result)
              return
            }
            state.items = action.payload.data.notices;
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
            state.favoriteNotices = action.payload.notices;
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
          [addNoticeToFavorite.fulfilled] (state, action) {
            state.favoriteNotices = action.payload;
          },
          [addNoticeToFavorite.rejected] (state, action) {
            state.error = action.payload;
          },
        [deleteFavoriteNotice.rejected] (state, action) {
            state.error = action.payload;
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
          console.log("action.payload.category", action.payload.category);
          state.nameCategory === action.payload.category && state.items.unshift(action.payload);
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
        
        [editNotice.fulfilled] (state, action) {
          state.items = state.items.filter(item => item._id !== action.payload.data._id); 
          // state.items.map(item => {
          //   if (item.category === action.payload.data.category) {
          //     // state.items.push(action.payload.data)
          //     console.log(item.category === action.payload.data.category);
          //   }
          //   return state.items
          // })
          state.items.push(action.payload.data)
          // state.items = state.items.map(item => item)
        },
    }
})

export const { setNameCategory } = noticesSlice.actions;

export default noticesSlice.reducer;
