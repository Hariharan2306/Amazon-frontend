import { createSlice } from "@reduxjs/toolkit";

const initialState = { error: "", success: "", orderData: [] };

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setOrderData: (state, action) => {
      state.orderData = action.payload;
    },
  },
});

export const { setError, setSuccess, setOrderData } = orderSlice.actions;

export default orderSlice.reducer;
