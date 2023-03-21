import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './slices/authSlice';
import { menuSlice} from './slices/menuSlice';
import { userReducer } from './slices/userSlice';
import { userGuestReducer } from './slices/userGuestSlice';
import noticesReducer from './slices/noticesSlice';

const searchParams = new URLSearchParams(document.location.search);
const token = searchParams.get('token'); 

const tokenConfig = {
  key: token,
  storage,
  whitelist: [token]
}

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
}

const resultConfig = token ? tokenConfig : persistConfig

const persistedReducer = persistReducer(resultConfig, authReducer);

export const store = configureStore({
  reducer: {
    menu: persistReducer(persistConfig, menuSlice.reducer),
    auth: persistedReducer,
    user: userReducer,
    notices: noticesReducer,
    guest: userGuestReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
