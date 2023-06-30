import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductList/ProductListSlice";
import AuthReducer from "../features/Auth/AuthSlice";
import CartReducer from "../features/cart/CartSlice";
import OrderReducer from "../features/Order/OrderSlice";
import userReducer from "../features/userProfile/UserProfileSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: AuthReducer,
    cart: CartReducer,
    order: OrderReducer,
    user: userReducer,
  },
});
