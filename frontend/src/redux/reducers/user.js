import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {

  getAllUserRequest: (state) => {
    state.loading = true;
  },
  getAllUserSuccess: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  getAllUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  

  clearErrors: (state) => {
    state.error = null;
  },
  clearMessages: (state) => {
    state.successMessage = null;
  },
});
