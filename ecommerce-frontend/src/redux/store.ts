import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./api/userAPI";
import { productAPI } from "./api/productAPI";
import { userReducer } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
import { orderApi } from "./api/orderAPI";
import { dashboardApi } from "./api/dashboard-api";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
    reducer: {
        [userAPI.reducerPath]: userAPI.reducer,
        [productAPI.reducerPath]: productAPI.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
        [cartReducer.name]: cartReducer.reducer,
        [userReducer.name]: userReducer.reducer,
    },
    middleware: (mid) => [
        ...mid(), 
        userAPI.middleware, 
        productAPI.middleware, 
        orderApi.middleware,
        dashboardApi.middleware,
    ],
});

export type RootState = ReturnType<typeof store.getState>