import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
