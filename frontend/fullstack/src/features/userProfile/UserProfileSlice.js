import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersAllOrders } from "./UserProfileApi";

const initialState = {
  userOrder: null,
  status: "idle",
};

export const UsersAllOrdersAsync = createAsyncThunk(
  "user/UsersAllOrders",
  async (userid) => {
    const response = await UsersAllOrders(userid);

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(UsersAllOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UsersAllOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userOrder = action.payload.data;
      });
  },
});

export const { increment } = userSlice.actions;

export const userAllOrder = (state) => state.user.userOrder;

export default userSlice.reducer;
