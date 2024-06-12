import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from '../redux/contactsSlice'
import filtersReducer from '../redux/filtersSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persisteContactsdReducer = persistReducer({
    key: 'contactsData',
    storage,
    whitelist: ['items']
}, contactsReducer)


export const store = configureStore({
    reducer: {
        contacts: persisteContactsdReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)