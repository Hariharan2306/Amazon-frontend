import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  products: [];
};
const initialState: Product = {
  products: [],
};

const productsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product["products"]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
