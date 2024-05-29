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
  created_at: any;
  last_login: any;
  authBoxPage: string;
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
    authBoxPage: "register",
  } as AuthInitialState,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: InitialState, action: PayloadAction<any>) => {
      console.log("ACTION PAYLOAD", action.payload);
      state.value = action.payload;
      return state;
    },
    logout: (state: InitialState) => {
      state.value = initialState.value;
      return state;
    },
    setAuthBoxPage: (state: InitialState, action: PayloadAction<string>) => {
      state.value.authBoxPage = action.payload;
    },
  },
});

export const { login, logout, setAuthBoxPage } = authSlice.actions;
