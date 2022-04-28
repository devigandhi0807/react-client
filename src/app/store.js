import { configureStore } from '@reduxjs/toolkit';
import contactsheetReducer from '../redux/contactsheet/contactsheetSlice';
import authReducer from '../redux/auth/authSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsheetReducer,
    },
});
