import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { persistStore, persistReducer } from 'redux-persist';
import userReducer from './UserSlice.js';

const persistConfig = {
  key: 'root',
  storage,
};


const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});


const persistor = persistStore(store);

export { store, persistor };
