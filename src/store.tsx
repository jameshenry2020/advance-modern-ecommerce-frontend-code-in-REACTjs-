import { configureStore } from '@reduxjs/toolkit'
import productListReducer from "./features/ProductListSlice"
import latestProductReducer from "./features/latestProductListSlice";
import topProductReducer from './features/topProductListSlice';
import productDetailReducer from "./features/productDetailSlice"
import authReducer from './features/authSlice';
import cartReducer from "./features/cartSlice"
import paymentReducer from "./features/paymentSlice"
import orderReducer from "./features/orderSlice"

export const store = configureStore({
    reducer:{
        products:productListReducer,
        latest_products:latestProductReducer,
        top_products:topProductReducer,
        single_product:productDetailReducer,
        authentication:authReducer,
        shopping_cart:cartReducer,
        payment:paymentReducer,
        order:orderReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
