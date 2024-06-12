import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from '../redux/contactsSlice'
import filtertsReducer from '../redux/filtersSlice'


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtertsReducer,
    }
})