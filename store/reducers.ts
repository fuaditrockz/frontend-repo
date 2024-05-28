import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  value: AuthInitialState;
};

export type AuthInitialState = {
  isAuthenticated: boolean;
  full_name: string;
  email: string;
  photo_url: string;
  email_verified: boolean;
  created_at: string;
  last_login: string;
};

const initialState: InitialState = {
  value: {
    isAuthenticated: false,
    full_name: "",
    email: "",
    photo_url: "",
    email_verified: false,
    created_at: "",
    last_login: "",
  } as AuthInitialState,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: InitialState, action: PayloadAction<InitialState>) => {
      state.value = action.payload.value;
      return state;
    },
    logout: (state: InitialState) => {
      state.value = initialState.value;
      return state;
    },
  },
});

export const { login, logout } = authSlice.actions;
