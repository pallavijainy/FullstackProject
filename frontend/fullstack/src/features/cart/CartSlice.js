import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddedToCart, GetCartDatabyUserId } from "./CartApi";

const initialState = {
  status: "idle",
  cartdata: [],
};

export const AddedToCartAsync = createAsyncThunk(
  "cart/AddedToCart",
  async (amount) => {
    const response = await AddedToCart(amount);

    return response;
  }
);

export const GetCartDatabyUserIdAsync = createAsyncThunk(
  "cart/GetCartDatabyUserId",
  async (userId) => {
    const response = await GetCartDatabyUserId(userId);
    console.log(response);
    return response;
  }
);

export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(AddedToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddedToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartdata.push(action.payload);
      })
      .addCase(GetCartDatabyUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetCartDatabyUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartdata = action.payload;
      });
  },
});

export const cartData = (state) => state.cart.cartdata;

export default CartSlice.reducer;
