import {persistReducer , persistStore} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import userReducer from "./userSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)


export const store = configureStore({
    reducer: persistedReducer,
});


export const persistor = persistStore(store)
