import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './slices/authSlice';
import menuReducer from './slices/menuSlice';
import { userReducer } from './slices/userSlice';
import { userGuestReducer } from './slices/userGuestSlice';
import noticesReducer from './slices/noticesSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    user: userReducer,
    notices: noticesReducer,
    guest: userGuestReducer,
    menu: menuReducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
