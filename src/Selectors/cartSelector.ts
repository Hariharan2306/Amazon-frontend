import type { RootState } from "../Tools/store";

export const cartSelectorSuccess = (state: RootState) => state.carts.success;
export const cartSelectorError = (state: RootState) => state.carts.error;
export const cartSelectorData = (state: RootState) => state.carts.cartData;
