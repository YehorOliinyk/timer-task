// configuration of store by @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./timeSlice"


export default configureStore ({
    reducer: {
        timeCounter: timeReducer
    }
})