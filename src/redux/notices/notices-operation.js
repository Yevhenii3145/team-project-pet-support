import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/api/noticesAPI";

// export const fetchPets = createAsyncThunk(
//     "pets/fetch",
//     async (_, thunkAPI) => {
//         try {
//             const data = await api.getPets();
//             return data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// )

export const fetchCategoryNotices = createAsyncThunk(
    "categoryNotices/fetch",
    async (categoryName, thunkAPI) => {
        try {
            const data = await api.getCategoryNotices(categoryName);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)