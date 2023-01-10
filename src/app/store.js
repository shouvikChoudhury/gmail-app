import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailslice"
import userReducer from "../features/userslice"

export const store = configureStore({
    reducer: {
        mail: mailReducer,
        user: userReducer
    }
})