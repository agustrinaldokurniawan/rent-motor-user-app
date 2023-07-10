import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;
