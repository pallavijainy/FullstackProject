import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AddedToCart,
  DeleteCartItem,
  GetCartDatabyUserId,
  UpdateCart,
} from "./CartApi";

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

//update
export const UpdateCartAsync = createAsyncThunk(
  "cart/UpdateCart",
  async (update) => {
    const response = await UpdateCart(update);
    console.log(response);
    return response;
  }
);

//delete
export const DeleteCartItemAsync = createAsyncThunk(
  "cart/DeleteCartItem",
  async (id) => {
    const response = await DeleteCartItem(id);
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
      })
      .addCase(UpdateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.cartdata.findIndex(
          (el) => el.id === action.payload.id
        );

        state.cartdata[index] = action.payload;
      })
      .addCase(DeleteCartItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(DeleteCartItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.cartdata.findIndex(
          (el) => el.id === action.payload.id
        );
        state.cartdata.splice(index, 1);
      });
  },
});

export const cartData = (state) => state.cart.cartdata;

export default CartSlice.reducer;
