

import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
      filterNotice: {
        reducer(state, action) {
          return (state = action.payload);
        },
      },
    },
  });

  export const { filterNotice } = filtersSlice.actions;
  export const filtersReducer = filtersSlice.reducer;