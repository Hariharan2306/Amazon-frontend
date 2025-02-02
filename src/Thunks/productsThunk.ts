import type { Dispatch } from "@reduxjs/toolkit";
import get from "lodash/get";
import api from "../Tools/api";
import {
  setError,
  setProducts,
  setProductsDetails,
} from "../Slice/productsSlice";

export const getProductsNames =
  (search: string) => async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/products/productNames/${search}`);
      dispatch(setProducts(response.data.data));
    } catch (error) {
      dispatch(setError(get(error, "response.data.error", "")));
    }
  };

export const getProductsDetails =
  (productName: string) => async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/products/data/${productName}`);
      dispatch(setProductsDetails(response.data.data));
    } catch (error) {
      dispatch(setError(get(error, "response.data.error", "")));
    }
  };
