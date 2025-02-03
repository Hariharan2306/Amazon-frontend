import { createSlice } from "@reduxjs/toolkit";
import type { Option, ProductData } from "../types/commonTypes";

type Product = {
  products: Option[];
  error: string;
  productDetail: ProductData;
};
const initialState: Product = {
  products: [],
  productDetail: {} as ProductData,
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
      state.productDetail = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setError, setProductsDetails } =
  productsSlice.actions;

export default productsSlice.reducer;
