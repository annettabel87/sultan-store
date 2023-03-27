import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { filterData, getMinMaxFromArray } from "../common/helpers";
import { catalogSlice, IProduct } from "./catalogReducer";
import { AppDispatch, RootState } from "./store";

export interface ISearchParam {
  min: number;
  max: number;
  manufacturer: string[];
}

export interface IFetchProps {
  url: string;
  searchParam?: ISearchParam;
}

export const fetchProducts = createAsyncThunk(
  "catalog/fetch",
  async ({ url, searchParam }: IFetchProps, { dispatch, getState  }) => {
    try {
      const state = getState() as RootState;
      dispatch(catalogSlice.actions.PRODUCTS_FETCHING());
      const response = await fetch(url);
      const data: IProduct[] = await response.json();
      console.log(data);
      const manufacturer = [
        ...new Set(data.map((product) => product.manufacturer)),
      ];
      

      dispatch(catalogSlice.actions.SET_ALL_MANUFACTURER(manufacturer));

      const { min, max } = getMinMaxFromArray(data);

      dispatch(catalogSlice.actions.SET_MIN_MAX_PRICE_FROM_DATA({ min, max }));
      dispatch(catalogSlice.actions.SET_MINPRICE(min));
      dispatch(catalogSlice.actions.SET_MAXPRICE(max));

      setTimeout(() => {
        const filteredArray = state.catalogReducer.filteredManufactures.length
        ? filterData(
            data,
            state.catalogReducer.minPrice,
            state.catalogReducer.maxPrice,
            state.catalogReducer.filteredManufactures
          )
        : filterData(data, min, max, manufacturer);
        dispatch(catalogSlice.actions.SET_PRODUCTS(filteredArray));
      }, 500);
    } catch (e: unknown) {
      dispatch(catalogSlice.actions.PRODUCTS_FETCHING_ERROR("not found"));
    }
  }
);
