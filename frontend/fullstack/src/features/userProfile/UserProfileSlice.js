import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchLoggedInUser,
  UpdateUser,
  UsersAllOrders,
} from "./UserProfileApi";

const initialState = {
  userOrder: null,
  status: "idle",
  userInfo: null, //this info will be used in case of user ifo
};

export const UsersAllOrdersAsync = createAsyncThunk(
  "user/UsersAllOrders",
  async (userid) => {
    const response = await UsersAllOrders(userid);

    return response.data;
  }
);

export const fetchLoggedInUserAsync = createAsyncThunk(
  "user/fetchLoggedInUser",
  async (userid) => {
    const response = await fetchLoggedInUser(userid);
    console.log(response.data, "datain userprofileslice");
    return response.data;
  }
);

//update user
export const UpdateUserAsync = createAsyncThunk(
  "user/UpdateUser",
  async (update) => {
    const response = await UpdateUser(update);
    console.log(response);
    return response;
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
      })
      .addCase(UpdateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";

        state.userInfo = action.payload;
      })
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = "idle";

        state.userInfo = action.payload;
      });
  },
});

export const { increment } = userSlice.actions;

export const userAllOrder = (state) => state.user.userOrder;
export const selectUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
