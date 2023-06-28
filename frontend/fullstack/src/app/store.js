import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductList/ProductListSlice";
import AuthReducer from "../features/Auth/AuthSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: AuthReducer,
  },
});
