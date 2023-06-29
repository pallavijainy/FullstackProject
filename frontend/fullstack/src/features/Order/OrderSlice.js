import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrderAdded } from "./OrderApi";

const initialState = {
  status: "idle",
  orderdata: [],
};

export const OrderAddedAsync = createAsyncThunk(
  "order/OrderAdded",
  async (data) => {
    const response = await OrderAdded(data);

    return response;
  }
);

export const OrderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(OrderAddedAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(OrderAddedAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orderdata.push(action.payload);
      });
  },
});

export const orderData = (state) => state.order.orderdata;

export default OrderSlice.reducer;
