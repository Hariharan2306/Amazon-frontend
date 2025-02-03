import { createSlice } from "@reduxjs/toolkit";

const initialState = { error: "", success: "", cartData: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
  },
});

export const { setError, setSuccess, setCartData } = cartSlice.actions;

export default cartSlice.reducer;
