import { createSlice } from "@reduxjs/toolkit";

type Product = {
  products: { label: string; value: string }[];
  error: string;
  productDetails: object[];
};
const initialState: Product = {
  products: [],
  productDetails: [],
  error: "",
};

const productsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductsDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setError, setProductsDetails } =
  productsSlice.actions;

export default productsSlice.reducer;
