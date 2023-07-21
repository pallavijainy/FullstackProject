import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { LoginUser, RegisterUser } from "./AuthApi";

const initialState = {
  status: "idle",
  user: null,
  loginstatus: null,
  error: { email: null, password: null },
};

export const RegisterUserAsync = createAsyncThunk(
  "auth/RegisterUser",
  async (userdata) => {
    const response = await RegisterUser(userdata);
    console.log(response);
    return response.data;
  }
);

export const LoginUserAsync = createAsyncThunk(
  "auth/LoginUser",
  async (userdata) => {
    const response = await LoginUser(userdata);
    console.log(response);
    return response;
  }
);

// //update user
// export const UpdateUserAsync = createAsyncThunk(
//   "auth/UpdateUser",
//   async (update) => {
//     const response = await UpdateUser(update);
//     console.log(response);
//     return response;
//   }
// );

export const AuthSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(RegisterUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(RegisterUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(LoginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LoginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loginstatus = action.payload;
        state.user = action.payload;
      })
      .addCase(LoginUserAsync.rejected, (state, action) => {
        state.status = "idle";
        console.log(action.error, "adfsdfsfds");
        if (action.error.message === "Email does't match") {
          state.error.email = action.error.message;
          state.error.password = null;
        } else if (action.error.message === "Wrong Password !") {
          state.error.email = null;
          state.error.password = action.error.message;
        } else {
          state.error.email = null;
          state.error.password = null;
        }
      });
    // .addCase(UpdateUserAsync.pending, (state) => {
    //   state.status = "loading";
    // })
    // .addCase(UpdateUserAsync.fulfilled, (state, action) => {
    //   state.status = "idle";

    //   state.user = action.payload;
    // });
  },
});

export const selectUser = (state) => state.auth.user;
export const LoginStatus = (state) => state.auth.loginstatus;
export const ErrorFound = (state) => state.auth.error;

export default AuthSlice.reducer;
