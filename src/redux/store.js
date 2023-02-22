import { configureStore } from '@reduxjs/toolkit';
// import { useReducer } from 'react';
import {
  persistReducer,
  persistStore,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './slices/authSlice';
import { menuSlice} from './slices/menuSlice';
import { userReducer } from './slices/userSlice';

import noticesReducer from './slices/noticesSlice';
import { filtersReducer } from './slices/filterSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    menu: persistReducer(persistConfig, menuSlice.reducer),
    auth: persistedReducer,
    user: userReducer,
    filter: filtersReducer,
    notices: noticesReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      // {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

export const persistor = persistStore(store);
