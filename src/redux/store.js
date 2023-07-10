import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user";
import locationReducer from "./reducer/location";

export const store = configureStore({
  reducer: {
    user: userReducer,
    location: locationReducer,
  },
});
