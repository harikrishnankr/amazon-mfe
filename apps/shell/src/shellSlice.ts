import { createSlice } from "@reduxjs/toolkit";

export interface ShellState {
  authenticated: boolean;
}

const initialState: ShellState = {
  authenticated: false,
};

export const shellSlice = createSlice({
  name: "shell",
  initialState,
  reducers: {
    login: (state) => {
      state.authenticated = true;
    },
    logout: (state) => {
      state.authenticated = false;
    },
    _initialize: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase("shell/login", (state) => {
      state.authenticated = true;
    });
    builder.addCase("shell/logout", (state) => {
      state.authenticated = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, _initialize } = shellSlice.actions;

export default shellSlice.reducer;
