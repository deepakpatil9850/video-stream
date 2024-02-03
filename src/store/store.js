import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "./slice/menuSlice";

const store = configureStore({
    reducer:{
        menu:menuSlice
    }
})

export default store;