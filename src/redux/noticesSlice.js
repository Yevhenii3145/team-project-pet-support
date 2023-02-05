import { createSlice } from "@reduxjs/toolkit";
import operations from './operations';
import { Report } from 'notiflix/build/notiflix-report-aio';


const initialState = {
    notices: [],
    noticeId: "",
    notice: null,
    loading: false,
}

const noticesSlice = createSlice({
    name: "notices",
    initialState,
    extraReducers: {
        [operations.searchNotice.pending]: (state, action) => {
            state.loading = true;
          },
        [operations.searchNotice.fulfilled]: (state, action) => {
            state.loading = false;
            state.notice = action.payload;
          },
        [operations.searchNotice.rejected]: (state, action) => {
            state.loading = false;
            Report.warning(
              'Warning',
              `Something went wrong.`,
              'Okay'
            );
          },
        // [operations.updateNotice.pending]: (state, action) => {
        //     state.noticeId = "";
        //     state.loading = true;
        //   },
        // [operations.searchNotice.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.noticeId = action.payload.noticeId;
        //   },
        // [operations.searchNotice.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.noticeId = "";
        //     Report.warning(
        //       'Warning',
        //       `Something went wrong.`,
        //       'Okay'
        //     );
        //   },
    }
})

export const noticesReducer = noticesSlice.reducer;