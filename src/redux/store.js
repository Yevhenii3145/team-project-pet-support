import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
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
import { userReducer } from './userSlice';

// import authReducer from './auth/auth-slice'
import noticesReducer from './notices/notices-slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    menu: persistReducer(persistConfig, menuSlice.reducer),
    auth: persistedReducer,
    // auth: authReducer,
    user: userReducer,

    notices: noticesReducer,
    // auth: persistedReducer,
    


  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
      // {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

export const persistor = persistStore(store);
