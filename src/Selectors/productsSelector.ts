import type { RootState } from "../Tools/store";

export const productsSelector = (state: RootState) => state.products.products;
export const productsSelectorError = (state: RootState) => state.products.error;
