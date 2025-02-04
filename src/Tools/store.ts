import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../Slice/productsSlice";
import cartSlice from "../Slice/cartSlice";
import orderSlice from "../Slice/ordersSlice";

export const store = configureStore({
  reducer: { products: productsSlice, carts: cartSlice, orders: orderSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
