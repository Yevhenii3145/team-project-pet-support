import { configureStore } from '@reduxjs/toolkit';
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
import { menuSlice, authReducer } from './menuSlice';
// import authReducer from './auth/auth-slice'

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    menu: persistReducer(persistConfig, menuSlice.reducer),
    auth: authReducer,
    // auth: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
