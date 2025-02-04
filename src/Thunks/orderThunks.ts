import { Dispatch } from "@reduxjs/toolkit";
import get from "lodash/get";
import api from "../Tools/api";
import { setError, setSuccess } from "../Slice/ordersSlice";

export const placeOrder = (userName: string) => async (dispatch: Dispatch) => {
  try {
    const response = await api.put("/orders/get", { userName });
    dispatch(setSuccess(response.data.message));
  } catch (error) {
    dispatch(setError(get(error, "response.data.error", "")));
  }
};

export const fetchOrderDetails =
  (userName: string) => async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/orders/place-order:${userName}`);
      dispatch(setSuccess(response.data.data));
    } catch (error) {
      dispatch(setError(get(error, "response.data.error", "")));
    }
  };
