import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./modules/counter";
import homeSlice from "./modules/home";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        home: homeSlice
    }
})

export default store;