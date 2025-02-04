import type { RootState } from "../Tools/store";

export const orderDataSelector = (state: RootState) => state.orders.orderData;
export const ordersSelectorSuccess = (state: RootState) => state.orders.success;
export const ordersSelectorError = (state: RootState) => state.orders.error;
