import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrderAdded } from "./OrderApi";

const initialState = {
  status: "idle",
  orderdata: [],
  OrderStatus: null,
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
    resetOrder: (state) => {
      state.OrderStatus = null;
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
        state.OrderStatus = action.payload;
      });
  },
});

export const { resetOrder } = OrderSlice.actions;
export const orderData = (state) => state.order.orderdata;
export const orderstatus = (state) => state.order.OrderStatus;

export default OrderSlice.reducer;
