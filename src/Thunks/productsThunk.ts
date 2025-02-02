import type { Dispatch } from "@reduxjs/toolkit";
import api from "../Tools/api";
import { setError, setProducts } from "../Slice/productsSlice";
import get from "lodash/get";

export const getProductsNames =
  (search: string) => async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/products/data/${search}`);
      dispatch(setProducts(response.data.data));
    } catch (error) {
      dispatch(setError(get(error, "response.data.error", "")));
    }
  };
