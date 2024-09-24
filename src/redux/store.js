import { configureStore } from "@reduxjs/toolkit";
import todoReduder from "../redux/todoslice"

export const store = configureStore({
    reducer: {
        todos: todoReduder
    }
})