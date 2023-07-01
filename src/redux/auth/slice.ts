import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./operations";

const initialState = {
  user: {
    username: null,
    email: null,
    avatarURL: null,
    phone: null,
  },
  isLoggedIn: true,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, { payload: { token, ...other } }) => {
        state.user = { ...other };
        state.token = token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          username: null,
          email: null,
          avatarURL: null,
          phone: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
