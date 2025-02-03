import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../Slice/productsSlice";
import cartSlice from "../Slice/cartSlice";

export const store = configureStore({
  reducer: { products: productsSlice, carts: cartSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
