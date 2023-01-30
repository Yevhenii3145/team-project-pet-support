import { configureStore, createSlice } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

// зразок редюсера, щоб працювала жива сторінка

let initialState = {
  user:{ },
  token: '',
  isLoading: false,
  isLogin: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers:{
}})
// кінець редюсера

export const store = configureStore({
  reducer: {
    // Тут мають бути редюсери:
    //   
    auth: persistReducer(persistConfig, authSlice.reducer),      
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
