import { createSlice } from "@reduxjs/toolkit";
import { clearLogin } from "../../utils/keep-login";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = 0;
      clearLogin();
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
