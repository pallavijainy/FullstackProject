import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductList/ProductListSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
