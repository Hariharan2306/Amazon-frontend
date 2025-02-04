import { Dispatch } from "@reduxjs/toolkit";
import get from "lodash/get";
import api from "../Tools/api";
import { setCartData, setError, setSuccess } from "../Slice/cartSlice";

export const addToCart =
  (userName: string, productId: string | number) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await api.put("/cart/add", { userName, productId });
      dispatch(setSuccess(response.data.message));
    } catch (error) {
      dispatch(setError(get(error, "response.data.error", "")));
    }
  };
export const removeFromCart =
  (userName: string, productId: string | number) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await api.delete(
        `/cart/remove/?productId=${productId}&userName=${userName}`
      );
      dispatch(setSuccess(response.data.message));
    } catch (error) {
      dispatch(setError(get(error, "response.data.error", "")));
    }
  };
export const getCartData = (userName: string) => async (dispatch: Dispatch) => {
  try {
    const response = await api.get(`/cart/get/${userName}`);
    dispatch(setCartData(response.data.data));
  } catch (error) {
    dispatch(setError(get(error, "response.data.error", "")));
  }
};
