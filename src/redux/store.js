import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/auth/authSlice"
import productReducer from "./features/product/productSlice"
import filterReducer from '../redux/features/product/filterSlice'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        product: productReducer,
        filter: filterReducer,

    }
});