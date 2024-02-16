import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "./slice/menuSlice";
import searchSlice from "./slice/searchSlice";

const store = configureStore({
    reducer:{
        menu:menuSlice,
        search:searchSlice
    }
})

export default store;